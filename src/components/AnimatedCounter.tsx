import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
  onProgress?: (progress: number) => void;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 4000,
  delay = 0,
  onProgress
}) => {
  // Extract leading non-digits, digits, and trailing non-digits
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  const [displayNumber, setDisplayNumber] = useState<number>(0);
  const [animationProgress, setAnimationProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !match || targetNumber <= 0) {
      if (match) {
        setDisplayNumber(targetNumber);
        setIsCompleted(true);
      }
      return;
    }

    // If already animated, keep it at target number and never reset
    if (animatedRef.current) {
      setDisplayNumber(targetNumber);
      setIsCompleted(true);
      return;
    }

    let animationFrameId: number;
    let delayTimerId: NodeJS.Timeout;

    const startCounting = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      delayTimerId = setTimeout(() => {
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const rawProgress = Math.min(elapsed / duration, 1);

          const easeOut = 1 - Math.pow(1 - rawProgress, 2.6);
          const current = Math.min(targetNumber, Math.round(easeOut * targetNumber));

          setDisplayNumber(current);
          setAnimationProgress(easeOut);
          if (onProgress) onProgress(easeOut);

          if (rawProgress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            // Permanently lock to targetNumber with completion pulse
            setDisplayNumber(targetNumber);
            setAnimationProgress(1);
            setIsCompleted(true);
            if (onProgress) onProgress(1);
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      }, delay);
    };

    // IntersectionObserver to start animation when card enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          startCounting();
          // Disconnect immediately so it NEVER resets or disappears on scroll
          observer.disconnect();
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (delayTimerId) clearTimeout(delayTimerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay, onProgress]);

  if (!match) {
    return <span className={className} dir="ltr">{value}</span>;
  }

  return (
    <span
      ref={elementRef}
      className={`inline-flex items-baseline font-mono tabular-nums select-none ${className} ${
        isCompleted ? 'animate-none' : ''
      }`}
      dir="ltr"
    >
      {prefix && (
        <span className="text-sky-400/80 mr-1 text-[0.82em] font-black transition-opacity">
          {prefix}
        </span>
      )}
      <span
        className="tracking-tight inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white will-change-transform transition-[transform,opacity] duration-200 ease-out"
        style={{
          transform: `translateY(${(1 - animationProgress) * 7}px)`,
          opacity: 0.72 + animationProgress * 0.28
        }}
      >
        {displayNumber.toLocaleString('en-US')}
      </span>
      {suffix && (
        <span className="text-cyan-300/90 ml-1 text-[0.82em] font-black transition-opacity">
          {suffix}
        </span>
      )}
    </span>
  );
};

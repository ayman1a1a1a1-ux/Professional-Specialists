import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in session
    const dismissed = sessionStorage.getItem('pwa_prompt_dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isStandalone = ('standalone' in window.navigator) && (window.navigator as any).standalone;
    
    if (isIosDevice && !isStandalone) {
      setIsIOS(true);
      // Show prompt after 4 seconds on mobile
      const timer = setTimeout(() => setIsVisible(true), 3500);
      return () => clearTimeout(timer);
    }

    // For Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show after 3 seconds
      setTimeout(() => setIsVisible(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div
      id="pwa-install-banner"
      className="md:hidden fixed top-3 left-3 right-3 z-50 bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-sky-500/40 backdrop-blur-md animate-in slide-in-from-top-4 duration-300"
      dir="rtl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-md flex-shrink-0 flex items-center justify-center">
            <img src="./logo.png" alt="الشعار" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-sky-400">تطبيق الجوال السريع</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-white leading-tight">المتخصصون المهنيون</h4>
            <p className="text-[11px] text-slate-300">ثبت التطبيق على شاشة جوالك للوصول الفوري</p>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {isIOS ? (
        <div className="mt-2.5 pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
          <span>لتثبيت التطبيق على الآيفون: اضغط زر المشاركة</span>
          <span className="inline-block bg-slate-800 px-1.5 py-0.5 rounded text-sky-300 border border-slate-700">⎋ مشاركة</span>
          <span>ثم اختر <strong>"إضافة إلى الصفحة الرئيسية"</strong></span>
        </div>
      ) : (
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold text-xs py-2 px-3 rounded-xl shadow flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تثبيت التطبيق الآن</span>
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-slate-400 hover:text-slate-200 py-2 px-2.5"
          >
            لاحقاً
          </button>
        </div>
      )}
    </div>
  );
};

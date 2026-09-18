import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showPopupMessage, setShowPopupMessage] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show welcome popup message automatically when the client enters the site
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopupMessage(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDismissPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowPopupMessage(false);
    setHasInteracted(true);
  };

  const whatsappMessageUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'السلام عليكم ورحمة الله، أود الاستفسار عن خدمات مكتب المتخصصون المهنيون'
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40 flex flex-col items-start select-none">
      {/* WhatsApp Welcome Popup Message Bubble */}
      <AnimatePresence>
        {showPopupMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-3 max-w-[280px] sm:max-w-[320px] bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden text-right"
            dir="rtl"
          >
            {/* Header with WhatsApp green branding */}
            <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-inner">
                    {/* Official WhatsApp mini icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#075E54]"></span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {COMPANY_INFO.shortName}
                  </h4>
                  <span className="text-[10px] text-emerald-200 block">
                    متواجدون لخدمتكم الآن 🟢
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDismissPopup}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="إغلاق الرسالة"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-3.5 bg-slate-50">
              <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 text-xs text-slate-800 leading-relaxed">
                <p className="font-semibold text-emerald-800 mb-1">
                  أهلاً بك في مكتب المتخصصون المهنيون 👋
                </p>
                <p className="text-slate-600">
                  هل تحتاج استشارة في تدقيق الحسابات أو استفساراً زكوياً وضريبياً؟ تواصل معنا مباشرة عبر واتساب وسيجيبك مستشارنا المعتمد فوراً.
                </p>
                <div className="mt-2 text-[10px] text-slate-400 text-left" dir="ltr">
                  الآن ✓✓
                </div>
              </div>

              {/* Direct Click-to-Chat Button */}
              <a
                href={whatsappMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopupMessage(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow transition-all hover:shadow-md cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>بدء المحادثة على واتساب</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Stack */}
      <div className="flex flex-col items-center gap-2.5 md:gap-3">
        {/* Scroll to top */}
        {showTopBtn && (
          <button
            id="floating-scroll-top-btn"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer border border-slate-700 hover:scale-105"
            aria-label="الرجوع للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct phone call button */}
        <a
          id="floating-phone-btn"
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
          title="اتصال هاتفي مباشر"
          aria-label="اتصال هاتفي"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp button with official authentic WhatsApp icon and green color */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappMessageUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowPopupMessage(false)}
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all hover:scale-110"
          title="محادثة واتساب فورية"
          aria-label="واتساب"
        >
          {/* Subtle radar pulse glow */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
          </span>

          {/* New message notification badge if popup hasn't been opened */}
          {!hasInteracted && (
            <span className="absolute -top-1.5 -left-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow border-2 border-white animate-bounce">
              1
            </span>
          )}

          {/* Authentic Official WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white drop-shadow-sm group-hover:scale-105 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

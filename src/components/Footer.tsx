import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_LIST } from '../data/servicesData';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, ArrowUp, ChevronLeft } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenConsultationModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80 text-right">
          {/* Column 1: Brand Profile & CR */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer inline-block bg-white p-2 rounded-xl shadow-sm" onClick={scrollToTop}>
              <img
                src="./logo.png"
                alt="المتخصصون المهنيون للإستشارات المهنية"
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              مكتب محاسبي واستشاري مرخص في المملكة العربية السعودية يقدم حلول التدقيق، الاستشارات الزكوية والضريبية، ومسك الدفاتر الرقمي بأعلى معايير الدقة والامتثال المهني.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-emerald-400 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>السجل التجاري المعتمد: {COMPANY_INFO.crNumber}</span>
              </div>
              <div className="text-xs text-slate-400">
                معتمدون لدى هيئة الزكاة والضريبة والجمارك (ZATCA) والهيئة السعودية (SOCPA).
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-base mb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => onScrollToSection('hero')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onScrollToSection('about')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  عن المكتب
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  الخدمات المهنية
                </button>
              </li>
              <li>
                <button
                  id="footer-link-calculator"
                  onClick={() => onScrollToSection('calculator')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  حاسبة التكلفة
                </button>
              </li>
              <li>
                <button
                  id="footer-link-zatca"
                  onClick={() => onScrollToSection('zatca')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  دليل الزكاة والضريبة
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => onScrollToSection('faq')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  الأسئلة الشائعة
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base mb-2">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES_LIST.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    id={`footer-service-${s.id}`}
                    onClick={() => onOpenConsultationModal(s.id)}
                    className="hover:text-sky-400 transition-colors text-right flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm"
                  >
                    <ChevronLeft className="w-3 h-3 text-sky-500 shrink-0" />
                    <span className="line-clamp-1">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base mb-2">
              بيانات التواصل المباشر
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <a
                id="footer-phone-link"
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">اتصال هاتفي:</div>
                  <div className="font-mono font-bold text-sky-400">{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                id="footer-whatsapp-link"
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أود التواصل مع مكتب المتخصصون المهنيون')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-900/50 hover:border-emerald-500/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-emerald-300">واتساب مباشر:</div>
                  <div className="font-mono font-bold text-emerald-400">{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-400">البريد الإلكتروني:</div>
                  <div className="font-mono text-slate-200 text-xs truncate">{COMPANY_INFO.email}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <strong className="text-slate-200">{COMPANY_INFO.name}</strong>
            <span>- س.ت: <span className="font-mono text-emerald-400">{COMPANY_INFO.crNumber}</span>. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>المملكة العربية السعودية - الرياض</span>
            <button
              id="back-to-top-footer-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="العودة إلى أعلى الصفحة"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, Clock, ShieldCheck, Menu, X, MessageSquare, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenConsultationModal: (serviceId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultationModal,
  onScrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Information Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              id="topbar-phone-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              title="اتصل بنا مباشرة"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-bold font-mono tracking-wider">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              id="topbar-email-link"
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>

          {/* Official Licenses & Quick Action */}
          <div className="flex items-center gap-3 mr-auto sm:mr-0">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>س.ت: {COMPANY_INFO.crNumber}</span>
            </span>

            <a
              id="topbar-whatsapp-btn"
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات مكتب المتخصصون المهنيون')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>واتساب سريع</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'shadow-md border-slate-200 py-2.5' : 'border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center focus:outline-none text-right cursor-pointer"
          >
            <Logo className="h-12 sm:h-14" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('hero')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              الرئيسية
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              عن المكتب
            </button>
            <button
              id="nav-link-services"
              onClick={() => handleNavClick('services')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <span>خدماتنا المهنية</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              id="nav-link-calculator"
              onClick={() => handleNavClick('calculator')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              حاسبة التكلفة التقديرية
            </button>
            <button
              id="nav-link-zatca"
              onClick={() => handleNavClick('zatca')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              دليل الزكاة والضريبة
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => handleNavClick('why-us')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              لماذا نحن
            </button>
            <button
              id="nav-link-faq"
              onClick={() => handleNavClick('faq')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              الأسئلة الشائعة
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-1"
            >
              اتصل بنا
            </button>
          </div>

          {/* Desktop Call to Action & Direct Call */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-direct-call-btn"
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
              title="اتصال هاتفي مباشر"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="nav-cta-consultation-btn"
              onClick={() => onOpenConsultationModal()}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              طلب استشارة مجانية
            </button>
          </div>

          {/* Mobile Menu Toggle Button & Quick Call */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2 rounded-xl text-sky-700 bg-sky-50 border border-sky-200 active:scale-95 transition-transform"
              aria-label="اتصال سريع"
              title="اتصال مباشر"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none cursor-pointer active:scale-95 transition-transform"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 text-base font-semibold text-slate-700">
              <button
                id="mobile-nav-home"
                onClick={() => handleNavClick('hero')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                الرئيسية
              </button>
              <button
                id="mobile-nav-about"
                onClick={() => handleNavClick('about')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                عن المكتب ومؤهلاتنا
              </button>
              <button
                id="mobile-nav-services"
                onClick={() => handleNavClick('services')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                خدماتنا المهنية (تدقيق - زكاة - مسك دفاتر)
              </button>
              <button
                id="mobile-nav-calculator"
                onClick={() => handleNavClick('calculator')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                حاسبة تكلفة الخدمات
              </button>
              <button
                id="mobile-nav-zatca"
                onClick={() => handleNavClick('zatca')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                دليل الزكاة والضريبة وهيئة زاتكا
              </button>
              <button
                id="mobile-nav-why-us"
                onClick={() => handleNavClick('why-us')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                لماذا تختار المتخصصون المهنيون؟
              </button>
              <button
                id="mobile-nav-faq"
                onClick={() => handleNavClick('faq')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                الأسئلة الشائعة
              </button>
              <button
                id="mobile-nav-contact"
                onClick={() => handleNavClick('contact')}
                className="text-right py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                اتصل بنا
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                id="mobile-nav-phone-action"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-800 bg-slate-100 hover:bg-slate-200 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>اتصال مباشر: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                id="mobile-nav-whatsapp-action"
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات مكتب المتخصصون المهنيون')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>محادثة واتساب سريعة</span>
              </a>

              <button
                id="mobile-nav-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-2.5 rounded-lg text-white bg-sky-600 hover:bg-sky-700 font-bold text-sm"
              >
                طلب استشارة مجانية وعرض سعر
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

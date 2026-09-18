import React from 'react';
import { Home, Briefcase, Calculator, FileCheck, PhoneCall } from 'lucide-react';

interface MobileBottomNavProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConsultationModal: (serviceId?: string) => void;
  activeSection?: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onScrollToSection,
  onOpenConsultationModal,
  activeSection = 'hero'
}) => {
  return (
    <div
      id="mobile-app-bottom-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe"
      style={{ paddingBottom: 'max(0.4rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-5 items-center max-w-lg mx-auto">
        {/* Home */}
        <button
          onClick={() => onScrollToSection('hero')}
          className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer ${
            activeSection === 'hero' ? 'text-sky-600 font-bold scale-105' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="الرئيسية"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight tracking-tight">الرئيسية</span>
        </button>

        {/* Services */}
        <button
          onClick={() => onScrollToSection('services')}
          className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer ${
            activeSection === 'services' ? 'text-sky-600 font-bold scale-105' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="الخدمات"
        >
          <Briefcase className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight tracking-tight">الخدمات</span>
        </button>

        {/* Center Action: Quote/Estimate */}
        <div className="flex flex-col items-center justify-center relative -top-3">
          <button
            onClick={() => onOpenConsultationModal()}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all border-2 border-white cursor-pointer"
            aria-label="طلب استشارة"
            title="طلب استشارة وعرض سعر"
          >
            <Calculator className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold text-sky-700 mt-0.5">طلب عرض</span>
        </div>

        {/* ZATCA & Tax Guide */}
        <button
          onClick={() => onScrollToSection('zatca')}
          className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer ${
            activeSection === 'zatca' ? 'text-sky-600 font-bold scale-105' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="الزكاة والضريبة"
        >
          <FileCheck className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight tracking-tight">زكاة وضريبة</span>
        </button>

        {/* Contact */}
        <button
          onClick={() => onScrollToSection('contact')}
          className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer ${
            activeSection === 'contact' ? 'text-sky-600 font-bold scale-105' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="تواصل"
        >
          <PhoneCall className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight tracking-tight">تواصل</span>
        </button>
      </div>
    </div>
  );
};

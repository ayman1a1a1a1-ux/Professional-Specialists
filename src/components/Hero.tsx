import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Phone,
  MessageSquare,
  FileSpreadsheet,
  Award,
  Building2,
  Clock,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenConsultationModal: (serviceId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultationModal,
  onScrollToSection
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accreditation and Official Registry Banner */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/90 text-sky-300 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-slate-700/80 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>مكتب محاسبة واستشارات معتمد بالمملكة</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-950/60 text-emerald-300 text-xs sm:text-sm font-mono font-bold px-3 py-1.5 rounded-full border border-emerald-800/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>س.ت: {COMPANY_INFO.crNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-snug">
                المتخصصون المهنيون: محاسب قانوني واستشارات مالية وزكوية في الرياض
              </h1>
              <p className="text-lg sm:text-xl font-bold text-sky-400">
                المتخصصون المهنيون للإستشارات المهنية
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              نقدم حلولاً متكاملة ونوعية في مراجعة وتدقيق الحسابات، الاستشارات المالية والضريبية، وتجهيز الإقرارات الزكوية، ومسك الدفاتر السحابي وفق أعلى معايير الهيئة السعودية للمراجعين والمحاسبين (SOCPA) والمعايير الدولية (IFRS).
            </p>

            {/* Core Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تقارير مراجع حسابات مستقلة ومعتمدة</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>إقرارات زكاة وضريبة وحل الاعتراضات مع زاتكا</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>مسك دفاتر سحابي وتطبيق الفوترة الإلكترونية</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>دراسات جدوى معتمدة لصناديق التمويل والبنوك</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                id="hero-request-quote-btn"
                onClick={() => onOpenConsultationModal()}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer group"
              >
                <span>طلب استشارة مجانية وعرض سعر</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أود طلب استشارة محاسبية وزكوية من مكتب المتخصصون المهنيون')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-5 py-3.5 rounded-xl shadow transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>واتساب: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                id="hero-calculator-btn"
                onClick={() => onScrollToSection('calculator')}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-4 py-3 rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-sky-400" />
                <span>حاسبة التكلفة التقديرية</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Card / Brand Identity Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl backdrop-blur-md">
              {/* Emblem Presentation */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full bg-white p-4 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center mb-5 overflow-hidden">
                  <img
                    src="./logo.png"
                    alt="المتخصصون المهنيون للإستشارات المهنية"
                    className="w-full h-auto max-h-56 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white">
                  المتخصصون المهنيون
                </h2>
                <p className="text-lg font-bold text-sky-400 mt-0.5">
                  للإستشارات المهنية
                </p>
                <p className="text-sm font-semibold text-slate-300 mt-1">
                  تدقيق - إستشارات - زكاة وضريبة
                </p>

                {/* CR badge */}
                <div className="mt-3 inline-block bg-slate-800 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-md border border-slate-700">
                  سجل تجاري: {COMPANY_INFO.crNumber}
                </div>

                <div className="w-full border-t border-slate-700/80 my-5" />

                {/* Quick contact direct card */}
                <div className="w-full space-y-2.5 text-right text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-slate-400">الهاتف الموحد / مباشر:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-bold text-sky-400 hover:underline">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-slate-400">البريد الإلكتروني:</span>
                    <span className="font-mono text-slate-300 text-[11px] truncate max-w-[190px]">
                      {COMPANY_INFO.email}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-slate-400">نطاق الخدمة:</span>
                    <span className="font-semibold text-emerald-400">
                      كافة مناطق المملكة العربية السعودية
                    </span>
                  </div>
                </div>

                {/* CTA inside card */}
                <button
                  id="hero-card-consultation-btn"
                  onClick={() => onOpenConsultationModal()}
                  className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors cursor-pointer"
                >
                  احجز موعد استشارة الآن
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live KPI Statistics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800/80 pt-10">
          {COMPANY_INFO.stats.map((stat, idx) => {
            const iconsConfig = [
              { Icon: Building2, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', badge: 'منشآت معتمدة' },
              { Icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', badge: 'امتثال 100%' },
              { Icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', badge: 'خبرة متراكمة' },
              { Icon: Clock, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', badge: 'سرعة استجابة' }
            ];
            const itemConfig = iconsConfig[idx % iconsConfig.length];
            const StatIcon = itemConfig.Icon;

            return (
              <div
                key={idx}
                className="relative bg-gradient-to-b from-slate-800/70 via-slate-850/80 to-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-700/60 text-right backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 group overflow-hidden"
              >
                {/* Subtle ambient light glow on hover */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-all pointer-events-none" />

                {/* Top header row: Icon + subtle indicator badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className={`w-8 h-8 rounded-lg ${itemConfig.bg} ${itemConfig.border} border ${itemConfig.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded-md border border-slate-800/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {itemConfig.badge}
                  </span>
                </div>

                {/* The animated professional counter */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono flex items-center justify-start text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white drop-shadow-sm group-hover:scale-105 transition-transform origin-right">
                  <AnimatedCounter
                    value={stat.value}
                    duration={4000}
                    delay={0}
                  />
                </div>

                {/* Label & Description */}
                <div className="text-sm font-bold text-slate-100 mt-2 line-clamp-1 group-hover:text-sky-300 transition-colors">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {stat.sub}
                </div>

                {/* Dynamic micro accent line at card bottom */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-800/80">
                  <div className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

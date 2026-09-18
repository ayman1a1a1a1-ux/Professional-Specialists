import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  FileCheck,
  ReceiptText,
  BookOpenCheck,
  TrendingUp,
  ShieldAlert,
  Building2,
  ArrowLeft,
  ChevronLeft,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع الخدمات المهنية' },
    { id: 'audit', label: 'المراجعة والتدقيق' },
    { id: 'tax', label: 'الزكاة والضرائب' },
    { id: 'accounting', label: 'مسك الدفاتر والمحاسبة' },
    { id: 'advisory', label: 'الاستشارات ودراسات الجدوى' },
    { id: 'corporate', label: 'تأسيس وتصفية الشركات' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  const renderIcon = (name: string) => {
    const props = { className: 'w-7 h-7' };
    switch (name) {
      case 'FileCheck': return <FileCheck {...props} className="w-7 h-7 text-sky-600" />;
      case 'ReceiptText': return <ReceiptText {...props} className="w-7 h-7 text-emerald-600" />;
      case 'BookOpenCheck': return <BookOpenCheck {...props} className="w-7 h-7 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp {...props} className="w-7 h-7 text-indigo-600" />;
      case 'ShieldAlert': return <ShieldAlert {...props} className="w-7 h-7 text-amber-600" />;
      case 'Building2': return <Building2 {...props} className="w-7 h-7 text-teal-600" />;
      default: return <FileCheck {...props} className="w-7 h-7 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <span>منظومة الخدمات المحاسبية المعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            خدمات مالية وزكوية متكاملة ترتقي بمنشأتكم
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            نقدم باقة شاملة من الخدمات المصممة خصيصاً لتلبية متطلبات الشركات والمؤسسات في المملكة العربية السعودية وفق أعلى المعايير المهنية.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`service-cat-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-right group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header icon & tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.tag && (
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 line-clamp-1">
                    {service.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key features bullet points */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  id={`view-detail-btn-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-800 py-2 px-2.5 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                >
                  <span>تفاصيل الخدمة</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`request-service-btn-${service.id}`}
                  onClick={() => onRequestQuote(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-sky-700 py-2 px-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span>طلب الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

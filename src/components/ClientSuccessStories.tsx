import React from 'react';
import { SECTORS, TESTIMONIALS } from '../data/servicesData';
import { Star, Building, ShoppingBag, Cpu, Factory, HeartPulse, Utensils, Quote, MapPin } from 'lucide-react';

export const ClientSuccessStories: React.FC = () => {
  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'Building': return <Building className="w-5 h-5 text-sky-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Factory': return <Factory className="w-5 h-5 text-amber-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-orange-600" />;
      default: return <Building className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-sky-950 text-sky-300 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-sky-800">
            <span>شركاء النجاح والقطاعات المخدومة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            ثقة متجددة من رواد الأعمال والشركات في المملكة
          </h2>
          <p className="text-base text-slate-300">
            نفتخر بخدمة نخبة من الشركات والمؤسسات في مختلف القطاعات الاقتصادية الحيوية بالمملكة.
          </p>
        </div>

        {/* Sectors Served Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {SECTORS.map((sector, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-right hover:border-sky-500/50 hover:bg-slate-800 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-700/70 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getSectorIcon(sector.icon)}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                {sector.name}
              </h3>
              <span className="inline-block text-[11px] font-mono text-emerald-400 font-bold mt-1">
                {sector.count}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/80 p-6 sm:p-7 rounded-3xl border border-slate-700 text-right flex flex-col justify-between space-y-4 relative group"
            >
              <Quote className="w-8 h-8 text-sky-500/20 absolute top-6 left-6" />

              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{t.clientName}</h4>
                  <p className="text-xs text-sky-400">{t.company}</p>
                  <p className="text-[11px] text-slate-400">{t.sector}</p>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

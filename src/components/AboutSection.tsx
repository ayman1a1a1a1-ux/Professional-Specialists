import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Award, Target, Eye, CheckCircle, Scale, Users, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>نبذة عن الكيان والخبرات المهنية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              نحن "المتخصصون المهنيون للإستشارات المهنية"
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              مكتب محاسبي واستشاري مرخص في المملكة العربية السعودية بسجل تجاري رقم <strong className="text-slate-900 font-mono">({COMPANY_INFO.crNumber})</strong>. نكرس خبراتنا المتراكمة لتقديم خدمات التدقيق المحاسبي، الاستشارات الزكوية والضريبية، وتطوير الأنظمة المالية لقطاع الأعمال من منشآت متناهية الصغر وصغيرة ومتوسطة وكبرى.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              نعمل جنباً إلى جنب مع عملائنا كشريك استراتيجي يضمن أعلى درجات الامتثال للأنظمة الصادرة عن الهيئة السعودية للمراجعين والمحاسبين (SOCPA) وهيئة الزكاة والضريبة والجمارك (ZATCA)، مع تعظيم كفاءة الموارد المالية للشركة وحمايتها من أية غرامات أو ملاحظات نظامية.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2 text-sky-700 font-bold text-base">
                  <Eye className="w-5 h-5 text-sky-600" />
                  <h3>رؤيتنا</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  أن نكون بيت الخبرة المحاسبي والاستشاري الموثوق والأول للشركات والمستثمرين في المملكة، ونموذجاً يُحتذى به في الدقة، النزاهة، والتحول الرقمي المالي.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-base">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <h3>رسالتنا</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  تمكين أصحاب الأعمال وروادها من اتخاذ قرارات مالية حكيمة، وتقديم تقارير مالية ذات مصداقية دولية، مع التخطيط الزكوي والضريبي الذكي الذي يحمي حقوق المنشأة.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-slate-800 mb-3">
                قيمنا المهنية الراسخة:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: 'الاستقلالية والنزاهة', desc: 'معايير تدقيق صارمة' },
                  { title: 'السرية والأمان', desc: 'حماية بيانات المنشأة' },
                  { title: 'الدقة المتناهية', desc: 'مطابقة محاسبية 100%' },
                  { title: 'الالتزام الزمني', desc: 'قبل المواعيد النظامية' },
                ].map((val, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 text-right">
                    <div className="text-xs font-bold text-slate-900">{val.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{val.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Credentials & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-6 text-right">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="font-bold text-base text-white">الاعتمادات والتراخيص</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  مرخص نظامياً
                </span>
              </div>

              <div className="space-y-4">
                {COMPANY_INFO.accreditations.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-bold text-sky-400 text-sm">{item.shortTitle}</span>
                      <span className="text-xs text-slate-400 font-semibold">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 leading-relaxed flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  نعمل وفق أحدث المعايير الدولية للتقارير المالية المعتمدة في المملكة (IFRS for SMEs & Full IFRS)، ونواكب كافة تحديثات منصة قوى، منصة اعتماد، وهيئة الزكاة.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, Zap, Lock, Headphones, Award, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      icon: ShieldAlert,
      title: 'حماية كاملة من غرامات الزكاة والضريبة',
      description: 'نراقب مواعيد الإقرارات ونراجع الوعاء الزكوي مسبقاً لتفادي غرامات التأخير أو الفروقات التقديرية من هيئة الزكاة والجمارك (ZATCA).'
    },
    {
      icon: Award,
      title: 'فريق استشاري معتمد (SOCPA & CPA)',
      description: 'لا نعتمد على هواة، بل نخبة من المستشارين الماليين والمراجعين القانونيين الحاصلين على أعلى الزمالات المهنية بالمملكة.'
    },
    {
      icon: Zap,
      title: 'سرعة ودقة تسليم التقارير',
      description: 'نلتزم بجداول زمنية صارمة لإصدار القوائم المالية والتقارير الشهرية، مما يمنحكم رؤية فورية لاتخاذ القرارات دون تأخير.'
    },
    {
      icon: Lock,
      title: 'سرية وأمان بيانات بنكية وتجارية',
      description: 'تطبيق اتفاقيات سرية معلومات (NDA) رسمية مع تشفير سحابي عالي المعايير لكافة كشوف الحسابات والفواتير.'
    },
    {
      icon: Headphones,
      title: 'مستشار مالي مخصص لشركتكم',
      description: 'تواصل مباشر عبر الهاتف والواتساب مع مسؤول حسابكم لمناقشة أي استفسار مالي أو زكوي يطرأ على أعمالكم اليومية.'
    },
    {
      icon: TrendingUp,
      title: 'قيمة مضافة تتجاوز مجرد تقييد الأرقام',
      description: 'نقدم توصيات عملية لتحسين التدفقات النقدية، تقليص الهدر، وزيادة هوامش الأرباح التشغيلية.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <span>الفارق المهني الحقيقي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لماذا تختار "المتخصصون المهنيون للإستشارات المهنية"؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            نجمع بين الخبرة العميقة في الأنظمة السعودية وأحدث الحلول المحاسبية الرقمية لنمنح منشأتكم استقراراً وامتثالاً تاماً.
          </p>
        </div>

        {/* 6 Grid Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-right group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Practical Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="bg-slate-900 text-white p-5 sm:p-6 text-right">
            <h3 className="text-xl font-bold">
              مقارنة: مكتب "المتخصصون المهنيون" مقابل الحلول الفردية التقليدية
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              كيف يوفر لك التعاقد معنا التكاليف ويحميك من المخاطر التشغيلية والزكوية:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-black">وجه المقارنة</th>
                  <th className="p-4 font-black text-sky-700 bg-sky-50/60">مكتب المتخصصون المهنيون</th>
                  <th className="p-4 font-semibold text-slate-500">محاسب داخلي منفرد أو غير مرخص</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold">الاعتماد والمسؤولية القانونية</td>
                  <td className="p-4 bg-sky-50/30 text-emerald-700 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>مرخص نظامياً بسجل تجاري (7052765331) وتقارير معتمدة</span>
                  </td>
                  <td className="p-4 text-slate-500">
                    لا يتحمل مسؤولية قانونية رسمية أمام الجهات الحكومية
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">التكلفة المالية الإجمالية</td>
                  <td className="p-4 bg-sky-50/30 text-emerald-700 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>اشتراك سنوي أو شهري مرن يوفر حتى 60%</span>
                  </td>
                  <td className="p-4 text-slate-500">
                    رواتب شهرية، تأمينات، إقامات، تذاكر، ومكافأة نهاية خدمة
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">الخبرة في هيئة الزكاة والضريبة (ZATCA)</td>
                  <td className="p-4 bg-sky-50/30 text-emerald-700 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>فريق متخصص في الاعتراضات والربوط الزكوية المعقدة</span>
                  </td>
                  <td className="p-4 text-slate-500">
                    خبرة محدودة قد تتسبب في غرامات باهظة للمنشأة
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">استمرارية العمل دون انقطاع</td>
                  <td className="p-4 bg-sky-50/30 text-emerald-700 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>خدمة مستمرة طوال العام بدون انقطاع أو إجازات</span>
                  </td>
                  <td className="p-4 text-slate-500">
                    يتوقف العمل في فترات الإجازات السنوية أو المرضية أو الاستقالة
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldAlert, AlertTriangle, Calendar, FileCheck, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ZatcaTaxSectionProps {
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const ZatcaTaxSection: React.FC<ZatcaTaxSectionProps> = ({
  onOpenConsultationModal
}) => {
  const compliancePoints = [
    {
      title: 'إقرار الزكاة وضريبة الدخل السنوي',
      deadline: 'خلال 120 يوماً من نهاية السنة المالية',
      desc: 'حساب الوعاء الزكوي وحصر بنود الإضافة والخصم وتقديم الإقرار قبل الموعد النظامي لتفادي تعليق السجلات والشهادات.',
      badge: 'إلزامي سنوياً'
    },
    {
      title: 'إقرارات ضريبة القيمة المضافة (VAT 15%)',
      deadline: 'شهرياً أو ربع سنوي بحسب حجم الإيرادات',
      desc: 'مطابقة المبيعات والمشتريات وتدقيق الخصم الضريبي وتقديم الإقرار قبل نهاية الشهر التالي لتجنب غرامات التأخر.',
      badge: 'دوري ومنتظم'
    },
    {
      title: 'الفوترة الإلكترونية (مرحلة الربط والتكامل)',
      deadline: 'وفق مجموعات الإلزام الصادرة عن زاتكا',
      desc: 'تهيئة الأنظمة المحاسبية لإصدار الفواتير بصيغة XML، وتوليد كود الـ QR المشفر والختم الرقمي والتكامل مع منصة فاتورة.',
      badge: 'متطلب تقني'
    },
    {
      title: 'الاعتراض على الربوط الضريبية والغرامات',
      deadline: 'خلال 60 يوماً من استلام الإشعار',
      desc: 'إعداد لوائح اعتراض فنية ومحاسبية تفصيلية وتقديمها عبر بوابة زاتكا للتظلم من الفروقات غير المستحقة.',
      badge: 'دفاع قانوني'
    }
  ];

  return (
    <section id="zatca" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Introduction */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-emerald-200">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>دليل الامتثال الزكوي والضريبي السعودي</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              نحميك من مخاطر الربط العشوائي وغرامات هيئة الزكاة
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              مع التطور التقني المتسارع لهيئة الزكاة والضريبة والجمارك (ZATCA) واستخدام الذكاء الاصطناعي في التدقيق ومطابقة الفواتير، أصبحت الأخطاء المحاسبية البسيطة تتسبب في غرامات باهظة وتجميد شهادات المنشأة.
            </p>

            <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-xl text-right space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>تنبيه هام لأصحاب الشركات والمؤسسات</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                التأخر في رفع الإقرارات أو عدم مطابقة الفوترة الإلكترونية يعرض المنشأة لغرامات تبدأ من آلاف الريالات وتصل إلى حظر شهادة الزكاة ومنع التعاملات الحكومية.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  فحص شامل لدفاتركم وسجلاتكم قبل رفع أي إقرار للتحقق من سلامة الأرقام.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  تخطيط زكوي وضريبي استباقي للاستفادة من كافة الإعفاءات والخصومات المتاحة نظاماً.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  خبرة واسعة في كسب الاعتراضات وخفض المطالبات الجزافية أمام لجان GSTC.
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                id="zatca-consultation-btn"
                onClick={() => onOpenConsultationModal('zakat-tax')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow transition-all cursor-pointer"
              >
                <span>طلب استشارة زكوية وضريبية فورية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <a
                id="zatca-whatsapp-btn"
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، لدي استفسار زكوي / ربط ضريبي أود مشورتكم فيه')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Cards of Key Deadlines and Compliance */}
          <div className="lg:col-span-6 space-y-4">
            {compliancePoints.map((point, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all text-right space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    {point.badge}
                  </span>
                  <h3 className="font-black text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                    {point.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>الموعد النظامي: {point.deadline}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

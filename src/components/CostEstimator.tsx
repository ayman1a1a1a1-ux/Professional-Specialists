import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowLeft, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CostEstimatorProps {
  onOpenConsultationModal: (serviceId?: string, estimatedData?: any) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onOpenConsultationModal
}) => {
  const [entityType, setEntityType] = useState<'sole' | 'llc' | 'joint' | 'foreign'>('llc');
  const [revenueTier, setRevenueTier] = useState<'micro' | 'small' | 'medium' | 'large'>('small');
  const [serviceType, setServiceType] = useState<'audit' | 'bookkeeping' | 'zakat' | 'feasibility'>('audit');
  const [invoicesVolume, setInvoicesVolume] = useState<'low' | 'medium' | 'high'>('medium');
  const [hasEInvoicingPhase2, setHasEInvoicingPhase2] = useState<boolean>(true);

  // Calculation logic reflecting Saudi accounting market rates
  const estimate = useMemo(() => {
    let baseMin = 4000;
    let baseMax = 7000;
    let billingCycle = 'سنوياً';

    if (serviceType === 'audit') {
      billingCycle = 'للقوائم المالية السنوية';
      if (entityType === 'sole') {
        baseMin = 3500;
        baseMax = 6000;
      } else if (entityType === 'llc') {
        baseMin = 6000;
        baseMax = 11000;
      } else if (entityType === 'joint') {
        baseMin = 14000;
        baseMax = 25000;
      } else {
        baseMin = 12000;
        baseMax = 20000;
      }

      if (revenueTier === 'micro') {
        baseMin *= 0.85;
        baseMax *= 0.9;
      } else if (revenueTier === 'small') {
        baseMin *= 1.1;
        baseMax *= 1.15;
      } else if (revenueTier === 'medium') {
        baseMin *= 1.6;
        baseMax *= 1.7;
      } else if (revenueTier === 'large') {
        baseMin *= 2.3;
        baseMax *= 2.5;
      }
    } else if (serviceType === 'bookkeeping') {
      billingCycle = 'شهرياً';
      if (invoicesVolume === 'low') {
        baseMin = 1200;
        baseMax = 1800;
      } else if (invoicesVolume === 'medium') {
        baseMin = 2200;
        baseMax = 3500;
      } else {
        baseMin = 3800;
        baseMax = 6000;
      }
      if (entityType === 'joint' || entityType === 'foreign') {
        baseMin *= 1.3;
        baseMax *= 1.3;
      }
    } else if (serviceType === 'zakat') {
      billingCycle = 'للإقرار السنوي المعتمد';
      baseMin = 2500;
      baseMax = 4500;
      if (revenueTier === 'medium') {
        baseMin = 4500;
        baseMax = 8000;
      } else if (revenueTier === 'large') {
        baseMin = 8500;
        baseMax = 15000;
      }
    } else if (serviceType === 'feasibility') {
      billingCycle = 'للدراسة الاقتصادية الكاملة';
      baseMin = 5000;
      baseMax = 12000;
      if (revenueTier === 'medium' || revenueTier === 'large') {
        baseMin = 12000;
        baseMax = 24000;
      }
    }

    return {
      min: Math.round(baseMin / 100) * 100,
      max: Math.round(baseMax / 100) * 100,
      billingCycle
    };
  }, [entityType, revenueTier, serviceType, invoicesVolume]);

  const serviceNames = {
    audit: 'مراجعة وتدقيق القوائم المالية السنوية',
    bookkeeping: 'مسك الدفاتر والمحاسبة السحابية الشهرية',
    zakat: 'إعداد الإقرار الزكوي والضريبي السنوي',
    feasibility: 'دراسة جدوى اقتصادية معتمدة لجهات التمويل'
  };

  const entityNames = {
    sole: 'مؤسسة فردية',
    llc: 'شركة ذات مسؤولية محدودة',
    joint: 'شركة مساهمة مقفلة',
    foreign: 'فرع شركة أجنبية / استثمار أجنبي'
  };

  const revenueNames = {
    micro: 'أقل من 3 مليون ريال (متناهية الصغر)',
    small: '3 - 20 مليون ريال (صغيرة)',
    medium: '20 - 50 مليون ريال (متوسطة)',
    large: 'أكثر من 50 مليون ريال (كبرى)'
  };

  const handleSendViaWhatsApp = () => {
    const text = `السلام عليكم ورحمة الله،
أود الحصول على عرض سعر رسمي من مكتب المتخصصون المهنيون بناءً على تقدير الحاسبة:
- الخدمة المطلوبة: ${serviceNames[serviceType]}
- الكيان القانوني: ${entityNames[entityType]}
- حجم الإيرادات السنوي: ${revenueNames[revenueTier]}
- التقدير المبدئي: ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()} ريال (${estimate.billingCycle})`;

    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <Calculator className="w-4 h-4" />
            <span>تسعير شفاف وتقدير فوري</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            حاسبة تكلفة الخدمات المحاسبية والزكوية
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            حدد مواصفات منشأتكم للحصول على تقدير استرشادي فوري وفق طبيعة النشاط وحجم العمليات.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 text-right">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2.5">
                1. اختر الخدمة الرئيسية المطلوبة:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'audit', label: 'مراجعة وتدقيق القوائم المالية' },
                  { id: 'bookkeeping', label: 'مسك دفاتر ومحاسبة سحابية' },
                  { id: 'zakat', label: 'إقرار زكاة وضريبة الدخل' },
                  { id: 'feasibility', label: 'دراسة جدوى اقتصادية' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id as any)}
                    className={`p-3 rounded-xl text-sm font-bold text-right border transition-all cursor-pointer ${
                      serviceType === item.id
                        ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Entity Type */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2.5">
                2. الشكل والكيان القانوني للمنشأة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'sole', label: 'مؤسسة فردية' },
                  { id: 'llc', label: 'شركة ذ.م.م' },
                  { id: 'joint', label: 'مساهمة مقفلة' },
                  { id: 'foreign', label: 'استثمار أجنبي' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEntityType(item.id as any)}
                    className={`py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      entityType === item.id
                        ? 'bg-sky-600 text-white border-sky-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Revenue Tier */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2.5">
                3. حجم الإيرادات السنوية التقريبية:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'micro', label: 'أقل من 3 مليون ريال' },
                  { id: 'small', label: 'من 3 إلى 20 مليون ريال' },
                  { id: 'medium', label: 'من 20 إلى 50 مليون ريال' },
                  { id: 'large', label: 'أكثر من 50 مليون ريال' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRevenueTier(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-right border transition-all cursor-pointer ${
                      revenueTier === item.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Conditional Invoice Volume for Bookkeeping */}
            {serviceType === 'bookkeeping' && (
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2.5">
                  حجم العمليات والفواتير الشهرية المتوقعة:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'low', label: 'أقل من 100 فاتورة' },
                    { id: 'medium', label: '100 - 500 فاتورة' },
                    { id: 'high', label: 'أكثر من 500 فاتورة' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInvoicesVolume(item.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        invoicesVolume === item.id
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-sky-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 text-right space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800">
                تقدير مبدئي استرشادي
              </span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            <div>
              <span className="text-xs text-slate-400">التكلفة التقديرية للخدمة:</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                  {estimate.min.toLocaleString()} - {estimate.max.toLocaleString()}
                </span>
                <span className="text-base font-bold text-slate-200">ريال سعودي</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                الفترة / الدورة: <span className="text-white font-medium">{estimate.billingCycle}</span>
              </p>
            </div>

            {/* Included in estimate */}
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50 space-y-2.5 text-xs">
              <div className="font-bold text-slate-200 text-sm mb-1">ما يشمله هذا التقدير:</div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>إشراف مراجع حسابات قانوني مرخص ومستشار معتمد</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>المطابقة التامة مع لوائح زاتكا ومعايير الهيئة (SOCPA)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>دعم واستشارات مستمرة طوال فترة التعاقد</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                id="estimator-official-quote-btn"
                onClick={() => onOpenConsultationModal(serviceType, { entityType, revenueTier, estimate })}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-sm shadow transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>طلب عرض سعر رسمي مفصل ومختوم</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                id="estimator-whatsapp-send-btn"
                onClick={handleSendViaWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال التقدير عبر واتساب ({COMPANY_INFO.phoneDisplay})</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed text-center">
              * الأسعار أعلاه تقديرية استرشادية، ويتم تحديد العرض المالي النهائي بدقة بعد مراجعة حجم الدفاتر وعدد العمليات والربط التقني.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

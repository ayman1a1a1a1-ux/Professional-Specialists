import React from 'react';
import {
  BookOpenCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
  ReceiptText,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

const serviceAreas = [
  { icon: FileCheck2, label: 'مراجعة الحسابات والتدقيق' },
  { icon: ReceiptText, label: 'الزكاة والضريبة' },
  { icon: Target, label: 'الاستشارات المالية والإدارية' },
  { icon: ShieldCheck, label: 'المراجعة الداخلية والرقابة' },
  { icon: Landmark, label: 'دراسات الجدوى الاقتصادية' },
];

const detailedServices = [
  {
    icon: BookOpenCheck,
    eyebrow: 'الخدمات المحاسبية',
    title: 'الخدمات المحاسبية والقوائم المالية',
    description:
      'نساعد العميل على الاستفادة من الخدمات المحاسبية بأفضل الطرق الممكنة، من خلال تصميم وتطوير نظم المحاسبة المالية، وتسجيل الدورة المالية، والكشف عن الأخطاء المالية والوظائف المتعارضة واقتراح الحلول المناسبة.',
    details: [
      'التنظيم المالي والتسجيل اليومي التفصيلي للعمليات المالية وفق المعايير المطبقة.',
      'إعداد ومتابعة القوائم المالية والتقارير المحاسبية بصورة منتظمة.',
      'متابعة الرفع والمتطلبات لدى وزارة التجارة ووزارة الاستثمار والزكاة والضريبة.',
      'تقديم الخدمة من خلال محاسبين مختصين وفق زيارات وساعات عمل تحدد بعد دراسة بيانات المنشأة.',
    ],
  },
  {
    icon: Scale,
    eyebrow: 'الامتثال والتخطيط',
    title: 'الزكاة والدخل والضريبة',
    description:
      'نقدم خدماتنا المهنية في مجال الإقرارات الزكوية والضريبية وفق المعايير واللوائح ذات الصلة، بما يشمل ضريبة القيمة المضافة وضريبة الدخل وضريبة الاستقطاع، مع توضيح الآثار الزكوية والضريبية للعمليات الجديدة.',
    details: [
      'إعداد ومراجعة الإقرارات الزكوية والضريبية وفق المتطلبات النظامية.',
      'مراجعة الهيئة نيابة عن العميل ومتابعة الملاحظات والطلبات ذات العلاقة.',
      'تزويد العملاء بالفهم السليم لآلية احتساب الزكاة والضريبة المستحقة.',
      'تطوير استراتيجيات تخطيط زكوي وضريبي تتوافق مع أهداف المنشأة وطبيعة نشاطها.',
    ],
  },
  {
    icon: Landmark,
    eyebrow: 'القطاع العقاري',
    title: 'خدمات المطورين العقاريين',
    description:
      'نرافق المطور العقاري منذ بداية إنشاء السجل التجاري، ونتابع إضافة الأنشطة واستكمال المتطلبات اللازمة للتأهيل والحصول على الشهادات والتصاريح المرتبطة بالنشاط العقاري.',
    details: [
      'إنشاء السجل التجاري وإضافة الأنشطة العقارية المناسبة لطبيعة المشروع.',
      'متابعة متطلبات التأهيل للحصول على شهادة تأهيل مطور عقاري.',
      'متابعة شهادة الشخص المؤهل للاسترداد والاستيراد الضريبي.',
      'المساعدة في تجهيز متطلبات الاسترداد الضريبي الشهري أو الربع سنوي.',
    ],
  },
  {
    icon: Building2,
    eyebrow: 'التأسيس والخدمات النظامية',
    title: 'تأسيس الشركات والمؤسسات',
    description:
      'نقدم خدمات تأسيس شركات الأشخاص وشركات الأموال والمنشآت الفردية، مع إنجاز الإجراءات النظامية ومتابعة التعديلات والفروع والملفات المرتبطة بالمنشأة.',
    details: [
      'إنشاء وإصدار السجل التجاري للمؤسسة أو الشركة وإضافة الفروع أو إلغاؤها.',
      'إنشاء عقد التأسيس وتعديله عند إضافة الشركاء أو استبعادهم أو تعديل البيانات.',
      'إصدار البطاقة الضريبية وشهادة ضريبة القيمة المضافة وشهادة الزكاة والدخل.',
      'إصدار شهادة التأمينات الاجتماعية والاشتراك في الغرفة التجارية.',
      'متابعة خدمات المنشأة لدى وزارة التجارة والمركز السعودي للأعمال ومنصة قوائم.',
    ],
  },
  {
    icon: Users,
    eyebrow: 'الموارد البشرية والمنصات الحكومية',
    title: 'خدمات الموارد البشرية ومنصة بلدي',
    description:
      'نتابع ونعالج المشكلات المرتبطة بمنصات العمل والخدمات الحكومية، ونساند المنشأة في الإجراءات النظامية المتعلقة بالموظفين والعمالة حتى اكتمال المعالجة.',
    details: [
      'متابعة منصات قوى ومساند وأبشر أعمال والتأمينات الاجتماعية ومنصة بلدي.',
      'معالجة تعديل نسب السعودة والأجانب ونقل الكفالة وتعديل المهن.',
      'متابعة استبعاد الموظفين وإلغاء الخروج النهائي وبلاغات التغيب خلال المدة النظامية.',
      'مساندة المنشأة في الإقرارات والميزانيات والتنبيه بأي مستجدات في الأنظمة واللوائح.',
    ],
  },
  {
    icon: Target,
    eyebrow: 'خدمات تطوير الأعمال',
    title: 'خدمات أخرى يقدمها المكتب',
    description:
      'نوفر مجموعة من الخدمات المساندة التي تساعد المنشآت على التخطيط السليم، ورفع كفاءة الإدارة المالية، والاستعداد لقرارات التوسع أو إعادة الهيكلة.',
    details: [
      'إعداد دراسات الجدوى الاقتصادية والخطط المالية للمشروعات.',
      'إعداد القوائم المالية المستقبلية والتوقعات المالية.',
      'تقديم النظم المحاسبية ونظم الرقابة الداخلية والسياسات والإجراءات.',
      'دعم الاندماج والانفصال بين الشركات والمؤسسات وتقييم الآثار المالية.',
      'تقييم المخاطر المالية والتشغيلية واقتراح خطط المعالجة والتحسين.',
    ],
  },
];

export const ProfessionalServicesSection: React.FC = () => {
  return (
    <section id="professional-services" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.22),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-bold text-sky-200 sm:text-sm">
            <Building2 className="h-4 w-4" />
            نطاق خدماتنا المهنية
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            خبرة مهنية متكاملة لخدمة منشأتك في جميع أنحاء المملكة
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            نقوم بتقديم خدمات مهنية من خلال الأقسام الرئيسية الخاصة بمراجعة الحسابات، والزكاة والضريبة، والاستشارات المالية والإدارية، والمراجعة الداخلية، ودراسات الجدوى الاقتصادية. نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية عن طريق مدققين ومستشارين وخبراء مؤهلين مهنيًا من المملكة والدول الأخرى، جرى استقطابهم واختيارهم بعناية.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-right text-sm font-bold text-slate-200 backdrop-blur-sm">
              <Icon className="h-4 w-4 shrink-0 text-emerald-300" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-400/50 to-transparent" />
          <h3 className="text-xl font-black text-sky-100 sm:text-2xl">خدماتنا التفصيلية</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {detailedServices.map(({ icon: Icon, eyebrow, title, description, details }) => (
            <article key={title} className="group rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/40 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-300">{eyebrow}</p>
                  <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h4>
                </div>
              </div>
              <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">{description}</p>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
          <Users className="h-4 w-4 text-sky-300" />
          <span>فريق متخصص يعمل معك بوضوح ومهنية من بداية الخدمة حتى اكتمالها</span>
        </div>
      </div>
    </section>
  );
};

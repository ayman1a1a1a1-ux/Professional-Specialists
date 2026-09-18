import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_LIST } from '../data/servicesData';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
    serviceId: 'audit-assurance',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const serviceObj = SERVICES_LIST.find(s => s.id === formData.serviceId);
    const serviceName = serviceObj ? serviceObj.title : 'خدمة محاسبية';

    const whatsappMessage = `السلام عليكم ورحمة الله،
أود طلب استشارة / عرض سعر من مكتب المتخصصون المهنيون:
- الاسم: ${formData.fullName}
- الجوال: ${formData.phone}
- المنشأة: ${formData.companyName || 'غير محدد'}
- الخدمة: ${serviceName}
- التفاصيل: ${formData.message || 'أرجو التواصل معي لمناقشة التفاصيل'}`;

    // Give user smooth feedback and offer whatsapp link
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <Phone className="w-4 h-4" />
            <span>قنوات التواصل المباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            تواصل معنا لطلب عرض سعر أو استشارة مهنية
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            فريقنا الاستشاري متواجد للإجابة على اتصالاتكم واستفساراتكم على مدار الساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6 text-right">
            <div className="bg-slate-900 text-white p-7 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-black text-white">
                  المتخصصون المهنيون للإستشارات المهنية
                </h3>
                <p className="text-sky-400 font-bold text-sm mt-1">
                  تدقيق - إستشارات - زكاة وضريبة
                </p>
                <div className="mt-2 inline-block bg-slate-800 text-emerald-400 text-xs font-mono font-bold px-2.5 py-1 rounded border border-slate-700">
                  س.ت: {COMPANY_INFO.crNumber}
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                {/* Phone */}
                <a
                  id="contact-phone-box"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">الاتصال المباشر:</div>
                    <div className="font-mono font-black text-sky-400 text-base">{COMPANY_INFO.phoneDisplay}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  id="contact-whatsapp-box"
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أود التواصل مع مكتب المتخصصون المهنيون')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-950/40 hover:bg-emerald-950/60 transition-colors border border-emerald-800/50 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-300">محادثة واتساب سريعة:</div>
                    <div className="font-mono font-black text-emerald-400 text-base">{COMPANY_INFO.phoneDisplay}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="contact-email-box"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400">البريد الإلكتروني الرسمي:</div>
                    <div className="font-mono text-slate-200 text-xs sm:text-sm font-semibold truncate">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">الفرع الرئيسي والتغطية:</div>
                    <div className="text-slate-200 text-xs font-semibold">{COMPANY_INFO.location}</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">أوقات العمل الرسمية:</div>
                    <div className="text-slate-200 text-xs font-semibold">{COMPANY_INFO.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 text-right">
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              طلب استشارة مجانية أو عرض سعر رسمي
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              املأ البيانات التالية وسيتواصل معكم أحد مستشارينا الماليين خلال أقل من ساعتين لمناقشة متطلباتكم.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-black text-emerald-900">
                  تم استلام طلبكم بنجاح!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلكم مع <strong>مكتب المتخصصون المهنيون للإستشارات المهنية</strong>. تم تحويل طلبكم لمسؤول القطاع وسنقوم بالاتصال بكم عبر الرقم الموضح.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
                  >
                    إرسال طلب استشارة لخدمة أخرى
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullname" className="block text-xs font-bold text-slate-800 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder="مثال: عبد العزيز محمد"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-800 mb-1.5">
                      رقم الجوال للتواصل *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-slate-800 mb-1.5">
                      اسم الشركة أو المؤسسة
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="اسم المنشأة"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-800 mb-1.5">
                      الخدمة المهنية المطلوبة *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-800 mb-1.5">
                    تفاصيل الاستفسار أو الملاحظات
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="اكتب نبذة عن حجم الأعمال، المتطلبات الخاصة، أو أي مواعيد نهائية نظامية..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب ومحادثة المستشار عبر واتساب</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  نلتزم بالسرية التامة لجميع البيانات وفق اتفاقيات عدم الإفشاء (NDA).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

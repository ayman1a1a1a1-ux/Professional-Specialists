import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_LIST } from '../data/servicesData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedData?: any;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedData
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'audit-assurance');
  const [notes, setNotes] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);

    const srv = SERVICES_LIST.find(s => s.id === serviceId);
    const serviceName = srv ? srv.title : 'خدمة محاسبية عامة';

    const text = `السلام عليكم ورحمة الله،
أود طلب استشارة وعرض سعر رسمي من مكتب المتخصصون المهنيون:
- الاسم: ${fullName}
- الجوال: ${phone}
- اسم المنشأة: ${companyName || 'منشأة قيد التأسيس/خاصة'}
- الخدمة المختارة: ${serviceName}
${preselectedData?.estimate ? `- التقدير المبدئي من الحاسبة: ${preselectedData.estimate.min} - ${preselectedData.estimate.max} ريال` : ''}
- ملاحظات: ${notes || 'يرجى التواصل معي في أقرب وقت'}`;

    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-right animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white p-6 relative">
          <button
            id="close-consultation-modal-btn"
            onClick={onClose}
            className="absolute top-5 left-5 p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-sky-400">مكتب المتخصصون المهنيون للإستشارات المهنية</span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            طلب استشارة مجانية وعرض سعر
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            س.ت: {COMPANY_INFO.crNumber} | هاتف: {COMPANY_INFO.phoneDisplay}
          </p>
        </div>

        <div className="p-6 sm:p-7">
          {isDone ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-black text-slate-900">
                شكراً لتواصلكم معنا
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                تم تحويل طلبك مباشرة لمستشارنا المالي، وسنقوم بالرد عليكم وتزويدكم بعرض السعر الشامل.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm cursor-pointer"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  الاسم الكريم *
                </label>
                <input
                  type="text"
                  required
                  placeholder="الاسم الثلاثي"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  رقم الجوال للتواصل *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="056xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  اسم الشركة أو المنشأة
                </label>
                <input
                  type="text"
                  placeholder="اسم المؤسسة أو الشركة"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  الخدمة المطلوبة *
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  ملاحظات أو أسئلة إضافية
                </label>
                <textarea
                  rows={3}
                  placeholder="اكتب أي معلومات تود إضافتها لمستشارنا..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-right resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال ومتابعة عبر واتساب</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                <span>أو اتصال مباشر:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-bold text-sky-700 hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

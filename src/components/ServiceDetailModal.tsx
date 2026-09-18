import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, FileText, Scale, Users, ArrowLeft, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-right animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white p-6 sm:p-8 relative">
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-5 left-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {service.tag && (
            <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30 mb-3">
              {service.tag}
            </span>
          )}

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {service.title}
          </h3>
          <p className="text-sky-300 font-medium text-sm sm:text-base mt-2">
            {service.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-slate-800">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
              نظرة عامة على الخدمة
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables & Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-3 text-sky-800 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
                <h5>نطاق العمل والمهام</h5>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-emerald-800 font-bold text-base">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h5>المخرجات والتقارير المسلمة</h5>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                <Scale className="w-4 h-4 text-sky-600" />
                <span>الأنظمة والمعايير المعتمدة</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.standards.map((std, i) => (
                  <span key={i} className="text-xs bg-sky-50 text-sky-800 px-2.5 py-1 rounded-md font-medium border border-sky-100">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>المنشآت المستهدفة</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.targetClients.map((client, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium border border-emerald-100">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a
              id="service-modal-whatsapp-link"
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن تفاصيل وتسعير خدمة (${service.title}) لدى مكتب المتخصصون المهنيون`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>

            <a
              id="service-modal-call-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          <button
            id="service-modal-request-quote-btn"
            onClick={() => {
              onRequestQuote(service.id);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow transition-all cursor-pointer"
          >
            <span>طلب عرض سعر رسمي لهذه الخدمة</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

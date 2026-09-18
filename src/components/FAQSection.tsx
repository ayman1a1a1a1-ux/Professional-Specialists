import React, { useState } from 'react';
import { FAQ_LIST } from '../data/servicesData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة الأكثر شيوعاً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            إجابات واضحة لاستفساراتكم المحاسبية والزكوية
          </h2>
          <p className="text-base text-slate-600">
            جمعنا لكم أهم الأسئلة التي يطرحها أصحاب الأعمال حول متطلبات نظام الشركات وهيئة الزكاة والضريبة.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all text-right shadow-sm"
              >
                <button
                  id={`faq-toggle-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-10 bg-sky-50 border border-sky-200 rounded-2xl p-6 text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-right mb-4 sm:mb-0">
            <h4 className="font-black text-slate-900 text-base">
              هل لديك استفسار محدد يخص منشأتك؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              مستشارونا جاهزون للإجابة المباشرة ومساعدتك في أي مسألة محاسبية أو ضريبية.
            </p>
          </div>

          <a
            id="faq-ask-whatsapp-btn"
            href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، لدي استفسار محاسبي أود طرحه على مستشاريكم')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>اسأل عبر واتساب: {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

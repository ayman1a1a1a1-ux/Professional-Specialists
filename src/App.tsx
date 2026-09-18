import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProfessionalServicesSection } from './components/ProfessionalServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { WhyUsSection } from './components/WhyUsSection';
import { ZatcaTaxSection } from './components/ZatcaTaxSection';
import { ClientSuccessStories } from './components/ClientSuccessStories';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedData, setPreselectedData] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenConsultationModal = (serviceId?: string, data?: any) => {
    setPreselectedServiceId(serviceId);
    setPreselectedData(data);
    setIsConsultationModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white pb-14 md:pb-0" dir="rtl">
      {/* PWA Mobile App Install Prompt */}
      <PwaInstallPrompt />

      {/* Top Navbar */}
      <Navbar
        onOpenConsultationModal={handleOpenConsultationModal}
        onScrollToSection={handleScrollToSection}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultationModal={handleOpenConsultationModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={(serviceId) => handleOpenConsultationModal(serviceId)}
        />

        {/* Detailed professional services overview */}
        <ProfessionalServicesSection />

        {/* Cost & Fee Estimator */}
        <CostEstimator
          onOpenConsultationModal={handleOpenConsultationModal}
        />

        {/* Why Us / Comparison */}
        <WhyUsSection />

        {/* ZATCA, VAT & Tax Compliance Guide */}
        <ZatcaTaxSection
          onOpenConsultationModal={handleOpenConsultationModal}
        />

        {/* Sectors Served & Testimonials */}
        <ClientSuccessStories />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact Form & Office Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenConsultationModal={handleOpenConsultationModal}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceId) => handleOpenConsultationModal(serviceId)}
      />

      {/* Quick Consultation & Proposal Request Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => {
          setIsConsultationModalOpen(false);
          setPreselectedServiceId(undefined);
          setPreselectedData(null);
        }}
        preselectedServiceId={preselectedServiceId}
        preselectedData={preselectedData}
      />

      {/* Floating WhatsApp and Call Action Buttons */}
      <FloatingActions />

      {/* Mobile App Bottom Navigation Bar (Visible only on mobile devices) */}
      <MobileBottomNav
        onScrollToSection={handleScrollToSection}
        onOpenConsultationModal={handleOpenConsultationModal}
        activeSection={activeSection}
      />
    </div>
  );
}

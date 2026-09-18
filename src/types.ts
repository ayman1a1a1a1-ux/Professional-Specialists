export interface ServiceItem {
  id: string;
  category: 'audit' | 'tax' | 'accounting' | 'advisory' | 'corporate';
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  standards: string[];
  targetClients: string[];
  tag?: string;
}

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  serviceId: string;
  revenueRange: string;
  notes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  sector: string;
  quote: string;
  rating: number;
  city: string;
}

export interface Sector {
  name: string;
  description: string;
  icon: string;
  count: string;
}

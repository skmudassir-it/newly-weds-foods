export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

export type ProductCategory = "coatings" | "seasonings" | "sauces" | "functional" | "croutons" | "packaging";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export interface TrendItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

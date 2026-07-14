export type Locale = 'vi' | 'en' | 'zh';

export interface LocalizedString {
  vi: string;
  en: string;
  zh: string;
}

export interface LocalizedStringArray {
  vi: string[];
  en: string[];
  zh: string[];
}

export interface ProductSpecs {
  power_KW?: number;
  volumeFlow_m3_min?: number;
  exhaustPressure_MPA?: number;
  voltage?: string;
  speed_RPM?: number;
  netWeight_KG?: number;
  dimensions_MM?: string;
  tankVolume_m3?: number;
  refrigerant?: string;
  weight_KG?: number;
  processingVolume?: number;
  pipeDiameter?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  modelName: LocalizedString;
  subCategory: LocalizedString;
  features: LocalizedStringArray;
  images?: string[];
  specs: ProductSpecs;
}

export interface Category {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  category: LocalizedString;
  categorySlug: string;
  author: string;
  date: string;
  views: number;
  readTime: number;
}

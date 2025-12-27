
export enum AppView {
  DASHBOARD = 'dashboard',
  MARKETPLACE = 'marketplace',
  FACELESS_STUDIO = 'faceless_studio',
  SUPPLIERS = 'suppliers',
  ORDERS = 'orders',
  SETTINGS = 'settings'
}

export interface Supplier {
  id: string;
  name: string;
  category: 'Global' | 'USA' | 'EU' | 'POD' | 'Digital' | 'Niche';
  region: string;
  speed: string;
  description: string;
  products: string[];
  logo: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  supplierId: string;
  image: string;
  description: string;
  trending: boolean;
}

export interface AIScript {
  topic: string;
  hook: string;
  content: string;
  cta: string;
  tags: string[];
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
}

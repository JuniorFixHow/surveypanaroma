import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface INav {
    name: string;
    href: string;
}

export interface IContentItems {
    name: string;
    description: string;
    icon: ReactNode
}


export interface IServices {
    name: string;
    description: string;
    icon: ReactNode;
    purpose: string[];
    image: string | StaticImport;
}

export interface ICourses {
    module: string;
    level: string;
    title: string;
    description: string;
    features: string[];
    duration: string;
    bg: string;
    icon: ReactNode;
    price: string;
}

export type BlogCategory =
  | 'Surveying'
  | 'Site Planning'
  | 'Land Buying'
  | 'Updates'
  | 'Tools & Tech'


export interface IBlogs {
    id: string;
    title: string;
    image: string | StaticImport;
    category: BlogCategory;
    content: string;
    excerpt: string;
    date: string;
}

export interface IBlogCat {
    name: BlogCategory;
    bg: string;
    icon: ReactNode;
}

export interface ContactFormPayload {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  serviceType: string
  message: string
}
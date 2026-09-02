/** Shared content types. All image paths are public-root absolute (`/assets/...`). */

export type NavLink = { label: string; href: string; children?: NavLink[] };

export type SocialKey =
  | 'facebook' | 'twitter' | 'linkedin' | 'instagram'
  | 'pinterest' | 'youtube' | 'dribbble' | 'behance';

export type Social = { key: SocialKey; label: string; href: string };

export type Client = { name: string; logo: string; /** logo needs lightening on dark */ light?: boolean };

export type Service = { title: string; blurb: string; icon: 'designs' | 'prototype' | 'marketing' };
export type ServiceTile = { word: string; image: string };

export type Stat = { value: number; suffix?: string; label: string };

export type Project = { number: string; title: string; image: string; tags: string[]; href: string };

export type Value = { title: string; note: string; weight: number };

export type Award = { year: string; title: string; detail: string };

export type Member = { name: string; role: string; photo: string; photoHover: string; socials: Social[] };

export type Milestone = {
  year: string; icon: 'rocket' | 'building' | 'award' | 'bullhorn' | 'columns' | 'certificate';
  kicker: string; title: string; body: string;
};

export type ProcessStep = { number: string; title: string; body: string; image: string };

export type Testimonial = { heading: string; quote: string; author: string; org: string; avatar: string };

export type Post = { title: string; image: string; tags: string[]; date: string; href: string };

export type Office = {
  city: string; note?: string; address: string[];
  phones: { label: string; tel: string }[];
  emails: string[];
};

export type Fact = { number: string; title: string; body: string };

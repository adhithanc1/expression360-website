import type {
  Client, Service, ServiceTile, Stat, Project, Value, Award,
  Member, Milestone, ProcessStep, Testimonial, Post, Fact,
} from './types';
import { socials } from './site';

/* ---------------------------------------------- clients */
export const clients: Client[] = [
  { name: 'Ministry of Food Processing Industries', logo: '/assets/logos/client-1.png' },
  { name: 'Indian Railways', logo: '/assets/logos/client-2.png', light: true },
  { name: 'ONGC', logo: '/assets/logos/client-3.png' },
  { name: 'State Bank of India', logo: '/assets/logos/client-4.png' },
  { name: 'Ministry of Tourism', logo: '/assets/logos/client-5.png', light: true },
  { name: 'National Informatics Centre', logo: '/assets/logos/client-6.png' },
  { name: 'DRDO', logo: '/assets/logos/client-7.png', light: true },
  { name: 'India Trade Promotion Organisation', logo: '/assets/logos/client-8.png', light: true },
];

/* ---------------------------------------------- about */
export const about = {
  eyebrow: 'About Us',
  headingParts: ['Creative Solutions ', 'Deliver', ' Profits to Your ', 'Company'] as const,
  body:
    'Expression 360 is a people-first communications company bringing together advertising, public relations, content, digital communication, events and exhibitions under one roof. As communication continues to evolve, we work alongside institutions, ministries, PSUs and brands to create experiences that inform, engage and connect.',
  image: '/assets/about-us.jpg',
};

export const facts: Fact[] = [
  { number: '01 /', title: 'Integrated Expertise', body: 'Bringing together advertising, public relations, content, digital communication, events and exhibitions under one roof for seamless execution.' },
  { number: '02 /', title: 'Trusted Partner', body: 'Extensive experience working with ministries, government departments, institutions and PSUs.' },
  { number: '03 /', title: 'Pan-India Presence', body: 'A growing network of offices, teams and partners delivering communication solutions across India with consistency and scale.' },
];

/* ---------------------------------------------- services */
export const services: Service[] = [
  { title: 'Marketing Communication', blurb: 'Integrated campaigns designed to inform, engage and influence audiences across channels.', icon: 'designs' },
  { title: 'Events & Exhibitions', blurb: 'Experiences that bring brands, institutions and stakeholders together through impactful engagement.', icon: 'prototype' },
  { title: 'Media Services', blurb: 'Strategic media planning and visibility solutions across traditional and outdoor platforms.', icon: 'marketing' },
];

export const serviceTiles: ServiceTile[] = [
  { word: 'Creative', image: '/assets/img-svc-creative.jpg' },
  { word: 'Product', image: '/assets/img-svc-product.jpg' },
  { word: 'Brands', image: '/assets/img-svc-brands.jpg' },
];

/* ---------------------------------------------- stats */
export const stats: Stat[] = [
  { value: 15, label: 'Years of Experience' },
  { value: 235, suffix: '+', label: 'Clients' },
  { value: 150, suffix: '+', label: 'Employees' },
  { value: 7, label: 'Offices Across India' },
];

/* ---------------------------------------------- projects */
export const projects: Project[] = [
  { number: '01', title: 'Indian Lighthouse Festival 2024', image: '/assets/proj-lighthouse.jpg', tags: ['Service', 'Experiential Spaces'], href: '#projects' },
  { number: '02', title: 'ONGC – A National Campaign for India’s Energy Leader', image: '/assets/proj-ongc.jpg', tags: ['Service', 'Creative & Retainer'], href: '#projects' },
  { number: '03', title: 'Ministry of Petroleum & Natural Gas – Gastech, Italy', image: '/assets/proj-gastech.webp', tags: ['Service', 'Events & Conclaves'], href: '#projects' },
  { number: '04', title: 'Uttar Pradesh Tourism at FITUR, Spain', image: '/assets/proj-fitur.avif', tags: ['Service', 'International Exhibition'], href: '#projects' },
];

/* ---------------------------------------------- careers */
export const careers = {
  eyebrow: 'Careers',
  heading: 'Become An Expressioneer',
  lead: 'Where ideas find expression, and talent finds opportunity.',
  image: '/assets/about-us.jpg',
  cta: { label: 'Apply Now', href: '#contact' },
};

export const values: Value[] = [
  { title: 'Say It Right', note: 'Clear thinking leads to clear communication.', weight: 90 },
  { title: 'Connect Everything', note: 'The strongest ideas work best when everything works together.', weight: 95 },
  { title: 'Make It Last', note: 'Great communication continues to resonate long after it is delivered.', weight: 86 },
];

/* ---------------------------------------------- awards */
export const awards: Award[] = [
  { year: '2025', title: 'Indian Business Award', detail: 'Most Creative Advertising & Brand Management Company' },
  { year: '2025', title: '10 Most Promising Advertising Agencies', detail: 'Media Infotainment' },
  { year: '2025', title: 'Best Ad Film – “Sabko Pata Hai”', detail: '14th Kolkata Shorts International Film Festival' },
  { year: '2025', title: 'Best Director – Ad Film (“Batting for Nari Shakti”)', detail: '15th Dada Saheb Phalke Film Festival' },
  { year: '2024', title: 'Gold – Brand Disruption Award', detail: 'BPCL MAK Lubricants Campaign (“Mr. Dependable”)' },
  { year: '2024', title: 'Best Ad Film – “Mr. Dependable”', detail: 'Kaleido Awards' },
  { year: '2024', title: 'Best Ad Film – Jury Award (“Mr. Dependable”)', detail: '14th Dada Saheb Phalke Film Festival' },
  { year: '2024', title: 'Bronze – Excellence in Consumer Activation Campaign', detail: 'HP Lubricants “FuturX” Campaign (EEMAX Global Awards)' },
  { year: '2024', title: 'Recognition for Taxpayers’ Hub, Ajmer', detail: 'Income Tax Department' },
  { year: '2023', title: 'Best Advertising Agency', detail: '17th Media Excellence Awards (Media Federation of India)' },
  { year: '2023', title: 'Best Exhibition Stall – Category I (1st Prize)', detail: '26th Energy Technology Meet, Bharat Mandapam' },
  { year: '2019', title: 'Certificate of Excellence – Best Promotional Film', detail: 'PSU CSR (6th Indian International Advertising Festival)' },
  { year: '2019', title: 'Appreciation Letter – ONGC Pavilion', detail: 'Vibrant Gujarat Global Trade Show' },
  { year: '2015', title: 'Certificate of Appreciation', detail: 'Ministry of Defence (Bonalu Tableau, Republic Day Parade)' },
];

/* ---------------------------------------------- team */
const teamSocials = socials.filter((s) => ['facebook', 'behance', 'dribbble'].includes(s.key));

export const team: Member[] = [
  { name: 'Mohit Gupta', role: 'CEO & Managing Director', photo: '/assets/img-team-1a.jpg', photoHover: '/assets/img-team-1b.jpg', socials: teamSocials },
  { name: 'Sandeep Chawla', role: 'Vice President', photo: '/assets/img-team-2a.jpg', photoHover: '/assets/img-team-2b.jpg', socials: teamSocials },
  { name: 'Shrikant Sharma', role: 'Head OOH Media', photo: '/assets/img-team-3a.jpg', photoHover: '/assets/img-team-3b.jpg', socials: teamSocials },
  { name: 'Mamta Gautam', role: 'Chief Financial Officer', photo: '/assets/img-team-4a.jpg', photoHover: '/assets/img-team-4b.jpg', socials: teamSocials },
];

/* ---------------------------------------------- journey */
export const journey: Milestone[] = [
  { year: '2010', icon: 'rocket', kicker: 'Incorporated', title: 'Expression 360 Services India Ltd.', body: 'Founded under the leadership of Mr. Mohit Gupta, with our head office in Kolkata and a strong presence across East India, with early offices in Patna, Guwahati and Bhubaneswar.' },
  { year: '2013', icon: 'building', kicker: 'Expansion', title: 'Pan-India Foothold', body: 'Opened our Delhi office, followed by expansion into Mumbai and Chennai, cementing a true national presence.' },
  { year: '2015', icon: 'award', kicker: 'Broadening Our Services', title: 'Capability Diversification', body: 'Scaled our services into events, national & international exhibitions, content and social media.' },
  { year: '2019', icon: 'bullhorn', kicker: 'Rebranding & Accreditation', title: 'Expression 360 Services India Pvt Ltd.', body: 'Rebranded to reflect our integrated marketing capabilities.' },
  { year: '2024', icon: 'columns', kicker: 'Corporate Milestone', title: 'Becomes a Public Limited Company', body: 'Transitioned to Expression 360 Services India Limited, signifying maturity, governance strength and readiness for broader market participation.' },
  { year: '2026', icon: 'certificate', kicker: 'Current', title: 'SEBI Registered', body: 'Achieved SEBI registration, marking a new chapter of credibility, governance and institutional growth.' },
];

export const creed = ['Built on Purpose.', 'Driven by People.', 'Focused on Impact.', 'Ready for the Future.'];

/* ---------------------------------------------- process */
export const process: ProcessStep[] = [
  { number: '01 /', title: 'Understand & Strategize', body: 'We begin by understanding objectives, audiences and communication challenges to build a strategy aligned with business and engagement goals.', image: '/assets/img-work-1.jpg' },
  { number: '02 /', title: 'Create & Plan', body: 'Our teams develop integrated communication plans, content, campaigns and experiences tailored for the right audience and channels.', image: '/assets/img-work-2.jpg' },
  { number: '03 /', title: 'Execute & Optimize', body: 'From flawless execution across touchpoints to performance tracking, we continuously measure impact and refine outcomes.', image: '/assets/img-work-3.jpg' },
];

/* ---------------------------------------------- testimonials
   PLACEHOLDER COPY — swap for real client quotes before launch. */
export const testimonials: Testimonial[] = [
  { heading: 'Best digital agency service', quote: 'Mauris id commodo sem, vel vehicula tortor. Ut sagittis nulla sit amet rutrum pellentesque. Pellentesque sed elit a est imperdiet scelerisque.', author: 'Tommy Morres', org: 'Ink Project', avatar: '/assets/img-avatar-1.jpg' },
  { heading: 'Amazing graphic design service', quote: 'Mauris id commodo sem, vel vehicula tortor. Ut sagittis nulla sit amet rutrum pellentesque. Pellentesque sed elit a est imperdiet scelerisque.', author: 'Lissa Goff', org: 'Art Design', avatar: '/assets/img-avatar-2.jpg' },
  { heading: 'Best digital agency service', quote: 'Mauris id commodo sem, vel vehicula tortor. Ut sagittis nulla sit amet rutrum pellentesque. Pellentesque sed elit a est imperdiet scelerisque.', author: 'Anna Montana', org: 'Art Agency', avatar: '/assets/img-avatar-3.jpg' },
  { heading: 'Amazing graphic design service', quote: 'Mauris id commodo sem, vel vehicula tortor. Ut sagittis nulla sit amet rutrum pellentesque. Pellentesque sed elit a est imperdiet scelerisque.', author: 'Wanda Forest', org: '8D Project', avatar: '/assets/img-avatar-4.jpg' },
];

/* ---------------------------------------------- blog
   PLACEHOLDER COPY — swap for real articles before launch. */
export const posts: Post[] = [
  { title: 'Designer Can Push Creations', image: '/assets/img-blog-1.jpg', tags: ['Design', 'Tutorial'], date: 'December 10, 2022', href: '#blog' },
  { title: 'Ways to Use Design Thinking', image: '/assets/img-blog-2.jpg', tags: ['Article', 'Design'], date: 'December 10, 2022', href: '#blog' },
  { title: 'Secret of Great App Designs', image: '/assets/img-blog-3.jpg', tags: ['Design', 'UI/UX'], date: 'December 10, 2022', href: '#blog' },
];

import type { NavLink, Social, Office } from './types';

export const site = {
  name: 'Expression 360',
  legalName: 'Expression 360 Services India Ltd.',
  tagline: 'Where ideas find expression.',
  subline: 'From insight to impact, under one roof.',
  description:
    'Expression 360 is an integrated communications company bringing advertising, public relations, content, digital communication, events and exhibitions under one roof for ministries, PSUs, institutions and brands across India.',
  url: 'https://expression360.in',
  logo: '/assets/logo-expression360.png',
  email: 'connect@expression360.in',
  showreel: '/assets/showreel.mp4',
  showreelPoster: '/assets/showreel-poster.jpg',
  copyright: `© Expression 360 Services India Ltd. ${new Date().getFullYear()}. All Rights Reserved.`,
} as const;

export const nav: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Services', href: '#services' },
      { label: 'Our Process', href: '#process' },
    ],
  },
  {
    label: 'Pages',
    href: '#projects',
    children: [
      { label: 'Projects', href: '#projects' },
      { label: 'Team', href: '#team' },
      { label: 'Journey', href: '#journey' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  /* Contact is a top-level item, so it is deliberately absent from the
     Pages children — listing it twice gave the same anchor two homes */
  { label: 'Contact', href: '#contact' },
];

export const drawerNav: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
  { label: 'Team', href: '#team' },
  { label: 'Journey', href: '#journey' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const footerNav: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

/** Replace the `#` placeholders with the real profile URLs when they exist. */
export const socials: Social[] = [
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'linkedin', label: 'LinkedIn', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
  { key: 'pinterest', label: 'Pinterest', href: '#' },
  { key: 'youtube', label: 'YouTube', href: '#' },
  { key: 'dribbble', label: 'Dribbble', href: '#' },
  { key: 'behance', label: 'Behance', href: '#' },
];

export const offices: Office[] = [
  {
    city: 'Delhi', note: '(Corporate Office)',
    address: ['Ground Floor, Sarojini House', '6 Bhagwan Das Road, Mandi House', 'New Delhi – 110001'],
    phones: [{ label: '011-40055400', tel: '+911140055400' }, { label: '23384429', tel: '+911123384429' }],
    emails: ['connect@expression360.in'],
  },
  {
    city: 'Kolkata', note: '(Registered Office)',
    address: ['203/1, A.J.C. Bose Road', 'Kolkata – 700017'],
    phones: [{ label: '033-40017501', tel: '+913340017501' }, { label: '40017502', tel: '+913340017502' }],
    emails: ['expression.kol@gmail.com', 'expression360.kol@gmail.com'],
  },
  {
    city: 'Mumbai Office',
    address: ['G-4, Hatkesh Udyog Nagar', 'Mira Bhayandar Road, Thane – 401107'],
    phones: [{ label: '022-28123002', tel: '+912228123002' }, { label: '28123005', tel: '+912228123005' }],
    emails: ['expressionad.mumbai@gmail.com'],
  },
  {
    city: 'Guwahati Office',
    address: ['4th Floor, Mayur Garden', 'ABC Bus Stop, G.S. Road', 'Guwahati – 781005'],
    phones: [{ label: '+91 9773510776', tel: '+919773510776' }],
    emails: ['connect@expression360.in'],
  },
  {
    city: 'Patna Office',
    address: ['202, 2nd Floor, Sheohar Sadan', 'P.S. Kotwali, Fraser Road', 'Patna – 800001'],
    phones: [
      { label: '+91 9874752666', tel: '+919874752666' },
      { label: '011-40055400', tel: '+911140055400' },
      { label: '23384429', tel: '+911123384429' },
    ],
    emails: ['expressionpatna@gmail.com'],
  },
  {
    city: 'Bhubaneswar Office',
    address: ['2nd Floor, Plot No. N-3/182', 'IRC Village, Nayapally', 'Bhubaneswar, Odisha – 751015'],
    phones: [{ label: '+91 9874752666', tel: '+919874752666' }],
    emails: ['expressionbbs@gmail.com'],
  },
  {
    city: 'Chennai Office',
    address: ['G1, Vinayaga, Plot No. 3', 'Gopal Avenue, Periyar Street', 'Valasaravakkam, Chennai – 600087'],
    phones: [{ label: '+91 9791048251', tel: '+919791048251' }],
    emails: ['expression360.chennai@gmail.com'],
  },
];

export const footerCols = {
  office: { title: 'Our office', lines: ['Ground Floor, Sarojini House,', '6 Bhagwan Das Road, Mandi House,', 'New Delhi 110001'] },
  branch: { title: 'The branch', lines: ['203/1, A.J.C Bose Road, Circus Avenue,', 'Kolkata 700017'] },
  contact: { title: 'Contact', email: 'expression.kol@gmail.com', phoneLabel: '+91 33 40017502', phoneTel: '+913340017502' },
};

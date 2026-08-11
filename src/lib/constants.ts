import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  BookText,
  Newspaper,
  GraduationCap,
  Building2,
  Landmark,
  UserPen,
  Printer,
  FileText,
  PenTool,
  TabletSmartphone,
  FileCheck,
  FileCode,
  Accessibility,
  Palette,
  ClipboardCheck,
  ListOrdered,
  Image,
  Sigma,
  BarChart3,
  Users,
  Clock,
  BadgeDollarSign,
  Globe,
  RefreshCcw,
  Headphones,
  ShieldCheck,
  Award,
  HeartPulse,
  Cog,
  School,
  Microscope,
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: [string, string];
  cta: string;
}

export const services: Service[] = [
  { title: 'Book Typesetting', description: 'Clean, readable interior layouts for print and digital books across all genres.', icon: BookOpen, benefits: ['Print-ready interiors for every genre', 'Consistent styling across all editions'], cta: 'Get Started' },
  { title: 'Journal Typesetting', description: 'Scholarly article formatting that meets publisher and indexing standards.', icon: BookText, benefits: ['Formatted to publisher and indexing standards', 'Fast turnaround for volume article packages'], cta: 'Talk to an Expert' },
  { title: 'Magazine Layout', description: 'Editorial spreads with strong visual hierarchy and engaging typography.', icon: Newspaper, benefits: ['Strong visual hierarchy for editorial pages', 'Print and digital exports in one workflow'], cta: 'Discuss Your Project' },
  { title: 'School Book Composition', description: 'Structured, curriculum-aligned layouts for textbooks and workbooks.', icon: GraduationCap, benefits: ['Curriculum-aligned structured layouts', 'Student-friendly typography and diagrams'], cta: 'Plan Your Book' },
  { title: 'Academic Publishing', description: 'End-to-end production for monographs, theses, and research collections.', icon: FileText, benefits: ['End-to-end production for research collections', 'Citation and reference management support'], cta: 'Request a Consultation' },
  { title: 'Redraw, Edits & Updates', description: 'Professional redraw, editing, and update services for books, journals, and publishing projects.', icon: PenTool, benefits: ['Professional Figure Redrawing & Image Editing', 'Accurate Updates for Books, Journals & Publications'], cta: 'Request Update' },
  { title: 'Kindle KDP Formatting', description: 'Optimized interior files that pass Amazon KDP requirements every time.', icon: TabletSmartphone, benefits: ['Files pass Amazon KDP checks every time', 'Optimized for Kindle devices and apps'], cta: 'Format for KDP' },
  { title: 'Print-ready PDF Creation', description: 'Press-quality PDFs with correct bleeds, margins, and color profiles.', icon: FileCheck, benefits: ['Press-quality PDFs with correct bleeds', 'Color-managed output for any printer'], cta: 'Create PDF' },
  { title: 'XML Workflow', description: 'Structured XML-first production for multi-channel publishing pipelines.', icon: FileCode, benefits: ['Structured XML-first multi-channel publishing', 'Scalable production for large catalogs'], cta: 'Build XML Workflow' },
  { title: 'PDF Accessibility', description: 'Inclusive documents with tagged structures and accessible navigation.', icon: Accessibility, benefits: ['Tagged structures and keyboard navigation', 'Compliant with WCAG and PDF-UA standards'], cta: 'Make Accessible' },
  { title: 'Cover Layout Support', description: 'Eye-catching covers that communicate genre and professionalism.', icon: Palette, benefits: ['Genre-appropriate professional cover design', 'Print-ready and digital-friendly specs'], cta: 'Design My Cover' },
  { title: 'Quality Assurance', description: 'Multi-round proofing to eliminate errors before final delivery.', icon: ClipboardCheck, benefits: ['Multi-round proofing by publishing experts', 'Final checks before market-ready delivery'], cta: 'Proof My Project' },
  { title: 'Index & TOC Formatting', description: 'Accurate tables of contents, indexes, and cross-references.', icon: ListOrdered, benefits: ['Accurate tables of contents and indexes', 'Reliable cross-references and page links'], cta: 'Organize Content' },
  { title: 'Image Placement', description: 'Precise figure sizing, captions, and resolution optimization.', icon: Image, benefits: ['Precise figure sizing and captions', 'High-resolution output for crisp print reproduction'], cta: 'Optimize Images' },
  { title: 'Mathematical Equations', description: 'MathML typesetting for STEM publications.', icon: Sigma, benefits: ['MathML support for STEM content', 'Clear rendering in print and digital formats'], cta: 'Typeset Equations' },
  { title: 'Tables & Charts Formatting', description: 'Clear data visuals that remain crisp in print and digital formats.', icon: BarChart3, benefits: ['Clean data visuals that stay legible', 'Consistent styling across print and EPUB'], cta: 'Format Data' },
];

export interface ClientType {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const clientTypes: ClientType[] = [
  { title: 'Publishers', description: 'Traditional and independent publishers looking for reliable production partners.', icon: BookOpen },
  { title: 'Educational Institutions', description: 'Schools and academies producing textbooks, workbooks, and course materials.', icon: GraduationCap },
  { title: 'Universities', description: 'University presses and research units publishing academic content.', icon: Building2 },
  { title: 'Research Organizations', description: 'Institutes and societies producing journals, reports, and proceedings.', icon: Landmark },
  { title: 'Corporate Companies', description: 'Businesses creating annual reports, whitepapers, and branded documents.', icon: Building2 },
  { title: 'Government Organizations', description: 'Public-sector bodies requiring accessible, standards-compliant publications.', icon: Landmark },
  { title: 'Self-Publishing Authors', description: 'Independent authors who need professional interiors and covers.', icon: UserPen },
  { title: 'Printing Companies', description: 'Printers seeking prepress-ready files and layout support.', icon: Printer },
];

export const workflowSteps = [
  { step: 1, title: 'Receive Manuscript', description: 'Upload your manuscript and project requirements securely.' },
  { step: 2, title: 'Content Review', description: 'Our team assesses structure, assets, and publishing goals.' },
  { step: 3, title: 'Typesetting & Layout Design', description: 'We craft the interior design and apply consistent styling.' },
  { step: 4, title: 'Client Review', description: 'Review proofs and request revisions through your dedicated manager.' },
  { step: 5, title: 'Quality Check', description: 'Final proofing, accessibility checks, and format validation.' },
  { step: 6, title: 'Final Delivery', description: 'Receive print-ready and digital files on time.' },
];

export const benefits = [
  { title: 'Experienced Publishing Professionals', icon: Users },
  { title: 'Fast Turnaround', icon: Clock },
  { title: 'Affordable Pricing', icon: BadgeDollarSign },
  { title: 'Global Publishing Standards', icon: Globe },
  { title: 'Unlimited Revisions', icon: RefreshCcw },
  { title: 'Dedicated Project Manager', icon: Headphones },
  { title: 'Secure File Handling', icon: ShieldCheck },
  { title: '100% Quality Assurance', icon: Award },
];

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: [string, string];
  cta: string;
}

export const industries: Industry[] = [
  { title: 'Academic Publishing', description: 'Scholarly books and journals produced with precise citations, consistent styling, and peer-review-ready layouts.', icon: GraduationCap, benefits: ['Precise citation and reference styling', 'Peer-review-ready page layouts'], cta: 'Explore Academic Solutions' },
  { title: 'Medical Publishing', description: 'Clinical references, case reports, and regulatory documents formatted for accuracy and fast production cycles.', icon: HeartPulse, benefits: ['Accuracy-focused medical terminology checks', 'Regulatory-friendly document structure'], cta: 'Talk to a Medical Editor' },
  { title: 'Engineering', description: 'Technical manuals, standards, and complex figure layouts built for clarity across print and digital channels.', icon: Cog, benefits: ['Complex figure and table formatting', 'Clear technical manual layouts'], cta: 'Talk to an Engineering Editor' },
  { title: 'Education', description: 'K-12 and higher-ed materials designed for readability, pedagogy, and curriculum alignment.', icon: School, benefits: ['Curriculum-aligned content structure', 'Student-friendly typography and visuals'], cta: 'Build Educational Materials' },
  { title: 'Corporate Reports', description: 'Annual reports, ESG documents, and investor communications polished for boardrooms and stakeholders.', icon: Building2, benefits: ['Boardroom-ready polished formatting', 'Consistent branding across reports'], cta: 'Request a Formal Quote' },
  { title: 'Financial Publications', description: 'Prospectuses, research notes, and market reports delivered with clean data presentation and fast turnaround.', icon: BarChart3, benefits: ['Clean data tables and charts', 'Fast turnaround for market-sensitive reports'], cta: 'Publish Financial Reports' },
  { title: 'Trade Books', description: 'Fiction and nonfiction titles designed to stand out on retail shelves and eBook stores.', icon: BookOpen, benefits: ['Retail-ready interior and cover specs', 'Optimized for print and eBook distribution'], cta: 'Publish Your Trade Book' },
  { title: 'Scientific Journals', description: 'Peer-reviewed articles formatted to meet the submission requirements of leading platforms and publishers.', icon: Microscope, benefits: ['Submission-ready article formatting', 'Indexed metadata and reference linking'], cta: 'Submit a Journal Draft' },
  { title: 'Government Publications', description: 'Accessible, standards-compliant public documents that serve citizens and meet official publishing requirements.', icon: Landmark, benefits: ['Accessibility and standards compliance', 'Official publishing-ready outputs'], cta: 'Request Government Support' },
];

export const portfolioCategories = [
  'Books',
  'Academic Journals',
  'Magazines',
  'School Books',
  'Annual Reports',
  'Corporate Documents',
  'Others',
];

export const portfolioGallery = [
  {
    category: 'Books',
    cover: '/images/portfolio/KLing_84ca9827-c17a-4348-953b-572c4b90c56e.jpg',
    samples: [
      { title: 'Title Page', image: '/images/portfolio/KLing_84ca9827-c17a-4348-953b-572c4b90c56e.jpg' },
      { title: 'Chapter Opening', image: '/images/portfolio/KLing_84ca9827-c17a-4348-953b-572c4b90c56e.jpg' },
      { title: 'Body Text Spread', image: '/images/portfolio/KLing_84ca9827-c17a-4348-953b-572c4b90c56e.jpg' },
      { title: 'Table of Contents', image: '/images/portfolio/KLing_84ca9827-c17a-4348-953b-572c4b90c56e.jpg' },
    ],
  },
  {
    category: 'Academic Journals',
    cover: '/images/portfolio/KLing_f398d5a2-d536-4df8-a4e9-57af90727a37.jpg',
    samples: [
      { title: 'Journal Cover', image: '/images/portfolio/KLing_f398d5a2-d536-4df8-a4e9-57af90727a37.jpg' },
      { title: 'Article Layout', image: '/images/portfolio/KLing_f398d5a2-d536-4df8-a4e9-57af90727a37.jpg' },
      { title: 'References Page', image: '/images/portfolio/KLing_f398d5a2-d536-4df8-a4e9-57af90727a37.jpg' },
      { title: 'Figure Spread', image: '/images/portfolio/KLing_f398d5a2-d536-4df8-a4e9-57af90727a37.jpg' },
    ],
  },
  {
    category: 'Magazines',
    cover: '/images/portfolio/KLing_98b5fd4d-d519-4735-876a-2764f3026090.jpg',
    samples: [
      { title: 'Editorial Spread', image: '/images/portfolio/KLing_98b5fd4d-d519-4735-876a-2764f3026090.jpg' },
      { title: 'Feature Article', image: '/images/portfolio/KLing_98b5fd4d-d519-4735-876a-2764f3026090.jpg' },
      { title: 'Photo Essay', image: '/images/portfolio/KLing_98b5fd4d-d519-4735-876a-2764f3026090.jpg' },
      { title: 'Contents Page', image: '/images/portfolio/KLing_98b5fd4d-d519-4735-876a-2764f3026090.jpg' },
    ],
  },
  {
    category: 'School Books',
    cover: '/images/portfolio/KLing_db21da13-a056-47a9-b8d2-2ece3ffa7102.jpg',
    samples: [
      { title: 'Lesson Layout', image: '/images/portfolio/KLing_db21da13-a056-47a9-b8d2-2ece3ffa7102.jpg' },
      { title: 'Exercise Page', image: '/images/portfolio/KLing_db21da13-a056-47a9-b8d2-2ece3ffa7102.jpg' },
      { title: 'Illustration Spread', image: '/images/portfolio/KLing_db21da13-a056-47a9-b8d2-2ece3ffa7102.jpg' },
    ],
  },
  {
    category: 'Annual Reports',
    cover: '/images/portfolio/KLing_1760a992-443c-48a4-ad7d-bbb3e46ddba4.jpg',
    samples: [
      { title: 'Cover Design', image: '/images/portfolio/KLing_1760a992-443c-48a4-ad7d-bbb3e46ddba4.jpg' },
      { title: 'Financial Spread', image: '/images/portfolio/KLing_1760a992-443c-48a4-ad7d-bbb3e46ddba4.jpg' },
      { title: 'Infographic Page', image: '/images/portfolio/KLing_1760a992-443c-48a4-ad7d-bbb3e46ddba4.jpg' },
      { title: 'Message to Readers', image: '/images/portfolio/KLing_1760a992-443c-48a4-ad7d-bbb3e46ddba4.jpg' },
    ],
  },
  {
    category: 'Corporate Documents',
    cover: '/images/portfolio/KLing_1c627b05-a4e5-4268-ab4e-bb098a1f2b92.jpg',
    samples: [
      { title: 'Brand Guidelines', image: '/images/portfolio/KLing_1c627b05-a4e5-4268-ab4e-bb098a1f2b92.jpg' },
      { title: 'Policy Layout', image: '/images/portfolio/KLing_1c627b05-a4e5-4268-ab4e-bb098a1f2b92.jpg' },
      { title: 'Proposal Design', image: '/images/portfolio/KLing_1c627b05-a4e5-4268-ab4e-bb098a1f2b92.jpg' },
      { title: 'Data Summary', image: '/images/portfolio/KLing_1c627b05-a4e5-4268-ab4e-bb098a1f2b92.jpg' },
    ],
  },
  {
    category: 'Others',
    cover: '/images/portfolio/KLing_06f6562a-0ade-4fd7-b43f-d4894988be03.jpg',
    samples: [
      { title: 'E-Book Layout', image: '/images/portfolio/KLing_06f6562a-0ade-4fd7-b43f-d4894988be03.jpg' },
      { title: 'Newsletter Design', image: '/images/portfolio/KLing_43f80144-f0c1-4078-96ae-d22fbfa061b6.jpg' },
      { title: 'Product Catalog', image: '/images/portfolio/KLing_dc67827b-ae53-4747-b9b9-4383dbf71868.jpg' },
      { title: 'Digital Publication', image: '/images/portfolio/KLing_06f6562a-0ade-4fd7-b43f-d4894988be03.jpg' },
    ],
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    label: 'Basic Package',
    price: 'Start From $149',
    description: 'Ideal for short manuscripts and simple interiors.',
    features: ['Up to 100 pages', 'Professional basic typesetting', 'Simple layout', 'Print-Ready PDF', 'Figures, tables placements', 'Quality check'],
    delivery: '5 business days',
    revisions: '1 revision',
    popular: false,
  },
  {
    name: 'Standard',
    label: 'Standard Package',
    price: 'Start From $349',
    description: 'Perfect for full-length books and academic titles.',
    features: ['Up to 300 pages', 'Advanced typography', 'Professional interior layout', 'Figures, tables, and math equations', 'Quality check'],
    delivery: '10 business days',
    revisions: '2 revisions',
    popular: true,
  },
  {
    name: 'Custom',
    label: 'Custom Package',
    price: 'Custom',
    description: 'Tailored solutions for publishers and institutions.',
    features: ['Unlimited pages', 'Fully customized typesetting', 'Complex layouts', 'Quality check'],
    delivery: 'Flexible',
    revisions: 'Unlimited revisions',
    popular: false,
  },
];

export const faqs = [
  { question: 'What file formats do you accept?', answer: 'We accept Word, PDF, InDesign, and most common image formats. For complex workflows we also work with XML.' },
  { question: 'How long does a typical project take?', answer: 'Delivery depends on project size and complexity. Basic books average 5–10 business days; enterprise projects follow an agreed timeline.' },
  { question: 'What formats will I receive?', answer: 'Standard output includes print-ready PDF and reflowable EPUB. We can also deliver Kindle KDP files, XML, and accessible formats on request.' },
  { question: 'Do you support InDesign workflows?', answer: 'Yes. Our team works natively in Adobe InDesign and can deliver packaged .indd files along with exported outputs.' },
  { question: 'Will my EPUB work on all eReaders?', answer: 'We validate EPUBs against current standards and test on major reading systems including Apple Books, Kindle, Kobo, and Google Play.' },
  { question: 'Do you handle copyright or permissions?', answer: 'Clients are responsible for content rights. We can advise on best practices for image permissions and source attribution.' },
  { question: 'How does pricing work?', answer: 'Pricing is based on page count, complexity, required formats, and turnaround time. Request a free quote for an exact estimate.' },
  { question: 'Can I request changes after delivery?', answer: 'Yes. Standard and Enterprise plans include revision rounds, and we are happy to accommodate minor updates beyond that for a reasonable fee.' },
];


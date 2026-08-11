# Requirements Document

## 1. Application Overview

**Application Name:** StonePapper Website

**Description:** StonePapper is a professional, modern, responsive website for an ePublishing and book typesetting company. The website aims to build trust, showcase expertise, generate leads, and enable clients (publishers, businesses, universities, authors, self-publishing clients) to request quotes and initiate projects directly.

## 2. Users and Usage Scenarios

**Target Users:**
- Publishers
- Educational institutions and universities
- Research organizations
- Corporate companies
- Government organizations
- Self-publishing authors
- Printing companies

**Key Usage Scenarios:**
- Browse services and understand company capabilities
- View portfolio and past work examples
- Request quotes for publishing projects
- Contact the company for inquiries
- Learn about pricing and workflow

## 3. Page Structure and Functional Description

### 3.1 Page Structure

```
StonePapper Website
├── Home (Landing Page)
├── Services
├── Industries
├── Portfolio
├── Pricing
├── About Us
├── Careers
└── Contact
```

### 3.2 Navigation

**Main Navigation Bar:**
- Logo: StonePapper
- Menu items: Home, Services, Industries, Portfolio, Pricing, About Us, Careers, Contact
- Primary CTA button: Get a Quote
- Sticky navigation on scroll

### 3.3 Home Page

#### 3.3.1 Hero Section
- Headline: Professional ePublishing & Book Typesetting Services
- Subheadline: Helping publishers, authors, universities, and businesses transform manuscripts into beautifully designed print and digital publications with accuracy, speed, and global publishing standards.
- Two CTA buttons: Get a Free Quote, View Portfolio
- Hero image: Professional publishing workspace with books, Adobe InDesign, typography, editorial layouts, laptops, publishing team, and book mockups
- Trust indicators display:
  - ★★★★★ Trusted by Publishers Worldwide
  - 500+ Books Delivered
  - 100+ Happy Clients
  - 99% Customer Satisfaction

#### 3.3.2 Services Section
- Display service cards with icons
- Each card includes: icon, service name, short description, Learn More button
- Services list:
  - Book Typesetting
  - Journal Typesetting
  - Magazine Layout
  - School Book Composition
  - Academic Publishing
  - Redraw, Edits & Updates
    - Icon: Modern figure-editing icon (PenTool)
    - Description: Professional redraw, editing, and update services for books, journals, and publishing projects.
    - Benefits:
      - Professional Figure Redrawing & Image Editing
      - Accurate Updates for Books, Journals & Publications
    - CTA button text: Request Update
  - Kindle KDP Formatting
  - Print-ready PDF Creation
  - XML Workflow
  - Accessibility (WCAG / PDF-UA)
  - Cover Layout Support
  - Quality Assurance
  - Index & TOC Formatting
  - Image Placement
  - Mathematical Equations
  - Tables & Charts Formatting

#### 3.3.3 Who We Work With Section
- Display client type cards
- Categories:
  - Publishers
  - Educational Institutions
  - Universities
  - Research Organizations
  - Corporate Companies
  - Government Organizations
  - Self-Publishing Authors
  - Printing Companies

#### 3.3.4 Workflow Section
- Timeline design showing 6 steps:
  1. Receive Manuscript
  2. Content Review
  3. Typesetting & Layout Design
  4. Client Review
  5. Quality Check
  6. Final Delivery

#### 3.3.5 Why StonePapper Section
- Display icon cards with benefits:
  - Experienced Publishing Professionals
  - Fast Turnaround
  - Affordable Pricing
  - Global Publishing Standards
  - Unlimited Revisions
  - Dedicated Project Manager
  - Secure File Handling
  - 100% Quality Assurance

#### 3.3.6 Portfolio Section
- Section title: Portfolio
- Subtitle: Brief description about professional publishing and typesetting services
- Responsive grid layout displaying elegant service cards
- Each card includes:
  - Modern line icon in primary brand green color (#15F425)
  - Service category name
  - No sample images, thumbnails, mockups, or placeholder boxes
- Service categories displayed:
  - Book Typesetting
  - Journal Typesetting
  - Magazine Layout
  - School Book Composition
  - Academic Publishing
  - Novel Typesetting (with brief description and modern line icon)
  - Kindle KDP Formatting
  - Print-ready PDF Creation
  - XML Workflow
  - PDF Accessibility (with concise description about document structure and tags, and document accessibility line icon)
  - Tables, Charts & Math Equations
  - Index & Table of Contents Formatting
- Design style: Modern, premium, editorial, consistent with existing branding
- Fully responsive for desktop and mobile devices

#### 3.3.7 Customer Testimonials Section
- Display review cards
- Each card includes: customer name, company, star rating, testimonial text

#### 3.3.8 Industries Section
- Display industry cards:
  - Academic Publishing
  - Medical Publishing
  - Engineering
  - Education
  - Corporate Reports
  - Financial Publications
  - Trade Books
  - Scientific Journals
  - Government Publications

#### 3.3.9 Statistics Section
- Display animated counters:
  - 500+ Books Published
  - 100+ Happy Clients
  - 15+ Publishing Experts
  - 99% Client Satisfaction

#### 3.3.10 Pricing Section
- Three pricing cards: Basic, Standard, Enterprise
- Each card includes: plan name, features list, delivery time, revisions, Request Quote button

#### 3.3.11 FAQ Section
- Expandable accordion for questions:
  - Delivery
  - Pricing
  - File Formats
  - EPUB
  - InDesign
  - Copyright
  - Project Timeline

#### 3.3.12 Contact Section
- Request Quote form with fields:
  - Name
  - Company
  - Email
  - Phone
  - Country
  - Service Required (dropdown)
  - Upload Manuscript (file upload)
  - Project Details (textarea)
- Two buttons: Request Quote, Schedule Meeting
- Contact information display: WhatsApp, Email
- Google Maps integration
- Social media links

### 3.4 Services Page
- Detailed service descriptions
- Service categories with icons
- CTA: Request Quote for specific service
- Each service section must have a unique anchor ID for footer link navigation:
  - Book Typesetting section: ID = book-typesetting
  - Journal Typesetting section: ID = journal-typesetting
  - Magazine Layout section: ID = magazine-layout
  - Academic Publishing section: ID = academic-publishing
  - XML Workflow section: ID = xml-workflow
  - Redraw, Edits & Updates section: ID = redraw-edits-updates

### 3.5 Industries Page
- Industry-specific information
- Case studies or examples for each industry
- CTA: Contact for industry-specific solutions

### 3.6 Portfolio Page
- Full portfolio gallery
- Filter by category
- Detailed view for each project

### 3.7 Pricing Page
- Detailed pricing plans
- Feature comparison table
- CTA: Request custom quote

### 3.8 About Us Page
- Company information
- Team introduction
- Company values and mission

### 3.9 Careers Page
- Job openings list
- Application form

### 3.10 Contact Page
- Contact form
- Contact information
- Office location map

### 3.11 Footer (All Pages)

**Three-Column Layout:**

**Column 1: Company Information**
- Stone Paper Services logo
- Short company description
- Email address
- Social media icons: LinkedIn, Instagram only
  - LinkedIn icon: https://www.linkedin.com/in/stone-paper-services-229991426
  - Instagram icon: https://www.instagram.com/stonepaperservices?igsh=MW53d250b2Zyd2Y3aw==

**Column 2: Quick Links**
- Home
- Services
- Portfolio
- Pricing
- About Us
- Contact

**Column 3: Services List**
- Book Typesetting (clickable anchor link to /services#book-typesetting)
- Journal Typesetting (clickable anchor link to /services#journal-typesetting)
- Magazine Layout (clickable anchor link to /services#magazine-layout)
- Academic Publishing (clickable anchor link to /services#academic-publishing)
- XML Workflow (clickable anchor link to /services#xml-workflow)
- Redraw, Edits & Updates (clickable anchor link to /services#redraw-edits-updates)

**Bottom Bar:**
- Copyright text: © 2026 Stone Paper Services. All Rights Reserved
- Privacy Policy link
- Terms & Conditions link

**Design Requirements:**
- Clean grid layout with proper spacing
- Excellent readability on desktop and mobile
- Responsive design for all screen sizes

## 4. Design Specifications

### 4.1 Design Style
- Clean, modern, professional, minimal
- Inspired by Upwork, Notion, Stripe, Adobe

### 4.2 Color Scheme
- Primary brand color: #15F425
- Secondary colors:
  - Black: #111111
  - White: #FFFFFF
  - Light gray: #F7F7F7
- White background with black typography

### 4.3 Typography
- Headlines: Poppins Bold
- Body: Inter Regular

### 4.4 UI Components
- Rounded corners: 12–16px
- Premium icons
- Subtle animations
- Glassmorphism elements
- Book-themed illustrations

### 4.5 Responsive Design
- Desktop optimized
- Tablet compatible
- Mobile responsive

## 5. Business Rules and Logic

### 5.1 Form Submission
- Request Quote form collects user information and project details
- Form data is stored in backend
- User receives confirmation after submission

### 5.2 File Upload
- Manuscript upload in Contact/Request Quote form
- Uploaded files are stored securely

### 5.3 Navigation Behavior
- Sticky navigation appears on scroll
- Smooth scrolling between sections
- Active menu item highlighted based on current page

### 5.4 Interactive Elements
- Hover effects on buttons and cards
- Scroll animations for sections
- Animated counters in statistics section
- Expandable FAQ accordion

### 5.5 CTA Buttons
- Primary CTA (Get a Quote) appears in navigation and multiple sections
- All CTA buttons lead to Contact/Request Quote form

### 5.6 Footer Anchor Link Behavior
- Footer Services column links navigate to Services page with smooth scroll to corresponding section
- Each link targets specific section ID on Services page
- Smooth scrolling animation applied when clicking footer service links

## 6. Exceptions and Edge Cases

| Scenario | Handling |
|----------|----------|
| Form submission without required fields | Show error message, highlight missing fields |
| File upload exceeds size limit | Show error message |
| Invalid email format | Show validation error |
| Network error during form submission | Show retry option |
| Empty portfolio/testimonials | Show placeholder message |
| FAQ section with no questions | Hide section |
| Footer anchor link target section not found | Navigate to Services page top |

## 7. Acceptance Criteria

1. User lands on home page and views hero section with headline, subheadline, CTA buttons, and trust indicators
2. User scrolls through home page sections: Services, Who We Work With, Workflow, Why StonePapper, Portfolio, Testimonials, Industries, Statistics, Pricing, FAQ, Contact
3. User clicks Get a Quote button in navigation or any section
4. User fills Request Quote form with Name, Company, Email, Phone, Country, Service Required, uploads manuscript file, enters project details
5. User clicks Request Quote button and receives confirmation
6. User clicks any service link in footer Services column and smoothly scrolls to corresponding section on Services page

## 8. Out of Scope for This Release

- User account registration and login
- Customer dashboard or project tracking portal
- Online payment processing
- Real-time chat support
- Multi-language support
- Blog or content management system
- Advanced search functionality
- Email newsletter subscription
- Dark mode toggle implementation
- Mega menu implementation
- Automatic quote generation based on project parameters
- Integration with third-party project management tools
- Customer file sharing portal
- Automated workflow status updates
- Advanced analytics dashboard
# Portfolio Specification Document
## Shihao Lai — Industrial Toy Designer
### Web Portfolio for Hasbro & Major Toy Companies

---

## Table of Contents
1. [Site Structure Overview](#1-site-structure-overview)
2. [Navigation Structure](#2-navigation-structure)
3. [Design System](#3-design-system)
4. [Section-by-Section Content Mapping](#4-section-by-section-content-mapping)
5. [Image Placement Guide](#5-image-placement-guide)
6. [Copy/Text for Each Section](#6-copytext-for-each-section)
7. [Toy-Industry-Specific Presentation Notes](#7-toy-industry-specific-presentation-notes)
8. [Animation & Interaction Notes](#8-animation--interaction-notes)
9. [Responsive Design Notes](#9-responsive-design-notes)
10. [File Structure Reference](#10-file-structure-reference)

---

## 1. Site Structure Overview

The portfolio is a **single-page scrolling web application** with six main sections, designed to present Shihao Lai as a highly skilled industrial toy designer with deep knowledge of the Transformers franchise and comprehensive design-to-production capabilities.

### Section Order (top to bottom):
1. **Hero / Landing** — Full-viewport dramatic introduction
2. **About / Bio** — Professional background and philosophy
3. **Portfolio / Past Works** — Project gallery organized by project category
4. **Storyboard** — Narrative storytelling showcase
5. **Resume** — Credentials, education, experience, skills
6. **Contact** — Professional contact information and call-to-action

### Page Architecture:
- Single `index.html` file
- External `css/style.css` stylesheet
- External `js/main.js` for interactivity
- All images served from `images/` directory (relative paths)

---

## 2. Navigation Structure

### Fixed/Sticky Top Navigation Bar
- **Position**: Fixed at top of viewport, becomes visible after scrolling past hero section
- **Background**: Semi-transparent dark (#0a0a0a at 95% opacity) with subtle backdrop blur
- **Height**: 60px desktop, 50px mobile
- **Logo/Name**: "SHIHAO LAI" on the left side, styled in the heading font
- **Nav Links** (right-aligned, horizontal on desktop):
  - Home (scrolls to #hero)
  - About (scrolls to #about)
  - Portfolio (scrolls to #portfolio)
  - Storyboard (scrolls to #storyboard)
  - Resume (scrolls to #resume)
  - Contact (scrolls to #contact)
- **Mobile**: Hamburger menu icon that opens a full-screen overlay menu
- **Active State**: Yellow (#e0c000) underline on the currently visible section's nav link
- **Scroll Behavior**: Smooth scrolling with offset for fixed nav height

---

## 3. Design System

### 3.1 Color Palette

The color palette is inspired by the three style reference images — vintage Takara Transformers advertisements featuring bold dark backgrounds with striking yellow/gold accents, metallic grays, and deep blues. The palette evokes the premium collectible toy aesthetic.

| Role | Color | Hex Code | Usage |
|------|-------|----------|-------|
| **Primary Background** | Near Black | `#0a0a0a` | Main page background, hero overlay |
| **Secondary Background** | Dark Charcoal | `#141414` | Alternate section backgrounds, cards |
| **Tertiary Background** | Dark Gray | `#1e1e1e` | Card hover states, subtle elevation |
| **Primary Accent** | Gold Yellow | `#e0c000` | Headlines, accent borders, hover states, CTA buttons |
| **Secondary Accent** | Bright Yellow | `#e0e000` | Highlights, active states, decorative elements |
| **Tertiary Accent** | Deep Blue | `#002060` | Subtle accents, link hover, section dividers |
| **Primary Text** | Off-White | `#f0f0f0` | Body text, paragraphs |
| **Secondary Text** | Light Gray | `#b0b0b0` | Captions, secondary info, metadata |
| **Muted Text** | Medium Gray | `#707070` | Subtle labels, timestamps |
| **Border/Divider** | Dark Border | `#2a2a2a` | Card borders, section dividers |
| **Highlight** | Warm Red | `#c0392b` | Sparse use — Megatron's red eyes accent, error states |

### 3.2 Typography

Use Google Fonts for web delivery:

| Role | Font | Weight | Size (Desktop) | Size (Mobile) |
|------|------|--------|----------------|---------------|
| **Hero Title** | `Oswald` | 700 (Bold) | 72px | 40px |
| **Section Headings (H2)** | `Oswald` | 600 (Semi-Bold) | 48px | 32px |
| **Sub-Headings (H3)** | `Oswald` | 500 (Medium) | 28px | 22px |
| **Project Titles (H4)** | `Oswald` | 500 (Medium) | 22px | 18px |
| **Body Text** | `Inter` | 400 (Regular) | 16px | 15px |
| **Body Text Emphasis** | `Inter` | 600 (Semi-Bold) | 16px | 15px |
| **Captions** | `Inter` | 400 (Regular) | 14px | 13px |
| **Nav Links** | `Inter` | 500 (Medium) | 14px | 16px |
| **Buttons** | `Inter` | 600 (Semi-Bold) | 15px | 14px |

**Rationale**: `Oswald` is a condensed, bold sans-serif that evokes the strong, impactful typography seen in the Takara Transformers advertisements. `Inter` provides excellent readability for body text with a modern, clean feel.

**Line Heights**: 
- Headings: 1.2
- Body: 1.7
- Captions: 1.5

**Letter Spacing**:
- Hero title: 4px (uppercase)
- Section headings: 2px (uppercase)
- Body: normal
- Nav links: 1px (uppercase)

### 3.3 Layout Patterns

- **Max Content Width**: 1200px, centered with auto margins
- **Full-Width Sections**: Hero, section backgrounds extend edge-to-edge
- **Grid System**: CSS Grid for portfolio gallery layouts
  - Desktop: 3-column grid for project thumbnails, 2-column for project detail views
  - Tablet: 2-column grid
  - Mobile: Single column
- **Card Pattern**: Used for individual projects — dark background card with subtle border, rounded corners (8px), hover elevation effect
- **Section Padding**: 100px top/bottom on desktop, 60px on mobile
- **Content Padding**: 20px horizontal on mobile, 40px on tablet

### 3.4 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | Icon gaps, tight padding |
| `--space-md` | 16px | Standard padding, card internal spacing |
| `--space-lg` | 24px | Section internal gaps |
| `--space-xl` | 40px | Between major elements |
| `--space-2xl` | 64px | Between sections (internal) |
| `--space-3xl` | 100px | Section top/bottom padding |

### 3.5 Visual Effects

- **Subtle grid pattern overlay** on dark backgrounds (inspired by Style3's green grid) — use a very faint grid pattern in dark gray (#1a1a1a) on the #0a0a0a background
- **Yellow accent lines**: Thin horizontal lines (2px) in gold (#e0c000) used as section dividers and decorative elements (inspired by the yellow bars in Style1 and Style3)
- **Image treatment**: Slight desaturation on idle, full color on hover for gallery thumbnails
- **Box shadows**: Subtle dark shadows for depth: `0 4px 20px rgba(0,0,0,0.5)`
- **Border accents**: 1px solid #2a2a2a for cards, with gold left-border (3px) on hover

---

## 4. Section-by-Section Content Mapping

### 4.1 HERO / LANDING SECTION

**Layout**: Full viewport height (100vh), dark background with a large featured image

**Background**: 
- Primary: Dark gradient overlay (`rgba(10,10,10,0.7)` to `rgba(10,10,10,0.9)`) over a background image
- Background image: `images/slide8_image1.png` (the stunning Transformers illustration with gold/black tones) — displayed as a cover background with slight blur or darkened overlay to ensure text readability

**Content (centered vertically and horizontally)**:
- **Pre-title text** (small, uppercase, letter-spaced, gold color): `INDUSTRIAL TOY DESIGNER`
- **Main Title** (hero heading, large, white): `SHIHAO LAI`
- **Tagline** (medium text, light gray): `Bridging Traditional Craftsmanship and Digital Innovation in Toy Design`
- **CTA Button** (gold outline button): `VIEW MY WORK` — scrolls to Portfolio section
- **Secondary CTA** (text link, subtle): `Download Resume` — links to resume section

**Scroll Indicator**: Animated downward chevron/arrow at bottom of hero section

**Key Images Used**:
- `images/slide8_image1.png` — Hero background (Transformers illustration, 3.3MB, high-impact)

---

### 4.2 ABOUT / BIO SECTION

**Layout**: Two-column layout on desktop (text left, image right), stacked on mobile

**Background**: `#0a0a0a` (primary dark)

**Section Header**:
- Gold accent line (40px wide, 2px tall) above heading
- Heading: `ABOUT ME`

**Left Column — Bio Text**:

Primary bio paragraph (professionally written from resume data):

> I am an industrial designer specializing in toy design, currently pursuing my Master of Design in Designed Objects at the School of the Art Institute of Chicago, with a research focus on Toy Design. I hold a Bachelor of Engineering in Industrial Design from Zhengzhou University, China.

> My design process bridges traditional craftsmanship with cutting-edge digital tools. From hand-sculpted clay models to precision 3D modeling in Rhino and Zbrush, I bring concepts to life through an iterative workflow that honors the tactile nature of toy design while leveraging modern technology for refinement and production.

> With professional experience at Alpha Group — one of China's leading toy manufacturers — I have hands-on knowledge of product development pipelines, from sample supervision and color scheme development to production-ready three-view technical drawings. My deep passion for the Transformers franchise and character-driven design fuels my commitment to creating toys that inspire imagination and stand as collectible works of art.

**Skills Highlight Strip** (horizontal row of icon+label pairs below bio):
- Rhino
- Zbrush
- Keyshot
- Adobe Illustrator
- Procreate
- Clay Sculpting
- 3D Printing

(Use simple text labels with a subtle gold underline or dot indicator — no external icon dependencies needed; can use CSS-styled text badges)

**Right Column — Featured Image**:
- `images/slide1_image1.png` — SD Megatron concept art (the polished digital illustration of the SD Megatron character, 612KB)
- Display with a subtle gold border frame effect
- Caption below: "SD Megatron — Concept Art"

---

### 4.3 PORTFOLIO / PAST WORKS SECTION

**Layout**: Section with project category filter tabs at top, followed by project cards in a grid

**Background**: `#141414` (secondary dark, to differentiate from About section)

**Section Header**:
- Gold accent line above
- Heading: `PORTFOLIO`
- Subheading: `From Concept to Creation — A Complete Design Journey`

**Filter Tabs** (horizontal, centered):
- `ALL` (default active)
- `TOY DESIGN`
- `ILLUSTRATIONS`
- `DESIGN DRAWINGS`
- `SCULPTURE`
- `PROFESSIONAL WORK`

When a tab is clicked, only projects in that category are shown (with a fade animation).

#### PROJECT 1: SD Megatron (Category: TOY DESIGN)

**Card Layout**: Featured/large card spanning full width, with image carousel inside

**Project Title**: `SD Megatron`
**Project Subtitle**: `Super Deformed Character Figure — Full Design Pipeline`
**Description**: 
> A complete design-to-production workflow for a super-deformed (SD) Megatron figure. Starting from concept art, through clay sculpting, 3D scanning, Rhino modeling, Zbrush refinement, and final 3D printing with hand-painted finishing.

**Process Steps** (displayed as a horizontal timeline/stepper):
1. **Concept Art** → `images/slide1_image1.png` — "Start with a concept art"
2. **Clay Model** → `images/slide1_image3.jpg` — "Make a rough model with clay"
3. **3D Scan + Rhino** → `images/slide1_image4.png` — "Scan the rough model and put it into Rhino as a reference"
4. **Zbrush Refinement** → `images/slide1_image2.png` — "Use Zbrush to refine"
5. **3D Print + Paint** → `images/slide1_image5.jpg` — "Then print it out"

**Display**: Horizontal scrollable image strip with step labels below each image, or a clickable stepper that shows one large image at a time with step indicators.

**Images Used**:
- `images/slide1_image1.png` (concept art, 612KB)
- `images/slide1_image2.png` (Zbrush model, 543KB)
- `images/slide1_image3.jpg` (clay model photo, 33KB)
- `images/slide1_image4.png` (Rhino model with scan overlay, 607KB)
- `images/slide1_image5.jpg` (finished painted figure, 291KB)

---

#### PROJECT 2: The One (Category: TOY DESIGN)

**Project Title**: `The One`
**Project Subtitle**: `Reimagining a 1979 Microman Classic`
**Description**: 
> A reimagination of an unreleased 1979 Microman toy that eventually evolved into the 1980 Diaclone headliner Great Robot Base. The project involved clay modeling using Play-Doh (referencing the WFC Spoiler Pack) and 3D modeling in Rhino.

**Process Steps**:
1. **Reference & Research** → `images/slide2_image2.jpg` — Historical reference
2. **Clay Rough Model** → `images/slide2_image3.png` — "Make a rough model with clay (Play-Doh in WFC Spoiler Pack)"
3. **3D Model (Rhino)** → `images/slide2_image4.png` — "Make 3D model with Rhino"
4. **Refined Design** → `images/slide2_image1.png` — Final design view
5. **Additional View** → `images/slide2_image5.jpg` — Alternate angle/detail

**Images Used**:
- `images/slide2_image1.png` (1746KB — large, high-detail)
- `images/slide2_image2.jpg` (36KB — reference image)
- `images/slide2_image3.png` (286KB)
- `images/slide2_image4.png` (251KB)
- `images/slide2_image5.jpg` (107KB)

---

#### PROJECT 3: Engineering Vehicle Transformer (Category: TOY DESIGN)

**Project Title**: `Engineering Vehicle Transformer`
**Project Subtitle**: `Undergraduate Thesis Project — Real Vehicle Transformation Design`
**Description**: 
> An undergraduate project focused on designing a transformer based on real engineering vehicles. Inspired by designer interviews, this project reimagined the classic G1 toy structure to accommodate realistic vehicle proportions. The complete process spans from initial sketches through clay modeling, structural engineering, 3D printing, articulation testing, detail refinement, rendering, and final hand-painted prototype.

**This is the largest project, spanning slides 3–7. Display as an expandable project with multiple phases:**

**Phase 1: Concept & Research** (Slide 3)
- `images/slide3_image1.png` — "Start with a rough sketch" (2163KB — large concept sketch)
- `images/slide3_image2.png` — "Make a rough structural model with clay" (697KB)
- `images/slide3_image3.png` — Clay model detail (1154KB)
- `images/slide3_image4.jpg` — Additional reference/sketch (691KB)
- Caption: "Learning from designers' interviews to make a transformer. Since the theme is real engineering vehicles, the structure has been redesigned compared to the G1 toy."

**Phase 2: Design Modernization** (Slide 4)
- `images/slide4_image1.png` — Reference material compilation (256KB)
- `images/slide4_image2.png` — Design iteration (298KB)
- `images/slide4_image3.png` — Modernized design (333KB)
- `images/slide4_image4.png` — Design detail (372KB)
- `images/slide4_image5.png` — Final concept (185KB)
- Caption: "Combine the details from different official materials, modernize the design."

**Phase 3: Structural Engineering** (Slide 5)
- `images/slide5_image1.png` — "Based on real vehicles, finalize the structure" (522KB)
- `images/slide5_image2.png` — "Build the structure model, prepare to test" (192KB)
- `images/slide5_image3.jpg` — "Use clay to make head sculpt" (636KB)
- `images/slide5_image4.png` — Clay head sculpt detail (303KB)
- `images/slide5_image5.png` — "Draw three-view diagrams and build models based on clay models" (304KB)
- `images/slide5_image6.png` — Three-view diagram (107KB)
- Caption: "It gives me a more intuitive perception of the actual look."

**Phase 4: Prototyping & Testing** (Slide 6)
- `images/slide6_image1.jpg` — 3D printed structure model (124KB)
- `images/slide6_image2.jpg` — Printed vehicle mode (680KB)
- `images/slide6_image3.png` — Refined line drawing — robot mode (105KB)
- `images/slide6_image4.png` — Refined line drawing — vehicle mode (142KB)
- Caption: "Print the structure model, test the move ability. Make some adjustments according to the test, then add details on it."

**Phase 5: Rendering & Final Model** (Slide 7)
- `images/slide7_image1.jpg` — Digital rendering in toy colors (166KB)
- `images/slide7_image2.jpg` — Final hand-painted model photo (428KB)
- Caption: "Rendering according to the toy color. Final model was painted into real vehicle color, I painted it myself."

**Display Strategy**: Show as a multi-phase project with a vertical timeline or tabbed phases. Each phase shows a row/grid of images with descriptive captions. This project should be the centerpiece of the portfolio as it demonstrates the most complete design-to-production pipeline.

---

#### PROJECT 4: Illustrations (Category: ILLUSTRATIONS)

**Project Title**: `Illustrations`
**Project Subtitle**: `Character Art & Digital Illustration`
**Description**: 
> Original digital illustrations showcasing character design skills and dynamic composition, with a focus on Transformers characters.

**Images** (display as a masonry or large-format gallery):
- `images/slide8_image1.png` — Large Transformers illustration with gold/black characters (3321KB — hero-quality, very large and detailed)
- `images/slide8_image2.png` — Second illustration (2300KB — large)
- `images/slide8_image3.jpg` — Third illustration (245KB)

**Display**: Large format, possibly full-width for the first image. These are the most visually striking images and should be displayed prominently.

---

#### PROJECT 5: Design Drawings (Category: DESIGN DRAWINGS)

**Project Title**: `Design Drawings`
**Project Subtitle**: `Technical & Character Design Sheets`
**Description**: 
> Technical design drawings and character sheets demonstrating precision draftsmanship and attention to mechanical detail.

**Images** (display as 2×2 grid):
- `images/slide9_image1.png` (553KB)
- `images/slide9_image2.png` (770KB)
- `images/slide9_image3.png` (752KB)
- `images/slide9_image4.png` (1208KB — largest, likely most detailed)

---

#### PROJECT 6: Sculpture (Category: SCULPTURE)

**Project Title**: `Sculpture`
**Project Subtitle**: `Physical Sculpting & Model Making`
**Description**: 
> Hand-sculpted models and figures demonstrating traditional sculpting skills — a critical foundation for toy design and prototyping.

**Images** (display as gallery grid):
- `images/slide10_image1.jpg` (337KB)
- `images/slide10_image2.jpg` (463KB)
- `images/slide10_image3.jpg` (321KB)
- `images/slide10_image4.jpg` (345KB)
- `images/slide10_image5.jpg` (262KB)

---

#### PROJECT 7: Professional Work — Alpha Group (Category: PROFESSIONAL WORK)

**Project Title**: `Alpha Group Internship`
**Project Subtitle**: `Product Design — Professional Experience`
**Description**: 
> During a three-month internship at Alpha Group (China), one of the country's leading toy manufacturers, I conducted sample supervision and developed color schemes for multiple product lines. I also drew three-view drawings of characters featured in the product line.

**Images**:
- `images/slide11_image1.jpg` (101KB) — Product line / work sample
- `images/slide11_image2.jpg` (62KB) — Three-view character drawings

---

### 4.4 STORYBOARD SECTION

**Layout**: Full-width section with the storyboard image as the centerpiece, accompanied by selected script excerpts

**Background**: `#0a0a0a` with the subtle grid pattern overlay

**Section Header**:
- Gold accent line above
- Heading: `STORYBOARD`
- Subheading: `Original Narrative — A Transformers Story`

**Main Content**:

**Storyboard Image**: 
- `images/storyboard.png` (2274KB) — Display full-width with ability to click/tap to open in a lightbox for detailed viewing
- The storyboard is a 6-page, 34-panel comic layout depicting a Transformers narrative

**Script Excerpts** (displayed below or alongside the storyboard as styled quote blocks):

Display a curated selection of the most evocative English script lines, presented as narrative cards or a scrolling text overlay:

> "I must be cursed. I am just a nobody doing some trivial job."

> "When those Somebody wave their hands, they can change the entire structure of the universe."

> "Now my spark cannot return to the physical universe."

> "I've been here for too long, the Unspace has begun to erode my body."

> "To amplify my mental faculty, I have to shrink my body with BrainMaster technology."

> "Under its guidance, I found a piece of metal. The composition of this metal... is consistent with Hytherion, the beast that devours time and space!"

> "In this metal, there actually exists information about a technology. Genetronic Translink! Utilizing Unspace communication technology to remotely drive a sparkless body — this is exactly what I need."

> "It's supposed to be… in my image…"

**Presentation Note**: The script excerpts should be displayed in a stylized format — perhaps as floating text cards with semi-transparent dark backgrounds, gold quotation marks, and italic text. This section demonstrates Shihao's storytelling ability and deep lore knowledge of the Transformers universe, which is highly valuable for toy companies developing narrative-driven product lines.

---

### 4.5 RESUME SECTION

**Layout**: Clean, structured layout with clear visual hierarchy. Two-column on desktop (left: education & experience timeline; right: skills & awards), single column on mobile.

**Background**: `#141414`

**Section Header**:
- Gold accent line above
- Heading: `RESUME`
- Subheading: `Education, Experience & Skills`

**Left Column — Timeline**:

**Education**:

1. **School of the Art Institute of Chicago, US** — Master of Design
   - July 2025 – Present
   - Major: Designed Objects
   - Research Focus: Toy Design

2. **Zhengzhou University, China** — Bachelor of Engineering
   - September 2020 – June 2024
   - Major: Industrial Design
   - Extracurriculars: Student Union, Propaganda Department Illustrator

**Experience**:

1. **Alpha Group, China** — Product Designer Internship
   - March 2025 – June 2025
   - Conducted sample supervision for multiple product lines
   - Made alternate color schemes for action figures
   - Drew three-view drawings

2. **Zhengzhou University Industrial Design Graduation Exhibition, China** — Exhibitor
   - May 2024
   - Responsible for setting up, maintaining, and dismantling booth at the exhibition

**Right Column — Skills & Awards**:

**Software Skills** (display as styled badges or progress indicators):
- Rhino
- Keyshot
- Adobe Illustrator
- Zbrush
- Procreate

**Languages**:
- Chinese (Native)
- English (Fluent)
- Japanese (N3)

**Hobbies / Additional Skills**:
- Illustration
- Manufacturing plastic kits
- Clay sculpting
- Miniature model painting

**Awards**:
- 11th National College Art & Design Awards — First-class Prize of Henan Division (August 2023)

---

### 4.6 CONTACT SECTION

**Layout**: Centered content with contact details and a call-to-action

**Background**: `#0a0a0a` with a subtle gradient or the grid pattern

**Section Header**:
- Gold accent line above
- Heading: `GET IN TOUCH`
- Subheading: `Let's Create Something Amazing Together`

**Contact Information** (centered, with icon-style labels):
- **Email**: slai8@artic.edu (displayed as a clickable mailto: link)
- **Phone**: (224) 647-5878
- **Location**: Chicago, IL

**Call-to-Action Text**:
> I am actively seeking opportunities in toy design and product development. Whether you're looking for a designer who can take a concept from clay sketch to production-ready prototype, or someone with deep franchise knowledge and storytelling ability, I'd love to connect.

**CTA Button**: `SEND ME AN EMAIL` — links to mailto:slai8@artic.edu

---

## 5. Image Placement Guide

### Complete Image-to-Section Mapping

| Image File | Section | Role | Display Size | Priority |
|-----------|---------|------|-------------|----------|
| `slide8_image1.png` | Hero | Background image (with dark overlay) | Full viewport cover | Critical |
| `slide1_image1.png` | About | Featured image (right column) | 400×auto | High |
| `slide1_image1.png` | Portfolio > SD Megatron | Step 1: Concept Art | 300×auto thumbnail, expandable | High |
| `slide1_image3.jpg` | Portfolio > SD Megatron | Step 2: Clay Model | 300×auto thumbnail, expandable | High |
| `slide1_image4.png` | Portfolio > SD Megatron | Step 3: Rhino Model | 300×auto thumbnail, expandable | High |
| `slide1_image2.png` | Portfolio > SD Megatron | Step 4: Zbrush | 300×auto thumbnail, expandable | High |
| `slide1_image5.jpg` | Portfolio > SD Megatron | Step 5: Final Print | 300×auto thumbnail, expandable | High |
| `slide2_image1.png` | Portfolio > The One | Main design view | 400×auto | High |
| `slide2_image2.jpg` | Portfolio > The One | Reference | 250×auto | Medium |
| `slide2_image3.png` | Portfolio > The One | Clay model | 250×auto | Medium |
| `slide2_image4.png` | Portfolio > The One | Rhino model | 250×auto | Medium |
| `slide2_image5.jpg` | Portfolio > The One | Additional view | 250×auto | Medium |
| `slide3_image1.png` | Portfolio > Eng. Vehicle | Concept sketch | 400×auto | High |
| `slide3_image2.png` | Portfolio > Eng. Vehicle | Clay structural model | 300×auto | High |
| `slide3_image3.png` | Portfolio > Eng. Vehicle | Clay detail | 300×auto | Medium |
| `slide3_image4.jpg` | Portfolio > Eng. Vehicle | Additional sketch | 300×auto | Medium |
| `slide4_image1.png` | Portfolio > Eng. Vehicle | Reference compilation | 250×auto | Medium |
| `slide4_image2.png` | Portfolio > Eng. Vehicle | Design iteration | 250×auto | Medium |
| `slide4_image3.png` | Portfolio > Eng. Vehicle | Modernized design | 250×auto | Medium |
| `slide4_image4.png` | Portfolio > Eng. Vehicle | Design detail | 250×auto | Medium |
| `slide4_image5.png` | Portfolio > Eng. Vehicle | Final concept | 250×auto | Medium |
| `slide5_image1.png` | Portfolio > Eng. Vehicle | Structure finalization | 300×auto | High |
| `slide5_image2.png` | Portfolio > Eng. Vehicle | Structure model | 250×auto | Medium |
| `slide5_image3.jpg` | Portfolio > Eng. Vehicle | Clay head sculpt | 300×auto | High |
| `slide5_image4.png` | Portfolio > Eng. Vehicle | Head sculpt detail | 250×auto | Medium |
| `slide5_image5.png` | Portfolio > Eng. Vehicle | Three-view diagram | 300×auto | High |
| `slide5_image6.png` | Portfolio > Eng. Vehicle | Three-view detail | 250×auto | Medium |
| `slide6_image1.jpg` | Portfolio > Eng. Vehicle | 3D printed prototype | 300×auto | High |
| `slide6_image2.jpg` | Portfolio > Eng. Vehicle | Printed vehicle mode | 300×auto | High |
| `slide6_image3.png` | Portfolio > Eng. Vehicle | Line drawing — robot | 300×auto | High |
| `slide6_image4.png` | Portfolio > Eng. Vehicle | Line drawing — vehicle | 300×auto | High |
| `slide7_image1.jpg` | Portfolio > Eng. Vehicle | Digital rendering | 400×auto | Critical |
| `slide7_image2.jpg` | Portfolio > Eng. Vehicle | Final painted model | 400×auto | Critical |
| `slide8_image1.png` | Portfolio > Illustrations | Primary illustration | Full-width (max 1200px) | Critical |
| `slide8_image2.png` | Portfolio > Illustrations | Second illustration | 600×auto | High |
| `slide8_image3.jpg` | Portfolio > Illustrations | Third illustration | 400×auto | High |
| `slide9_image1.png` | Portfolio > Design Drawings | Drawing 1 | 300×auto grid | Medium |
| `slide9_image2.png` | Portfolio > Design Drawings | Drawing 2 | 300×auto grid | Medium |
| `slide9_image3.png` | Portfolio > Design Drawings | Drawing 3 | 300×auto grid | Medium |
| `slide9_image4.png` | Portfolio > Design Drawings | Drawing 4 | 300×auto grid | High |
| `slide10_image1.jpg` | Portfolio > Sculpture | Sculpture 1 | 250×auto grid | Medium |
| `slide10_image2.jpg` | Portfolio > Sculpture | Sculpture 2 | 250×auto grid | Medium |
| `slide10_image3.jpg` | Portfolio > Sculpture | Sculpture 3 | 250×auto grid | Medium |
| `slide10_image4.jpg` | Portfolio > Sculpture | Sculpture 4 | 250×auto grid | Medium |
| `slide10_image5.jpg` | Portfolio > Sculpture | Sculpture 5 | 250×auto grid | Medium |
| `slide11_image1.jpg` | Portfolio > Alpha Group | Work sample 1 | 400×auto | High |
| `slide11_image2.jpg` | Portfolio > Alpha Group | Work sample 2 | 400×auto | High |
| `storyboard.png` | Storyboard | Main storyboard image | Full-width, clickable lightbox | Critical |
| `screenshot_01.jpg` | Portfolio > SD Megatron | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_02.jpg` | Portfolio > The One | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_03.jpg` | Portfolio > Eng. Vehicle | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_04.jpg` | Portfolio > Eng. Vehicle | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_05.jpg` | Portfolio > Eng. Vehicle | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_06.jpg` | Portfolio > Eng. Vehicle | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_07.jpg` | Portfolio > Eng. Vehicle | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_08.jpg` | Portfolio > Illustrations | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_09.jpg` | Portfolio > Design Drawings | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_10.jpg` | Portfolio > Sculpture | Slide overview (optional lightbox) | Hidden/lightbox only | Low |
| `screenshot_11.jpg` | Portfolio > Alpha Group | Slide overview (optional lightbox) | Hidden/lightbox only | Low |

### Screenshot Usage Strategy
The 11 screenshots (`screenshot_01.jpg` through `screenshot_11.jpg`) are full slide layouts from the original PPTX presentation. They can be used as:
- **Optional "View Original Slide" lightbox** — a small icon/button on each project card that opens the original slide layout in a lightbox
- **Fallback images** if individual extracted images have quality issues
- They should NOT be the primary display images since the extracted individual images provide better quality and layout flexibility

---

## 6. Copy/Text for Each Section

### 6.1 Hero Section Text
```
Pre-title: INDUSTRIAL TOY DESIGNER
Title: SHIHAO LAI
Tagline: Bridging Traditional Craftsmanship and Digital Innovation in Toy Design
CTA: VIEW MY WORK
```

### 6.2 About Section Text
```
I am an industrial designer specializing in toy design, currently pursuing my Master of Design in Designed Objects at the School of the Art Institute of Chicago, with a research focus on Toy Design. I hold a Bachelor of Engineering in Industrial Design from Zhengzhou University, China.

My design process bridges traditional craftsmanship with cutting-edge digital tools. From hand-sculpted clay models to precision 3D modeling in Rhino and Zbrush, I bring concepts to life through an iterative workflow that honors the tactile nature of toy design while leveraging modern technology for refinement and production.

With professional experience at Alpha Group — one of China's leading toy manufacturers — I have hands-on knowledge of product development pipelines, from sample supervision and color scheme development to production-ready three-view technical drawings. My deep passion for the Transformers franchise and character-driven design fuels my commitment to creating toys that inspire imagination and stand as collectible works of art.
```

### 6.3 Portfolio Section Text
```
Section Heading: PORTFOLIO
Subheading: From Concept to Creation — A Complete Design Journey

[Individual project descriptions are listed in Section 4.3 above]
```

### 6.4 Storyboard Section Text
```
Section Heading: STORYBOARD
Subheading: Original Narrative — A Transformers Story

Intro text: An original 34-panel storyboard and script exploring themes of identity, transformation, and survival within the Transformers universe. This narrative demonstrates world-building capability and deep franchise knowledge — essential skills for developing story-driven toy lines and character backstories.

[Script excerpts listed in Section 4.4 above]
```

### 6.5 Resume Section Text
```
Section Heading: RESUME
Subheading: Education, Experience & Skills

[All resume content is listed verbatim in Section 4.5 above, sourced directly from the resume PDF]
```

### 6.6 Contact Section Text
```
Section Heading: GET IN TOUCH
Subheading: Let's Create Something Amazing Together

Body: I am actively seeking opportunities in toy design and product development. Whether you're looking for a designer who can take a concept from clay sketch to production-ready prototype, or someone with deep franchise knowledge and storytelling ability, I'd love to connect.

CTA: SEND ME AN EMAIL
```

---

## 7. Toy-Industry-Specific Presentation Notes

### Framing for Hasbro and Major Toy Companies

The portfolio should subtly but clearly communicate the following competencies that toy companies like Hasbro value:

1. **End-to-End Design Pipeline Mastery**: The Engineering Vehicle Transformer project (slides 3–7) is the strongest demonstration of this. It shows the complete journey from concept sketch → clay model → structural engineering → 3D printing → articulation testing → detail refinement → rendering → hand-painted final prototype. This mirrors the actual product development pipeline at companies like Hasbro.

2. **Franchise Knowledge & Respect**: Shihao's deep knowledge of Transformers lore is evident in:
   - The SD Megatron project (understanding of character design language)
   - The One project (knowledge of obscure 1979 Microman/Diaclone history)
   - The storyboard and script (original narrative using established Transformers universe concepts like "Unspace," "sparks," "Primus," "Genetronic Translink")
   - The illustrations (accurate depiction of established characters)

3. **Physical Prototyping Skills**: Clay sculpting, 3D printing, and hand-painting are critical skills in toy design. Multiple projects demonstrate these hands-on capabilities.

4. **Technical Drawing Proficiency**: Three-view drawings, structural diagrams, and design sheets (slides 5, 6, 9) show the ability to produce production-ready technical documentation.

5. **Software Proficiency**: Rhino (industry-standard for hard-surface modeling), Zbrush (organic/detail sculpting), Keyshot (rendering), and Adobe Illustrator (vector graphics) are all tools used in professional toy design studios.

6. **Transformation Engineering**: The undergraduate project specifically addresses the engineering challenge of designing a toy that transforms between two modes — a core competency for any Transformers product designer.

7. **Color Scheme Development**: Professional experience at Alpha Group included developing alternate color schemes for action figures — a common task in toy product lines (repaints, exclusives, variants).

8. **Storytelling & World-Building**: The storyboard and script demonstrate the ability to create narrative context for toy products — increasingly important as toy companies develop transmedia franchises.

### Language & Tone Guidelines
- Use professional but passionate language
- Emphasize "design process" and "workflow" rather than just showing finished products
- Frame clay sculpting as "traditional prototyping" — a valued skill in the industry
- Reference industry-standard terminology: "three-view drawings," "color schemes," "sample supervision," "product lines"
- Avoid overly academic language; keep it practical and industry-focused
- The portfolio should feel like it belongs to someone who could walk into Hasbro's design studio and contribute immediately

---

## 8. Animation & Interaction Notes

### 8.1 Scroll Animations (using Intersection Observer API)
- **Fade-in-up**: All section headings and content blocks fade in and slide up 30px when they enter the viewport
- **Stagger**: When multiple cards/images enter the viewport together, stagger their animations by 100ms each
- **Trigger point**: Animations trigger when element is 20% visible in viewport
- **Duration**: 600ms with ease-out timing

### 8.2 Navigation
- **Smooth scrolling**: CSS `scroll-behavior: smooth` with JS fallback
- **Active section highlighting**: As user scrolls, the nav link for the currently visible section gets the gold accent
- **Nav bar appearance**: Nav bar starts transparent over the hero, becomes solid dark background after scrolling past hero section

### 8.3 Portfolio Interactions
- **Filter tabs**: Clicking a category tab filters projects with a fade transition (300ms)
- **Image hover**: Gallery images scale up slightly (transform: scale(1.03)) with a subtle gold border glow on hover
- **Lightbox**: Clicking any portfolio image opens it in a full-screen lightbox overlay with:
  - Dark semi-transparent background
  - Large image display (max 90vw × 90vh)
  - Close button (X) in top-right
  - Left/right navigation arrows to browse images within the same project
  - Caption text below the image
  - Click outside image or press Escape to close
- **Project expansion**: For the Engineering Vehicle Transformer project, phase tabs or an accordion to show/hide different phases

### 8.4 Hero Section
- **Parallax**: Subtle parallax effect on the hero background image (moves at 50% scroll speed)
- **Text animation**: Hero text elements fade in sequentially on page load (title first, then tagline, then CTA button) with 300ms delays between each
- **Scroll indicator**: Bouncing/pulsing down arrow animation at bottom of hero

### 8.5 Storyboard Section
- **Storyboard zoom**: Click on storyboard image to open in lightbox for detailed panel viewing
- **Script quotes**: Script excerpts can animate in as the user scrolls through the section, appearing one at a time

### 8.6 General
- **All animations should be subtle and professional** — no flashy or distracting effects
- **Respect `prefers-reduced-motion`**: Disable animations for users who have this accessibility setting enabled
- **Performance**: Use CSS transforms and opacity for animations (GPU-accelerated), avoid animating layout properties

---

## 9. Responsive Design Notes

### Breakpoints
| Breakpoint | Width | Layout Changes |
|-----------|-------|----------------|
| Desktop Large | ≥1200px | Full layout, 3-column portfolio grid |
| Desktop | ≥992px | Standard layout |
| Tablet | ≥768px | 2-column portfolio grid, stacked About columns |
| Mobile Large | ≥576px | Single column, adjusted spacing |
| Mobile | <576px | Single column, compact nav, reduced font sizes |

### Key Responsive Behaviors
- **Navigation**: Collapses to hamburger menu below 768px
- **Hero**: Text sizes reduce; background image repositioned for mobile framing
- **About**: Two columns stack to single column below 768px
- **Portfolio grid**: 3 → 2 → 1 columns as viewport narrows
- **Project process steps**: Horizontal timeline becomes vertical on mobile
- **Images**: All images use `max-width: 100%` and `height: auto`
- **Section padding**: Reduces from 100px to 60px on mobile
- **Lightbox**: Full-screen on mobile with swipe gesture support (optional)

---

## 10. File Structure Reference

```
final/
├── index.html               # Single-page portfolio
├── css/
│   └── style.css            # All styles (no external CSS frameworks)
├── js/
│   └── main.js              # Navigation, lightbox, filters, animations
└── images/
    ├── slide1_image1.png    # SD Megatron - concept art
    ├── slide1_image2.png    # SD Megatron - Zbrush model
    ├── slide1_image3.jpg    # SD Megatron - clay model
    ├── slide1_image4.png    # SD Megatron - Rhino model
    ├── slide1_image5.jpg    # SD Megatron - final printed figure
    ├── slide2_image1.png    # The One - main design
    ├── slide2_image2.jpg    # The One - reference
    ├── slide2_image3.png    # The One - clay model
    ├── slide2_image4.png    # The One - Rhino model
    ├── slide2_image5.jpg    # The One - additional view
    ├── slide3_image1.png    # Eng Vehicle - concept sketch
    ├── slide3_image2.png    # Eng Vehicle - clay structural
    ├── slide3_image3.png    # Eng Vehicle - clay detail
    ├── slide3_image4.jpg    # Eng Vehicle - additional sketch
    ├── slide4_image1.png    # Eng Vehicle - reference compilation
    ├── slide4_image2.png    # Eng Vehicle - design iteration
    ├── slide4_image3.png    # Eng Vehicle - modernized design
    ├── slide4_image4.png    # Eng Vehicle - design detail
    ├── slide4_image5.png    # Eng Vehicle - final concept
    ├── slide5_image1.png    # Eng Vehicle - structure finalization
    ├── slide5_image2.png    # Eng Vehicle - structure model
    ├── slide5_image3.jpg    # Eng Vehicle - clay head sculpt
    ├── slide5_image4.png    # Eng Vehicle - head sculpt detail
    ├── slide5_image5.png    # Eng Vehicle - three-view diagram
    ├── slide5_image6.png    # Eng Vehicle - three-view detail
    ├── slide6_image1.jpg    # Eng Vehicle - 3D printed prototype
    ├── slide6_image2.jpg    # Eng Vehicle - printed vehicle mode
    ├── slide6_image3.png    # Eng Vehicle - line drawing robot
    ├── slide6_image4.png    # Eng Vehicle - line drawing vehicle
    ├── slide7_image1.jpg    # Eng Vehicle - digital rendering
    ├── slide7_image2.jpg    # Eng Vehicle - final painted model
    ├── slide8_image1.png    # Illustration 1 (hero bg + gallery)
    ├── slide8_image2.png    # Illustration 2
    ├── slide8_image3.jpg    # Illustration 3
    ├── slide9_image1.png    # Design Drawing 1
    ├── slide9_image2.png    # Design Drawing 2
    ├── slide9_image3.png    # Design Drawing 3
    ├── slide9_image4.png    # Design Drawing 4
    ├── slide10_image1.jpg   # Sculpture 1
    ├── slide10_image2.jpg   # Sculpture 2
    ├── slide10_image3.jpg   # Sculpture 3
    ├── slide10_image4.jpg   # Sculpture 4
    ├── slide10_image5.jpg   # Sculpture 5
    ├── slide11_image1.jpg   # Alpha Group work 1
    ├── slide11_image2.jpg   # Alpha Group work 2
    ├── storyboard.png       # Full storyboard image
    ├── screenshot_01.jpg    # PPTX slide 1 screenshot
    ├── screenshot_02.jpg    # PPTX slide 2 screenshot
    ├── screenshot_03.jpg    # PPTX slide 3 screenshot
    ├── screenshot_04.jpg    # PPTX slide 4 screenshot
    ├── screenshot_05.jpg    # PPTX slide 5 screenshot
    ├── screenshot_06.jpg    # PPTX slide 6 screenshot
    ├── screenshot_07.jpg    # PPTX slide 7 screenshot
    ├── screenshot_08.jpg    # PPTX slide 8 screenshot
    ├── screenshot_09.jpg    # PPTX slide 9 screenshot
    ├── screenshot_10.jpg    # PPTX slide 10 screenshot
    └── screenshot_11.jpg    # PPTX slide 11 screenshot
```

---

## End of Specification

This document provides a complete blueprint for building Shihao Lai's professional toy design portfolio. Every piece of content, image placement, design decision, and interaction is specified based on the actual extracted data from the provided source files. A web developer should be able to build the entire site from this specification without needing to reference the original source files.

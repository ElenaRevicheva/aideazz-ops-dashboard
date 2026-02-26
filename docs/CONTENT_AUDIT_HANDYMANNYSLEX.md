# Handy Manny's LLC — Full Content Audit (handymannyslex.com)

**Audit date:** Feb 2026  
**Source:** https://www.handymannyslex.com/ (Thryv)  
**Target:** handymannysky.com (WordPress on SiteGround)

---

## Executive Summary

| Metric | Count |
|-------|-------|
| **Live pages** | 12 |
| **Blog posts** | 5 |
| **Service/landing pages** | 4 |
| **Legal** | 1 (TOU + Privacy) |
| **404 / unreachable** | 6+ (nav links to non-existent or alternate URLs) |

**Key finding:** The site has strong, conversion-focused content. Some nav items point to 404s or alternate URLs. The new WordPress site should consolidate structure, fix broken links, and add UTM + form attribution from day one.

---

## 1. Site Structure & URL Map

### Live Pages (verified)

| URL | Page type | Title / purpose |
|-----|-----------|-----------------|
| `/` | Home | Turnkey Renovation Contractor \| Lexington, KY |
| `/blog` | Blog index | Blog |
| `/get-in-touch-lexington` | Contact | Let's Build Something Great—Start the Conversation Today |
| `/residential-remodeling-services-lexington-ky` | Service landing | Trusted Residential Remodeling Contractors in Lexington, KY |
| `/statement-of-capabilities` | Commercial / RFP | Capabilities Overview \| Lexington, KY |
| `/recent-projects-gallery` | Portfolio | Our Latest Work: Remodeling and Construction Projects |
| `/t/tou-and-privacy` | Legal | Terms and Conditions of Use + Privacy Policy |

### Blog Posts (5 total)

| URL | Title | Date |
|-----|-------|------|
| `/blog/why-local-home-improvement-contractor-matters` | Why a Local Home Improvement Contractor Matters | Nov 14, 2025 |
| `/blog/what-to-know-commercial-roofing-lexington-ky` | Commercial Roofing Contractor in Lexington, KY: What to Know | Oct 9, 2025 |
| `/blog/how-a-remodeling-contractor-expertly-transforms-homes` | How a Remodeling Contractor Expertly Transforms Your Home | Nov 17, 2025 |
| `/choosing-a-commercial-general-contractor` | Choosing a Commercial General Contractor in Lexington, KY | Sep 18, 2025 |
| `/home-renovations-trends` | Home Renovation Contractor: Top Home Renovation Trends | Dec 9, 2025 |

### Nav Items That 404 or Redirect

| Nav label | Tried URL | Status |
|-----------|-----------|--------|
| Contact | `/contact` | 404 (actual: `/get-in-touch-lexington`) |
| Current Projects | `/current-projects` | 404 (actual: `/recent-projects-gallery`) |
| Home Improvement Contractor | `/home-improvement-contractor` | 404 |
| Lexington, KY | `/lexington-ky` | 404 |
| Home Renovation Contractor | `/home-renovation-contractor` | 404 |
| Home Remodeling Lexington, KY | `/home-remodeling-lexington-ky` | 404 (actual: `/residential-remodeling-services-lexington-ky`) |

### Internal Links (for redirect mapping)

- `home-business-renovations` — linked from blog (may timeout; verify)
- `lexington-construction-services` — linked from blog (may timeout; verify)

---

## 2. Content Inventory by Page

### 2.1 Homepage (`/`)

**Sections:**
1. **Hero** — "Start-to-Finish Renovation Services in Greater Lexington" + CTA "Call Us for a Free Estimate"
2. **Contact form** (above fold) — First Name, Last Name, Email, Phone, Zip Code, Construction type (Residential/Commercial/Industrial), Service Needed (General Contracting/Roofing/Siding/Windows/Remodeling/Other), Tell us about your project
3. **Intro** — Positioning as general contractor (not handyman), full-property construction
4. **What We Do** — Interior & Exterior services (detailed lists)
5. **Who We Serve** — Residential vs Commercial
6. **Turnkey Solutions** — 6-step process (numbered list)
7. **Why Customers Keep Calling** — 8 differentiators
8. **Testimonials** — 5 reviews (Oliver J., Shayne M., Rafael P., Palmer C., Luisa O.)
9. **Areas We Serve** — Residential (15 cities), Commercial (14 cities)
10. **Get a Free Estimate** — Contact info + duplicate form
11. **Explore Our Work** — Galleries, videos, Statement of Capabilities, YouTube
12. **Why Choose Handy Manny's** — Services summary
13. **FAQ** — 5 questions
14. **Final CTA** — "Let's Build Something Great Together"
15. **Footer** — Nav, contact, hours, BBB, Terms, Privacy

**Form fields (exact):**
- First Name, Last Name, Email, Phone, Zip Code
- Construction type: Residential | Commercial | Industrial
- Service Needed: General Contracting | Roofing | Siding | Windows | Remodeling | Other
- Tell us about your project (textarea)

---

### 2.2 Contact Page (`/get-in-touch-lexington`)

**Sections:**
- Hero: "Let's Build Something Great—Start the Conversation Today"
- Same contact form as homepage
- Business info: Address, Phone, Email
- Business hours: Mon–Sat 8am–8pm, Sun 2pm–8pm
- Service areas: Fayette County + 17 towns (Elizabethtown, Somerset, Shelbyville, Stanford, Lancaster, Wilmore, Mount Sterling, Harrodsburg, Berea, Danville, Midway, Lawrenceburg, Frankfort, Paris, Versailles, Richmond, Winchester, Georgetown, Nicholasville, Lexington)
- "How to Reach Handy Manny's LLC"

---

### 2.3 Residential Remodeling (`/residential-remodeling-services-lexington-ky`)

**Sections:**
- Hero: "Trusted Residential Remodeling Contractors in Lexington, KY"
- Intro — Pain point (cramped, worn, juggling contractors) + solution
- **Interior services:** Drywall, painting, carpentry; flooring; attic buildouts; basement finishing; bathroom; kitchen
- **Exterior services:** Gutters; deck; windows/doors; masonry; roofing; siding
- **Why homeowners choose:** Experienced craftsmanship, owner-supervised, honest pricing, local reliability
- **Step-by-step process** (5 steps, numbered 1–5 but listed in reverse order in source — fix order): Consultation → On-Site Evaluation → Proposal and Planning → Construction → Final Walkthrough
- **How remodeling adds value** — 6 bullets
- CTA: "Get Started Today" → `/get-in-touch-lexington`

---

### 2.4 Statement of Capabilities (`/statement-of-capabilities`)

**Purpose:** Commercial/RFP document for big clients ($100k–$1M+).

**Sections:**
- Intro — Minority-owned, licensed, pursuing state certification
- **Core capabilities:** Stucco/siding, tile, windows/doors, decking, framing, electrical, flooring, masonry, roofing, painting, insulation, drywall
- **Why Choose Handy Manny's:** Licensed & insured, transparent communication, top materials, 60+ workforce, owner-supervised, minority-owned

---

### 2.5 Recent Projects Gallery (`/recent-projects-gallery`)

**Sections:**
- Hero: "Our Latest Work: Remodeling and Construction Projects in Lexington, KY"
- Residential Projects (placeholder — "Get a closer look...")
- Commercial Projects (placeholder — same copy)
- CTA: Call or quote form

**Note:** Gallery appears to be placeholder; no actual project photos/videos in fetched content. Roadmap says "Start with 3–5 project photos/videos; don't wait for a full library."

---

### 2.6 Blog Posts (full content)

#### A. Why a Local Home Improvement Contractor Matters (Nov 14, 2025)
- ~1,200 words
- Sections: Choosing local, Why local beats DIY, Lexington architecture, Bluegrass weather, Community roots, Faster communication, Supporting local, How to evaluate, From idea to finish, Sustainability, Real-world wins, Day-to-day experience
- Internal links: residential-remodeling-services-lexington-ky, home-business-renovations, lexington-construction-services, recent-projects-gallery

#### B. Commercial Roofing Contractor in Lexington, KY (Oct 9, 2025)
- ~800 words
- Sections: 5 essential facts (licensing, experience, warranty, pricing, references), Red flags, Why Handy Manny's, Protect your business
- Internal links: lexington-construction-services, residential-remodeling-services-lexington-ky, get-in-touch-lexington

#### C. How a Remodeling Contractor Expertly Transforms Your Home (Nov 17, 2025)
- ~700 words
- Sections: 8 steps (consultation, design, materials, planning, craftsmanship, communication, cleanup, satisfaction), Benefits, Why professional matters, Local knowledge
- Internal links: home-business-renovations, residential-remodeling-services-lexington-ky, get-in-touch-lexington

#### D. Choosing a Commercial General Contractor (Sep 18, 2025)
- ~600 words
- Sections: Why Handy Manny's stands out, Importance of local, Example projects, What to expect, Local knowledge matters
- Internal links: lexington-construction-services, residential-remodeling-services-lexington-ky, get-in-touch-lexington

#### E. Home Renovation Contractor: Top Home Renovation Trends (Dec 9, 2025)
- ~700 words
- Sections: Kentucky home styles, Benefits of hiring experienced contractor, Energy-efficient design, Materials/layouts, Long-term value, Smart home integration
- Internal links: home-business-renovations, get-in-touch-lexington

---

### 2.7 Terms & Privacy (`/t/tou-and-privacy`)

- Placeholder: "Handy Manny's LLC provides the Terms and Conditions of Use (TOU)..." and "Privacy Policy is below."
- No full legal text in fetched content — likely requires copy from Thryv or legal review.

---

## 3. Contact & Business Info (canonical)

| Field | Value |
|-------|-------|
| **Business name** | Handy Manny's LLC |
| **Phone** | (859) 551-5302 |
| **Email** | manny@handymannys.biz |
| **Address** | 1040 Monarch St Unit 327, Lexington, KY 40513 |
| **Hours** | Mon–Sat 8:00 am–8:00 pm; Sunday 2:00 pm–8:00 pm |
| **BBB** | Handy Manny's LLC BBB Business Review (link on homepage) |
| **Google Reviews** | Leave Us a Review on Google (link on homepage) |

---

## 4. Form Specification (for WordPress)

**Fields to capture:**
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (required)
- Zip Code
- Construction type: Residential | Commercial | Industrial
- Service Needed: General Contracting | Roofing | Siding | Windows | Remodeling | Other
- Tell us about your project (textarea)

**Attribution (must capture from day one):**
- UTM source, medium, campaign, term, content
- Landing URL (full page where form was submitted)
- Timestamp

**Destinations (per roadmap):**
- Manny's email
- Elena's email (or shared inbox)
- Database (e.g., Google Sheets via Zapier/n8n or form plugin)
- Optional: CRM

**Plugins to evaluate:** WPForms + HandL UTM Grabber (or similar), Fluent Forms, Formidable Forms.

**Conversion improvements (for lead qualification):**
- Add **Project timeline** field (optional): When do you want to start?
- Add **Budget range** or **Estimated project scope** optional dropdown (e.g. Small $5k–25k | Medium $25k–100k | Large $100k+).
- Aligns with Manny's target for larger projects; filters low-quality leads without hard-gating small jobs.

---

## 5. Positioning Upgrade for $100k–$1M Clients

Add these enhancements to strengthen big-project credibility:

- **Commercial Projects section** with 3 case summaries (requires Manny to provide project details).
- **Downloadable PDF** of Statement of Capabilities (later enhancement; start with web page).
- **Workforce capacity** mention (crew size: 60+) — already in SoC; ensure visible.
- **Insurance/licensing badges** — requires Manny to supply assets.
- **Clear RFP contact path** — dedicated CTA for commercial/RFP inquiries.

---

## 6. Performance Requirement

Construction buyers judge professionalism via speed.

- **Site load:** < 2.5s on mobile (measure with PageSpeed Insights or GTmetrix).
- **Image compression:** WebP, optimized file sizes.
- **No heavy plugins:** Prefer lightweight themes (Astra, Kadence); avoid page builders that add >500KB JS.

---

## 7. Local Authority Reinforcement

Big clients trust authority. Add:

- **Google Reviews:** Use Google-approved embed (Place widget) or prominent link to Google Business profile.
- **BBB badge:** Verified; confirm BBB allows badge use.
- **Project testimonials with real location** (e.g. "Lexington, KY" or neighborhood).

---

## 8. Images & Media (not in fetch)

**Assumed assets to port:**
- Logo
- Hero image(s)
- Service icons or photos
- Testimonial photos (if any)
- Project gallery images (when available)
- Favicon

**Action:** Manually inventory images from handymannyslex.com; download and re-upload to WordPress Media Library. Optimize for web (WebP, compression).

---

## 9. SEO & Technical Notes

**Title tag pattern:** `[Page Topic] | Lexington, KY | Handy Manny's LLC` or `Turnkey Renovation Contractor | Lexington, KY`

**Key phrases in content:**
- remodeling contractor Lexington KY
- home renovation contractor Lexington KY
- commercial general contractor Lexington KY
- commercial roofing contractor Lexington KY
- home improvement contractor Lexington KY
- home remodeling Lexington KY

**Internal linking:** Blog posts cross-link to service pages and contact. New site should maintain this structure.

---

## 10. Mapping to WordPress Build + Your Letter to Manny

| Your requirement | Content / implementation |
|------------------|--------------------------|
| **Owned site, no lock-in** | handymannysky.com on SiteGround ✓ |
| **Forms: UTM + landing URL + Sheets/CRM** | Form spec in §4; use HandL UTM Grabber + WPForms (or equivalent) |
| **GTM, GA, remarketing** | Week 3 per roadmap; add GA4 + GTM container |
| **Content pipeline: blog, galleries, AI drafts** | 5 blog posts to port; gallery placeholder; roadmap Week 5–8 for content assembly |
| **SEO + strong theme for $100k–$1M+ clients** | Statement of Capabilities page; professional theme (Astra/Kadence); clean structure |
| **One person + AI workflow** | Port content; use theme + blocks; optional Manny CMO later |

---

## 11. Recommended WordPress Build Order

1. **Exit wizard** → Install Astra + Starter Template (construction/contractor)
2. **Pages to create:**
   - Home (port homepage sections)
   - Contact (port get-in-touch-lexington)
   - Services (or split: Residential, Commercial)
   - Statement of Capabilities
   - Projects / Gallery
   - Blog (index)
   - Terms & Privacy
3. **Form:** Install form plugin; add UTM + landing URL capture; connect to Sheets/email
4. **Port 5 blog posts** — preserve URLs with redirects (301) from old URLs
5. **Redirect map:** old URLs → new WordPress URLs (see §12)
6. **GTM + GA:** Week 3
7. **Images:** Port and optimize logo, hero, service images

---

## 12. Redirect Map (Old → New)

| Old (handymannyslex.com) | New (handymannysky.com) |
|--------------------------|--------------------------|
| `/` | `/` |
| `/get-in-touch-lexington` | `/contact` (or keep `/get-in-touch-lexington` for SEO) |
| `/residential-remodeling-services-lexington-ky` | `/services/residential` or `/residential-remodeling` |
| `/statement-of-capabilities` | `/statement-of-capabilities` |
| `/recent-projects-gallery` | `/projects` or `/gallery` |
| `/blog` | `/blog` |
| `/blog/why-local-home-improvement-contractor-matters` | `/blog/why-local-home-improvement-contractor-matters` |
| `/blog/what-to-know-commercial-roofing-lexington-ky` | `/blog/commercial-roofing-contractor-lexington-ky` |
| `/blog/how-a-remodeling-contractor-expertly-transforms-homes` | `/blog/how-remodeling-contractor-transforms-your-home` |
| `/choosing-a-commercial-general-contractor` | `/blog/choosing-commercial-general-contractor` |
| `/home-renovations-trends` | `/blog/home-renovation-trends` |
| `/t/tou-and-privacy` | `/terms-privacy` or `/legal` |

**Note:** If keeping SEO URLs, use same slugs. If simplifying, set up 301 redirects in SiteGround or via Redirection plugin.

---

*End of content audit. Use this document for migration planning and to prove the WordPress choice with your actions.*

# Content Port How-To — handymannyslex.com → handymannysky.com

**Source:** https://www.handymannyslex.com/  
**Target:** handymannysky.com (WordPress, Kadence Magnolia)  
**Reference:** CONTENT_AUDIT_HANDYMANNYSLEX.md

---

## Method: Copy from source, paste into WordPress

1. Open the source page in one browser tab.
2. Open the target page in WordPress (Pages → Edit) in another tab.
3. Copy sections from source → paste into the right blocks on the target.
4. Adjust layout with Kadence blocks (Headings, Paragraphs, Lists, Rows, etc.).

---

## Page-by-Page Port Order

### 1. Home (already exists — refine)

**Source:** handymannyslex.com/  
**Target:** WordPress → Pages → Home → Edit

| # | Section (from audit §2.1) | Action |
|---|---------------------------|--------|
| 1 | Hero — "Start-to-Finish Renovation Services in Greater Lexington" + CTA "Call Us for a Free Estimate" | Replace Magnolia hero text with this. Keep or swap image. |
| 2 | Contact form | Add form block (after form plugin installed) or placeholder for now. |
| 3 | Intro — GC positioning, full-property construction | Copy from source, paste into Paragraph block. |
| 4 | What We Do — Interior & Exterior | Copy lists, use List or Kadence Row blocks. |
| 5 | Who We Serve — Residential vs Commercial | Two columns or list. |
| 6 | Turnkey Solutions — 6-step process | Numbered list. |
| 7 | Why Customers Keep Calling — 8 differentiators | List or icon list. |
| 8 | Testimonials — 5 (Oliver J., Shayne M., Rafael P., Palmer C., Luisa O.) | Copy each testimonial, use Quote or Kadence Testimonial blocks. |
| 9 | Areas We Serve — 15 residential + 14 commercial cities | Two lists. |
| 10 | Get a Free Estimate — contact info + form | Add business info (§3) + form. |
| 11 | Explore Our Work — links to Gallery, SoC, YouTube | Buttons or links block. |
| 12 | Why Choose Handy Manny's | Short text + list. |
| 13 | FAQ — 5 questions | Accordion or headings + paragraphs. |
| 14 | Final CTA — "Let's Build Something Great Together" | CTA block. |
| 15 | Footer | Edit via Appearance → Customize → Footer, or footer widget. Add nav, §3 info, BBB, Terms, Privacy. |

---

### 2. Contact (already exists — refine)

**Source:** handymannyslex.com/get-in-touch-lexington  
**Target:** Pages → Contact → Edit. Set slug to `get-in-touch-lexington`.

- Hero: "Let's Build Something Great—Start the Conversation Today"
- Same form as Home
- Business info (§3): Address, Phone, Email, Hours
- Service areas: Fayette County + 17 towns (from audit §2.2)
- "How to Reach Handy Manny's LLC"

**Canonical business info (paste everywhere needed):**
- Address: 1040 Monarch St Unit 327, Lexington, KY 40513
- Phone: (859) 551-5302
- Email: manny@handymannys.biz
- Hours: Mon–Sat 8:00 am–8:00 pm; Sunday 2:00 pm–8:00 pm

---

### 3. Residential Remodeling (create new page)

**Source:** handymannyslex.com/residential-remodeling-services-lexington-ky  
**Target:** Pages → Add New. Slug: `residential-remodeling-services-lexington-ky`

| Section | Content |
|---------|---------|
| Hero | "Trusted Residential Remodeling Contractors in Lexington, KY" |
| Intro | Pain point + solution (copy from source) |
| Interior services | Drywall, painting, carpentry; flooring; attic buildouts; basement finishing; bathroom; kitchen |
| Exterior services | Gutters; deck; windows/doors; masonry; roofing; siding |
| Why homeowners choose | 4 points |
| 5-step process | Consultation → On-Site Evaluation → Proposal and Planning → Construction → Final Walkthrough |
| How remodeling adds value | 6 bullets |
| CTA | "Get Started Today" → link to `/get-in-touch-lexington` |

---

### 4. Statement of Capabilities (create new page)

**Source:** handymannyslex.com/statement-of-capabilities  
**Target:** Pages → Add New. Slug: `statement-of-capabilities`

- Intro: minority-owned, licensed, pursuing state certification
- Core capabilities: stucco/siding, tile, windows/doors, decking, framing, electrical, flooring, masonry, roofing, painting, insulation, drywall
- Why Choose Handy Manny's: licensed & insured, transparent communication, top materials, 60+ workforce, owner-supervised, minority-owned

---

### 5. Recent Projects Gallery (create new page)

**Source:** handymannyslex.com/recent-projects-gallery  
**Target:** Pages → Add New. Slug: `recent-projects-gallery`

- Hero: "Our Latest Work: Remodeling and Construction Projects in Lexington, KY"
- Residential Projects section (placeholder until Manny provides 3–5 photos)
- Commercial Projects section (placeholder)
- CTA: Call or form link

---

### 6. About (already exists — refine)

**Source:** Use content from Home intro + Who We Serve + Why Choose Handy Manny's.  
**Target:** Pages → About → Edit

Align with audit: company positioning, 60+ crew, owner-supervised, minority-owned, service areas.

---

### 7. FAQ (already exists — refine)

**Source:** Homepage FAQ section (5 questions from audit §2.1)  
**Target:** Pages → FAQ → Edit

Copy the 5 Q&As from handymannyslex.com homepage.

---

### 8. Terms & Privacy (create new page)

**Source:** handymannyslex.com/t/tou-and-privacy  
**Target:** Pages → Add New. Slug: `terms-privacy` or `t/tou-and-privacy`

Copy TOU + Privacy text from source. If not available, use placeholder until Manny/Thryv provides.

---

### 9. Blog Posts (create 5 new posts)

**Source:** handymannyslex.com (see audit §2.6 for URLs)  
**Target:** Posts → Add New for each

| Post | Source URL | Slug |
|------|------------|------|
| Why a Local Home Improvement Contractor Matters | /blog/why-local-home-improvement-contractor-matters | `why-local-home-improvement-contractor-matters` |
| Commercial Roofing Contractor in Lexington, KY: What to Know | /blog/what-to-know-commercial-roofing-lexington-ky | `what-to-know-commercial-roofing-lexington-ky` |
| How a Remodeling Contractor Expertly Transforms Your Home | /blog/how-a-remodeling-contractor-expertly-transforms-homes | `how-a-remodeling-contractor-expertly-transforms-homes` |
| Choosing a Commercial General Contractor in Lexington, KY | /choosing-a-commercial-general-contractor | `choosing-a-commercial-general-contractor` |
| Home Renovation Contractor: Top Home Renovation Trends | /home-renovations-trends | `home-renovations-trends` |

**For each post:**
1. Create new Post.
2. Set slug (Permalink) to match table.
3. Copy full body from source.
4. Fix internal links: point to new slugs (e.g. `residential-remodeling-services-lexington-ky`, `get-in-touch-lexington`, `recent-projects-gallery`).

---

## Suggested Port Order

1. **Contact** — quick win, business info is canonical.
2. **Residential Remodeling** — key service page.
3. **Statement of Capabilities** — important for big clients.
4. **Home** — largest page, do section by section.
5. **About** — refine with audit content.
6. **FAQ** — copy 5 Q&As.
7. **Projects Gallery** — placeholders OK.
8. **Terms & Privacy** — copy or placeholder.
9. **5 Blog posts** — one at a time.

---

## After Port: Nav & Form

- **Nav:** Appearance → Menus. Add all pages. Fix links (no 404s). Contact → `/get-in-touch-lexington`, Projects → `/recent-projects-gallery`, etc.
- **Form:** Install WPForms (or Fluent Forms) + HandL UTM Grabber. Add form to Home and Contact. Configure fields, UTM, landing URL, Manny + Elena email, Sheets.

---

*Reference: CONTENT_AUDIT_HANDYMANNYSLEX.md §2, §3*

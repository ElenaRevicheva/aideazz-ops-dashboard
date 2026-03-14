# Week 3 Plan — Handy Manny's Site Launch
## Step-by-step guide for Elena (vibe coder friendly)

**Use this doc:** Check off each step as you go. Print it and keep it next to you so you don't miss anything before Week 3 ends.

---

## Where you are right now

| What | Meaning in simple words |
|------|-------------------------|
| **Phase** | Phase 1 – Foundation (first 4 weeks) |
| **Week** | Week 3 |
| **Roadmap focus** | GTM, GA (Manny owns), remarketing audience |
| **Target outcome** | You can see traffic in Google Analytics; you can retarget visitors in Google Ads |
| **Your stage** | Site is built and almost ready. You're in "pre-launch": add tracking, do a final check, then go live. |

**In practice:** The new site (handymannysky.com) needs to be connected to Google Tag, Google Analytics, and Google Ads so Manny's team (and Doreen) can see visits and conversions. Your job this week is to finish that setup and launch.

---

## Important: You don't have to be a pro

- You can **launch even if** the Google Ads conversion IDs from Doreen's team arrive a bit late. Add them in Week 4 when you get them.
- **Don't wait forever** for the tag team call. Do everything that doesn't depend on them first (GTM, GA, remarketing, QA), then launch. Conversions can be added right after.

---

## Part 1 — Google Tag and conversion tracking (priority 1)

### What this means in plain language

When someone fills the contact form, clicks the phone number, or clicks the email link on the site, Google Ads can count that as a "conversion." To do that, the site needs the right "tag" (snippet of code) and "conversion labels" from Manny's Google Ads account. Doreen's team will give you those labels; you (or the tag team) add them to the site or to GTM.

### Step 1.1 — Book the call with Doreen's tag team

- [ ] Open your email (Gmail).
- [ ] Find the message from **Doreen Paquiz** where she offered a "quick chat with our dedicated tag team."
- [ ] Reply and say something like:  
  **"My Week 3 ends in 3 days. Can we do the tag team call in the next 48 hours so I can implement and verify before launch? I need the conversion IDs/labels for: (1) contact form submission, (2) phone number click, (3) email link click."**
- [ ] If she sends a calendar invite, accept it and show up. On the call, ask them to give you (or confirm):
  - Conversion ID/label for **form submit** (free quote / contact form).
  - Conversion ID/label for **phone click** (tel: links).
  - Conversion ID/label for **email click** (mailto: links).
  - Google Ads tag ID (you already have **AW-357397483** — confirm it's the one to use).

**If the call is delayed:** Note it. Keep going with the rest of the plan. You can add conversion events in Week 4 when you have the IDs.

### Step 1.2 — Implement the Google Ads tag and conversions

**Option A — You use GTM (Google Tag Manager)**  
- [ ] Log in to [tagmanager.google.com](https://tagmanager.google.com).
- [ ] Open the container for **handymannysky.com** (Manny should be owner; you should have access).
- [ ] Add the **Google Ads tag** (ID: **AW-357397483**) if it's not already there. (In GTM: New Tag → Google Ads Conversion Tracking or Google tag — use the ID above.)
- [ ] When Doreen's team sends the conversion labels, add a **Conversion** tag in GTM for each: form submit, phone click, email click. They can tell you the exact event name or trigger (e.g. "form submit on contact page").

**Option B — They give you a snippet or code**  
- [ ] If they send a code snippet instead of GTM instructions, they will say where to paste it (e.g. in the theme header, or in a plugin). Follow their email. If it's long, ask: "Do I paste this in the site header, or in GTM?"

### Step 1.3 — Verify before launch

- [ ] Submit a test contact form on the site. Check in Google Ads (or ask the tag team) that the form submission conversion fired.
- [ ] Click a phone link on the site. Check that the "phone click" conversion fired.
- [ ] Click an email link on the site. Check that the "email click" conversion fired.  
**If you don't have the conversion IDs yet:** Skip this step and do it in Week 4 when you have them. Launch anyway.

---

## Part 2 — GTM and Google Analytics (Week 3 roadmap)

### What this means in plain language

**GTM** = Google Tag Manager. One place to add and change tracking codes without editing the site code.  
**GA** = Google Analytics (GA4). Shows how many people visit the site, which pages they open, etc. ("Traffic visibility.")

### Step 2.1 — GTM

- [ ] Go to [tagmanager.google.com](https://tagmanager.google.com).
- [ ] Make sure you see a **container for handymannysky.com**. If not, Manny needs to create it and add you (or you create it and add Manny as owner).
- [ ] Confirm the **GTM snippet** is on the live site: open handymannysky.com, right-click → View Page Source, search for "googletagmanager.com" or "GTM-". You should see the container code in the page.  
  **If it's not there:** Add it via your theme (e.g. Kadence: Appearance → Customize → often "Scripts" or "Header/Footer") or a "Insert Headers and Footers" type plugin. Paste the GTM code in the header section.

### Step 2.2 — GA4

- [ ] Go to [analytics.google.com](https://analytics.google.com).
- [ ] Confirm there is a **GA4 property** for Handy Manny's / handymannysky.com. Manny should be owner; you should have access.
- [ ] In GTM, make sure the **GA4 Configuration tag** is installed and fires on all pages. (If you're not sure, the tag team or a quick GTM + GA4 tutorial can help.)
- [ ] In GA4, open **Reports → Realtime**. Open handymannysky.com in another tab and click around. You should see **your visit** in Realtime (e.g. "1 user in the last 30 minutes").  
  **If you see yourself:** "Traffic visibility" is done.

---

## Part 3 — Remarketing (Week 3 roadmap)

### What this means in plain language

Remarketing = "Show ads to people who already visited the site." To do that, Google Ads needs to know who visited. That's done by linking the site to Google Ads (via GA4 audience or a Google Ads tag in GTM).

### Step 3.1 — Remarketing audience in Google Ads

- [ ] Log in to [ads.google.com](https://ads.google.com) (with Manny's account or as collaborator).
- [ ] Go to **Tools & Settings** (wrench) → **Shared library** → **Audience manager** (or **Audiences**).
- [ ] Create or confirm an audience like **"All website visitors – 30 days"** that uses the website as the source. It should be linked to the same site (handymannysky.com) where GTM/GA or the Ads tag is installed.
- [ ] If the tag team or Doreen said "we'll set this up," confirm with them that it's done and that the audience is collecting.

### Step 3.2 — You as collaborator

- [ ] Confirm you (Elena) are added as a **collaborator** on Manny's Google Ads account so you can check conversions and audiences. (Per roadmap step 2.7.) If not, ask Manny to add you.

---

## Part 4 — Pre-launch QA (so nothing breaks)

### Step 4.1 — Form

- [ ] On handymannysky.com, fill out the **contact / free quote form** and submit.
- [ ] Check that **Manny** and **you (Elena)** both received the email.
- [ ] If you use a database (e.g. Google Sheets), check that the new row appeared.
- [ ] In the form email or DB, confirm that **UTM** and **landing URL** are present (e.g. a field like "Page" or "Source" with the URL or campaign info).

### Step 4.2 — Links and menu

- [ ] Click every main menu link (Home, Services, Contact, etc.). No 404s.
- [ ] Open the main pages: Home, Contact, Statement of Capabilities, any service pages you built. They load and look correct.
- [ ] Fix any broken or wrong links you find (e.g. About → /about/, not /pricing/).

### Step 4.3 — reCAPTCHA

- [ ] You already confirmed reCAPTCHA is on and working. If you want to double-check: submit the form from an incognito window; it should go through and you should get the email.

### Step 4.4 — One full test (if conversions are already set up)

- [ ] In one session (incognito): open the site, submit the form, click the phone number, click the email link. Then in GA4 Realtime (and in Google Ads if conversions are live), confirm the events show up.  
**If conversions aren't set up yet:** Skip this; do it in Week 4.

---

## Part 5 — Launch and post-launch

### Step 5.1 — Go live

- [ ] When GTM is on the site, GA4 shows real-time traffic, remarketing is set, and QA is done: **the site is live.**  
  If the domain was already pointing to the new WordPress, "go live" might just mean: no more "coming soon" or extra checks. If you had a holding page, remove it so the full site is public.

### Step 5.2 — Update listings (Week 2.8 in the roadmap)

- [ ] **Google Business Profile:** Edit the website URL to **https://handymannysky.com** (or the correct homepage URL).
- [ ] **Yelp** (if Manny has a listing): Update the business website to handymannysky.com.
- [ ] Any **other directories** where Handy Manny's is listed: update the website field to handymannysky.com.

---

## 3-day plan (so you don't slip)

Use this if you have exactly 3 days left in Week 3.

| Day | Focus | What to do |
|-----|--------|------------|
| **Day 1 (today)** | GTM, GA, remarketing + chase Doreen | Confirm GTM is on the site and GA4 is in GTM; open GA4 Realtime and check you see your visit. Confirm remarketing audience exists in Google Ads. Send the email to Doreen asking for the tag team call in the next 48 hours and for the conversion IDs/labels. |
| **Day 2** | QA + conversion prep | Do the full QA: form (with UTM), phone links, email links, main pages, menu. If Doreen's team already sent the conversion IDs/labels, add them in GTM (or wherever they said) and test. If not, write down where you'll add them and keep chasing. |
| **Day 3** | Launch | If everything looks good: treat the site as live; update Google Business, Yelp, and other listings with the new URL. If conversion IDs still haven't arrived: still launch. Add conversion tracking in Week 4 when you get the IDs. |

---

## Quick checklist — Week 3 done when…

- [ ] GTM container is on handymannysky.com.
- [ ] GA4 is linked in GTM; Realtime shows traffic when you visit.
- [ ] Remarketing audience is set up in Google Ads and linked to the site.
- [ ] Form sends to Manny + Elena; UTM and landing URL are captured.
- [ ] No broken links on main pages and menu.
- [ ] You replied to Doreen and (if possible) had the tag team call and got conversion IDs/labels.
- [ ] Conversion events are implemented and verified, **or** you have a note to add them in Week 4 when you get the IDs.
- [ ] Site is live; Google Business (and Yelp, etc.) updated with handymannysky.com.

---

## If you get stuck

- **GTM/GA:** Ask Doreen's tag team on the call, or search "add GA4 to GTM" / "add Google Ads tag to GTM" and follow a short tutorial.
- **Conversion labels:** Only Doreen's team or Manny's Google Ads account can give you the exact IDs/labels. Don't guess; wait for them or do it in Week 4.
- **Form/UTM:** Your form plugin (e.g. WPForms) may have a setting or add-on for "capture UTM" and "landing URL." Check the form's documentation or the plugin's help.

---

*Source: Roadmap (ROADMAP_AND_PLAN.md), Week 3 focus; Doreen's emails; Handy Manny's site launch plan. You've got this.*

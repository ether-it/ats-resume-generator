# ATSReadyResume v1.0 - Handoff Documentation

## 🚀 How to Go Live

### 1. Webhook Setup (Critical)
To enable resume generation, you must configure the Webhook URL in your hosting environment (Vercel/Netlify/etc.) or Anti-Gravity Admin.

**Environment Variable:** `WEBHOOK_URL`

**Payload Contract (POST):**
```json
{
  "personal": {
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "...",
    "location": "..."
  },
  "summary": "...",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "experience": [
    {
      "role": "Business Analyst",
      "company": "Company A",
      "dates": "Jan 2020 - Present",
      "bullets": ["Achieved X", "Led Y"]
    }
  ],
  "education": "...",
  "pricePaid": "2900",
  "paymentId": "PAY-..."
}
```

**Webhook Response Expected:**
```json
{
  "fileUrl": "https://...",
  "emailSent": true
}
```

### 2. Payment Integration
Currently, the UI shows a placeholder for Razorpay. To enable real payments:
1. Edit `src/components/ResumeForm.tsx`.
2. Locate the "Review & Pay" step (Step 5).
3. Replace the placeholder div with the Razorpay script/component.

### 3. SEO Checklist (Pre-Launch)
- [ ] **Google Console**: Verify ownership using the HTML tag or DNS record.
- [ ] **Sitemap**: Submit `https://atsreadyresume.com/sitemap.xml` to GSC.
- [ ] **Metadata**: Review `src/app/layout.tsx` title formats.
- [ ] **Structured Data**: Test Homepage and FAQ page using [Google Rich Results Test](https://search.google.com/test/rich-results).

### 4. Adding New Roles
To add a new role (e.g., Data Analyst):
1. Open `src/lib/data/roles.ts`.
2. Find the role object (e.g., `slug: 'data-analyst'`).
3. Change `status: 'coming-soon'` to `status: 'active'`.
4. Commit and push. The site will automatically enable the builder flow for that role.

## 📅 Content Calendar (12 Months)

| Month | Keyword Focus | Blog Title |
|-------|---------------|------------|
| Month 1 | Business Analyst Resume | "How to write a Senior BA resume that passes Workday ATS" |
| Month 1 | ATS Resume Format | "Why 2-column resumes are getting you rejected automatically" |
| Month 2 | Resume Keywords | "Top 20 Keywords for Senior Business Analysts in 2026" |
| Month 2 | Interview Tips | "You passed the ATS Screen. Now what?" |
| Month 3 | Data Analyst Resume | "Transitioning from BA to Data Analyst: Resume Guide" |
| Month 3 | ATS Mistakes | "The 'Invisible Text' hack: Why it bans you from applying" |
| Month 4 | Product Manager ATS | "Is your PM resume failing machine scoring?" |
| Month 4 | Resume Visuals | "Minimalist resumes: Why boring is better for banking jobs" |
| Month 5 | Career Gaps | "How to handle career gaps in an ATS-friendly format" |
| Month 5 | LinkedIn vs Resume | "Aligning your LinkedIn profile with your ATS resume" |
| Month 6 | Executive Resumes | "Do Executives need ATS optimization?" |
| Month 6 | Cover Letters | "Do cover letters still get parsed? (The Truth)" |
| Month 7 | Remote Work | "Keywords for Remote Business Analyst roles" |
| Month 8 | Entry Level | "Breaking into Analysis: Resume tips for juniors" |
| Month 9 | Tech Skills | "SQL and Python: How to list technical skills for parsing" |
| Month 10 | Soft Skills | "Quantifying soft skills so algorithms can read them" |
| Month 11 | Year in Review | "Resume trends that died in 2026" |
| Month 12 | 2027 Goals | "Preparing your resume for the 2027 hiring surge" |

## 🛠 Asset Locations
- **Logos**: `/public/logo.png`, `/public/logo-mark.png`
- **Favicons**: `/public/favicon.ico`
- **Styles**: `/src/app/globals.css` (Brand colors defined in `:root`)

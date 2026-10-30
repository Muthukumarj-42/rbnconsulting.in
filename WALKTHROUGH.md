# RBN Consultancy Services – Website Development & Deployment Walkthrough

We have developed, verified, committed, and pushed the **RBN Consultancy Services** Under Reconstruction corporate website to GitHub. The project is fully configured for continuous deployment on **Vercel** and custom domain integration through **Hostinger**.

---

## 1. Project Overview & Deliverables Summary

| Feature / Requirement | Status | Details |
| :--- | :--- | :--- |
| **Corporate Identity** | ✅ Complete | "RBN Consultancy Services" |
| **Headline & Subtitle** | ✅ Complete | "Our Website Is Under Reconstruction" |
| **Mandatory Description** | ✅ Complete | *"We're working behind the scenes to bring you a better digital experience. Our website is currently being updated. We'll be back soon!"* |
| **Visual Palette** | ✅ Complete | Deep Navy Blue (`#071324`), Crisp White (`#F8FAFC`), Metallic Gold (`#D4AF37`, `#F59E0B`) |
| **Call & Email Actions** | ✅ Complete | Prominent buttons for `tel:+919176521179` and `mailto:rbnambiar@gmail.com` with one-tap copy |
| **Maintenance Graphic** | ✅ Complete | Modern animated SVG with gear mechanics, compass, and corporate advisory pillars |
| **Practice Pillars** | ✅ Complete | Strategic Management, Financial Governance, Regulatory & Compliance, Advisory, Modernization |
| **Executive Footer** | ✅ Complete | Contact info, location badge, copyright, and smooth back-to-top control |
| **Tech Stack** | ✅ Complete | React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + Framer Motion + Lucide React |
| **Local Builds & Lint** | ✅ Complete | `npm run build` (638ms, 0 errors), `npm run lint` (0 errors, 0 warnings) |
| **GitHub Repository** | ✅ Pushed | [Muthukumarj-42/rbnconsulting.in](https://github.com/Muthukumarj-42/rbnconsulting.in.git) on branch `main` |
| **Vercel Config** | ✅ Ready | `vercel.json` with security headers, SPA rewrite, and cache headers |

---

## 2. GitHub Repository Status

The code has been committed and pushed to your GitHub repository:
- **Remote**: `https://github.com/Muthukumarj-42/rbnconsulting.in.git`
- **Branch**: `main`
- **Status**: Clean working tree, tracked on `origin/main`
- **Safety**: `.gitignore` strictly protects against committing `node_modules`, `dist`, `.env*`, and `.vercel`.

---

## 3. Connecting to Vercel (Continuous Deployment)

Your project contains `vercel.json` preconfigured for Vite. Connect the repository to Vercel via the Vercel Dashboard in 3 simple steps:

1. **Log in to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in.
2. **Add New Project**:
   - Click **Add New...** → **Project**.
   - Select your GitHub account and find `Muthukumarj-42/rbnconsulting.in`.
   - Click **Import**.
3. **Confirm Build Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

> Once connected, every push to the `main` branch will automatically trigger a production build and deployment on Vercel without manual intervention.

---

## 4. Hostinger Custom Domain Integration (`rbnconsulting.in`)

To connect your Hostinger domain to Vercel while preserving your email services:

### Step 1: Add the Domain in Vercel
1. In your project on Vercel, go to **Settings** → **Domains**.
2. Enter `rbnconsulting.in` and click **Add**.
3. Select the recommended option to also add `www.rbnconsulting.in` and set it to redirect automatically to the root domain `rbnconsulting.in`.

### Step 2: Configure DNS in Hostinger hPanel
1. Open [Hostinger hPanel](https://hpanel.hostinger.com/) → **Domains** → Select `rbnconsulting.in`.
2. In the left navigation, click **DNS / Nameservers**.
3. Add / update the following website DNS records:

| Record Type | Name | Points to / Target | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | `3600` | Points root domain to Vercel's global edge network |
| **CNAME** | `www` | `cname.vercel-dns.com` | `3600` | Points `www` subdomain to Vercel |

> **Important (Do not modify or delete email records):**
> - Keep all existing `MX` records (e.g. Google Workspace, Titan Email, Hostinger Webmail).
> - Keep all `TXT` records for `v=spf1`, `dkim`, and `dmarc`.
> - Do not change the Nameservers unless you want Vercel to manage DNS entirely. Using Hostinger DNS with the `A` and `CNAME` records above is the safest method.

### Step 3: SSL Certificate & Verification
- Vercel automatically generates a free Let's Encrypt SSL certificate once the DNS records resolve (typically 5 to 30 minutes).
- Once green checkmarks appear in Vercel's **Domains** tab, `https://rbnconsulting.in` and `https://www.rbnconsulting.in` will be live with full HTTPS encryption.

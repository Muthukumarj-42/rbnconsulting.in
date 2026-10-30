# RBN Consultancy Services

Official web portal repository for **RBN Consultancy Services**.

This project provides an executive, responsive "Under Reconstruction" landing page tailored with an elegant Navy Blue, White, and Subtle Gold palette, modern maintenance illustrations, corporate practice summaries, and direct client contact gateways.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript
- **Hosting**: [Vercel](https://vercel.com/)
- **Domain Registrar**: [Hostinger](https://www.hostinger.com/)

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run Oxlint validation
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Vercel Production Deployment

### Recommended Settings:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Production Branch**: `main`

### Deployment Steps:
1. Connect this GitHub repository (`Muthukumarj-42/rbnconsulting.in`) to your Vercel account.
2. Select the repository and click **Deploy**.
3. All commits pushed to the `main` branch will automatically trigger production deployments.

---

## 🏷️ Hostinger Custom Domain Integration

To map your domain (`rbnconsulting.in`) purchased through Hostinger to Vercel:

1. In your **Vercel Project Dashboard**, navigate to **Settings** → **Domains**.
2. Add both:
   - `rbnconsulting.in`
   - `www.rbnconsulting.in` (redirects automatically to `rbnconsulting.in`)
3. Log in to your **Hostinger hPanel** → **Domains** → **DNS / Nameservers**.
4. Configure the following website records:
   - **Type**: `A` | **Name**: `@` | **Points to**: `76.76.21.21` | **TTL**: `3600` (or Vercel recommended IP)
   - **Type**: `CNAME` | **Name**: `www` | **Points to**: `cname.vercel-dns.com` | **TTL**: `3600`
5. **Important**: Preserve existing `MX`, `SPF`, `DKIM`, and email records to avoid disruptions to email services.

---

## 📞 Contact Details

- **Company**: RBN Consultancy Services
- **Phone**: [+91 9176521179](tel:+919176521179)
- **Email**: [rbnambiar@gmail.com](mailto:rbnambiar@gmail.com)

# 🌐 DIET Kupwara Website

[![Vercel Status](https://img.shields.io/github/deployments/your-org/dietkupwara.in/production?label=vercel&logo=vercel&color=0A0A0A)](https://dietkupwara.in)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-orange?logo=sanity)](https://www.sanity.io/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

Official website of the **District Institute of Education and Training (DIET) Kupwara**, a premier institute dedicated to training teachers, advancing educational innovation, and promoting 21st-century skills in line with **NEP 2020**.  

🔗 **Live site:** [https://www.dietkupwara.in](https://www.dietkupwara.in)

---

## 📖 About DIET Kupwara

DIET Kupwara is the **apex teacher training institute of Kupwara district (J&K)**.  
Its mission is to:  
- Build teacher capacity through modern pedagogy and ICT integration.  
- Promote **NEP 2020** reforms and competency-based education.  
- Empower schools with **21st-century teaching-learning skills**.  
- Act as a **resource and guidance hub** for academic excellence.  

This website serves as an official portal for information, announcements, resources, and academic content.

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router, SSR, SSG)  
- [React](https://reactjs.org/)  
- [TailwindCSS](https://tailwindcss.com/) (UI styling)  
- [Sanity.io](https://www.sanity.io/) (Headless CMS)  
- [Framer Motion](https://www.framer.com/motion/) (animations)  
- [Vercel](https://vercel.com/) (deployment & hosting)  

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js `>=18.x`
- npm or yarn or pnpm

### Clone repository
```bash
git clone https://github.com/your-org/dietkupwara.in.git
cd dietkupwara.in
```

### Install dependencies
```bash
npm install
# or
yarn install
```

### Environment variables
Create a `.env.local` file in the root and add:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
SANITY_API_TOKEN=your_sanity_token
```

### Run development server
```bash
npm run dev
```
Now open [http://localhost:3000](http://localhost:3000).

---

## 📦 Deployment

The project is automatically deployed on **Vercel**.  
Any push/merge to the `main` branch triggers a production deployment.  
Pull requests are deployed to preview environments.

---

## 🛠️ Project Structure

```
dietkupwara.in/
│
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # UI components
│   ├── lib/              # API clients, utilities
│   └── styles/           # Global styles
│
├── public/               # Static assets (images, logo, etc.)
├── sanity/               # Sanity schemas & studio config
├── next.config.mjs       # Next.js configuration
└── tailwind.config.js    # Tailwind configuration
```

---

## 👩‍💻 Contributing

1. Create a new branch from `dev`.  
2. Make changes and commit with a meaningful message.  
3. Push your branch and open a Pull Request against `dev`.  
4. After review & testing, changes will be merged into `main`.  

🔒 **Note:** Direct pushes to `main` are restricted.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **DIET Kupwara** faculty & administration.  
- [Sanity.io](https://www.sanity.io/) for content management.  
- [Vercel](https://vercel.com/) for deployment infrastructure.  
- Open-source community powering Next.js, React, Tailwind, and more.  

---

### 📧 Contact

📍 DIET Kupwara, Jammu & Kashmir, India  
🌐 [https://www.dietkupwara.in](https://www.dietkupwara.in)  
✉️ info@dietkupwara.in

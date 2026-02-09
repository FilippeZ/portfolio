# Filippos Zygouris - Professional Portfolio

Welcome to the official repository for **Filippos Zygouris's Portfolio Website**. This project showcases my professional journey, technical expertise, and projects in Cloud Architecture, AI & Data Architecture, and Product Management.

## 🚀 Project Overview

This repository contains the source code for my personal portfolio website, designed to be a comprehensive digital resume and showcase of my work. The application is built with modern web technologies to ensure performance, responsiveness, and a premium user experience.

### Key Features
-   **Modern UI/UX**: Clean, professional design with a focus on readability and visual appeal.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Interactive Elements**: Smooth animations and transitions using **Framer Motion**.
-   **Performance Optimized**: Built on **Next.js 14** for optimal speed and SEO.
-   **Dynamic Content**: Sections for expertise, about me, portfolio projects, testimonials, and contact.

## 🛠 Tech Stack

The project is built using the following technologies:

-   **Framework**: [Next.js 14](https://nextjs.org/) (React 18)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Carousel**: [Swiper.js](https://swiperjs.com/)
-   **Email**: [Nodemailer](https://nodemailer.com/) (for contact form)

## 📂 Project Structure

The repository is organized as follows:

```
portfolio/
├── frontend/             # Main Next.js Application
│   ├── app/              # App Router pages and layouts
│   ├── components/       # Reusable UI components (Header, Hero, About, etc.)
│   ├── public/           # Static assets
│   ├── styles/           # Global styles
│   ├── next.config.mjs   # Next.js configuration
│   └── tailwind.config.ts # Tailwind CSS configuration
├── resources/            # Additional static resources (Legacy/External)
└── index.html            # Legacy static entry point (if applicable)
```

## 🏁 Getting Started

To run the project locally, follow these steps:

### Prerequisites
-   **Node.js** (v18 or higher)
-   **npm** or **yarn** or **pnpm**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FilippeZ/portfolio.git
    cd portfolio
    ```

2.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## 🚀 Deployment

The application is optimized for deployment on platforms like **Vercel** or **Netlify**.

-   **Vercel**: Connect your GitHub repository and set the `Root Directory` to `frontend` in the project settings.
-   **Netlify**: Similar configuration, ensure the build command is `npm run build` (inside `frontend`) and publish directory is `.next`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by Filippos Zygouris*

# How to Publish Your Website Online

Since your project uses **Next.js** with **Server-Side API Routes** (for the contact form) and **Image Optimization**, standard static hosting like GitHub Pages has significant limitations (the contact form will stop working).

The **best and easiest way** to get your site online for free, while keeping everything working, is to use **Vercel** (the creators of Next.js). It connects directly to your GitHub repository.

## Option 1: Vercel (Recommended - Keeps Contact Form Working)

1.  **Create a Vercel Account**: Go to [vercel.com](https://vercel.com/signup) and sign up with **GitHub**.
2.  **Import Project**:
    *   Click "Add New..." -> "Project".
    *   Select your `portfolio` repository from the list.
3.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: Click "Edit" and select `frontend` (Important!).
    *   **Environment Variables**:
        *   Add `EMAIL_USER` (your gmail address)
        *   Add `EMAIL_PASS` (your app password)
4.  **Deploy**: Click **Deploy**.

Vercel will build your site and give you a live URL (e.g., `portfolio.vercel.app`) in about a minute. Whenever you push to GitHub, Vercel will automatically update the live site.

## Option 2: GitHub Pages (Advanced - Breaks Contact Form)

If you strictly want to use GitHub Pages, we must disable the server-side features:
1.  The **Contact Form** will stop working (requires a backend).
2.  **Next.js Image Optimization** requires cloud processing (will need configuration changes).

If you prefer this route, let me know, and I can help you refactor the contact form to use a client-side service like *EmailJS* instead.

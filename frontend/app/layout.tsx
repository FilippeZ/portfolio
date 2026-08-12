import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
    title: "Filippos P. Zygouris",
    description: "SaMD Quality Assurance, AI Regulatory Specialist, and Sovereign AI Architect.",
    icons: {
        icon: "/resources/img/favicon.ico",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark bg-[#050505]">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
            </head>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-display bg-[#050505] text-white antialiased selection:bg-primary selection:text-white`}>
                <Providers>
                    {children}
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}

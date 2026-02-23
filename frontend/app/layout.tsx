import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-display bg-background-dark text-white antialiased selection:bg-primary selection:text-white`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

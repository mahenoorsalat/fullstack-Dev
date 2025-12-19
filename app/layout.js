import { Inter } from "next/font/google";
import "./globals.css";
// 1. IMPORT VERCEL TOOLS
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// 2. KEEP THE SEO METADATA (This brings the traffic!)
export const metadata = {
  title: {
    default: "Mahenoor | Full Stack Developer & UI/UX Designer",
    template: "%s | Mahenoor Portfolio"
  },
  description: "Experienced Full Stack Developer and UI/UX Designer. Specializing in Next.js, React, Mobile Apps, and Brand Design. Hire me for custom web development.",
  keywords: [
    "Full Stack Developer", 
    "UI/UX Designer", 
    "React Developer", 
    "Next.js 14", 
    "Freelance Web Developer", 
    "Mobile App Development", 
    "Figma to Code",
    "Hire Developer India" 
  ],
  authors: [{ name: "Mahenoor" }],
  creator: "Mahenoor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-vercel-domain.vercel.app", // REPLACE THIS with your actual Vercel link
    title: "Mahenoor | Full Stack Developer & UI/UX Designer",
    description: "Building high-performance websites and mobile apps. View my portfolio.",
    siteName: "Mahenoor Portfolio",
    images: [
      {
        url: "/Banner.png", 
        width: 1200,
        height: 630,
        alt: "Mahenoor Portfolio Banner",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  // 3. KEEP JSON-LD (This helps Google understand who you are)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahenoor",
    "url": "https://your-vercel-domain.vercel.app",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://www.linkedin.com/in/your-profile", 
      "https://github.com/mahenoorsalat"
    ],
    "knowsAbout": ["Web Development", "UI/UX Design", "React", "Next.js"]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* 4. ADD VERCEL ANALYTICS COMPONENTS HERE */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
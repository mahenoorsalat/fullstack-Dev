import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// 2. SEO METADATA
export const metadata = {
  // CRITICAL: Fixes OG Image issues
  metadataBase: new URL('https://thefullstack-dev.vercel.app'), 
  
  title: {
    default: "Mahenoor | Full Stack & AI Developer | UI/UX Designer",
    template: "%s | Mahenoor Portfolio"
  },
  
  description: "Expert Full Stack Developer & AI Engineer specializing in Next.js, Python, and Custom AI Agents. Building scalable SaaS, Automation Pipelines, and high-performance Web3 apps for global startups.",
  
  // 3. RICH KEYWORDS (Mix of Broad & Long-Tail for Global Reach)
  keywords: [
    // Core Roles
    "Full Stack Developer", 
    "AI Engineer",
    "UI/UX Designer", 
    "Backend Developer",

    // High-Value / Low-Competition (Long Tail)
    "Hire Next.js Developer India",
    "Custom AI Agent Development",
    "Python Automation Expert",
    "SaaS MVP Development Service",
    "Figma to React Code",
    "Django REST Framework Expert",
    "Web3 Dashboard Developer",
    
    // Tech Stack Specific
    "React.js", 
    "Next.js 14", 
    "TypeScript",
    "Python",
    "FastAPI",
    "OpenAI API Integration",
    "LangChain Developer",
    "Tailwind CSS",
    "GSAP Animations"
  ],
  
  authors: [{ name: "Mahenoor" }],
  creator: "Mahenoor",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mahenoor | Build Custom AI Agents & Web Apps",
    description: "Looking for a developer? I build AI-powered web apps, custom agents, and stunning UI/UX designs. Let's automate your business.",
    siteName: "Mahenoor Portfolio",
    images: [
      {
        url: "/Banner.png", 
        width: 1200,
        height: 630,
        alt: "Mahenoor - Full Stack & AI Developer Portfolio",
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification for search consoles (Optional but recommended)
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add this if you have one
  }
};

export default function RootLayout({ children }) {
  // 4. JSON-LD (Structured Data for Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahenoor",
    "url": "https://thefullstack-dev.vercel.app",
    "jobTitle": "Senior Full Stack & AI Developer",
    "description": "Versatile Full-Stack Developer and UI/UX Designer skilled in MERN, Next.js, Django, Python, and AI/ML fundamentals.",
    "email": "salatmahenoor7.8.6@gmail.com",
    "telephone": "+919510944489",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/salat-mahenoor/", 
      "https://github.com/mahenoorsalat",
      // Add your Upwork/Fiverr URLs here if you have them so Google links them!
      // "https://www.upwork.com/freelancers/~YOUR_ID",
      // "https://www.fiverr.com/YOUR_USERNAME"
    ],
    "knowsAbout": [
      "Web Development", 
      "UI/UX Design", 
      "Artificial Intelligence",
      "Machine Learning",
      "AI Agents",
      "Automation",
      "Next.js",
      "React",
      "Python",
      "Django",
      "Blockchain"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
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
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

        {/* VERCEL ANALYTICS */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll"; 
import PageWrapper from "@/components/PageWrapper";   

const inter = Inter({ subsets: ["latin"] });

// 2. SEO METADATA
export const metadata = {
  // Fixes OG Image issues
  metadataBase: new URL('https://thefullstack-dev.vercel.app'), 
  
  title: {
    default: "Mahenoor | Top 1% Full Stack & AI Developer | SEO & UI/UX Expert",
    template: "%s | Mahenoor Portfolio"
  },
  
  description: "Hire Mahenoor, a lovable Top-Rated Full Stack Developer & AI Engineer. Expert in Next.js, Python, and SEO. Building custom AI Agents & high-performance websites in record time. Trusted by clients on Upwork, Fiverr, and globally.",
  
  // 3. RICH KEYWORDS (Aggressive Global Targeting)
  keywords: [
    // 🚀 Core High-Level Roles
    "Full Stack Developer", 
    "AI Engineer",
    "UI/UX Designer", 
    "SEO Optimization Expert",
    "Lovable Developer", // Your personal brand keyword

    // 🌏 Global "Hire Me" Intents
    "Hire Next.js Developer",
    "Hire React Developer India",
    "Top Rated Freelance Developer",
    "Remote Software Engineer",
    "Hire Python Expert",
    
    // 💼 Platform Specific (Targeting people searching for these platforms)
    "Upwork Top Rated Developer",
    "Fiverr Pro Web Designer",
    "Naukri Best Developer Profile",
    "Freelance Web Developer for Startups",
    
    // ⚡ Specific Services ("In Minutes" / Speed)
    "Build AI Website Fast",
    "Custom AI Agent Development",
    "SaaS MVP Development Service",
    "Convert Figma to React Code",
    "Automate Business with AI",
    
    // 🛠 Tech Stack Specific
    "Next.js 14", "React.js", "TypeScript", "Python", "FastAPI", 
    "Django REST Framework", "OpenAI API Integration", "LangChain", 
    "Tailwind CSS", "GSAP Animations", "Web3 Dashboard"
  ],
  
  authors: [{ name: "Mahenoor" }],
  creator: "Mahenoor",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mahenoor | Build AI-Powered Web Apps Fast",
    description: "Need a developer? I build scalable AI agents, SaaS platforms, and stunning UI/UX designs. SEO-optimized and delivered fast. Let's work together.",
    siteName: "Mahenoor Portfolio",
    images: [
      {
        url: "/Banner.png", 
        width: 1200,
        height: 630,
        alt: "Mahenoor - Top 1% Full Stack & AI Developer",
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
  
  // Verification for search consoles
  verification: {
    google: "cMnZb7DD-LViMD84Lb68pko6L9heuvK-bCiTL7ET8Dk", 
  }
};

export default function RootLayout({ children }) {
  // 4. JSON-LD (Structured Data for Google)
  // This tells Google who you are and connects your website to your profiles.
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
    // ✅ CRITICAL: Add your actual profile links here if you have them!
    "sameAs": [
      "https://www.linkedin.com/in/salat-mahenoor/", 
      "https://github.com/mahenoorsalat",

     "https://www.fiverr.com/salat_mahenoor?source=gig_page",
     "https://www.upwork.com/freelancers/~017b36696fdb312255",
     "https://www.youtube.com/@MahenoorSalat"

    ],
    "knowsAbout": [
      "Web Development", "UI/UX Design", "Artificial Intelligence",
      "Machine Learning", "AI Agents", "Automation", "SEO",
      "React", "Next.js", "Python", "Django", "Blockchain"
    ]
  };

return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        {/* ✅ SEO INJECTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <SmoothScroll> 
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="theme"
          >
            <Navbar />
            <main>
               <PageWrapper>
                  {children}
               </PageWrapper>
            </main>
            <Footer />
          </ThemeProvider>
        </SmoothScroll>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
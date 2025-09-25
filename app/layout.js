import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahenoor Salat | Full-Stack Developer, UI/UX Designer & SEO Expert",
  description:
    "Mahenoor Salat is a versatile Full-Stack Web & App Developer, UI/UX Designer, SEO Specialist, and Video Editor. Delivering high-performance websites, apps, and digital solutions.",
  authors: [{ name: "Mahenoor Salat", url: "https://thefullstack-dev.vercel.app" }],
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "App Developer",
    "UI/UX Designer",
    "SEO Specialist",
    "Video Editor",
    "Freelance Developer",
    "Hire Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Mahenoor Salat | Full-Stack Developer, UI/UX Designer & SEO Expert",
    description:
      "Hire Mahenoor Salat for Web & App Development, UI/UX Design, SEO, and Video Editing. Trusted freelancer with professional digital solutions.",
    url: "https://thefullstack-dev.vercel.app",
    siteName: "Mahenoor Salat Portfolio",
    images: [
      {
        url: "https://images.pexels.com/photos/9969147/pexels-photo-9969147.jpeg",
        width: 1200,
        height: 630,
        alt: "Mahenoor Salat Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahenoor Salat | Full-Stack Developer, UI/UX Designer & SEO Expert",
    description:
      "Explore the portfolio of Mahenoor Salat — Full-Stack Developer, UI/UX Designer, SEO Specialist, and Video Editor.",
    images: [
      "https://images.pexels.com/photos/9969147/pexels-photo-9969147.jpeg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}

import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Mahenoor | Full Stack Developer & UI/UX Designer",
  description: "Learn about Mahenoor's journey, technical skills in Next.js & Python, and experience delivering global web solutions.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Mahenoor | Developer Bio",
    description: "Versatile Full-Stack Developer skilled in MERN, Next.js, and AI Agents.",
    url: '/about',
    images: [{ url: '/profile.jpeg', width: 800, height: 800, alt: "Mahenoor Profile" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
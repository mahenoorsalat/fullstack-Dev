import WorkContent from "./WorkContent";

export const metadata = {
  title: "Projects | Mahenoor Salat — Portfolio & Case Studies",
  description: "Browse projects by Mahenoor Salat — web apps, UI/UX designs, SEO implementations, full stack work, and more. See technical details and results.",
  keywords: ["Web Development Portfolio", "UI/UX Case Studies", "React Projects", "Next.js Examples"],
  openGraph: {
    title: "Projects | Mahenoor Salat",
    description: "Explore Mahenoor Salat’s portfolio: full stack apps, design case studies, SEO strategies, and more.",
    url: '/work',
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
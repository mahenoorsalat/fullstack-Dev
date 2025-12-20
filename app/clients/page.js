import ClientsContent from "./ClientsContent";

export const metadata = {
  title: "Hire Mahenoor | Freelance Full Stack Developer & AI Engineer",
  description: "Read client testimonials from USA, Australia, and Europe. Hire a top-rated Full Stack Developer for your Next.js and AI projects.",
  keywords: ["Hire React Developer", "Freelance Web Developer", "Upwork Top Rated", "Client Testimonials"],
  openGraph: {
    title: "Hire Mahenoor | Client Success Stories",
    description: "See what clients from around the world say about working with Mahenoor.",
    url: '/clients',
  },
};

export default function ClientsPage() {
  return <ClientsContent />;
}
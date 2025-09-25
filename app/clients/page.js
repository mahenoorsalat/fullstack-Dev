"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Star,
  Quote,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image"; // ✅ use next/image

// ✅ Component Name should be PascalCase
const Clients = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const contactFormRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ✅ Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "", budget: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Testimonial Card Component
  const TestimonialCard = ({
    name,
    role,
    company,
    feedback,
    rating = 5,
    avatar,
    featured = false,
  }) => (
    <div
      className={`group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 transition-opacity duration-500 group-hover:opacity-70" />
      )}

      <div
        className={`${
          featured
            ? "text-blue-600 dark:text-blue-400"
            : "text-blue-500 dark:text-blue-400"
        } mb-6 relative z-10`}
      >
        <Quote className={`${featured ? "w-8 h-8" : "w-6 h-6"} fill-current`} />
      </div>

      <div className="flex items-center mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            } transition-colors duration-300`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating}.0
        </span>
      </div>

      <p
        className={`text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed relative z-10 ${
          featured ? "text-lg" : "text-base"
        }`}
      >
        &quot;{feedback}&quot;
      </p>

      <div className="flex items-center space-x-4 relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-lg">{name[0]}</span>
          )}
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
            {name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {role}
          </p>
          {company && (
            <p className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
              {company}
            </p>
          )}
        </div>
      </div>

      {featured && (
        <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}
    </div>
  );


const testimonials = [
  {
    name: "Alexene Tomate",
    avatar: "/testimonial-11.png",  // ✅
    role: "Open Source Enthusiastic",
    company: "Philippines",
    feedback:
      "I had the pleasure of working with Mahenoor Salat on the development of the ServeStream website for our digital marketing agency. I can confidently say she&apos;s a promising frontend web developer. Mahenoor is not only quick to execute tasks but also incredibly proactive, constantly volunteering to take on responsibilities and delivering results efficiently. She consistently offered thoughtful recommendations and improvements that elevated the project. Her initiative and sense of ownership is admirable. If you&apos;re looking for someone who combines technical skill with a strong work ethic and a collaborative spirit, Mahenoor is a fantastic choice. I look forward to seeing all the amazing work she continues to produce!",
    rating: 5,
    featured: true,
  },
  {
    name: "Dr. Bruno Woltzenlogel Paleo",
    avatar: "/testimonial-6.jpg",  // ✅
    role: "AOSSIE Founder - GSOC",
    company: "Australia",
    feedback:
      "Mahenoor participated in the apprenticeship program of The Stable Order, an organization dedicated to bringing stability to decentralized finance. She replaced the landing page of our hodlCoin staking protocol, which used to be just a jekyll page, by a completely new and nice-looking page using v0.dev, next.js and tailwind CSS. During the process, Mahenoor was attentive to feedback and persistent to achieve the end goal of her project. We are grateful for her contribution and we look forward to having her as a long-term contributor.",
    rating: 5,
    featured: true,
  },
  {
    name: "Sajiya Salat",
    avatar: "/testimonial-3.png",  // ✅
    role: "CEO - RKWEB",
    company: "India",
    feedback:
      "I am pleased to recommend Mahenoor for any web development and design role. Throughout our time working together, Mahenoor consistently demonstrated exceptional technical skills, creativity, and a deep understanding of both web development and design principles.",
    rating: 5,
  },
  {
    name: "Nathan wong",
    avatar: "/testimonial-1.jpg",  // ✅ fixed
    role: "Software Developer",
    company: "United States",
    feedback:
      "It was a pleasure working with Mahenoor. She has exceeded my expectations and went above and beyond to provide a better user experience to our users. Her creativity and attention to detail provide users with an overall great experience.",
    rating: 5,
  },
  {
    name: "Dmytry",
    avatar: "/testimonial-8.png",  // ✅ fixed
    role: "Project Manager",
    company: "Ukraine",
feedback: "I am so surprised again. She is very talented and professional designer. Just Recommend her as designer. Thanks Mahi.",


    rating: 5,
  },
  {
    name: "JAKECOVINGTON",
    avatar: "/testimonial-9.png",  // ✅ fixed
    role: "CEO",
    company: "United States",
    feedback:
      "Working with Mahenoor transformed our entire product experience. Her design engineering expertise helped us launch 3x faster while maintaining the highest quality standards.",
    rating: 5,
  },
  {
    name: "Dhrumil",
    avatar: "/testimonial-7.jpg",  // ✅ fixed
    role: "Full Stack Dev",
    company: "United States",
    feedback:
      "Mahenoor moved seamlessly from planning to implementation, showing her strong development skills. I recommend Mahenoor to anyone seeking a UI/UX professional. Her technical skills and collaborative approach make her a valuable team member.",
    rating: 5,
  },
  {
    name: "Radu Marias",
    avatar: "/testimonial-4.jpg",  // ✅ fixed
    role: "CEO - Xorio",
    company: "Romania",
    feedback:
      "I had the pleasure of working with Mahenoor on several critical projects, and her expertise in web development, SEO, and design was exceptional. She created professional, user-friendly websites translating complex technical concepts into clear and visually appealing platforms.",
    rating: 5,
  },
  {
    name: "Kristian",
    avatar: "/testimonial-10.png",  // ✅ fixed
    role: "Software Dev",
    company: "United Kingdom",
    feedback:
      "It was a pleasure working with Mahenoor on our open source project. She transformed our ideas into a better user experience through meticulous UI/UX improvements. Her proposals, documentation, and mockups helped shape our final design decisions.",
    rating: 5,
  },
  {
    name: "Mels",
    avatar: "/testimonial-5.png",  // ✅ fixed
    role: "Founder - Zoomerang",
    company: "United States",
    feedback:
      "professional did without time delay and good idea of what I needed. thank you for your hard work",
    rating: 5,
  },
];



  return (
<>
  <Head>
        <title>Mahenoor Salat | Trusted Web & App Developer | Client Testimonials</title>
        <meta
          name="description"
          content="Discover what clients worldwide say about Mahenoor Salat. Full-Stack Web & App Developer, UI/UX Designer, SEO Expert, Video Editor. Delivering high-quality projects that impress and retain clients."
        />
        <meta
          name="keywords"
          content="Client Testimonials, Web Developer, Frontend Developer, Backend Developer, UI/UX Designer, SEO Optimizer, Video Editor, Freelance Developer, Trusted Developer, Project Portfolio"
        />
        <meta name="author" content="Mahenoor Salat" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mahenoor Salat | Trusted Web & App Developer | Client Testimonials"
        />
        <meta
          property="og:description"
          content="See what clients and collaborators say about working with Mahenoor Salat. Expert in Web Development, UI/UX, SEO, and Video Editing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/clients" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mahenoor Salat | Trusted Web & App Developer | Client Testimonials"
        />
        <meta
          name="twitter:description"
          content="Read reviews and feedback from clients worldwide about Mahenoor Salat&apos;s work as a Web & App Developer, UI/UX Designer, SEO Optimizer, and Video Editor."
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg"
        />
      </Head>

    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Blur */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] pointer-events-none rounded-full overflow-hidden transition-all duration-[3000ms] ease-out ${
          isLoaded ? "opacity-40 scale-100" : "opacity-80 scale-125"
        }`}
      >
        <div
          className="absolute inset-0 bg-[rgb(124,222,242)] dark:bg-[rgb(59,130,246)] rounded-full blur-[200px] opacity-40 dark:opacity-30 transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${
              mousePosition.y * 5
            }px) scale(${isLoaded ? 1 : 1.2})`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
            <div className="group inline-flex items-center px-4 py-2 mb-8 cursor-pointer relative overflow-hidden rounded-full bg-green-100/80 dark:bg-green-900/50 border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-800 ease-out bg-gradient-to-r from-transparent via-white/40 dark:via-gray-200/20 to-transparent skew-x-12" />
              <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-900 ease-out delay-75 bg-gradient-to-r from-transparent via-green-200/30 dark:via-green-600/20 to-transparent skew-x-12" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/0 via-green-500/5 dark:via-green-400/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center space-x-2">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Client Love</span>
              <div className="w-px h-4 bg-green-300/70 dark:bg-green-600/70" />
              <span className="text-sm text-green-700 dark:text-green-300 group-hover:text-green-800 dark:group-hover:text-green-200 transition-colors duration-300">
                What they say
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
            Trusted by amazing <br /> teams worldwide
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See what clients and collaborators say about working with me.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "Happy Clients" },
            { number: "200+", label: "Projects Delivered" },
            { number: "5.0", label: "Average Rating" },
            { number: "98%", label: "Client Retention" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        ref={contactFormRef}
        id="contact"
className="py-20 px-4 max-w-6xl mx-auto relative z-10"      >
        <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your company"
                  />
                </div>
<div>
  <label
    htmlFor="budget"
    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
  >
    Budget Range *
  </label>
  <select
    id="budget"
    name="budget"
    value={formData.budget}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100"
  >
    <option value="">Select your budget</option>
    <option value="<$500">Less than $500</option>
    <option value="$500-$1000">$500 - $1000</option>
    <option value="$1000-$5000">$1000 - $5000</option>
    <option value=">$5000">Above $5000</option>
  </select>
</div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 dark:bg-green-900/50 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. I will get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 dark:bg-red-900/50 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center px-6 py-4 bg-black text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>    
                </section>
    </div>
</>
  );
};

export default Clients;
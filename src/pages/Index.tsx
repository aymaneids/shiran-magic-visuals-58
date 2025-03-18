
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Palette, Users, Heart, CalendarDays, BookOpen } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCard from "@/components/ui/ServiceCard";
import ImageGallery from "@/components/ui/ImageGallery";

const featuredImages = [
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Portrait photography",
    title: "Portrait Session",
    category: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Family photography",
    title: "Family Memories",
    category: "Family"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Event photography",
    title: "Special Events",
    category: "Event"
  },
];

const testimonials = [
  {
    text: "Shiran captured the essence of our family in a way that we'll cherish forever. Her ability to make everyone feel comfortable resulted in the most natural and beautiful photos we've ever had.",
    author: "Sarah M., Family Session"
  },
  {
    text: "Not only did Shiran take amazing photos for my PR materials, but her makeup expertise enhanced my natural features without making me look overdone. A true professional with an artist's eye.",
    author: "Michael K., PR Photoshoot"
  },
  {
    text: "My daughter's Bat Mitzvah book is an absolute masterpiece. Shiran has a gift for capturing emotions and meaningful moments. We couldn't be happier with her work.",
    author: "Rachel T., Bat Mitzvah"
  }
];

const IndexPage = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 elegant-container text-center text-white">
          <FadeIn delay={300} duration={800} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Shiran Itzhaki
            </h1>
          </FadeIn>
          
          <FadeIn delay={600} duration={800} direction="up">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Photographer & Makeup Artist | NY & NJ Area
            </p>
          </FadeIn>
          
          <FadeIn delay={900} duration={800} direction="up">
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Capturing Your Vision | PR, Portraits, Families, Events
            </p>
          </FadeIn>
          
          <FadeIn delay={1200} duration={800} direction="up">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-white text-foreground font-medium rounded-md hover:bg-white/90 transition-colors button-shine"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Contact Shiran
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-cream">
        <div className="elegant-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504893524553-b855bce32c67" 
                  alt="Shiran Itzhaki"
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={300}>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  About Shiran
                </h2>
                <p className="text-muted-foreground">
                  Shiran Itzhaki is a professional photographer and makeup artist based in the NY/NJ area, specializing in creating beautiful imagery that captures the essence of each subject.
                </p>
                <p className="text-muted-foreground">
                  With a dual expertise in both photography and makeup artistry, Shiran offers a unique perspective and complete service, ensuring that every client looks and feels their best in front of the camera.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center font-medium mt-2"
                >
                  Learn more about Shiran
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Featured Services
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive photography and makeup services tailored to your needs
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-sequence">
            <FadeIn delay={100}>
              <ServiceCard
                title="PR Photography"
                description="Professional images for your personal brand, business, or portfolio."
                icon={<Camera className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
            
            <FadeIn delay={200}>
              <ServiceCard
                title="Portrait Photography"
                description="Capturing your essence in beautifully composed individual portraits."
                icon={<Palette className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
            
            <FadeIn delay={300}>
              <ServiceCard
                title="Family Photography"
                description="Preserve precious family moments with natural, authentic imagery."
                icon={<Users className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
            
            <FadeIn delay={400}>
              <ServiceCard
                title="Event Photography"
                description="Document your special events with a keen eye for meaningful moments."
                icon={<CalendarDays className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
            
            <FadeIn delay={500}>
              <ServiceCard
                title="Bat Mitzvah Books"
                description="Custom-designed memory books that tell the story of this important milestone."
                icon={<BookOpen className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
            
            <FadeIn delay={600}>
              <ServiceCard
                title="Makeup Services"
                description="Professional makeup application to enhance your natural beauty for any occasion."
                icon={<Heart className="h-6 w-6 text-primary" />}
                link="/services"
              />
            </FadeIn>
          </div>
          
          <FadeIn delay={800}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center font-medium"
              >
                View all services
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-muted">
        <div className="elegant-container">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Featured Work
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A glimpse into Shiran's portfolio of photography and makeup artistry
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={300}>
            <ImageGallery images={featuredImages} />
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors button-shine"
              >
                View Full Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Client Testimonials
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What clients are saying about their experience with Shiran
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                  <p className="italic text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-medium">{testimonial.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-foreground text-white">
        <div className="elegant-container text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Work Together?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's create beautiful imagery that tells your story. Contact Shiran to discuss your project.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-foreground font-medium rounded-md hover:bg-white/90 transition-colors button-shine"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

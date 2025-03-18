
import React from "react";
import { Link } from "react-router-dom";
import { Camera, Palette, Award, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const AboutPage = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="elegant-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="space-y-6">
                <h1 className="font-serif text-4xl md:text-5xl font-medium">
                  About Shiran
                </h1>
                <p className="text-muted-foreground text-lg">
                  Photographer, makeup artist, and creative visionary based in the NY/NJ area.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
                  alt="Shiran Itzhaki"
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-3xl font-medium mb-6">
                My Story
              </h2>
            </FadeIn>
            
            <div className="space-y-6 text-muted-foreground">
              <FadeIn delay={100}>
                <p>
                  With over a decade of experience in both photography and makeup artistry, I've developed a unique approach that combines these complementary skills to create stunning imagery that captures the essence of my subjects.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p>
                  My journey began with a passion for visual storytelling and a deep appreciation for the transformative power of both photography and makeup. I believe that everyone deserves to see themselves beautifully captured, and I take pride in my ability to help clients feel comfortable and confident in front of the camera.
                </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p>
                  Based in the NY/NJ area, I specialize in PR photography, portraits, family photography, event coverage, and creating custom Bat Mitzvah books. My dual expertise in photography and makeup allows me to offer a comprehensive service that ensures you look and feel your best during our sessions.
                </p>
              </FadeIn>
              
              <FadeIn delay={400}>
                <p>
                  Every project is approached with creativity, attention to detail, and a commitment to exceeding expectations. I believe in building relationships with my clients based on trust and collaboration, working closely with you to understand your vision and bring it to life.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-cream">
        <div className="elegant-container">
          <FadeIn>
            <h2 className="font-serif text-3xl font-medium mb-10 text-center">
              Expertise & Approach
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeIn delay={100} direction="right">
              <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Photography</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trained in professional portraiture and event photography</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expert in natural and studio lighting techniques</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Skilled in capturing authentic emotions and meaningful moments</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional post-processing and retouching</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} direction="left">
              <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Makeup Artistry</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trained in professional makeup application techniques</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Experience with diverse skin tones and facial features</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Focus on enhancing natural beauty rather than masking it</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Usage of high-quality, camera-ready products</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl font-medium mb-6">
                My Philosophy
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                "I believe that every person has a unique story and beauty that deserves to be captured authentically. My goal is to create images that not only look beautiful but also feel genuine and timeless."
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <Link
                to="/contact"
                className="px-6 py-3 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors button-shine inline-block"
              >
                Let's Work Together
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

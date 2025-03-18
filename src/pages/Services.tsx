
import React from "react";
import { Link } from "react-router-dom";
import { Camera, Palette, Users, Heart, CalendarDays, BookOpen } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    id: "pr-photography",
    icon: <Camera className="h-6 w-6 text-primary" />,
    title: "PR Photography",
    description: "Professional photography services tailored for personal branding, business profiles, and portfolio development. Ideal for professionals, entrepreneurs, and artists looking to enhance their visual presence.",
    details: [
      "Professional headshots and portraits for your brand",
      "Editorial style photoshoots for marketing materials",
      "Content creation for social media and websites",
      "Corporate team photos and executive portraits"
    ],
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
  },
  {
    id: "portrait-photography",
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: "Portrait Photography",
    description: "Capture your essence with beautifully composed individual portraits. Sessions are tailored to reflect your personality and style, resulting in images that are authentically you.",
    details: [
      "Individual portrait sessions",
      "Couples portraits",
      "Studio and on-location options",
      "Styling and wardrobe consultation"
    ],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    id: "family-photography",
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Family Photography",
    description: "Preserve precious family moments with natural, authentic imagery. From traditional family portraits to candid lifestyle sessions, capture the connections and personalities that make your family unique.",
    details: [
      "Family portrait sessions",
      "Extended family gatherings",
      "Children's portraits",
      "Generational family photoshoots"
    ],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "event-photography",
    icon: <CalendarDays className="h-6 w-6 text-primary" />,
    title: "Event Photography",
    description: "Document your special events with a keen eye for meaningful moments. From intimate gatherings to large celebrations, capture the atmosphere, emotions, and details of your memorable occasions.",
    details: [
      "Bar and Bat Mitzvahs",
      "Corporate events and conferences",
      "Social gatherings and parties",
      "Milestone celebrations"
    ],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: "bat-mitzvah-books",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Bat Mitzvah Books",
    description: "Custom-designed memory books that tell the story of this important milestone. Combining photography and design to create a beautiful keepsake that captures all aspects of the Bat Mitzvah journey.",
    details: [
      "Pre-event portrait sessions",
      "Ceremony and celebration coverage",
      "Custom album design",
      "High-quality printing and binding options"
    ],
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
  },
  {
    id: "makeup-services",
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Makeup Services",
    description: "Professional makeup application to enhance your natural beauty for any occasion. Whether for a photoshoot, special event, or just because, look and feel your best with makeup that complements your features.",
    details: [
      "Photography session makeup",
      "Special event makeup",
      "Bridal and formal occasion makeup",
      "Makeup lessons and consultations"
    ],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="elegant-container">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Services
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Comprehensive photography and makeup services tailored to your unique needs
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h2 className="font-serif text-3xl font-medium">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4 pt-4">
                        <h3 className="font-medium text-lg">What's Included:</h3>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="h-2 w-2 rounded-full bg-accent-foreground"></div>
                              </div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        to="/contact"
                        className="inline-block px-6 py-3 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors mt-4 button-shine"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </FadeIn>
                  
                  <FadeIn direction={index % 2 === 0 ? "left" : "right"} delay={200}>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="section-padding bg-cream">
        <div className="elegant-container text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl font-medium mb-6">
              Ready to Discuss Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact Shiran to discuss your specific needs and receive a customized quote tailored to your project.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors button-shine"
            >
              Request a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

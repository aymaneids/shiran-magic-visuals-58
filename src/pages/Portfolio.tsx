
import React, { useState } from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import FadeIn from "@/components/ui/FadeIn";

const categories = [
  "All",
  "PR",
  "Portraits",
  "Families",
  "Events",
  "Bat Mitzvahs",
  "Makeup"
];

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Professional portrait of a woman",
    title: "Executive Portrait",
    category: "PR"
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Family in a field at sunset",
    title: "Summer Family Session",
    category: "Families"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Event photography",
    title: "Annual Gala",
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Makeup application for a bride",
    title: "Bridal Makeup",
    category: "Makeup"
  },
  {
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    alt: "Portrait of a young professional",
    title: "Corporate Headshot",
    category: "PR"
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    alt: "Bat Mitzvah celebration",
    title: "Sarah's Bat Mitzvah",
    category: "Bat Mitzvahs"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Artistic portrait in studio",
    title: "Creative Portrait",
    category: "Portraits"
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Mother and daughter portrait",
    title: "Mother & Daughter",
    category: "Families"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Corporate event photography",
    title: "Product Launch",
    category: "Events"
  }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === activeCategory);

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="elegant-container">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Explore Shiran's diverse collection of photography and makeup artistry
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-padding">
        <div className="elegant-container">
          {/* Category Filter */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-foreground text-white"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Gallery */}
          <FadeIn delay={300}>
            <ImageGallery 
              images={filteredImages} 
              columns={3} 
            />
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-cream">
        <div className="elegant-container text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl font-medium mb-6">
              Let's Create Beautiful Images Together
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to book your own photography or makeup session? Get in touch to discuss your vision.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <a
              href="/contact"
              className="px-8 py-4 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors button-shine inline-block"
            >
              Contact Shiran
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

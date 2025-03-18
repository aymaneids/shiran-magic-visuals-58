
import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "@/components/ui/FadeIn";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "Shiran will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="elegant-container">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Get In Touch
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Let's discuss your photography or makeup needs
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="elegant-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                <h2 className="font-serif text-2xl font-medium mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="PR Photography">PR Photography</option>
                      <option value="Portrait Photography">Portrait Photography</option>
                      <option value="Family Photography">Family Photography</option>
                      <option value="Event Photography">Event Photography</option>
                      <option value="Bat Mitzvah Books">Bat Mitzvah Books</option>
                      <option value="Makeup Services">Makeup Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-foreground text-white font-medium rounded-md hover:bg-foreground/90 transition-colors button-shine flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
            
            {/* Contact Information */}
            <FadeIn direction="left" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href="mailto:contact@shiranitzhaki.com" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          contact@shiranitzhaki.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a 
                          href="tel:+12125551234" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          (212) 555-1234
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">
                          Serving the New York & New Jersey area
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Instagram className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a 
                          href="https://instagram.com/shiranitzhaki" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          @shiranitzhaki
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-6">
                    Business Hours
                  </h2>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>By appointment</div>
                    <div>Sunday</div>
                    <div>By appointment</div>
                  </div>
                </div>
                
                <div className="p-6 bg-cream rounded-lg border border-border">
                  <h3 className="font-serif text-xl font-medium mb-4">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground">
                    Shiran typically responds to all inquiries within 24-48 hours. For urgent matters, please call directly.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

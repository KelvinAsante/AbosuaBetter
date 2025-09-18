import Navigation from "@/components/Navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Award, Heart, Globe } from "lucide-react";

// Slideshow component for hero section
const heroImages = ["/Abusua hero.png", "/Abusua (2).png"];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={heroImages[current]}
        alt="Abusua Bitters Slide"
        className="w-full object-cover transition-all duration-700 rounded-none md:rounded-xl md:h-[600px] md:w-screen h-[40vh]"
        style={{
          minHeight: '200px',
          minWidth: '100vw',
          maxHeight: '600px',
          maxWidth: '100vw',
        }}
      />
    </div>
  );
}

const Home = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "100% Natural",
      description: "Made from carefully selected natural herbs and ingredients"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "Crafted with traditional methods for authentic taste"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health Benefits",
      description: "Natural digestive aid with traditional herbal properties"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Authentic Heritage",
      description: "Rooted in African tradition and cultural authenticity"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section - Slideshow */}
      <section
        className="relative w-full flex justify-center items-center md:h-[600px] h-[40vh]"
        style={{ minHeight: '200px', maxHeight: '600px', width: '100vw', background: '#222' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center py-16">
          <HeroSlideshow />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Choose Abusua Bitters?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Experience the perfect blend of tradition and quality with our premium herbal bitters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-premium transition-all duration-300 animate-fade-in">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Abusua Bitters?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join thousands of satisfied customers who trust Abusua Bitters for quality and authenticity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full font-semibold"
              onClick={() => window.location.href = '/distributors'}
            >
              Find Distributors
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Abusua Bitters</h3>
            <p className="text-primary-foreground/80">Nnubena Nkoa</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Instagram  
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Twitter
            </a>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm mb-2">
              © 2024 Abusua Bitters. All rights reserved.
            </p>
            <p className="text-secondary text-sm font-medium">
              Please Drink Responsibly
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
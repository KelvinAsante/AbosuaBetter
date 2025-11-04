import Navigation from "@/components/Navigation";
import React, { useState, useEffect, useRef } from "react";
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
        loading="lazy"
        decoding="async"
        width={1600}
        height={600}
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Ensure video is muted to allow autoplay on most browsers
    el.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // try to play, ignore errors (some browsers block autoplay unless muted)
            el.play().catch(() => {});
          } else {
            // pause and rewind a little for a clean replay when user scrolls back
            try {
              el.pause();
              // optional: reset to 0 for replay; comment out if you prefer pause position
              el.currentTime = 0;
            } catch (e) {}
          }
        });
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Brand section data
  const brands = [
    {
      title: "Abusua Bitters Bottle",
      description: "Abusua Bitters is crafted from a blend of natural herbs, providing a unique and refreshing herbal experience. Enjoy the authentic taste and tradition of Abusua Herbal Center.",
  img: "/Abusua Bitters yellow.png"
    },
    {
      title: "Abusua Bitters Sachet",
      description: "Experience the same great herbal blend in a convenient sachet. Perfect for on-the-go enjoyment, Abusua Bitters Sachet delivers quality and tradition in every sip.",
      img: "/Abusua shachet.png"
    },
    {
      title: "Abusua Bitters Promo",
      description: "Discover the spirit of Abusua Bitters. Our promotional pack highlights the rich heritage and premium quality of our herbal bitters, trusted by many.",
      img: "/Abusua Betters.png"
    }
  ];
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

      

      {/* Abusua Bitters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">ABUSUA BITTERS</h2>
          <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Abusua Bitters is a premium herbal beverage made from carefully selected natural ingredients. Rooted in tradition and crafted for quality, Abusua Bitters delivers a refreshing and authentic taste experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md flex flex-col items-center p-6">
                <img src={brand.img} alt={brand.title} loading="lazy" decoding="async" width={400} height={256} className="w-full h-64 object-contain rounded-lg mb-4 bg-gray-50" />
                <h3 className="text-xl font-bold text-center mb-2">{brand.title}</h3>
                <p className="text-gray-700 text-center mb-4">{brand.description}</p>
                <button className="bg-green-700 text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition">Buy Me</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section - shows video from public folder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Watch Our Story</h2>
          <div className="w-full relative">
            <video
              ref={videoRef}
              src="/abusua-video2.mp4"
              controls
              muted
              playsInline
              poster="/placeholder.svg"
              className="w-full h-auto rounded-lg shadow-md"
              preload="none"
              aria-label="Abusua Bitters promotional video"
            >
              Sorry, your browser doesn't support embedded videos. You can
              <a href="/abusua-video2.mp4" className="text-primary underline ml-1">download the video</a> instead.
            </video>
          </div>
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
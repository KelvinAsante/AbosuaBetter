import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Leaf, Users, Award, Globe2 } from "lucide-react";
import ingredientsImage from "@/assets/natural-ingredients.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Natural Heritage",
      description: "We honor traditional African herbal practices passed down through generations"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Focus", 
      description: "Supporting local communities and celebrating our shared cultural heritage"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "Uncompromising commitment to quality in every bottle we produce"
    },
    {
      icon: <Globe2 className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Sharing authentic African flavors with the world while maintaining authenticity"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            About Abusua Bitters
          </h1>
          <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto">
            A legacy of authentic African herbal tradition meets modern premium quality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Abusua Bitters was born from a deep respect for traditional African herbal medicine 
                and a commitment to preserving our cultural heritage. Our name "Abusua" means 
                "family" in Twi, reflecting our belief that our products bring people together 
                and create lasting connections.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with the vision of sharing authentic African flavors with the world, 
                we combine time-honored recipes with modern production methods to create 
                premium herbal bitters that honor our ancestors while meeting contemporary 
                quality standards.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-primary font-semibold text-lg italic">
                  "Nnubena Nkoa" - A legacy of quality and authenticity
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={ingredientsImage}
                alt="Natural ingredients"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="w-full h-56 sm:h-72 md:h-96 object-cover object-center rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every decision we make is guided by these core principles that define who we are
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-premium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Natural Ingredients</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Our bitters are crafted using carefully selected natural herbs and botanicals, 
            each chosen for their unique properties and contribution to our authentic flavor profile.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Herbs</h3>
              <p className="text-muted-foreground">
                Sourced from trusted suppliers who share our commitment to quality and sustainability
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Tested</h3>
              <p className="text-muted-foreground">
                Every batch undergoes rigorous testing to ensure consistency and purity
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethically Sourced</h3>
              <p className="text-muted-foreground">
                Supporting fair trade practices and sustainable harvesting methods
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
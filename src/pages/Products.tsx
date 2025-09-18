import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wine, Award, Leaf } from "lucide-react";
import heroBottle from "@/assets/abusua-hero-bottle.jpg";
import productsImage from "@/assets/abusua-products.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Abusua Original Bitters",
      image: heroBottle,
      volume: "750ml",
      alcohol: "25% ABV",
      price: "Contact for pricing",
      description: "Our flagship herbal bitters featuring a complex blend of traditional African herbs and botanicals",
      features: ["Premium Quality", "Natural Ingredients", "Traditional Recipe"],
      popular: true
    },
    {
      id: 2,
      name: "Abusua Premium Collection",
      image: productsImage,
      volume: "500ml",
      alcohol: "30% ABV", 
      price: "Contact for pricing",
      description: "Limited edition premium bitters with enhanced herbal concentration for connoisseurs",
      features: ["Limited Edition", "Enhanced Formula", "Collector's Item"],
      popular: false
    },
    {
      id: 3,
      name: "Abusua Traditional Blend",
      image: heroBottle,
      volume: "1000ml",
      alcohol: "25% ABV",
      price: "Contact for pricing", 
      description: "Family-size bottle perfect for gatherings and celebrations with authentic traditional taste",
      features: ["Family Size", "Traditional Blend", "Value Pack"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Our Products
          </h1>
          <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto">
            Discover our premium range of authentic herbal bitters crafted with traditional recipes
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-premium transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Wine className="h-4 w-4 text-primary" />
                        <span className="font-medium">{product.volume}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-medium">{product.alcohol}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every bottle represents our commitment to quality, authenticity, and the preservation of traditional herbal knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
              <p className="text-muted-foreground">
                Made exclusively from natural herbs and botanicals with no artificial additives or preservatives
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Rigorous quality control ensures every bottle meets our high standards for purity and potency
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Traditional Recipes</h3>
              <p className="text-muted-foreground">
                Time-tested formulations passed down through generations, perfected over centuries
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Experience Abusua Bitters?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact our distributors to find Abusua Bitters near you or inquire about wholesale opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full font-semibold">
              Find Distributors
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Distributors = () => {
  const distributors = [
    {
      id: 1,
      name: "Premium Spirits Ghana",
      location: "Accra, Greater Accra Region",
      address: "123 Oxford Street, Osu, Accra",
      phone: "+233 24 123 4567",
      email: "info@premiumspirits.gh",
      hours: "Mon-Sat: 9AM-8PM",
      region: "Greater Accra"
    },
    {
      id: 2,
      name: "Ashanti Beverages Ltd",
      location: "Kumasi, Ashanti Region",
      address: "45 Kejetia Market, Kumasi",
      phone: "+233 32 456 7890",
      email: "sales@ashantibev.com",
      hours: "Mon-Fri: 8AM-6PM",
      region: "Ashanti"
    },
    {
      id: 3,
      name: "Northern Drinks Co.",
      location: "Tamale, Northern Region",
      address: "12 Central Market, Tamale",
      phone: "+233 37 234 5678",
      email: "orders@northerndrinks.com",
      hours: "Daily: 7AM-7PM",
      region: "Northern"
    },
    {
      id: 4,
      name: "Volta Spirits Distribution",
      location: "Ho, Volta Region",
      address: "78 Market Street, Ho",
      phone: "+233 36 345 6789",
      email: "contact@voltaspirits.gh",
      hours: "Mon-Sat: 8AM-7PM",
      region: "Volta"
    },
    {
      id: 5,
      name: "Western Premium Stores",
      location: "Takoradi, Western Region",
      address: "56 Harbour Road, Takoradi",
      phone: "+233 31 567 8901",
      email: "info@westernpremium.com",
      hours: "Mon-Fri: 9AM-6PM",
      region: "Western"
    },
    {
      id: 6,
      name: "Central Coast Beverages",
      location: "Cape Coast, Central Region",
      address: "34 Commercial Street, Cape Coast",
      phone: "+233 33 678 9012",
      email: "sales@centralcoast.gh",
      hours: "Mon-Sat: 8AM-7PM",
      region: "Central"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Find Our Distributors
          </h1>
          <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto">
            Locate authorized distributors of Abusua Bitters in your area
          </p>
        </div>
      </section>

      {/* Distributors Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributors.map((distributor) => (
              <Card key={distributor.id} className="p-6 hover:shadow-premium transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {distributor.name}
                    </h3>
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                      <span className="text-sm">{distributor.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                      <span>{distributor.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <a href={`tel:${distributor.phone}`} className="hover:text-primary transition-colors">
                        {distributor.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <a href={`mailto:${distributor.email}`} className="hover:text-primary transition-colors">
                        {distributor.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span>{distributor.hours}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Contact Distributor
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Distributor Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Become a Distributor
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interested in becoming an authorized distributor of Abusua Bitters? 
            Join our network of partners and bring authentic herbal bitters to your community.
          </p>
          
          <Card className="p-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Distributor Benefits:
            </h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>Competitive wholesale pricing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>Marketing support and materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>Exclusive territory rights</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>Training and product knowledge</span>
              </li>
            </ul>
            
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              Apply to Become a Distributor
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Need Help Finding Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Can't find a distributor in your area? Contact us directly and we'll help you locate the nearest authorized dealer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full font-semibold">
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full font-semibold"
            >
              Call: +233 24 000 0000
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributors;
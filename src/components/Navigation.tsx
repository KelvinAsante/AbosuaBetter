import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "DISTRIBUTORS", path: "/distributors" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Dynamic classes for logo and nav links
  const logoTextClass = scrolled ? "text-primary" : "text-white";
  const logoBgClass = scrolled ? "bg-gradient-primary" : "bg-white/10";
  const logoLetterClass = scrolled ? "text-primary-foreground" : "text-white";
  const navLinkClass = (active: boolean) =>
    scrolled
      ? active
        ? "text-primary border-b-2 border-primary"
        : "text-foreground hover:text-primary"
      : active
        ? "text-white border-b-2 border-white"
        : "text-white hover:text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg border-b border-border"
          : "bg-transparent border-none"
      }`}
      style={{ backdropFilter: scrolled ? "blur(8px)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${logoBgClass} rounded-lg flex items-center justify-center`}>
              <span className={`font-bold text-lg ${logoLetterClass}`}>A</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-xl font-bold ${logoTextClass}`}>Abusua Bitters</span>
              <p className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>Nnubena Nkoa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${navLinkClass(isActive(item.path))}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
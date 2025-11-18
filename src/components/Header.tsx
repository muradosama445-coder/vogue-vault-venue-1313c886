import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logoBlack} alt="أجاد" className="h-8 dark:hidden" />
          <img src={logoWhite} alt="أجاد" className="h-8 hidden dark:block" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm tracking-wide hover:text-accent transition-colors">
            الرئيسية
          </Link>
          <Link to="/products" className="text-sm tracking-wide hover:text-accent transition-colors">
            المنتجات
          </Link>
          <Link to="/about" className="text-sm tracking-wide hover:text-accent transition-colors">
            من نحن
          </Link>
          <Link to="/contact" className="text-sm tracking-wide hover:text-accent transition-colors">
            تواصل معنا
          </Link>
        </nav>

        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-lg tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/products" 
              className="text-lg tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              المنتجات
            </Link>
            <Link 
              to="/about" 
              className="text-lg tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link 
              to="/contact" 
              className="text-lg tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

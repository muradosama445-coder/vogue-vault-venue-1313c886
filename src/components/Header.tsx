import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logoBlack} alt="أجاد" className="h-8 dark:hidden" />
          <img src={logoWhite} alt="أجاد" className="h-8 hidden dark:block" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#collection" className="text-sm tracking-wide hover:text-accent transition-colors">
            المجموعة
          </a>
          <a href="/#about" className="text-sm tracking-wide hover:text-accent transition-colors">
            من نحن
          </a>
          <Link to="/contact" className="text-sm tracking-wide hover:text-accent transition-colors">
            تواصل معنا
          </Link>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          القائمة
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-semibold tracking-tight">AELLA</h1>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collection" className="text-sm tracking-wide hover:text-accent transition-colors">
            Collection
          </a>
          <a href="#about" className="text-sm tracking-wide hover:text-accent transition-colors">
            About
          </a>
          <a href="#newsletter" className="text-sm tracking-wide hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;

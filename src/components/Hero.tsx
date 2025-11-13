import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-6xl md:text-8xl font-serif font-light mb-6 tracking-tight animate-fade-in">
          Timeless Elegance
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto tracking-wide">
          Where minimalist design meets sustainable craftsmanship
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base tracking-wide shadow-medium"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

export default Hero;

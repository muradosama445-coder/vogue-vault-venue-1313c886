import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in text-white drop-shadow-lg">
          عبّر عن ذاتك
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto tracking-wide drop-shadow-md">
          ملابس عصرية مصممة بشكل إبداعي لشخصيتك الفريدة
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-neon hover:bg-neon/90 text-neon-foreground px-8 py-6 text-base font-bold tracking-wide shadow-neon"
        >
          <Link to="/products">اكتشف المنتجات</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;

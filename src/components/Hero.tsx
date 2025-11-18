import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-model.jpg";
import { LazyBackground } from "@/components/ui/lazy-background";

const Hero = () => {
  return (
    <LazyBackground 
      src={heroImage} 
      className="h-screen flex items-center justify-center overflow-hidden"
      priority={true}
    >
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
    </LazyBackground>
  );
};

export default Hero;

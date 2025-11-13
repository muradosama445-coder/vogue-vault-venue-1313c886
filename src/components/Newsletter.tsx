import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-tight">
          Stay Connected
        </h2>
        <p className="text-muted-foreground mb-8 tracking-wide">
          Subscribe to receive updates on new collections and exclusive offers
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-secondary border-border"
          />
          <Button 
            type="submit"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 tracking-wide"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

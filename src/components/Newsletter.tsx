import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال البريد الإلكتروني",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "تم الاشتراك بنجاح",
      description: "شكراً لانضمامك لعائلة أجاد",
    });
    
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          انضم لعائلة أجاد
        </h2>
        <p className="text-muted-foreground mb-8 tracking-wide text-lg">
          اشترك لتلقي التحديثات عن المنتجات الجديدة والعروض الحصرية
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 bg-background border-2 border-border focus:border-accent"
          />
          <Button 
            type="submit"
            className="bg-neon hover:bg-neon/90 text-neon-foreground px-8 tracking-wide font-bold shadow-neon"
          >
            اشترك الآن
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

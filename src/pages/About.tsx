import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import { LazyBackground } from "@/components/ui/lazy-background";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <LazyBackground 
        src={aboutHero} 
        className="h-[60vh] flex items-center justify-center overflow-hidden"
        priority={true}
      >
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
            من نحن
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md tracking-wide">
            نؤمن أننا جميعاً نستطيع أن نصنع الفرق
          </p>
        </div>
      </LazyBackground>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              قصتنا
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
              أجاد علامة تجارية يمنية تأسست من شغف حقيقي بالموضة والتصميم. نسعى لخلق ملابس 
              تعبر عن الهوية اليمنية بأسلوب عصري يناسب شخصيات الشباب المبدعين. كل قطعة من 
              منتجاتنا مصممة بعناية فائقة لتجمع بين الجودة والراحة والتصميم الفريد.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Ajjad */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              لماذا تختار أجاد
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-accent text-center">جودة ممتازة</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide text-center">
                نختار مواد عالية الجودة لمنتجاتنا ومصممة بشكل إبداعي لتدوم طويلاً وتمنحك الراحة القصوى
              </p>
            </div>
            
            <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-neon transition-all duration-300">
              <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-neon-foreground text-center">تصميم عصري</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide text-center">
                تصاميم مبتكرة تناسب شخصيات الشباب وتعبر عن الذات بأسلوب فريد ومميز
              </p>
            </div>
            
            <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-accent text-center">ثقافة يمنية</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide text-center">
                نفتخر بتصاميمنا المستوحاة من الثقافة والتقاليد اليمنية الأصيلة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-right">
              <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mr-0">
                <svg className="w-10 h-10 text-neon-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-wide">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                أن نكون العلامة التجارية الأولى التي تجمع بين الأصالة اليمنية والموضة العصرية، 
                ونلهم الشباب للتعبير عن ذواتهم بثقة وإبداع
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mr-0">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-wide">رسالتنا</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                نسعى لتقديم ملابس عالية الجودة بتصاميم فريدة تعكس الهوية اليمنية، 
                ونساهم في دعم الصناعة المحلية وتمكين المواهب الشابة
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
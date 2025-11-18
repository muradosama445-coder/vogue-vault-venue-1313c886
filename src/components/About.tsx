const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            لماذا تختار أجاد
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-accent transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 tracking-wide text-accent">جودة ممتازة</h3>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              نختار مواد عالية الجودة لمنتجاتنا ومصممة بشكل إبداعي
            </p>
          </div>
          
          <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-neon transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 tracking-wide text-neon-foreground">تصميم عصري</h3>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              تصاميم مبتكرة تناسب شخصيات الشباب وتعبر عن الذات
            </p>
          </div>
          
          <div className="p-8 bg-background rounded-lg border-2 border-border hover:border-accent transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 tracking-wide text-accent">ثقافة يمنية</h3>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              نفتخر بتصاميمنا المستوحاة من الثقافة والتقاليد اليمنية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

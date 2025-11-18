const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              فلسفتنا
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
              ولدت AELLA من رغبة في صنع ملابس تتجاوز الصيحات. نحن نؤمن بالجودة على الكمية، 
              وبالقطع التي تصبح أفضل مع مرور الوقت.
            </p>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              كل قطعة مصممة بعناية ومنتجة بشكل أخلاقي، باستخدام مواد طبيعية 
              تحترم الحرفة والبيئة على حد سواء.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">مواد مستدامة</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                قطن عضوي وكتان وصوف من مصادر مسؤولة
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">تصميم خالد</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                تصاميم كلاسيكية تناسب كل موسم
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">إنتاج أخلاقي</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                دفعات صغيرة، أجور عادلة، سلسلة توريد شفافة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

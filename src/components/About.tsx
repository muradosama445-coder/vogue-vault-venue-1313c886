const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              من نحن
            </h2>
            <p className="text-foreground leading-relaxed mb-4 tracking-wide">
              أجاد هي علامة ملابس عصرية مصممة بشكل إبداعي من خلال اختيار مواد عالية الجودة، 
              ومصممة بشكل إبداعي لتناسب شخصيات الشباب.
            </p>
            <p className="text-foreground leading-relaxed tracking-wide">
              غايتنا هي التعبير الحقيقي عن الذات، من موظفينا إلى عملائنا وثقافتنا. 
              نحن موجودون لتمكين الجميع من التعبير عن ذواتهم الحقيقية من خلال الأزياء التي يريدونها.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-background rounded-lg border-r-4 border-accent">
              <h3 className="text-xl font-bold mb-2 tracking-wide text-accent">الابتكار</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                السعي لتخطي حدود الموضة والتصميم المعتاد من خلال مواد وتقنيات مبتكرة
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border-r-4 border-neon">
              <h3 className="text-xl font-bold mb-2 tracking-wide text-neon-foreground">الجودة</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                الالتزام باستخدام مواد عالية الجودة لصنع ملابس متينة وطويلة الأمد
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border-r-4 border-accent">
              <h3 className="text-xl font-bold mb-2 tracking-wide text-accent">الطموح</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                إنشاء علامة للأزياء ليست لغرض العمل التجاري فقط، بل هي قوة للتغيير
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

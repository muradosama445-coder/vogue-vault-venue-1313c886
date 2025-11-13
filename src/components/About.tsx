const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
              AELLA was born from a desire to create clothing that transcends trends. 
              We believe in quality over quantity, in pieces that become better with time.
            </p>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              Each garment is thoughtfully designed and ethically produced, using natural 
              materials that honor both craft and environment.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">Sustainable Materials</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                Organic cotton, linen, and wool from responsible sources
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">Timeless Design</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                Classic silhouettes that work season after season
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 tracking-wide">Ethical Production</h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                Small batches, fair wages, transparent supply chain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

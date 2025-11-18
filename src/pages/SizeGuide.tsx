import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oversizeTshirtChart from "@/assets/oversize-tshirt-size-chart.png";
import tshirtChart from "@/assets/tshirt-size-chart.png";
import hoodiesChart from "@/assets/hoodies-size-chart.png";
import { LazyImage } from "@/components/ui/lazy-image";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              دليل المقاسات
            </h1>
            <p className="text-muted-foreground text-lg">
              اختر المقاس المناسب لك من خلال دليل المقاسات التفصيلي
            </p>
          </div>

          {/* Oversize T-Shirts Size Chart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
              مقاسات التيشرتات Oversize
            </h2>
            <div className="bg-secondary/30 p-6 rounded-lg border-2 border-border">
              <LazyImage
                src={oversizeTshirtChart} 
                alt="دليل مقاسات التيشرتات Oversize" 
                className="w-full h-auto rounded-lg"
                wrapperClassName="w-full"
              />
            </div>
          </div>

          {/* Regular T-Shirts Size Chart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
              مقاسات التيشرتات العادية
            </h2>
            <div className="bg-secondary/30 p-6 rounded-lg border-2 border-border">
              <LazyImage
                src={tshirtChart} 
                alt="دليل مقاسات التيشرتات العادية" 
                className="w-full h-auto rounded-lg"
                wrapperClassName="w-full"
              />
            </div>
          </div>

          {/* Hoodies Size Chart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
              مقاسات الهوديز
            </h2>
            <div className="bg-secondary/30 p-6 rounded-lg border-2 border-border">
              <LazyImage
                src={hoodiesChart} 
                alt="دليل مقاسات الهوديز" 
                className="w-full h-auto rounded-lg"
                wrapperClassName="w-full"
              />
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-br from-accent/10 to-neon/10 p-8 rounded-lg border-2 border-border">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">نصائح لاختيار المقاس المناسب</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent ml-2">•</span>
                قم بقياس صدرك وطولك بدقة قبل اختيار المقاس
              </li>
              <li className="flex items-start">
                <span className="text-accent ml-2">•</span>
                إذا كنت بين مقاسين، ننصح باختيار المقاس الأكبر للراحة
              </li>
              <li className="flex items-start">
                <span className="text-accent ml-2">•</span>
                جميع المقاسات بالسنتيمتر (cm)
              </li>
              <li className="flex items-start">
                <span className="text-accent ml-2">•</span>
                للمساعدة في اختيار المقاس، لا تتردد في التواصل معنا
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;

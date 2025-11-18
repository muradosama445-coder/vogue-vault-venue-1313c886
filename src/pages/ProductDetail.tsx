import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">المنتج غير موجود</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            العودة للرئيسية
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:text-accent"
        >
          <ArrowRight className="ml-2" />
          العودة للمنتجات
        </Button>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* معرض الصور */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-border bg-secondary">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === idx
                        ? "border-accent"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* تفاصيل المنتج */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-accent mb-6">
                {product.price}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* المواد */}
            {product.material && (
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-3">المواد</h3>
                <p className="text-muted-foreground">{product.material}</p>
              </div>
            )}

            {/* المقاسات */}
            {product.sizes && (
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-3">المقاسات المتوفرة</h3>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="px-6 py-3 border-2 border-border rounded-lg hover:border-accent transition-colors cursor-pointer"
                    >
                      <span className="font-medium">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* إرشادات العناية */}
            {product.care && (
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-bold mb-3">إرشادات العناية</h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start"
                    >
                      <span className="text-accent ml-2">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6">
              <Button
                size="lg"
                className="w-full bg-neon text-neon-foreground hover:bg-neon/90 font-bold"
              >
                اطلب الآن
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

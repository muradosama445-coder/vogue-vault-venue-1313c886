import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { LazyImage } from "@/components/ui/lazy-image";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                المنتجات
              </h1>
              <p className="text-muted-foreground tracking-wide text-lg">
                اكتشف جميع منتجاتنا المميزة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-square bg-secondary rounded-lg shadow-soft border-2 border-border hover:border-accent transition-all duration-300">
                    <LazyImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 tracking-wide">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <p className="text-lg font-bold text-accent">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Collection = () => {
  return (
    <section id="collection" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            منتجاتنا
          </h2>
          <p className="text-muted-foreground tracking-wide text-lg">
            تصاميم فريدة تعبّر عن ثقافتنا وهويتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-square bg-secondary rounded-lg shadow-soft border-2 border-border hover:border-accent transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
  );
};

export default Collection;

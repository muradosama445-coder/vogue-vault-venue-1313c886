import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Linen Shirt",
    price: "$145",
    image: product1,
  },
  {
    id: 2,
    name: "Wool Coat",
    price: "$385",
    image: product2,
  },
  {
    id: 3,
    name: "Wide Leg Trousers",
    price: "$195",
    image: product3,
  },
];

const Collection = () => {
  return (
    <section id="collection" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-tight">
            New Arrivals
          </h2>
          <p className="text-muted-foreground tracking-wide">
            Curated pieces for the modern wardrobe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-square bg-secondary rounded-sm shadow-soft">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-1 tracking-wide">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;

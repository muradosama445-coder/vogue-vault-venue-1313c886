import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    name: "تيشرت حيا",
    price: "10,000 ريال",
    description: "تيشيرت يمني يجسد طريقة التحية الأساسية لثقافة اليمن",
    image: product1,
  },
  {
    id: 2,
    name: "تيشيرت لك الحياة",
    price: "10,000 ريال",
    description: "تصميم ثقافي يجسد تقاليد الشعب اليمني في الرغبة في حياة طويلة",
    image: product2,
  },
  {
    id: 3,
    name: "هودي Live It Easily",
    price: "16,500 ريال",
    description: "هودي مستوحى من فن الطباعة، يشجع على عيش الحياة بسهولة",
    image: product3,
  },
  {
    id: 4,
    name: "هودي Spirit Of A Warrior",
    price: "16,500 ريال",
    description: "هودي يجسد روح المحارب والقوة الداخلية",
    image: product4,
  },
  {
    id: 5,
    name: "اوفر سايز Stand Out",
    price: "10,000 ريال",
    description: "تيشرت أوفر سايز بتصميم جريء يبرز شخصيتك المميزة",
    image: product5,
  },
  {
    id: 6,
    name: "حقيبة Tote Bag",
    price: "8,000 ريال",
    description: "حقيبة قماشية عملية وأنيقة للاستخدام اليومي",
    image: product6,
  },
];

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
            <div
              key={product.id}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;

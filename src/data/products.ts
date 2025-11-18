import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product41 from "@/assets/product-4-1.jpg";
import product42 from "@/assets/product-4-2.jpg";
import product5 from "@/assets/product-5.jpg";
import product51 from "@/assets/product-5-1.jpg";
import product52 from "@/assets/product-5-2.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  images?: string[];
  material?: string;
  sizes?: string[];
  care?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "تيشرت حيا",
    price: "10,000 ريال",
    description: "تيشيرت يمني يجسد طريقة التحية الأساسية لثقافة اليمن",
    image: product1,
    images: [product1],
    material: "قطن 100%",
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: ["غسيل على درجة حرارة منخفضة", "لا تستخدم المبيض", "كي على درجة حرارة منخفضة"],
  },
  {
    id: 2,
    name: "تيشيرت لك الحياة",
    price: "10,000 ريال",
    description: "تصميم ثقافي يجسد تقاليد الشعب اليمني في الرغبة في حياة طويلة",
    image: product2,
    images: [product2],
    material: "قطن 100%",
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: ["غسيل على درجة حرارة منخفضة", "لا تستخدم المبيض", "كي على درجة حرارة منخفضة"],
  },
  {
    id: 3,
    name: "هودي Live It Easily",
    price: "16,500 ريال",
    description: "هودي مستوحى من فن الطباعة، يشجع على عيش الحياة بسهولة",
    image: product3,
    images: [product3],
    material: "قطن ممزوج 80% قطن، 20% بوليستر",
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: ["غسيل على درجة حرارة متوسطة", "لا تستخدم المبيض", "تجفيف على حرارة منخفضة"],
  },
  {
    id: 4,
    name: "هودي Spirit Of A Warrior",
    price: "16,500 ريال",
    description: "هودي يجسد روح المحارب والقوة الداخلية",
    image: product4,
    images: [product4, product41, product42],
    material: "قطن ممزوج 80% قطن، 20% بوليستر",
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: ["غسيل على درجة حرارة متوسطة", "لا تستخدم المبيض", "تجفيف على حرارة منخفضة"],
  },
  {
    id: 5,
    name: "اوفر سايز Stand Out",
    price: "10,000 ريال",
    description: "تيشرت أوفر سايز بتصميم جريء يبرز شخصيتك المميزة",
    image: product5,
    images: [product5, product51, product52],
    material: "قطن 100%",
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: ["غسيل على درجة حرارة منخفضة", "لا تستخدم المبيض", "كي على درجة حرارة منخفضة"],
  },
  {
    id: 6,
    name: "حقيبة Tote Bag",
    price: "8,000 ريال",
    description: "حقيبة قماشية عملية وأنيقة للاستخدام اليومي",
    image: product6,
    images: [product6],
    material: "قماش قطني متين",
    sizes: ["مقاس واحد"],
    care: ["غسيل يدوي بارد", "لا تستخدم المبيض", "تجفيف في الهواء"],
  },
];

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page is rendering");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Collection />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

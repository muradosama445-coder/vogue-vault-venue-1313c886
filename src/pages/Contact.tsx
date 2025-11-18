import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من البيانات
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // هنا يمكن إضافة منطق إرسال النموذج
    toast({
      title: "تم الإرسال بنجاح",
      description: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت",
    });

    // إعادة تعيين النموذج
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              تواصل معنا
            </h1>
            <p className="text-muted-foreground text-lg">
              نحن هنا للإجابة على استفساراتك ومساعدتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* معلومات الاتصال */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 border-r-4 border-accent bg-secondary/30 rounded-lg">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@ajjad.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border-r-4 border-neon bg-secondary/30 rounded-lg">
                    <Phone className="w-6 h-6 text-neon mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">الهاتف</h3>
                      <p className="text-muted-foreground">+967 772744377</p>
                      <p className="text-muted-foreground">+967 733338755</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border-r-4 border-accent bg-secondary/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">الموقع</h3>
                      <p className="text-muted-foreground">صنعاء، اليمن</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent/10 to-neon/10 rounded-lg border-2 border-border">
                <h3 className="text-xl font-bold mb-3">ساعات العمل</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>السبت - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            {/* نموذج الاتصال */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    الاسم <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    البريد الإلكتروني <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    الرسالة <span className="text-accent">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-neon text-neon-foreground hover:bg-neon/90 font-bold"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

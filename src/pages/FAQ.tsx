import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <HelpCircle className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              الأسئلة الشائعة
            </h1>
            <p className="text-muted-foreground text-lg">
              إجابات سريعة على الأسئلة الأكثر شيوعاً
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-secondary/30 rounded-lg px-6 border-r-4 border-accent">
              <AccordionTrigger className="text-right hover:no-underline">
                <span className="text-lg font-medium">كيف يمكنني تتبع طلبي؟</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                بعد تأكيد طلبك، ستتلقى رسالة تأكيد عبر البريد الإلكتروني أو الهاتف تحتوي على رقم تتبع الشحن. يمكنك استخدام هذا الرقم لمتابعة حالة طلبك. إذا كان لديك أي استفسار، يمكنك التواصل معنا على +967 772744377 أو +967 733338755.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-secondary/30 rounded-lg px-6 border-r-4 border-neon">
              <AccordionTrigger className="text-right hover:no-underline">
                <span className="text-lg font-medium">ما هي سياسة الإرجاع والاستبدال؟</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                يمكنك إرجاع أو استبدال المنتج خلال 3 أيام من تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية مع جميع الملصقات والعبوة الأصلية. للمزيد من التفاصيل، يمكنك زيارة صفحة سياسة الإرجاع والاستبدال أو التواصل معنا عبر info@ajjad.com.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-secondary/30 rounded-lg px-6 border-r-4 border-accent">
              <AccordionTrigger className="text-right hover:no-underline">
                <span className="text-lg font-medium">كم تستغرق عملية التوصيل في صنعاء؟</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                نعمل على معالجة وتوصيل جميع الطلبات في صنعاء خلال 1-2 يوم عمل. يتم التوصيل من السبت إلى الخميس من الساعة 1 إلى 8 مساءً. للشحن إلى المحافظات الأخرى، يستغرق التوصيل من 5 إلى 7 أيام عمل.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-gradient-to-br from-accent/10 to-neon/10 p-8 rounded-lg border-2 border-border text-center">
            <h3 className="text-xl font-bold mb-3">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-muted-foreground mb-4">فريق خدمة العملاء جاهز لمساعدتك</p>
            <div className="space-y-2 text-sm">
              <p><strong>البريد الإلكتروني:</strong> info@ajjad.com</p>
              <p><strong>الهاتف:</strong> +967 772744377 - +967 733338755</p>
              <p><strong>واتساب:</strong> +967 733338755</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;

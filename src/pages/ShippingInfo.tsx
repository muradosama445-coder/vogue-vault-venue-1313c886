import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              معلومات الشحن والتوصيل
            </h1>
            <p className="text-muted-foreground text-lg">
              نعمل بجهد للتعامل مع جميع الطلبات بسرعة واحترافية
            </p>
          </div>

          <div className="space-y-12">
            {/* وقت التوصيل */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">وقت التوصيل</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    نعمل بجهد على التعامل مع جميع الطلبات في صنعاء خلال 1-2 يوم.
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg border-r-4 border-accent">
                    <p className="font-medium mb-2">ساعات عمل التوصيل:</p>
                    <p className="text-muted-foreground">السبت - الخميس: من الساعة 1 - 8 مساءً</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>مهم:</strong> تأكد من الرد على المكالمة عندما يكون طلبك جاهزاً للتواصل مع فريق أجاد.
                  </p>
                </div>
              </div>
            </section>

            {/* طرق الشحن */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <Truck className="w-8 h-8 text-neon mt-1" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-4">طرق الشحن والتوصيل</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-secondary">
                          <th className="border border-border p-3 text-right">وسيلة الشحن</th>
                          <th className="border border-border p-3 text-right">الوقت المقدر</th>
                          <th className="border border-border p-3 text-right">رسوم الشحن</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3">الشحن القياسي</td>
                          <td className="border border-border p-3">12-24 ساعة</td>
                          <td className="border border-border p-3">يعتمد على وزن الطرد</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">الشحن السريع</td>
                          <td className="border border-border p-3">1-3 ساعة</td>
                          <td className="border border-border p-3">يعتمد على وزن الطرد</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">الشحن إلى المحافظات</td>
                          <td className="border border-border p-3">5-7 أيام</td>
                          <td className="border border-border p-3">يعتمد على المحافظة</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border-r-4 border-accent">
                    <p className="font-medium">الشحن المجاني: نقدم شحن مجاني للطلبات التي تزيد عن 30 ريال يمني.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* تتبع الطلب */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <Package className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">تتبع الطلب والشحن</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ستتلقى رسالة تأكيد عبر البريد الإلكتروني أو الهاتف باستخدام رقم شحن تتبع لتأكيد طلبك وتتبعه.
                  </p>
                </div>
              </div>
            </section>

            {/* المخزون */}
            <section className="bg-secondary/30 p-6 rounded-lg border-r-4 border-neon">
              <h2 className="text-2xl font-bold mb-3">المخزون</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن نبذل قصارى جهدنا لتتبع المخزون، ولكن في بعض الأحيان ينفد المخزون. إذا كان المنتج غير متوفر، سنقوم بالتواصل معك في أقرب وقت.
              </p>
            </section>

            {/* تأخر الطلب */}
            <section>
              <h2 className="text-2xl font-bold mb-3">ماذا يحدث إذا تأخر طلبي؟</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا تأخر التسليم، سنعلمك بالأسباب، وسنعلمك بموعد تقديري للتسليم في الوقت الأقرب الممكن.
              </p>
            </section>

            {/* الشحن الدولي */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 text-neon mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">الشحن الدولي</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن نعمل حالياً على إمكانية الشحن خارج اليمن. ترقبوا المزيد من التحديثات قريباً.
                  </p>
                </div>
              </div>
            </section>

            {/* الإلغاء */}
            <section className="bg-destructive/10 p-6 rounded-lg border-r-4 border-destructive">
              <h2 className="text-2xl font-bold mb-3">الإلغاء</h2>
              <p className="text-muted-foreground leading-relaxed">
                يرجى التواصل معنا في أقرب وقت ممكن لإلغاء طلبك أو إجراء أي تغييرات، لأن عملية الشحن تتم بسرعة ولن نتمكن من إجراء تعديلات بعد شحن الطلب.
              </p>
            </section>

            {/* تواصل معنا */}
            <section className="bg-gradient-to-br from-accent/10 to-neon/10 p-8 rounded-lg border-2 border-border text-center">
              <h3 className="text-xl font-bold mb-4">لديك استفسار حول الشحن؟</h3>
              <p className="text-muted-foreground mb-4">فريقنا جاهز لمساعدتك</p>
              <div className="space-y-2 text-sm">
                <p><strong>البريد الإلكتروني:</strong> info@ajjad.com</p>
                <p><strong>الهاتف:</strong> +967 772744377 - +967 733338755</p>
                <p><strong>واتساب:</strong> +967 733338755</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingInfo;

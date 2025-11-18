import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, RefreshCw, CheckCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              سياسة الاسترجاع والاستبدال
            </h1>
            <p className="text-muted-foreground text-lg">
              نريدك أن تكون راضياً تماماً عن تجربة التسوق معنا
            </p>
          </div>

          <div className="space-y-12">
            {/* الاستبدال والاسترجاع */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <RefreshCw className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">الاستبدال والاسترجاع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يمكنك استرجاع أو استبدال المنتج إذا لم تكن راضياً. نريدك أن تكون عملية التسوق تجربة سعيدة. يمكننا إضافة رصيد في الموقع الإلكتروني خلال 3 أيام من تاريخ الاستلام.
                  </p>
                </div>
              </div>
            </section>

            {/* معايير الاستبدال والإرجاع */}
            <section className="bg-secondary/30 p-6 rounded-lg border-r-4 border-accent">
              <h2 className="text-2xl font-bold mb-4">معايير الاستبدال والإرجاع</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>المنتج في حالته الأصلية غير ملبوس وغير مستخدم</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>يجب أن يكون المنتج مرفقاً بجميع ملصقات علامتنا التجارية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>يجب أن يكون المنتج في عبوته الأصلية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>يجب أن يحتوي على إثبات الشراء أو فاتورة</span>
                </li>
              </ul>
            </section>

            {/* خطوات عملية الاسترجاع */}
            <section>
              <div className="flex items-start gap-4 mb-6">
                <Package className="w-8 h-8 text-neon mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">خطوات عملية الاسترجاع</h2>
                  <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
                    <li>تواصل معنا عبر البريد الإلكتروني <strong className="text-foreground">info@ajjad.com</strong> أو عبر الواتساب على <strong className="text-foreground">+967 733338755</strong></li>
                    <li>اذكر رقم الطلب وسبب الاستبدال أو الاسترجاع</li>
                    <li>اختر العنوان الذي تريد استرجاع المنتج منه، سائق التوصيل سيأخذ المنتج</li>
                    <li>سيقوم فريقنا بفحص المنتج بعد استلامه، ومعالجة عملية الاسترجاع في غضون أيام قليلة</li>
                    <li>سيتم إشعارك عبر البريد الإلكتروني أو الهاتف بحالة الاسترجاع</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* المنتجات الغير مقبولة */}
            <section className="bg-destructive/10 p-6 rounded-lg border-r-4 border-destructive">
              <h2 className="text-2xl font-bold mb-4">المنتجات والشروط الغير مقبولة للاستبدال أو الاسترجاع</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• المنتجات الشاملة في الخصومات والعروض ما لم يكن هناك عيب مصنعي</li>
                <li>• المنتج الذي لا يحتوي على ملصقات أو بطاقات علامتنا التجارية أو جزء من التغليف مفقود</li>
                <li>• المنتج لديه علامات واضحة للضرر أو الاستخدام</li>
                <li>• طلب الاسترجاع أو الاستبدال بعد مرور 3 أيام</li>
              </ul>
            </section>

            {/* طرق استرداد الأموال */}
            <section>
              <h2 className="text-2xl font-bold mb-4">طرق استرداد الأموال</h2>
              <p className="text-muted-foreground mb-4">
                بعد استلام المنتج، سيقوم فريقنا بفحصه ومعالجة استرداد أموالك في غضون 10 أيام من تاريخ طلب الاسترجاع:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• حوالة مالية عبر شركات الصرافة (في غضون 10 أيام)</li>
                <li>• إضافة رصيد إلكتروني في الموقع لتسوق منتج آخر (في غضون 3 أيام)</li>
              </ul>
            </section>

            {/* تواصل معنا */}
            <section className="bg-gradient-to-br from-accent/10 to-neon/10 p-8 rounded-lg border-2 border-border text-center">
              <h3 className="text-xl font-bold mb-4">لديك استفسار حول عملية الاسترجاع؟</h3>
              <p className="text-muted-foreground mb-4">تواصل معنا وسنكون سعداء بمساعدتك</p>
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

export default ReturnPolicy;

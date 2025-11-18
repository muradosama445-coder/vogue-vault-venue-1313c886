const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">أجاد</h3>
            <p className="text-sm text-muted-foreground tracking-wide">
              ملابس عصرية مصممة بشكل إبداعي لشخصيتك الفريدة
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">تسوق</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">وصل حديثاً</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">المجموعات</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">التخفيضات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">من نحن</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">قصتنا</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">الاستدامة</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">تابعنا</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">إنستغرام</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">بينترست</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">تيك توك</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground tracking-wide">
          <p>© 2024 أجاد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

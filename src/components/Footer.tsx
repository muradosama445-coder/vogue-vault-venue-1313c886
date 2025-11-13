const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 tracking-tight">AELLA</h3>
            <p className="text-sm text-muted-foreground tracking-wide">
              Timeless fashion for the conscious consumer
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Collections</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Follow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">Pinterest</a></li>
              <li><a href="#" className="hover:text-accent transition-colors tracking-wide">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground tracking-wide">
          <p>© 2024 AELLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

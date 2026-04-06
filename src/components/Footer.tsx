import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Iron Frame Agency" className="h-12 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            We build powerful websites for contractors and construction businesses. No fluff. Just results.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm tracking-widest text-foreground mb-4">NAVIGATION</h4>
          <div className="flex flex-col gap-2">
            {[["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm tracking-widest text-foreground mb-4">CONTACT</h4>
          <p className="text-muted-foreground text-sm">info@ironframeagency.com</p>
          
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-muted-foreground text-xs">© 2026 Iron Frame Agency. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

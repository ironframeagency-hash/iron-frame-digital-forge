import { Link } from "react-router-dom";
import { Globe, Search, Smartphone, Paintbrush, Settings, BarChart3, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    desc: "No cookie-cutter templates. We build a site from the ground up that reflects your business, your trade, and your reputation. Every page is designed to convert visitors into phone calls.",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "When someone searches 'roofer near me' or 'best contractor in [your city],' you need to show up. We optimize your site with local keywords, Google Business integration, and technical SEO.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    desc: "Your customers are searching on their phones. Every site we build is fully responsive, fast-loading, and looks sharp on any screen size.",
  },
  {
    icon: Paintbrush,
    title: "Brand & Identity",
    desc: "Need a logo? Color palette? Consistent branding across your truck, cards, and website? We create a cohesive brand that makes you memorable.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    desc: "We handle updates, security, hosting, and backups. You never have to worry about your site going down or getting hacked.",
  },
  {
    icon: BarChart3,
    title: "Lead Generation",
    desc: "Contact forms, click-to-call buttons, quote request pages — we build every page to make it dead simple for customers to reach you.",
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">OUR SERVICES</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            EVERYTHING YOUR<br />BUSINESS NEEDS ONLINE
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We handle the digital side so you can focus on what you do best — building, fixing, and growing your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 bg-card border border-border hover:border-primary/50 transition-colors">
              <Icon className="text-primary mb-5" size={32} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          LET'S BUILD SOMETHING
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Fast turnaround, simple process, no tech headaches. Get started today.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground font-heading tracking-wider px-8 py-4 text-lg hover:bg-foreground hover:text-background transition-colors">
          GET YOUR FREE DEMO <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;

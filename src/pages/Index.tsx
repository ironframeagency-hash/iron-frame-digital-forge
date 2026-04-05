import { Link } from "react-router-dom";
import { Globe, Search, Smartphone, ArrowRight, CheckCircle, MessageSquare, Paintbrush, Rocket } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import Layout from "@/components/Layout";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Construction site at dusk" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-4">IRON FRAME AGENCY</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-foreground mb-6">
            WEBSITES THAT<br />
            <span className="text-gradient">BUILD TRUST</span><br />
            BEFORE YOU<br />
            SHOW UP
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            We design and build high-converting websites for contractors and construction businesses. Get found on Google. Win more jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-heading tracking-wider text-center px-8 py-4 text-lg hover:bg-primary/90 transition-colors">
              BOOK A MEETING
            </Link>
            <Link to="/services" className="border border-border text-foreground font-heading tracking-wider text-center px-8 py-4 text-lg hover:border-primary hover:text-primary transition-colors">
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Problem Section */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            YOUR WORK IS <span className="text-primary">SOLID.</span><br />
            YOUR ONLINE PRESENCE ISN'T.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            You do great work. But when potential clients Google your business, what do they find? A blank page? A competitor? Homeowners and general contractors check you out online before they ever pick up the phone. If you don't look professional online, you're losing jobs to guys who do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "80% of customers research contractors online before calling",
            "No website = no credibility in today's market",
            "Your competitors are already showing up on Google",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 p-6 bg-secondary/50 border border-border">
              <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
              <p className="text-secondary-foreground text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 md:py-28">
      <div className="container">
        <p className="font-heading text-primary tracking-[0.3em] text-sm text-center mb-3">WHAT WE DO</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-14">
          BUILT FOR CONTRACTORS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "Custom Websites", desc: "Professional sites designed specifically for your trade. Not templates — custom builds that match your brand." },
            { icon: Search, title: "SEO & Google", desc: "Get found when homeowners search for contractors in your area. We optimize every page for local search." },
            { icon: Smartphone, title: "Mobile-First", desc: "Over 60% of your visitors are on their phone. Every site we build looks perfect on any device." },
            { icon: Paintbrush, title: "Brand Identity", desc: "Logo, colors, and messaging that make you look like the established pro you are." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 bg-card border border-border hover:border-primary/50 transition-colors">
              <Icon className="text-primary mb-5" size={32} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <p className="font-heading text-primary tracking-[0.3em] text-sm text-center mb-3">THE PROCESS</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-14">
          THREE STEPS. ZERO HEADACHES.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: MessageSquare, step: "01", title: "Tell Us About Your Business", desc: "Quick call or form — we learn what you do, who you serve, and what makes you different." },
            { icon: Paintbrush, step: "02", title: "We Build Your Site", desc: "Our team designs and develops your website. You review it, we refine it. Simple." },
            { icon: Rocket, step: "03", title: "Launch & Grow", desc: "Your site goes live. We handle hosting, updates, and SEO so you can focus on your jobs." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon className="text-primary" size={28} />
              </div>
              <p className="font-heading text-primary text-sm tracking-widest mb-2">{step}</p>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          READY TO LOOK AS<br />PROFESSIONAL ONLINE<br />AS YOU ARE ON THE JOB?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          No commitment, no tech headaches. Let's talk about what your new site could look like.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-background text-foreground font-heading tracking-wider px-8 py-4 text-lg hover:bg-foreground hover:text-background transition-colors"
        >
          CONTACT US <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;

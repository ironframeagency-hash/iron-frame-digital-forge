import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Shield } from "lucide-react";
import aboutImg from "@/assets/about-contractor.jpg";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">ABOUT US</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              WE KNOW<br /><span className="text-gradient">CONSTRUCTION.</span><br />WE KNOW WEB.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Iron Frame Agency was built for one purpose: to give contractors and construction businesses a professional online presence that actually generates leads. We don't work with restaurants, dentists, or yoga studios. We work with builders, roofers, electricians, plumbers, and general contractors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand your industry because we've immersed ourselves in it. We know your customers, your competition, and what it takes to stand out in a crowded market.
            </p>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="Contractor reviewing plans" className="w-full border border-border" loading="lazy" width={1280} height={854} />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-14">
          WHY CONTRACTORS CHOOSE US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Industry Focus", desc: "100% focused on construction and trades. We speak your language and understand your market." },
            { icon: Zap, title: "Fast Turnaround", desc: "Most sites are live within 2 weeks. No months of back-and-forth. We move fast because you do." },
            { icon: Shield, title: "No Tech Headaches", desc: "We handle everything — design, development, hosting, updates. You run your business, we run your website." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon className="text-primary" size={28} />
              </div>
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
          LET'S GET TO WORK
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Ready to build a website as solid as your craftsmanship? Let's talk.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground font-heading tracking-wider px-8 py-4 text-lg hover:bg-foreground hover:text-background transition-colors">
          CONTACT US <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;

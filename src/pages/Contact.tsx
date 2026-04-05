import { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setForm({ name: "", business: "", phone: "", email: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">CONTACT US</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              LET'S BUILD YOUR<br />ONLINE PRESENCE
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you within 24 hours to schedule a meeting.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Your Name", key: "name" as const, type: "text", placeholder: "John Smith" },
              { label: "Business Name", key: "business" as const, type: "text", placeholder: "Smith Construction LLC" },
              { label: "Phone Number", key: "phone" as const, type: "tel", placeholder: "(555) 123-4567" },
              { label: "Email Address", key: "email" as const, type: "email", placeholder: "john@smithconstruction.com" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label className="block font-heading text-sm tracking-wider text-foreground mb-2">{label}</label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground font-heading tracking-wider text-lg py-4 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? "SENDING..." : "CONTACT"}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <p className="font-heading text-sm tracking-wider text-foreground mb-1">EMAIL</p>
              <p className="text-muted-foreground text-sm">info@ironframeagency.com</p>
            </div>
            <div>
              <p className="font-heading text-sm tracking-wider text-foreground mb-1">PHONE</p>
              <p className="text-muted-foreground text-sm">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

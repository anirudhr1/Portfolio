import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: <Mail size={22} />, label: "Email", value: "anirudhr700@gmail.com", href: "mailto:anirudhr700@gmail.com" },
  { icon: <Phone size={22} />, label: "Phone", value: "+91 9497100852", href: "tel:+919497100852" },
  { icon: <Github size={22} />, label: "GitHub", value: "github.com/anirudhr1", href: "https://github.com/anirudhr1" },
  { icon: <Linkedin size={22} />, label: "LinkedIn", value: "linkedin.com/in/anirudhr", href: "https://linkedin.com/in/anirudhr" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            Open to internships, collaborations, and conversations about tech. Reach out through any channel below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-gradient-card border-glow hover:shadow-glow transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-secondary text-primary group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            Designed & built by <span className="text-primary font-medium">Anirudh R</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

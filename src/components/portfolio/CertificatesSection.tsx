import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  { title: "Cyber Security Essentials", issuer: "Lovely Professional University", date: "Jul 2025" },
  { title: "Computational Theory: Language Principles & Finite Automata", issuer: "Infosys", date: "Aug 2025" },
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", issuer: "Infosys", date: "Aug 2025" },
  { title: "Introduction to Hardware and Operating Systems", issuer: "Coursera (IBM)", date: "Sep 2025" },
  { title: "Java Programming", issuer: "iamNeo", date: "May 2025" },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gradient-card rounded-xl p-6 border-glow group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Award size={22} className="text-primary flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{cert.date}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

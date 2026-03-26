import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Cyber Security Essentials",
    issuer: "Lovely Professional University",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1GO27XZvKbdJqyuJL0vIwfHqIPuBFbxNc/view"
  },
  {
    title: "Computational Theory: Language Principles & Finite Automata",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1MaacbdGLBjh7C-yglNOkuWfd1wU1RP72/view"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera (IBM)",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1gonb3P5OxhXPJ7CNHC9cGvcgSuPky6He/view"
  }
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
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gradient-card rounded-xl p-6 border-glow group hover:shadow-glow transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award size={22} className="text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>

                <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground text-xs mb-2">
                  {cert.issuer}
                </p>

                <p className="text-primary text-xs opacity-70 group-hover:opacity-100 transition">
                  View Certificate ↗
                </p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default CertificatesSection;
export default CertificatesSection;

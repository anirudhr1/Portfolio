import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    detail: "CGPA: 7.26",
    period: "Aug 2023 – Present",
  },
  {
    institution: "GHSS Thiruvali, Malappuram, Kerala",
    degree: "Intermediate (12th)",
    detail: "95%",
    period: "Aug 2020 – Mar 2022",
  },
  {
    institution: "GHSS Thiruvali, Malappuram, Kerala",
    degree: "Matriculation (10th)",
    detail: "90%",
    period: "Aug 2019 – Mar 2020",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Who I am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-card rounded-2xl p-8 border-glow shadow-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted-foreground text-sm">Malappuram, Kerala → Punjab, India</span>
              </div>
             <p className="text-secondary-foreground leading-relaxed mb-4">
  I am a Computer Science undergraduate with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I primarily work with languages like Python, C++, and C.
</p>

<p className="text-secondary-foreground leading-relaxed mb-4">
  I have a keen interest in cybersecurity, backend systems, and understanding how software works at a deeper level. I enjoy exploring how systems can be secured, identifying vulnerabilities, and building practical solutions around them.
</p>

<p className="text-secondary-foreground leading-relaxed">
  I love tackling complex problems and building efficient, reliable software with a focus on security and clean design.
</p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary" />
              Education
            </h3>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-[9px] top-3 bottom-3 w-px bg-border" />

              {education.map((edu, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-[18px] h-[18px] rounded-full border-2 border-primary bg-background" />
                  <div className="bg-gradient-card rounded-xl p-5 border-glow">
                    <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-primary text-sm font-medium">{edu.detail}</span>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

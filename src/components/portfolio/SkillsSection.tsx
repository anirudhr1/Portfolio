import { motion } from "framer-motion";
import { Code2, Globe2, Wrench, Users } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    skills: ["C++", "Java", "C", "Python"],
  },
  {
    title: "Web Technologies",
    icon: <Globe2 size={24} />,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={24} />,
    skills: ["Nmap", "Wireshark", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: <Users size={24} />,
    skills: ["Team Work", "Adaptability", "Communication", "Learning Agility"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">What I Work With</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card rounded-2xl p-7 border-glow shadow-card group hover:shadow-glow transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-secondary text-primary w-fit mb-5 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

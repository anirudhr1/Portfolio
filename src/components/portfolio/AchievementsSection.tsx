import { motion } from "framer-motion";
import { Trophy, Target, Flame } from "lucide-react";

const achievements = [
  {
    icon: <Target size={28} />,
    stat: "100+",
    label: "DSA Problems on LeetCode",
    description: "Strengthened understanding of time complexity and competitive programming techniques.",
    period: "Feb 2026",
  },
  {
    icon: <Flame size={28} />,
    stat: "150+",
    label: "C++ Challenges on NeoColab",
    description: "Enhanced problem-solving accuracy, implementation speed, and mastery of core C++ concepts.",
    period: "Dec 2024",
  },
  {
    icon: <Trophy size={28} />,
    stat: "150+",
    label: "Python Problems on CodeTantra",
    description: "Improved algorithmic reasoning, practice consistency, and Python application skills.",
    period: "Dec 2024",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Milestones</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gradient-card rounded-2xl p-8 border-glow shadow-card text-center group hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-2xl bg-secondary text-primary mb-5 group-hover:scale-110 transition-transform">
                {a.icon}
              </div>
              <div className="font-display text-5xl font-bold text-gradient-primary mb-2">{a.stat}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{a.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{a.description}</p>
              <span className="text-xs text-primary/70 font-medium">{a.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { motion } from "framer-motion";
import { Github, ChevronRight, Cpu, Globe } from "lucide-react";

interface ProjectData {
  title: string;
  icon: React.ReactNode;
  date: string;
  overview: string;
  howItWorks: string[];
  techStack: string[];
  challenges: string[];
  learned: string[];
  github: string;
  accentClass: string;
}

const projects: ProjectData[] = [
  {
    title: "Biometric Authentication System",
    icon: <Cpu size={28} />,
    date: "Jul 2025",
    overview:
      "A two-factor biometric authentication system combining face recognition and voice verification. Users register their face and voice, then authenticate using both modalities for secure access.",
    howItWorks: [
      "User registers by capturing face images and recording a voice sample.",
      "Face recognition uses OpenCV's LBPH (Local Binary Patterns Histograms) algorithm to create a face model.",
      "Voice verification processes audio input and matches it against the stored voiceprint.",
      "WebM audio is converted to WAV format for consistent processing.",
      "Both face and voice must match for successful authentication (two-step verification).",
    ],
    techStack: ["Python", "OpenCV", "LBPH Algorithm", "Audio Processing", "Android Integration"],
    challenges: [
      "Handling varied lighting conditions for reliable face detection.",
      "Converting browser-recorded WebM audio to a format suitable for voice matching.",
      "Balancing recognition accuracy with processing speed on limited hardware.",
    ],
    learned: [
      "Practical implementation of biometric algorithms beyond theory.",
      "Audio format conversion pipelines and signal processing basics.",
      "How multi-factor authentication improves system security in a real setting.",
    ],
    github: "https://github.com/anirudhr1",
    accentClass: "text-gradient-primary",
  },
  {
    title: "Gift Recommendation Website",
    icon: <Globe size={28} />,
    date: "Sep 2023",
    overview:
      "A static multi-page website that helps users find gift ideas organized by occasion. Simulates a full e-commerce journey with browsing, selection, login, and payment flow — built purely with HTML and CSS.",
    howItWorks: [
      "Homepage presents categories: birthday, anniversary, wedding, and more.",
      "Each occasion page displays curated gift suggestions in a card layout.",
      "Users navigate through a mock login page and selection flow.",
      "A simulated payment page completes the e-commerce journey.",
      "Deployed on GitHub Pages for public access.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    challenges: [
      "Creating a convincing multi-page navigation flow without a backend.",
      "Building responsive layouts that work across screen sizes using only CSS.",
      "Structuring clean, maintainable HTML across multiple interconnected pages.",
    ],
    learned: [
      "Fundamentals of page structure, semantic HTML, and CSS layout techniques.",
      "How to plan and organize a multi-page static website from scratch.",
      "Deploying and hosting a website using GitHub Pages.",
    ],
    github: "https://github.com/anirudhr1",
    accentClass: "text-gradient-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">What I've Built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Projects</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-gradient-card rounded-2xl border-glow shadow-card overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 md:p-10 border-b border-border">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-secondary text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className={`font-display text-2xl md:text-3xl font-bold ${project.accentClass}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{project.date}</p>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:border-primary/40 hover:shadow-glow transition-all text-sm font-medium"
                  >
                    <Github size={16} className="text-primary" />
                    GitHub
                  </a>
                </div>
                <p className="text-secondary-foreground mt-5 leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </div>

              {/* Details grid */}
              <div className="grid md:grid-cols-2 gap-px bg-border">
                {/* How it works */}
                <div className="p-8 bg-card">
                  <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    How It Works
                  </h4>
                  <ol className="space-y-3">
                    {project.howItWorks.map((step, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Right column */}
                <div className="p-8 bg-card space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((c, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent mt-1">▸</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What I learned */}
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-3">What I Learned</h4>
                    <ul className="space-y-2">
                      {project.learned.map((l, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

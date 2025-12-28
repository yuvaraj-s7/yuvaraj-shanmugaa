import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Company",
    period: "Jun 2024 - Aug 2024",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver new features.",
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Implemented automated testing increasing coverage to 80%",
    ],
  },
  {
    title: "Frontend Developer (Freelance)",
    company: "Various Clients",
    period: "Jan 2024 - Present",
    description: "Built responsive websites and web applications for small businesses and startups.",
    achievements: [
      "Delivered 5+ projects on time and within budget",
      "Achieved 100% client satisfaction rating",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "University Name",
    period: "Sep 2023 - Dec 2023",
    description: "Assisted students in understanding programming concepts and debugging their code.",
    achievements: [
      "Mentored 30+ students in introductory CS courses",
      "Created supplementary learning materials",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            My professional journey and work experience
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative mb-8 md:mb-12 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                    {/* Content */}
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-muted-foreground mb-3">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

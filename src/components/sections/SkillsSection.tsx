import { Code, Database, Layout, Terminal, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL",],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git","Github","Canva", "Linux", "VS Code","n8n"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Team Work", "Communication"],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A comprehensive overview of my technical skills and areas of expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className={`transition-all duration-500 hover:shadow-lg hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Trophy, Medal, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    title: "Smart India Hackathon Finalist - 2023",
    event: "IES College of Technology, Bhopal.",
    description: "SIH 2024 Finalist - Built a chatbot solution for the Ministry of Coal & Mines.",
    icon: Trophy,
  },
  {
    title: "Smart India Hackathon Finalist - 2024",
    event: "St. Joseph's Institute of Technology, Chennai.",
    description: "Successfully completed Hacktoberfest with 10+ merged pull requests",
    icon: Trophy,
  },
  {
    title: "Competitive Programming",
    event: "CodeForces / LeetCode",
    description: "Solved 500+ problems, achieved Knight rating on LeetCode",
    icon: Zap,
  },
  {
    title: "Academic Excellence Award",
    event: "University Name",
    description: "Recognized for outstanding academic performance and contributions",
    icon: Medal,
  },
];

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Notable accomplishments and recognitions throughout my journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`transition-all duration-500 hover:shadow-lg hover:border-primary/50 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-primary mb-2">{achievement.event}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
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

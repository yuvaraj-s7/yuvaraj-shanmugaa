import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "A.V.C. College of Engineering.",
    period: "2021 - 2025",
    gpa: "81.3%",
    highlights: [
      "Relevant Coursework: Web Development",
      "Project: Privilege Escalation and Attack Detection in Cloud",
    ],
  },
    {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Raj Vidyalaya Matric Hr Sec School, Kuttalam.",
    period: "2020 - 2021",
    gpa: "82.6%",
    highlights: [
      "Undertook Higher Secondary studies in Mathematics and Biology",
    ],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Raj Vidyalaya Matric Hr Sec School, Kuttalam.",
    period: "2018 - 2019",
    gpa: "82.6%",
    highlights: [
      "Maintained 100% attendance record throughout SSLC.",
    ],
  }
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            My academic background and qualifications
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className={`transition-all duration-500 hover:shadow-lg hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3 mb-4">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium">Percentage: {edu.gpa}</span>
                      </div>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
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

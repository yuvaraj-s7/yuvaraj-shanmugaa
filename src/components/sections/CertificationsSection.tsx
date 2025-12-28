import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialUrl: "https://coursera.org/verify",
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google (Coursera)",
    date: "2023",
    credentialUrl: "https://coursera.org/verify",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialUrl: "https://freecodecamp.org/certification",
  },
];

export function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Professional certifications and credentials I've earned
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                className={`transition-all duration-500 hover:shadow-lg hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">Issued: {cert.date}</p>
                      <Button variant="link" size="sm" className="h-auto p-0 gap-1" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          View Credential
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
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

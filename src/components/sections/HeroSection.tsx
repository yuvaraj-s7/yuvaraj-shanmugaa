import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {

  const [greeting,setGreeting]=useState("");

  useEffect(()=> {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting ("Good Morning")
      else if (hour < 17) setGreeting ("Good Afternoon")
        else setGreeting ("Good Evening")
      })
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-bold font-large mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            {greeting}, Glad to have you here
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Hello, I'm{" "}
            <span className="text-primary">Yuvaraj Shanmugam</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Software Developer | Problem Solver | Team Player
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            I design and develop real-world applications using modern technologies, strong problem-solving skills, and effective teamwork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <Button size="lg" className="gap-2" asChild>
              <a href="/Yuvaraj_Shanmugam_Profile.pdf" download>
                <Download className="h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => handleScroll("#contact")}
            >
              <Mail className="h-5 w-5" />
              Let's Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#skills")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}

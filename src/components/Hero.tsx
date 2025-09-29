import { Button } from "@/components/ui/button";
import { Download, Gamepad2, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <Gamepad2 className="h-16 w-16 text-neon-blue animate-glow-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Ujjwal Asthana
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-neon-cyan mb-6 font-mono">
            Unity Game Developer
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting immersive gaming experiences with cutting-edge AR technology and innovative game design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button variant="outline" size="lg" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
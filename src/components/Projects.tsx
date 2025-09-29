import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, ExternalLink } from "lucide-react";
import arTrackingImage from "@/assets/ar-tracking-project.jpg";
import blockRunImage from "@/assets/block-run-project.jpg";
import skyLanderImage from "@/assets/sky-lander-project.jpg";

const projects = [
  {
    title: "Image Tracking Prototype",
    description: "Advanced AR mobile application featuring real-time image tracking using Vuforia SDK. Experience immersive augmented reality interactions with dynamic 3D object placement and environmental mapping.",
    image: arTrackingImage,
    tags: ["Unity", "AR", "Vuforia", "Mobile", "C#"],
    type: "AR Experience",
    link: "https://drive.google.com/file/d/1QaWz1RvM5MkHUmdHV8Hnx8QDSlFERa5w/view?usp=drivesdk"
  },
  {
    title: "Block Run",
    description: "Fast-paced 3D endless runner featuring procedural level generation and dynamic obstacle placement. Minimalist design meets addictive gameplay mechanics in this engaging mini-game experience.",
    image: blockRunImage,
    tags: ["Unity", "3D", "Mobile", "Procedural", "Game Design"],
    type: "Mini Game",
    link: "#play"
  },
  {
    title: "Sky Lander",
    description: "Retro-inspired 2D space landing simulator combining precision controls with physics-based gameplay. Navigate treacherous alien terrains while managing fuel and momentum in this challenging arcade experience.",
    image: skyLanderImage,
    tags: ["Unity", "2D", "Physics", "Arcade", "Retro"],
    type: "Space Simulation",
    link: "https://drive.google.com/file/d/1cWOghjWGEDO4odk7peJsivFD4L0g4qJi/view?usp=drivesdk"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden card-glow hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-neon-blue text-background">
                  {project.type}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-neon-purple/50 text-neon-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
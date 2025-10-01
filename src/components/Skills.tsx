import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Unity Engine", level: 90, category: "Engine" },
  { name: "C# Scripting", level: 85, category: "Programming" },
  { name: "Game Designing", level: 88, category: "Design" },
  { name: "Mobile Game Development", level: 82, category: "Platform" },
  { name: "3D Modeling", level: 75, category: "Art" },
  { name: "UI/UX Design", level: 78, category: "Design" },
  { name: "Version Control (Git)", level: 80, category: "Tools" }
];

const categories = {
  Engine: "neon-blue",
  Programming: "neon-purple",
  Specialty: "neon-cyan",
  Design: "neon-blue",
  Platform: "neon-purple",
  Art: "neon-cyan",
  Tools: "neon-blue"
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-card border border-border rounded-xl p-6 card-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs border-${categories[skill.category as keyof typeof categories]}/50 text-${categories[skill.category as keyof typeof categories]}`}
                  >
                    {skill.category}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-neon-cyan font-mono">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-surface-dark"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              <Badge className="bg-gradient-to-r from-neon-blue to-neon-purple text-background px-4 py-2">
                Unity Certified
              </Badge>
              <Badge className="bg-gradient-to-r from-neon-purple to-neon-cyan text-background px-4 py-2">
                AR Specialist
              </Badge>
              <Badge className="bg-gradient-to-r from-neon-cyan to-neon-blue text-background px-4 py-2">
                Mobile Expert
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
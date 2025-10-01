import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-xl opacity-30"></div>
              <img 
                src={profileImage} 
                alt="Ujjwal Asthana - Game Developer"
                className="relative rounded-2xl w-full max-w-sm mx-auto card-glow object-cover aspect-[3/4]"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-xl p-6 card-glow">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">Game Development Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Unity Game Developer with expertise in creating engaging mobile games and cutting-edge AR experiences. 
                My journey in game development combines technical proficiency with creative innovation to bring immersive digital worlds to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Unity Game Developer, I’ve been steadily building my skills and experience in game development. I have a good understanding of the Unity Engine and can work with C# scripting to bring ideas to life and giving me a broader perspective on game creation tools.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-neon-blue">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-surface-dark border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-neon-purple">AR</div>
                <div className="text-sm text-muted-foreground">Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
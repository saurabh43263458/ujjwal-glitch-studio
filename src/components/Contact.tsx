import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground mb-6">
              Ready to create something amazing together? Let's discuss your next gaming project.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Full Resume
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:asthanaji090304@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-neon-blue transition-colors duration-300 group"
                >
                  <Mail className="h-6 w-6 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">asthanaji090304@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+916386185381" 
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-neon-purple transition-colors duration-300 group"
                >
                  <Phone className="h-6 w-6 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 6386185381</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                  <MapPin className="h-6 w-6 text-neon-cyan" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Available for Remote Work</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Social Links</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/UjjwalAsthana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-neon-blue transition-colors duration-300 group"
                >
                  <Github className="h-6 w-6 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-muted-foreground">View my repositories</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/UjjwalAsthana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-neon-purple transition-colors duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-muted-foreground">Professional network</div>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-xl">
                <h4 className="font-bold text-neon-cyan mb-2">Open to Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Currently available for freelance projects, game development collaborations, and full-time positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import SkillIcon from '@/components/SkillIcon';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import { skillCategories } from '@/data/skills';

const Index = () => {
  const featuredProjects = getFeaturedProjects();
  const displayedSkills = skillCategories.slice(0, 2).flatMap(category => category.skills.slice(0, 2));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-purple">Featured Projects</h2>
              <p className="text-gray-400 mt-2">Explore my latest game development work</p>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0">
              <Button variant="outline" className="neon-border">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.mainImage}
                tags={project.tags}
                isHighlighted={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-purple mb-6">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Vabby Negi, a passionate solo game developer specializing in horror and interactive gameplay experiences. 
                I have hands-on experience with Unreal Engine 5, AI-driven game mechanics, and creating immersive environments.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My approach to game design focuses on engaging storytelling, dynamic enemy AI, and puzzle-solving mechanics that enhance player experience.
              </p>
              <Link to="/about">
                <Button variant="outline" className="neon-border">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 glass-card rounded-xl p-6 md:p-8 neon-border">
              <h3 className="text-xl font-semibold mb-6 text-center">Currently Working On</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="bg-neon-purple/20 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Sacrifice - Survival Horror Game</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      A first-person psychological horror game blending stealth, puzzle-solving, and survival mechanics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-purple/20 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Advanced AI Systems</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Developing adaptive enemy behaviors that learn from player actions and create dynamic challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-purple/20 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Atmospheric Sound Design</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Creating immersive audio landscapes that enhance the horror experience and build tension.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-purple">Skills & Tools</h2>
              <p className="text-gray-400 mt-2">Some of the technologies I work with</p>
            </div>
            <Link to="/skills" className="mt-4 md:mt-0">
              <Button variant="outline" className="neon-border">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {displayedSkills.map((skill) => (
              <SkillIcon
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Interested in collaborating on a project or want to discuss game development opportunities? 
            I'm always open to new connections and exciting ventures.
          </p>
          <Link to="/contact">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

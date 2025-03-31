
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h1>
          <div className="w-20 h-1 bg-neon-purple rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">My Background</h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm Vabby Negi, a passionate solo game developer specializing in horror and interactive gameplay experiences. 
                I have hands-on experience with Unreal Engine 5, AI-driven game mechanics, and creating immersive environments.
              </p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                My approach to game design focuses on engaging storytelling, dynamic enemy AI, and puzzle-solving mechanics that enhance player experience. 
                I continuously experiment with new ideas to push the boundaries of interactive storytelling and gameplay.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Currently, I am working on a survival horror game that blends psychological tension with strategic puzzle-solving. 
                My goal is to craft experiences that challenge, engage, and immerse players in unforgettable worlds.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">My Approach</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="min-w-[24px] h-6 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Player-Centric Design</h3>
                    <p className="text-gray-300 mt-2">
                      I prioritize player experience above all else, ensuring that game mechanics serve the emotional journey I want players to experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-[24px] h-6 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Atmospheric Storytelling</h3>
                    <p className="text-gray-300 mt-2">
                      I believe in environmental storytelling, using level design, sound, and visual cues to create rich narratives that don't rely solely on exposition.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-[24px] h-6 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Technical Innovation</h3>
                    <p className="text-gray-300 mt-2">
                      I'm constantly exploring new technologies and techniques to create more engaging and immersive experiences, particularly in AI behavior and environmental interaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-[24px] h-6 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Iterative Development</h3>
                    <p className="text-gray-300 mt-2">
                      I believe in rapid prototyping and constant iteration, gathering feedback early and often to refine gameplay mechanics and narrative elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Current Focus</h2>
              
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Sacrifice</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    A first-person psychological horror game currently in development.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">AI-Driven Gameplay</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Developing adaptive enemy AI systems that learn from player behavior.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Environmental Storytelling</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Creating rich, atmospheric environments that tell stories without words.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/projects/sacrifice">
                  <Button variant="link" className="text-neon-purple p-0 flex items-center">
                    View Current Project 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Connect</h2>
              
              <a 
                href="https://www.linkedin.com/in/vabbynegi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center mb-4 text-gray-300 hover:text-neon-purple transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
                LinkedIn
              </a>
              
              <Link 
                to="/contact"
                className="inline-block w-full mt-4"
              >
                <Button 
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

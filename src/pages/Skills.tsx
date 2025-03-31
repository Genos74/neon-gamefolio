
import { useEffect } from 'react';
import SkillIcon from '@/components/SkillIcon';
import { skillCategories } from '@/data/skills';

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Tools</h1>
          <p className="text-gray-300 max-w-2xl">
            The technologies, software, and skills I use to bring game concepts to life. Each skill represents years of practice and dedication to the craft of game development.
          </p>
          <div className="w-20 h-1 bg-neon-purple mt-6 rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-neon-purple text-neon-purple">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {category.skills.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-neon-purple">My Development Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Technical Excellence</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    I believe in mastering the tools of the trade to unlock their full potential in creating immersive gaming experiences.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Continuous Learning</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    The game development landscape is always evolving, and I'm committed to growing my skillset to stay at the cutting edge.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Artistic Vision</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Technical skills serve creative expression. I strive to balance technical prowess with artistic vision to create meaningful experiences.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-medium text-white">Cross-Disciplinary Approach</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Game development requires expertise across multiple domains. I pride myself on being versatile across programming, design, and art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

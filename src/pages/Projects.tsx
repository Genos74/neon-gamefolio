
import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';

const Projects = () => {
  const projects = getAllProjects();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h1>
          <p className="text-gray-300 max-w-2xl">
            Explore my game development portfolio featuring horror games, interactive experiences, and experiments with AI-driven gameplay.
          </p>
          <div className="w-20 h-1 bg-neon-purple mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.mainImage}
              tags={project.tags}
              isHighlighted={project.featured && projects.length <= 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectById } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-gray-400 hover:text-neon-purple transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{project.title}</h1>
          <p className="text-xl text-neon-purple">{project.tagline}</p>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-12 neon-border">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8 rounded-xl mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Overview</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Development Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="min-w-[24px] h-6 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                    </div>
                    <p className="ml-4 text-gray-300">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Solutions & Approaches</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <div className="min-w-[24px] h-6 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                    </div>
                    <p className="ml-4 text-gray-300">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8 rounded-xl mb-10 sticky top-28">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Technologies</h2>
              
              <div className="space-y-4">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center bg-black/30 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                    <span className="ml-3 text-gray-200">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4 text-white">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.slice(0, 4).map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden aspect-square">
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white">
                    Discuss This Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

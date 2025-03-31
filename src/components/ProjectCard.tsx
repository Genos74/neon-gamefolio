
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isHighlighted?: boolean;
}

const ProjectCard = ({ id, title, description, image, tags, isHighlighted = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500",
        isHighlighted ? "md:col-span-2" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-70 z-10"></div>
      
      <div className="relative w-full h-[350px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )} 
        />
      </div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className={cn(
          "text-xl md:text-2xl font-bold mb-2 transition-all duration-300",
          isHovered ? "text-neon-purple" : "text-white"
        )}>
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Link to={`/projects/${id}`}>
          <Button 
            variant="link" 
            className={cn(
              "text-white p-0 font-medium transition-all duration-300 flex items-center gap-2",
              isHovered ? "text-neon-purple translate-x-1" : ""
            )}
          >
            View Project <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 md:px-8">
      <div className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-gradient leading-tight">
          Crafting Immersive Horror <br className="hidden sm:block" />
          Gaming Experiences
        </h1>
        
        <div className="w-20 h-1 bg-neon-purple mx-auto my-6 rounded-full"></div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          I am a game developer specializing in immersive horror and interactive gameplay mechanics. 
          I focus on creating AI-driven experiences, atmospheric environments, and engaging gameplay systems.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/projects">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="neon-border px-8 py-6">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

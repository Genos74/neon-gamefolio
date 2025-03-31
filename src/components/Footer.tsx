
import { Link } from 'react-router-dom';
import { Gamepad, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Gamepad className="h-5 w-5 text-neon-purple" />
              <span className="font-bold text-xl">Vabby Negi</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Game developer specializing in horror and interactive gameplay experiences, 
              creating immersive worlds with atmospheric environments.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-white mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-neon-purple transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-neon-purple transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-neon-purple transition-colors">Projects</Link></li>
                <li><Link to="/skills" className="hover:text-neon-purple transition-colors">Skills</Link></li>
                <li><Link to="/contact" className="hover:text-neon-purple transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-white mb-4">Featured Project</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/projects/sacrifice" className="hover:text-neon-purple transition-colors">Sacrifice</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-white mb-4">Connect</h3>
              <a 
                href="https://www.linkedin.com/in/vabbynegi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vabby Negi. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 sm:mt-0">
            Game Developer · Horror Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

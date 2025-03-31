
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "py-3 glass-card" : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white hover:text-neon-purple transition-colors"
        >
          <Gamepad className="h-6 w-6" />
          <span className="font-bold text-xl">Vabby Negi</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-neon-purple relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-neon-purple after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                location.pathname === link.path && "text-neon-purple after:scale-x-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card mt-3 p-4 rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium p-2 rounded-md transition-colors",
                  location.pathname === link.path 
                    ? "bg-neon-purple/20 text-neon-purple" 
                    : "hover:bg-white/5 hover:text-neon-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="glass-card p-10 rounded-xl text-center max-w-xl">
        <div className="mb-6 w-24 h-24 mx-auto rounded-full bg-neon-purple/20 flex items-center justify-center">
          <span className="text-5xl font-bold text-neon-purple">404</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Page Not Found</h1>
        
        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link to="/">
          <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Contact</h1>
          <p className="text-gray-300 max-w-2xl">
            Have a project in mind or want to discuss a collaboration? I'm always open to new opportunities and connections in the game development space.
          </p>
          <div className="w-20 h-1 bg-neon-purple mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8 rounded-xl mb-8 sticky top-28">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Connect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Social</h3>
                  <a 
                    href="https://www.linkedin.com/in/vabbynegi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-neon-purple transition-colors"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Collaboration</h3>
                  <p className="text-gray-300">
                    I'm open to discussing:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-400">
                    <li>• Game development projects</li>
                    <li>• Freelance opportunities</li>
                    <li>• Mentorship and knowledge sharing</li>
                    <li>• Speaking engagements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Response Time</h3>
                  <p className="text-gray-300">
                    I typically respond within 48 hours.
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

export default Contact;

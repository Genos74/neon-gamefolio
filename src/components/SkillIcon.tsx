
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  icon: string;
  proficiency?: number;
}

const SkillIcon = ({ name, icon, proficiency = 85 }: SkillIconProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl mb-3 glass-card p-3 flex items-center justify-center overflow-hidden group-hover:border-neon-purple/50 transition-colors">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
        {proficiency > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div 
              className="h-full bg-neon-purple" 
              style={{ width: `${proficiency}%` }}
            ></div>
          </div>
        )}
      </div>
      <span className="text-sm text-gray-300 group-hover:text-neon-purple transition-colors">{name}</span>
    </div>
  );
};

export default SkillIcon;

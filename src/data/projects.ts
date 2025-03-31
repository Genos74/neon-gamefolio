
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  mainImage: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "sacrifice",
    title: "Sacrifice",
    tagline: "Survival Horror Game",
    description: "A first-person psychological horror game featuring adaptive AI enemies and immersive environments.",
    detailedDescription: "Sacrifice is a first-person psychological horror game where players must navigate through a labyrinth of terrifying environments while being hunted by adaptive AI enemies. The game features a unique sanity system that affects gameplay mechanics and environmental interactions. As players progress, they uncover the dark history of an abandoned research facility and must make difficult choices that impact the story's outcome.",
    challenges: [
      "Creating realistic AI behavior that adapts to player actions",
      "Developing an immersive atmospheric environment with dynamic lighting",
      "Implementing a complex sanity system that affects gameplay mechanics",
      "Optimizing performance for smooth gameplay on various hardware",
      "Balancing horror elements with engaging puzzle mechanics"
    ],
    solutions: [
      "Used Unreal Engine's behavior tree system with custom Blueprint scripts for advanced AI behavior patterns",
      "Created layered sound design with dynamic audio cues based on player proximity to threats",
      "Implemented post-processing effects that subtly change based on character's mental state",
      "Designed intricate level layouts with optimized asset usage and occlusion culling",
      "Extensive playtesting to refine the horror experience while maintaining engaging gameplay"
    ],
    technologies: [
      "Unreal Engine 5",
      "Autodesk Maya",
      "Substance Painter",
      "Photoshop",
      "Blueprint (Visual Scripting)"
    ],
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    tags: ["Horror", "First-Person", "Unreal Engine", "In Development"],
    featured: true
  },
  {
    id: "echo-chamber",
    title: "Echo Chamber",
    tagline: "Psychological Thriller",
    description: "A narrative-driven psychological thriller where sound is your primary tool for navigation and survival.",
    detailedDescription: "Echo Chamber is an innovative psychological thriller where players must navigate through a pitch-black environment using only sound to guide them. The game features advanced 3D audio technology that creates a truly immersive experience. Players must listen carefully to their surroundings, using echolocation mechanics to avoid dangers and solve puzzles. The narrative unfolds through audio diaries and environmental storytelling, revealing a disturbing story about perception and reality.",
    challenges: [
      "Implementing sophisticated 3D audio systems",
      "Creating gameplay mechanics based primarily on sound",
      "Designing puzzles that work without visual cues",
      "Balancing difficulty for a primarily audio-based game"
    ],
    solutions: [
      "Utilized Unreal Engine's audio spatialization systems with custom modifications",
      "Developed unique echolocation mechanics using Blueprint scripting",
      "Created audio-based puzzles with subtle audio cues and feedback",
      "Implemented adaptive difficulty based on player performance"
    ],
    technologies: [
      "Unreal Engine 4",
      "Wwise Audio Engine",
      "Blueprint (Visual Scripting)",
      "GarageBand"
    ],
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    tags: ["Audio-Driven", "Psychological", "Puzzle"],
    featured: false
  },
  {
    id: "neural-nightmare",
    title: "Neural Nightmare",
    tagline: "AI-Driven Horror",
    description: "An experimental horror game utilizing machine learning to create unpredictable enemy behaviors and personalized scares.",
    detailedDescription: "Neural Nightmare is an experimental horror game that uses machine learning algorithms to analyze player behavior and create personalized horror experiences. The enemy AI adapts to the player's strategies, learning from encounters to become increasingly challenging. The game environment also changes based on what the system learns scares each individual player the most. This creates a unique horror experience that becomes more terrifying the more you play.",
    challenges: [
      "Implementing machine learning systems within a game environment",
      "Creating AI that genuinely learns from player behavior",
      "Balancing procedural generation with crafted horror elements",
      "Managing performance with complex AI systems"
    ],
    solutions: [
      "Developed a simplified machine learning system using Blueprint and C++",
      "Created a data collection system that tracks player reactions to different scenarios",
      "Designed modular environment pieces that can be reconfigured based on player data",
      "Optimized AI routines to minimize performance impact"
    ],
    technologies: [
      "Unreal Engine 5",
      "C++",
      "Blueprint (Visual Scripting)",
      "Python for data processing"
    ],
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    tags: ["AI-Driven", "Experimental", "Adaptive Horror"],
    featured: false
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = (): Project[] => {
  return [...projects];
};

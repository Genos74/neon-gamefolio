
export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Game Engines",
    skills: [
      {
        name: "Unreal Engine 5",
        icon: "/placeholder.svg",
        proficiency: 90
      },
      {
        name: "Unity",
        icon: "/placeholder.svg",
        proficiency: 65
      }
    ]
  },
  {
    title: "3D Modeling",
    skills: [
      {
        name: "Autodesk Maya",
        icon: "/placeholder.svg",
        proficiency: 85
      },
      {
        name: "Blender",
        icon: "/placeholder.svg",
        proficiency: 80
      },
      {
        name: "ZBrush",
        icon: "/placeholder.svg",
        proficiency: 70
      }
    ]
  },
  {
    title: "Texturing & Graphics",
    skills: [
      {
        name: "Substance Painter",
        icon: "/placeholder.svg",
        proficiency: 85
      },
      {
        name: "Photoshop",
        icon: "/placeholder.svg",
        proficiency: 90
      },
      {
        name: "Illustrator",
        icon: "/placeholder.svg",
        proficiency: 65
      }
    ]
  },
  {
    title: "Audio",
    skills: [
      {
        name: "GarageBand",
        icon: "/placeholder.svg",
        proficiency: 75
      },
      {
        name: "Audacity",
        icon: "/placeholder.svg",
        proficiency: 80
      }
    ]
  },
  {
    title: "Programming",
    skills: [
      {
        name: "Blueprint",
        icon: "/placeholder.svg",
        proficiency: 95
      },
      {
        name: "C++",
        icon: "/placeholder.svg",
        proficiency: 70
      },
      {
        name: "Python",
        icon: "/placeholder.svg",
        proficiency: 60
      }
    ]
  }
];

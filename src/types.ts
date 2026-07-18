export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools";
  iconUrl?: string; // Optional custom SVG path or Simple Icons URL
  iconName?: string; // Standard icon name or visual cue
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: "web" | "app" | "ml" | "other";
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "club" | "academic" | "competition";
}

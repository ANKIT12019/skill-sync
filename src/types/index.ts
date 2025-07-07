export interface Skill {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  resources?: string[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  order: number;
  estimatedDuration: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface RoadmapGeneratorProps {
  skills: Skill[];
  title?: string;
  description?: string;
} 
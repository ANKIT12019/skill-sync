import React from 'react';
import RoadmapGenerator from '../components/RoadmapGenerator';
import { sampleSkills } from '../data/sampleSkills';

const RoadmapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RoadmapGenerator 
        skills={sampleSkills}
        title="Frontend Development Roadmap"
        description="Master modern web development with this comprehensive learning path"
      />
    </div>
  );
};

export default RoadmapPage; 
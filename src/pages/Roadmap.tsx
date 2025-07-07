import React, { useState } from 'react';
import Select from 'react-select';
import RoadmapGenerator from '../components/RoadmapGenerator';
import { sampleSkills } from '../data/sampleSkills';

interface SkillOption {
  value: string;
  label: string;
  skill: any;
}

const Roadmap: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<SkillOption[]>([]);
  const [showRoadmap, setShowRoadmap] = useState(false);

  // Convert sample skills to options for react-select
  const skillOptions: SkillOption[] = sampleSkills.map(skill => ({
    value: skill.id,
    label: skill.name,
    skill: skill
  }));

  const handleGenerateRoadmap = () => {
    if (selectedSkills.length > 0) {
      setShowRoadmap(true);
    }
  };

  const handleSkillChange = (selectedOptions: any) => {
    setSelectedSkills(selectedOptions || []);
    setShowRoadmap(false);
  };

  const selectedSkillObjects = selectedSkills.map(option => option.skill);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Learning Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the skills you want to learn and we'll create a personalized roadmap just for you
          </p>
        </div>

        {/* Skill Selection Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Skills</h2>
          
          {/* Skill Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Skills to Learn
            </label>
            <Select
              isMulti
              options={skillOptions}
              value={selectedSkills}
              onChange={handleSkillChange}
              placeholder="Search and select skills..."
              className="text-sm"
              classNamePrefix="select"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  minHeight: '48px',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: '#3b82f6'
                  }
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected 
                    ? '#3b82f6' 
                    : state.isFocused 
                    ? '#eff6ff' 
                    : 'white',
                  color: state.isSelected ? 'white' : '#374151',
                  '&:hover': {
                    backgroundColor: state.isSelected ? '#2563eb' : '#eff6ff'
                  }
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: '#eff6ff',
                  borderRadius: '0.375rem'
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: '#1e40af',
                  fontWeight: '500'
                }),
                multiValueRemove: (provided) => ({
                  ...provided,
                  color: '#1e40af',
                  '&:hover': {
                    backgroundColor: '#dbeafe',
                    color: '#1e3a8a'
                  }
                })
              }}
            />
            <p className="text-sm text-gray-500 mt-2">
              {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
            </p>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={handleGenerateRoadmap}
              disabled={selectedSkills.length === 0}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                selectedSkills.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {selectedSkills.length === 0 ? 'Select Skills First' : 'Generate Roadmap'}
            </button>
          </div>
        </div>

        {/* Roadmap Display */}
        {showRoadmap && selectedSkillObjects.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <RoadmapGenerator 
              skills={selectedSkillObjects}
              title="Your Personalized Learning Roadmap"
              description="Here's your customized learning path based on the skills you selected"
            />
          </div>
        )}

        {/* Placeholder when no roadmap is generated */}
        {!showRoadmap && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Select the skills you want to learn above and click "Generate Roadmap" to see your personalized learning path.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-900 mb-2">Structured Learning</h4>
                <p className="text-sm text-gray-600">Follow a step-by-step path designed for your skill level</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🎥</div>
                <h4 className="font-semibold text-gray-900 mb-2">Video Resources</h4>
                <p className="text-sm text-gray-600">Get recommended videos for each learning step</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-gray-900 mb-2">Track Progress</h4>
                <p className="text-sm text-gray-600">Monitor your learning progress and completion</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap; 
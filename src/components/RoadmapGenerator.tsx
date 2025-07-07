import React, { useState, useMemo } from 'react';

interface Skill {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  resources?: string[];
}

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  order: number;
  estimatedDuration: string;
  status: 'not-started' | 'in-progress' | 'completed';
  youtubeVideo?: {
    title: string;
    thumbnail: string;
    link: string;
  };
}

interface RoadmapGeneratorProps {
  skills: Skill[];
  title?: string;
  description?: string;
}

const RoadmapGenerator: React.FC<RoadmapGeneratorProps> = ({ 
  skills, 
  title = "Your Learning Roadmap", 
  description = "Follow this step-by-step guide to master your skills" 
}) => {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  // Generate roadmap steps based on skills and their dependencies
  const roadmapSteps = useMemo(() => {
    const steps: RoadmapStep[] = [];
    
    // Group skills by difficulty
    const beginnerSkills = skills.filter(skill => skill.difficulty === 'beginner');
    const intermediateSkills = skills.filter(skill => skill.difficulty === 'intermediate');
    const advancedSkills = skills.filter(skill => skill.difficulty === 'advanced');

    // Create steps based on difficulty progression
    if (beginnerSkills.length > 0) {
      steps.push({
        id: 'step-1',
        title: 'Foundation Skills',
        description: 'Start with these fundamental concepts to build a strong base',
        skills: beginnerSkills,
        order: 1,
        estimatedDuration: `${beginnerSkills.length * 2} weeks`,
        status: 'not-started',
        youtubeVideo: {
          title: 'Complete Beginner Guide to Web Development',
          thumbnail: 'https://via.placeholder.com/320x180/4F46E5/FFFFFF?text=Web+Development+Basics',
          link: 'https://www.youtube.com/watch?v=dummy-beginner'
        }
      });
    }

    if (intermediateSkills.length > 0) {
      steps.push({
        id: 'step-2',
        title: 'Intermediate Concepts',
        description: 'Build upon your foundation with more advanced techniques',
        skills: intermediateSkills,
        order: 2,
        estimatedDuration: `${intermediateSkills.length * 3} weeks`,
        status: 'not-started',
        youtubeVideo: {
          title: 'React.js Complete Course for Beginners',
          thumbnail: 'https://via.placeholder.com/320x180/059669/FFFFFF?text=React+Complete+Course',
          link: 'https://www.youtube.com/watch?v=dummy-react'
        }
      });
    }

    if (advancedSkills.length > 0) {
      steps.push({
        id: 'step-3',
        title: 'Advanced Mastery',
        description: 'Master complex concepts and become an expert',
        skills: advancedSkills,
        order: 3,
        estimatedDuration: `${advancedSkills.length * 4} weeks`,
        status: 'not-started',
        youtubeVideo: {
          title: 'Advanced TypeScript Patterns and Best Practices',
          thumbnail: 'https://via.placeholder.com/320x180/DC2626/FFFFFF?text=Advanced+TypeScript',
          link: 'https://www.youtube.com/watch?v=dummy-advanced'
        }
      });
    }

    return steps;
  }, [skills]);

  const toggleStepCompletion = (stepId: string) => {
    const newCompletedSteps = new Set(completedSteps);
    if (newCompletedSteps.has(stepId)) {
      newCompletedSteps.delete(stepId);
    } else {
      newCompletedSteps.add(stepId);
    }
    setCompletedSteps(newCompletedSteps);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStepStatusColor = (stepId: string) => {
    if (completedSteps.has(stepId)) {
      return 'bg-green-500';
    }
    return 'bg-gray-300';
  };

  const getStepStatusText = (stepId: string) => {
    if (completedSteps.has(stepId)) {
      return 'Completed';
    }
    return 'Not Started';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Progress Overview</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(completedSteps.size / roadmapSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {completedSteps.size} of {roadmapSteps.length} steps completed
          </span>
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="space-y-8">
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connection Line */}
            {index < roadmapSteps.length - 1 && (
              <div className="absolute left-8 top-24 w-0.5 h-8 bg-gray-300"></div>
            )}
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${getStepStatusColor(step.id)}`}>
                      {step.order}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-blue-100 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-100">Estimated Duration</div>
                    <div className="text-xl font-semibold">{step.estimatedDuration}</div>
                    <button
                      onClick={() => toggleStepCompletion(step.id)}
                      className={`mt-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        completedSteps.has(step.id)
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-white text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {getStepStatusText(step.id)}
                    </button>
                  </div>
                </div>
              </div>

              {/* YouTube Video Recommendation */}
              {step.youtubeVideo && (
                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-red-500 mr-2">▶️</span>
                    Recommended Video
                  </h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={step.youtubeVideo.thumbnail} 
                        alt={step.youtubeVideo.title}
                        className="w-32 h-20 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{step.youtubeVideo.title}</h5>
                      <p className="text-sm text-gray-600 mb-2">Perfect starting point for this learning step</p>
                      <a
                        href={step.youtubeVideo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <span className="mr-2">▶</span>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Grid */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Skills to Master ({step.skills.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {step.skills.map((skill) => (
                    <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">{skill.name}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(skill.difficulty)}`}>
                          {skill.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{skill.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>⏱️ {skill.estimatedTime}</span>
                        {skill.prerequisites && skill.prerequisites.length > 0 && (
                          <span>📋 {skill.prerequisites.length} prereq</span>
                        )}
                      </div>
                      
                      {/* Prerequisites */}
                      {skill.prerequisites && skill.prerequisites.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="text-xs text-gray-500 mb-1">Prerequisites:</div>
                          <div className="flex flex-wrap gap-1">
                            {skill.prerequisites.map((prereq, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {prereq}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Resources */}
                      {skill.resources && skill.resources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="text-xs text-gray-500 mb-1">Resources:</div>
                          <div className="space-y-1">
                            {skill.resources.map((resource, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="block text-xs text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                📚 {resource}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {completedSteps.size === roadmapSteps.length && roadmapSteps.length > 0 && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">Congratulations!</h3>
          <p className="text-green-700">You've completed your learning roadmap. You're now ready to apply these skills in real-world projects!</p>
        </div>
      )}
    </div>
  );
};

export default RoadmapGenerator; 
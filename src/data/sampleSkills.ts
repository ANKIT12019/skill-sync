import { Skill } from '../types';

export const sampleSkills: Skill[] = [
  // Beginner Skills
  {
    id: 'html-basics',
    name: 'HTML Fundamentals',
    description: 'Learn the basics of HTML markup, elements, and document structure',
    difficulty: 'beginner',
    estimatedTime: '1-2 weeks',
    resources: ['MDN HTML Guide', 'W3Schools HTML Tutorial']
  },
  {
    id: 'css-basics',
    name: 'CSS Styling',
    description: 'Master CSS selectors, properties, and basic layout techniques',
    difficulty: 'beginner',
    estimatedTime: '2-3 weeks',
    prerequisites: ['HTML Fundamentals'],
    resources: ['CSS-Tricks', 'MDN CSS Reference']
  },
  {
    id: 'js-basics',
    name: 'JavaScript Fundamentals',
    description: 'Learn variables, functions, loops, and basic DOM manipulation',
    difficulty: 'beginner',
    estimatedTime: '3-4 weeks',
    prerequisites: ['HTML Fundamentals'],
    resources: ['Eloquent JavaScript', 'MDN JavaScript Guide']
  },

  // Intermediate Skills
  {
    id: 'react-basics',
    name: 'React Components',
    description: 'Build reusable UI components with React hooks and state management',
    difficulty: 'intermediate',
    estimatedTime: '4-6 weeks',
    prerequisites: ['JavaScript Fundamentals', 'CSS Styling'],
    resources: ['React Official Docs', 'React Tutorial']
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    description: 'Connect your applications to external APIs using fetch and async/await',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    prerequisites: ['JavaScript Fundamentals'],
    resources: ['MDN Fetch API', 'JSONPlaceholder API']
  },
  {
    id: 'state-management',
    name: 'State Management',
    description: 'Manage complex application state with Context API and Redux',
    difficulty: 'intermediate',
    estimatedTime: '3-4 weeks',
    prerequisites: ['React Components'],
    resources: ['Redux Toolkit', 'React Context API']
  },

  // Advanced Skills
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Add type safety to your JavaScript code with TypeScript',
    difficulty: 'advanced',
    estimatedTime: '4-6 weeks',
    prerequisites: ['JavaScript Fundamentals', 'React Components'],
    resources: ['TypeScript Handbook', 'TypeScript Deep Dive']
  },
  {
    id: 'testing',
    name: 'Testing & Debugging',
    description: 'Write unit tests and debug applications effectively',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    prerequisites: ['React Components', 'JavaScript Fundamentals'],
    resources: ['Jest Documentation', 'React Testing Library']
  },
  {
    id: 'performance',
    name: 'Performance Optimization',
    description: 'Optimize React applications for better performance and user experience',
    difficulty: 'advanced',
    estimatedTime: '2-3 weeks',
    prerequisites: ['React Components', 'State Management'],
    resources: ['React Performance', 'Web Vitals']
  }
]; 
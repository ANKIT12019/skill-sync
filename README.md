# SkillSync - AI-Powered Career Pathfinder

SkillSync is a React-based application that helps users create personalized learning roadmaps for their career development. The application features an intelligent roadmap generator that organizes skills by difficulty and creates step-by-step learning paths.

## Features

- **RoadmapGenerator Component**: A comprehensive component that displays step-by-step learning roadmaps using cards
- **Skill Organization**: Automatically groups skills by difficulty (beginner, intermediate, advanced)
- **Progress Tracking**: Visual progress indicators and completion status for each learning step
- **Prerequisites Management**: Shows skill dependencies and prerequisites
- **Resource Links**: Displays learning resources for each skill
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive interface
- **TypeScript Support**: Full TypeScript implementation for type safety

## Project Structure

```
skill-sync/
├── src/
│   ├── components/
│   │   └── RoadmapGenerator.tsx    # Main roadmap component
│   ├── pages/
│   │   └── RoadmapPage.tsx         # Demo page showcasing the component
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── data/
│   │   └── sampleSkills.ts         # Sample skill data
│   ├── hooks/                      # Custom React hooks
│   ├── api/                        # API integration
│   └── App.tsx                     # Main application component
├── tailwind.config.js              # Tailwind CSS configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skill-sync
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## RoadmapGenerator Component

The `RoadmapGenerator` component is the core feature of SkillSync. It takes a list of skills and automatically creates a structured learning roadmap.

### Props

```typescript
interface RoadmapGeneratorProps {
  skills: Skill[];
  title?: string;
  description?: string;
}
```

### Skill Interface

```typescript
interface Skill {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  resources?: string[];
}
```

### Usage Example

```tsx
import RoadmapGenerator from './components/RoadmapGenerator';
import { sampleSkills } from './data/sampleSkills';

function App() {
  return (
    <RoadmapGenerator 
      skills={sampleSkills}
      title="Frontend Development Roadmap"
      description="Master modern web development with this comprehensive learning path"
    />
  );
}
```

## Features of the RoadmapGenerator

### 1. Automatic Skill Organization
- Groups skills by difficulty level
- Creates logical learning progression
- Handles prerequisites and dependencies

### 2. Visual Progress Tracking
- Progress bar showing completion percentage
- Step-by-step completion status
- Visual indicators for each learning phase

### 3. Interactive Elements
- Click to mark steps as completed
- Hover effects on skill cards
- Responsive grid layout

### 4. Rich Skill Information
- Difficulty badges with color coding
- Estimated time for each skill
- Prerequisites display
- Learning resources links

### 5. Responsive Design
- Mobile-friendly layout
- Adaptive grid system
- Touch-friendly interactions

## Customization

### Styling
The component uses Tailwind CSS classes and can be easily customized by modifying the className props.

### Data Structure
You can extend the Skill interface to include additional properties like:
- `category`: Skill category
- `tags`: Skill tags
- `certification`: Certification information
- `projects`: Related project ideas

### Adding New Features
The component is built with extensibility in mind. You can easily add:
- Skill filtering
- Search functionality
- Export capabilities
- Integration with learning platforms

## Technologies Used

- **React 19**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

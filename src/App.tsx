import React, { useState } from 'react';
import RoadmapPage from './pages/RoadmapPage';
import Roadmap from './pages/Roadmap';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'roadmap' | 'jobs' | 'resume' | 'assistant'>('roadmap');

  const renderPage = () => {
    switch (currentPage) {
      case 'roadmap':
        return <Roadmap />;
      case 'home':
        return <RoadmapPage />;
      default:
        return <Roadmap />;
    }
  };

  return (
    <div className="App">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">SkillSync</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('roadmap')}
                className={`transition-colors ${currentPage === 'roadmap' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Roadmap
              </button>
              <button 
                onClick={() => setCurrentPage('jobs')}
                className={`transition-colors ${currentPage === 'jobs' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Jobs
              </button>
              <button 
                onClick={() => setCurrentPage('resume')}
                className={`transition-colors ${currentPage === 'resume' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Resume
              </button>
              <button 
                onClick={() => setCurrentPage('assistant')}
                className={`transition-colors ${currentPage === 'assistant' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Assistant
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;

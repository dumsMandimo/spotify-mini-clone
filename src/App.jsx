import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Player from './components/player';
import Home from './pages/home';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [currentTrack, setCurrentTrack] = useState(null);

  // Function to render different pages based on activeView
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'search':
        return (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-800 to-black">
            <div className="text-white text-2xl">Search Page - Coming Soon</div>
          </div>
        );
      case 'library':
        return (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-800 to-black">
            <div className="text-white text-2xl">Library Page - Coming Soon</div>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black">

      <div className="flex-1 flex overflow-hidden">
       
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        
        {renderContent()}
      </div>

     
      <Player currentTrack={currentTrack} />
    </div>
  );
}

export default App;
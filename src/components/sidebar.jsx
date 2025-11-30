// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Home, Search, Library, Heart, Plus } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Search, label: 'Search', id: 'search' },
    { icon: Library, label: 'Your Library', id: 'library' }
  ];

  const playlists = [
    'Jazz Vibes',
    'Workout Mix',
    'Chill Evening',
    'Road Trip',
    'Focus Flow',
    'Party Hits'
  ];

  return (
    <div className="w-64 bg-black h-full flex flex-col p-6">
      {/* Logo */}
      <div className="text-white text-2xl font-bold mb-8">
        Spotify
      </div>
      
      {/* Main Navigation */}
      <nav className="space-y-4 mb-8">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView && setActiveView(item.id)}
              className={`flex items-center gap-4 w-full text-left px-4 py-2 rounded transition ${
                activeView === item.id 
                  ? 'text-white bg-gray-800' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Create Playlist & Liked Songs */}
      <div className="space-y-4 mb-6">
        <button className="flex items-center gap-4 text-gray-400 hover:text-white transition w-full text-left">
          <Plus className="w-6 h-6" />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center gap-4 text-gray-400 hover:text-white transition w-full text-left">
          <Heart className="w-6 h-6" />
          <span>Liked Songs</span>
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-6"></div>

      {/* Playlists List */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-3">
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className="text-sm text-gray-400 hover:text-white transition w-full text-left block truncate"
            >
              {playlist}
            </button>
          ))}
        </div>
      </div>

      {/* Install App (Optional) */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <button className="text-sm text-gray-400 hover:text-white transition">
          Install App
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
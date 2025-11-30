// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Player from '../components/player';
import PlaylistCard from '../components/playlistCard';
import mockSpotifyService from '../services/mockSpotify';

const Home = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      
      // Fetch data from your Spotify service
      const [featured, recent] = await Promise.all([
        mockSpotifyService.getFeaturedPlaylists(),
        mockSpotifyService.getRecentlyPlayed()
      ]);

      setFeaturedPlaylists(featured.playlists.items);
      setRecentlyPlayed(recent.items);
    } catch (error) {
      console.error('Error loading home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
      <div className="p-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">{getGreeting()}</h1>
          <p className="text-gray-300 text-lg">Your daily music recommendations</p>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-white text-xl">Loading your music...</div>
          </div>
        ) : (
          <>
            {/* Recently Played Section */}
            {recentlyPlayed.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Jump back in</h2>
                <div className="grid grid-cols-2 gap-4">
                  {recentlyPlayed.map(item => (
                    <div
                      key={item.track?.id || item.id}
                      className="bg-white/10 backdrop-blur-sm rounded-lg flex items-center gap-4 hover:bg-white/20 transition cursor-pointer group overflow-hidden"
                    >
                      <img
                        src={item.track?.album?.images?.[0]?.url || item.images?.[0]?.url}
                        alt={item.track?.name || item.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1 pr-4">
                        <h3 className="text-white font-semibold truncate">
                          {item.track?.name || item.name}
                        </h3>
                        {item.track?.artists && (
                          <p className="text-gray-400 text-sm truncate">
                            {item.track.artists.map(a => a.name).join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Playlists Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Featured Playlists</h2>
                <button className="text-gray-300 hover:text-white text-sm font-semibold">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {featuredPlaylists.map(playlist => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </section>

            {/* Made For You Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Made for you</h2>
                <button className="text-gray-300 hover:text-white text-sm font-semibold">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {featuredPlaylists.slice(0, 5).map(playlist => (
                  <PlaylistCard key={`made-${playlist.id}`} playlist={playlist} />
                ))}
              </div>
            </section>

            {/* Your Top Mixes Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Your top mixes</h2>
                <button className="text-gray-300 hover:text-white text-sm font-semibold">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {featuredPlaylists.slice(2, 7).map(playlist => (
                  <PlaylistCard key={`top-${playlist.id}`} playlist={playlist} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
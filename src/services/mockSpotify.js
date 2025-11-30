// src/services/mockSpotifyService.js

// ============================================
// MOCK DATA LAYER
// ============================================

const mockData = {
  // ARTISTS
  artists: [
    {
      id: "artist_1",
      name: "Tame Impala",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
          height: 300,
          width: 300
        }
      ],
      genres: ["psychedelic rock", "indie rock", "synth-pop"],
      popularity: 82,
      followers: {
        total: 4500000
      },
      type: "artist"
    },
    {
      id: "artist_2",
      name: "Beyoncé",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300",
          height: 300,
          width: 300
        }
      ],
      genres: ["pop", "r&b", "dance"],
      popularity: 95,
      followers: {
        total: 35000000
      },
      type: "artist"
    },
    {
      id: "artist_3",
      name: "Raveena",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300",
          height: 300,
          width: 300
        }
      ],
      genres: ["r&b", "soul", "indie"],
      popularity: 68,
      followers: {
        total: 850000
      },
      type: "artist"
    },
    {
      id: "artist_4",
      name: "Harry Styles",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300",
          height: 300,
          width: 300
        }
      ],
      genres: ["pop", "rock", "indie pop"],
      popularity: 92,
      followers: {
        total: 42000000
      },
      type: "artist"
    },
    {
      id: "artist_5",
      name: "Lana Del Rey",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
          height: 300,
          width: 300
        }
      ],
      genres: ["indie pop", "dream pop", "alternative"],
      popularity: 88,
      followers: {
        total: 28000000
      },
      type: "artist"
    }
  ],

  // ALBUMS
  albums: [
    {
      id: "album_1",
      name: "Lonerism",
      artists: [{ id: "artist_1", name: "Tame Impala" }],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300",
          height: 300,
          width: 300
        }
      ],
      release_date: "2012-10-05",
      total_tracks: 12,
      type: "album",
      genres: ["psychedelic rock", "indie rock"],
      label: "Modular Recordings",
      popularity: 79
    },
    {
      id: "album_2",
      name: "Renaissance",
      artists: [{ id: "artist_2", name: "Beyoncé" }],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300",
          height: 300,
          width: 300
        }
      ],
      release_date: "2022-07-29",
      total_tracks: 16,
      type: "album",
      genres: ["dance", "house", "pop"],
      label: "Parkwood Entertainment",
      popularity: 91
    },
    {
      id: "album_3",
      name: "Currents",
      artists: [{ id: "artist_1", name: "Tame Impala" }],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300",
          height: 300,
          width: 300
        }
      ],
      release_date: "2015-07-17",
      total_tracks: 13,
      type: "album",
      genres: ["psychedelic pop", "synth-pop"],
      label: "Modular Recordings",
      popularity: 85
    },
    {
      id: "album_4",
      name: "Harry's House",
      artists: [{ id: "artist_4", name: "Harry Styles" }],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300",
          height: 300,
          width: 300
        }
      ],
      release_date: "2022-05-20",
      total_tracks: 13,
      type: "album",
      genres: ["pop", "indie pop"],
      label: "Columbia Records",
      popularity: 89
    },
    {
      id: "album_5",
      name: "Born to Die",
      artists: [{ id: "artist_5", name: "Lana Del Rey" }],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300",
          height: 300,
          width: 300
        }
      ],
      release_date: "2012-01-27",
      total_tracks: 15,
      type: "album",
      genres: ["indie pop", "baroque pop"],
      label: "Interscope Records",
      popularity: 84
    }
  ],

  // TRACKS
  tracks: [
    {
      id: "track_1",
      name: "Borderline",
      artists: [{ id: "artist_1", name: "Tame Impala" }],
      album: {
        id: "album_3",
        name: "Currents",
        images: [
          { url: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300" }
        ],
        release_date: "2015-07-17"
      },
      duration_ms: 234000,
      explicit: false,
      popularity: 84,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 3,
      type: "track"
    },
    {
      id: "track_2",
      name: "ALIEN SUPERSTAR",
      artists: [{ id: "artist_2", name: "Beyoncé" }],
      album: {
        id: "album_2",
        name: "Renaissance",
        images: [
          { url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" }
        ],
        release_date: "2022-07-29"
      },
      duration_ms: 216000,
      explicit: true,
      popularity: 88,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 2,
      type: "track"
    },
    {
      id: "track_3",
      name: "As It Was",
      artists: [{ id: "artist_4", name: "Harry Styles" }],
      album: {
        id: "album_4",
        name: "Harry's House",
        images: [
          { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300" }
        ],
        release_date: "2022-05-20"
      },
      duration_ms: 167000,
      explicit: false,
      popularity: 95,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 1,
      type: "track"
    },
    {
      id: "track_4",
      name: "Summertime Sadness",
      artists: [{ id: "artist_5", name: "Lana Del Rey" }],
      album: {
        id: "album_5",
        name: "Born to Die",
        images: [
          { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300" }
        ],
        release_date: "2012-01-27"
      },
      duration_ms: 265000,
      explicit: false,
      popularity: 92,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 5,
      type: "track"
    },
    {
      id: "track_5",
      name: "The Less I Know The Better",
      artists: [{ id: "artist_1", name: "Tame Impala" }],
      album: {
        id: "album_3",
        name: "Currents",
        images: [
          { url: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300" }
        ],
        release_date: "2015-07-17"
      },
      duration_ms: 216000,
      explicit: false,
      popularity: 90,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 7,
      type: "track"
    },
    {
      id: "track_6",
      name: "CUFF IT",
      artists: [{ id: "artist_2", name: "Beyoncé" }],
      album: {
        id: "album_2",
        name: "Renaissance",
        images: [
          { url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" }
        ],
        release_date: "2022-07-29"
      },
      duration_ms: 225000,
      explicit: true,
      popularity: 87,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 6,
      type: "track"
    },
    {
      id: "track_7",
      name: "Music For a Sushi Restaurant",
      artists: [{ id: "artist_4", name: "Harry Styles" }],
      album: {
        id: "album_4",
        name: "Harry's House",
        images: [
          { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300" }
        ],
        release_date: "2022-05-20"
      },
      duration_ms: 193000,
      explicit: false,
      popularity: 81,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 2,
      type: "track"
    },
    {
      id: "track_8",
      name: "Video Games",
      artists: [{ id: "artist_5", name: "Lana Del Rey" }],
      album: {
        id: "album_5",
        name: "Born to Die",
        images: [
          { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300" }
        ],
        release_date: "2012-01-27"
      },
      duration_ms: 279000,
      explicit: false,
      popularity: 89,
      preview_url: "https://p.scdn.co/mp3-preview/sample",
      track_number: 2,
      type: "track"
    }
  ],

  // PLAYLISTS
  playlists: [
    {
      id: "playlist_1",
      name: "Morning Mix",
      description: "Start your day with uplifting vibes and positive energy",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Spotify"
      },
      tracks: {
        total: 50
      },
      public: true,
      collaborative: false,
      type: "playlist"
    },
    {
      id: "playlist_2",
      name: "Chill Vibes",
      description: "Relax and unwind with these laid-back tracks",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Spotify"
      },
      tracks: {
        total: 45
      },
      public: true,
      collaborative: false,
      type: "playlist"
    },
    {
      id: "playlist_3",
      name: "Gym Grind",
      description: "High-energy beats to power through your workout",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Spotify"
      },
      tracks: {
        total: 60
      },
      public: true,
      collaborative: false,
      type: "playlist"
    },
    {
      id: "playlist_4",
      name: "Today's Top Hits",
      description: "The hottest tracks right now",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Spotify"
      },
      tracks: {
        total: 50
      },
      public: true,
      collaborative: false,
      type: "playlist"
    },
    {
      id: "playlist_5",
      name: "Indie Favorites",
      description: "Your favorite indie tracks all in one place",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Demo User"
      },
      tracks: {
        total: 38
      },
      public: true,
      collaborative: false,
      type: "playlist"
    },
    {
      id: "playlist_6",
      name: "Summer Nights",
      description: "Perfect soundtrack for warm summer evenings",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
          height: 300,
          width: 300
        }
      ],
      owner: {
        id: "user_1",
        display_name: "Demo User"
      },
      tracks: {
        total: 42
      },
      public: true,
      collaborative: false,
      type: "playlist"
    }
  ],

  // USER PROFILE
  userProfile: {
    id: "user_1",
    display_name: "Demo User",
    email: "demo@spotify.com",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
        height: 150,
        width: 150
      }
    ],
    country: "US",
    followers: {
      total: 42
    },
    product: "premium",
    type: "user"
  }
};

// ============================================
// SERVICE CLASS
// ============================================

class MockSpotifyService {
  // Helper: Simulate API delay
  delay(ms = 400) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Helper: Paginate results
  paginateResults(items, limit, offset) {
    return {
      items: items.slice(offset, offset + limit),
      total: items.length,
      limit,
      offset,
      next: offset + limit < items.length ? 'next_url' : null,
      previous: offset > 0 ? 'prev_url' : null
    };
  }

  // ==========================================
  // USER PROFILE
  // ==========================================
  
  async getUserProfile() {
    await this.delay();
    return mockData.userProfile;
  }

  // ==========================================
  // PLAYLISTS
  // ==========================================
  
  async getFeaturedPlaylists(limit = 20, offset = 0) {
    await this.delay();
    return {
      playlists: this.paginateResults(mockData.playlists, limit, offset)
    };
  }

  async getUserPlaylists(limit = 20, offset = 0) {
    await this.delay();
    return this.paginateResults(mockData.playlists, limit, offset);
  }

  async getPlaylist(playlistId) {
    await this.delay();
    const playlist = mockData.playlists.find(p => p.id === playlistId);
    if (!playlist) {
      throw new Error(`Playlist ${playlistId} not found`);
    }
    return playlist;
  }

  async getPlaylistTracks(playlistId, limit = 50, offset = 0) {
    await this.delay();
    const tracksWithMetadata = mockData.tracks.map(track => ({
      added_at: "2024-01-15T12:00:00Z",
      track
    }));
    return this.paginateResults(tracksWithMetadata, limit, offset);
  }

  async createPlaylist(name, description = "", isPublic = true) {
    await this.delay();
    const newPlaylist = {
      id: `playlist_${Date.now()}`,
      name,
      description,
      images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" }],
      owner: mockData.userProfile,
      tracks: { total: 0 },
      public: isPublic,
      collaborative: false,
      type: "playlist"
    };
    mockData.playlists.push(newPlaylist);
    return newPlaylist;
  }

  async addTracksToPlaylist(playlistId, trackUris) {
    await this.delay();
    return { snapshot_id: `snapshot_${Date.now()}` };
  }

  // ==========================================
  // TRACKS
  // ==========================================
  
  async getTrack(trackId) {
    await this.delay();
    const track = mockData.tracks.find(t => t.id === trackId);
    if (!track) {
      throw new Error(`Track ${trackId} not found`);
    }
    return track;
  }

  async getSeveralTracks(trackIds) {
    await this.delay();
    return {
      tracks: mockData.tracks.filter(t => trackIds.includes(t.id))
    };
  }

  async getAudioFeatures(trackId) {
    await this.delay();
    return {
      id: trackId,
      tempo: 120 + Math.random() * 60,
      key: Math.floor(Math.random() * 12),
      mode: Math.random() > 0.5 ? 1 : 0,
      time_signature: 4,
      energy: Math.random(),
      danceability: Math.random(),
      valence: Math.random(),
      acousticness: Math.random(),
      instrumentalness: Math.random(),
      loudness: -10 + Math.random() * 10,
      speechiness: Math.random() * 0.3
    };
  }

  // ==========================================
  // ALBUMS
  // ==========================================
  
  async getAlbum(albumId) {
    await this.delay();
    const album = mockData.albums.find(a => a.id === albumId);
    if (!album) {
      throw new Error(`Album ${albumId} not found`);
    }
    return {
      ...album,
      tracks: {
        items: mockData.tracks.filter(t => t.album.id === albumId)
      }
    };
  }

  async getNewReleases(limit = 20, offset = 0) {
    await this.delay();
    return {
      albums: this.paginateResults(mockData.albums, limit, offset)
    };
  }

  async getAlbumTracks(albumId, limit = 50, offset = 0) {
    await this.delay();
    const albumTracks = mockData.tracks.filter(t => t.album.id === albumId);
    return this.paginateResults(albumTracks, limit, offset);
  }

  // ==========================================
  // ARTISTS
  // ==========================================
  
  async getArtist(artistId) {
    await this.delay();
    const artist = mockData.artists.find(a => a.id === artistId);
    if (!artist) {
      throw new Error(`Artist ${artistId} not found`);
    }
    return artist;
  }

  async getArtistTopTracks(artistId, market = 'US') {
    await this.delay();
    return {
      tracks: mockData.tracks.filter(t => 
        t.artists.some(a => a.id === artistId)
      )
    };
  }

  async getArtistAlbums(artistId, limit = 20, offset = 0) {
    await this.delay();
    const artistAlbums = mockData.albums.filter(a => 
      a.artists.some(artist => artist.id === artistId)
    );
    return this.paginateResults(artistAlbums, limit, offset);
  }

  async getRelatedArtists(artistId) {
    await this.delay();
    // Return random artists excluding the requested one
    return {
      artists: mockData.artists.filter(a => a.id !== artistId).slice(0, 5)
    };
  }

  // ==========================================
  // SEARCH
  // ==========================================
  
  async search(query, types = ['track', 'album', 'artist', 'playlist'], limit = 20, offset = 0) {
    await this.delay();
    const results = {};
    const lowerQuery = query.toLowerCase();

    if (types.includes('track')) {
      const filteredTracks = mockData.tracks.filter(t => 
        t.name.toLowerCase().includes(lowerQuery) ||
        t.artists.some(a => a.name.toLowerCase().includes(lowerQuery))
      );
      results.tracks = this.paginateResults(filteredTracks, limit, offset);
    }

    if (types.includes('album')) {
      const filteredAlbums = mockData.albums.filter(a => 
        a.name.toLowerCase().includes(lowerQuery) ||
        a.artists.some(artist => artist.name.toLowerCase().includes(lowerQuery))
      );
      results.albums = this.paginateResults(filteredAlbums, limit, offset);
    }

    if (types.includes('artist')) {
      const filteredArtists = mockData.artists.filter(a => 
        a.name.toLowerCase().includes(lowerQuery)
      );
      results.artists = this.paginateResults(filteredArtists, limit, offset);
    }

    if (types.includes('playlist')) {
      const filteredPlaylists = mockData.playlists.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
      );
      results.playlists = this.paginateResults(filteredPlaylists, limit, offset);
    }

    return results;
  }

  // ==========================================
  // RECOMMENDATIONS
  // ==========================================
  
  async getRecommendations(options = {}) {
    await this.delay();
    const { limit = 20 } = options;
    return {
      tracks: mockData.tracks.slice(0, limit),
      seeds: [
        { type: "artist", id: "artist_1", href: "spotify:artist:artist_1" }
      ]
    };
  }

  // ==========================================
  // USER LIBRARY
  // ==========================================
  
  async getRecentlyPlayed(limit = 20) {
    await this.delay();
    return {
      items: mockData.tracks.slice(0, limit).map(track => ({
        track,
        played_at: new Date(Date.now() - Math.random() * 86400000).toISOString(),
        context: {
          type: "playlist",
          uri: "spotify:playlist:playlist_1"
        }
      }))
    };
  }

  async getUserTopTracks(timeRange = 'medium_term', limit = 20, offset = 0) {
    await this.delay();
    return this.paginateResults(mockData.tracks, limit, offset);
  }

  async getUserTopArtists(timeRange = 'medium_term', limit = 20, offset = 0) {
    await this.delay();
    return this.paginateResults(mockData.artists, limit, offset);
  }

  async getSavedTracks(limit = 20, offset = 0) {
    await this.delay();
    const savedTracks = mockData.tracks.map(track => ({
      added_at: "2024-01-15T12:00:00Z",
      track
    }));
    return this.paginateResults(savedTracks, limit, offset);
  }

  async checkSavedTracks(trackIds) {
    await this.delay();
    return trackIds.map(() => Math.random() > 0.5);
  }

  async saveTrack(trackId) {
    await this.delay();
    return { success: true };
  }

  async removeTrack(trackId) {
    await this.delay();
    return { success: true };
  }

  // ==========================================
  // BROWSE/CATEGORIES
  // ==========================================
  
  async getCategories(limit = 20, offset = 0) {
    await this.delay();
    const categories = [
      { id: "pop", name: "Pop", icons: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" }] },
      { id: "rock", name: "Rock", icons: [{ url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" }] },
      { id: "hip-hop", name: "Hip-Hop", icons: [{ url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" }] },
      { id: "indie", name: "Indie", icons: [{ url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300" }] }
    ];
    return {
      categories: this.paginateResults(categories, limit, offset)
    };
  }

  async getCategoryPlaylists(categoryId, limit = 20, offset = 0) {
    await this.delay();
    return {
      playlists: this.paginateResults(mockData.playlists, limit, offset)
    };
  }
}

// ============================================
// EXPORT
// ============================================

const mockSpotifyService = new MockSpotifyService();
export default mockSpotifyService;
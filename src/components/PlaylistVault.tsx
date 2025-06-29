
import { Play, Music, Clock, Users } from 'lucide-react';

const PlaylistVault = () => {
  const playlists = [
    {
      title: "Morning Energizer",
      description: "Wake up and conquer the day with upbeat vibes",
      mood: "Energetic",
      duration: "45 min",
      tracks: 18,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Afternoon Chill",
      description: "Smooth tunes for your mid-day break",
      mood: "Relaxed",
      duration: "32 min",
      tracks: 12,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Focus Flow",
      description: "Instrumental beats to boost productivity",
      mood: "Focused",
      duration: "60 min",
      tracks: 24,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Cozy Evening",
      description: "Warm melodies for winding down",
      mood: "Peaceful",
      duration: "38 min",
      tracks: 15,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Creative Spark",
      description: "Inspiring sounds for your creative moments",
      mood: "Inspired",
      duration: "42 min",
      tracks: 16,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Rainy Day Comfort",
      description: "Gentle tunes for contemplative moments",
      mood: "Contemplative",
      duration: "50 min",
      tracks: 20,
      color: "from-gray-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-mocha-800 mb-6">Playlist Vault</h1>
          <p className="text-xl text-mocha-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collection of playlists, each crafted to complement different moods and coffee moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-mocha-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`h-32 bg-gradient-to-br ${playlist.color} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{playlist.title}</h3>
                  <span className="text-white/90 text-sm font-medium px-2 py-1 bg-white/20 rounded-full">
                    {playlist.mood}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-mocha-600 mb-4 text-sm leading-relaxed">
                  {playlist.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-mocha-500 mb-4">
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-1" />
                    {playlist.tracks} tracks
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {playlist.duration}
                  </div>
                </div>
                
                <button className="w-full bg-mocha-800 text-white py-3 rounded-xl font-medium hover:bg-mocha-700 transition-colors flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Listen on Spotify
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mocha-100 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-mint-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-mocha-800 mb-4">Want to Submit a Playlist?</h3>
            <p className="text-mocha-600 mb-6">
              Have the perfect mood-coffee-music combination? We'd love to feature your curated playlist in our vault!
            </p>
            <button className="bg-caramel-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-caramel-400 transition-colors">
              Submit Your Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistVault;
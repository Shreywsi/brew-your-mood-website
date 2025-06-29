
import { Coffee, Heart, Music } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-mocha-800 mb-6">About Brew Your Mood</h1>
          <p className="text-xl text-mocha-600 max-w-2xl mx-auto leading-relaxed">
            Where coffee meets music, and every mood finds its perfect match
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mocha-100 text-center">
            <Coffee className="w-12 h-12 text-caramel-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mocha-800 mb-3">Perfect Brew</h3>
            <p className="text-mocha-600">
              Discover your ideal coffee match based on your current mood and energy level
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mocha-100 text-center">
            <Music className="w-12 h-12 text-mint-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mocha-800 mb-3">Curated Playlists</h3>
            <p className="text-mocha-600">
              Enjoy handpicked playlists that complement your coffee and enhance your mood
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mocha-100 text-center">
            <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mocha-800 mb-3">Made with Love</h3>
            <p className="text-mocha-600">
              Crafted with passion for coffee lovers who appreciate the perfect ambiance
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-mocha-100">
          <h2 className="text-3xl font-bold text-mocha-800 mb-6 text-center">The Story</h2>
          <div className="prose prose-lg max-w-none text-mocha-700">
            <p className="mb-6">
              Brew Your Mood was born from the simple observation that our coffee choices often reflect 
              how we're feeling. Some days call for a bold espresso to kickstart productivity, while 
              others need the gentle comfort of a vanilla latte during a quiet afternoon.
            </p>
            <p className="mb-6">
              By combining the art of coffee selection with carefully curated music, we've created 
              an experience that goes beyond just a drink recommendation. It's about finding that 
              perfect moment of harmony between taste, sound, and mood.
            </p>
            <p>
              Whether you're seeking energy, comfort, focus, or relaxation, let us help you discover 
              the perfect combination to enhance your day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
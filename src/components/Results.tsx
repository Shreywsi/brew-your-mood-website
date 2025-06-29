
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ResultsProps {
  answers: Record<string, string>;
  onRetakeQuiz: () => void;
  onGoHome: () => void;
}

const drinkRecommendations = {
  'sweet-low': {
    name: 'Vanilla Sweet Cream Cold Brew',
    description: 'Perfect for your mellow, thoughtful vibe. Smooth and sweet with just the right touch of vanilla.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    playlist: 'Chill Vibes'
  },
  'strong-high': {
    name: 'Pike Place Roast',
    description: 'Bold and energizing, just like your current mood. This classic will fuel your next adventure.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    playlist: 'Upbeat Pop'
  },
  'balanced-medium': {
    name: 'Caramel Macchiato',
    description: 'The perfect balance of sweet and strong, matching your steady energy perfectly.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    playlist: 'Study Beats'
  },
  'default': {
    name: 'Signature Espresso',
    description: 'A classic choice that adapts to any mood. Rich, smooth, and perfectly crafted.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    playlist: 'Coffee Shop Ambience'
  }
};

const Results = ({ answers, onRetakeQuiz, onGoHome }: ResultsProps) => {
  // Simple recommendation logic based on answers
  const getDrinkRecommendation = () => {
    const taste = answers.taste || 'balanced';
    const energy = answers.energy || 'medium';
    const key = `${taste}-${energy}`;
    
    return drinkRecommendations[key as keyof typeof drinkRecommendations] || drinkRecommendations.default;
  };

  const recommendation = getDrinkRecommendation();

  const getMoodAnalysis = () => {
    const { energy, activity, color, taste } = answers;
    
    if (energy === 'low' && activity === 'journal') {
      return "You're in a reflective, introspective mood. Time for some quiet moments with a comforting drink.";
    } else if (energy === 'high' && activity === 'dance') {
      return "You're feeling energetic and ready to take on the world! Let's fuel that enthusiasm.";
    } else if (activity === 'nap') {
      return "You're craving comfort and coziness. Let's find something that feels like a warm hug.";
    } else {
      return "You're in a balanced, content mood. Perfect for trying something new or enjoying a favorite.";
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-mocha-800 mb-4">
            Your Perfect Match! ✨
          </h2>
          <p className="text-lg text-mocha-600 max-w-2xl mx-auto">
            {getMoodAnalysis()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Drink Recommendation */}
          <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-mocha-800 mb-4">
                {recommendation.name}
              </h3>
              <p className="text-mocha-600 leading-relaxed">
                {recommendation.description}
              </p>
            </div>
          </Card>

          {/* Playlist Recommendation */}
          <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🎵</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-mocha-800 mb-4">
                {recommendation.playlist}
              </h3>
              <p className="text-mocha-600 mb-6">
                The perfect soundtrack to complement your mood and drink choice.
              </p>
              <div className="bg-mocha-100 rounded-lg p-4 text-sm text-mocha-600">
                🎧 Spotify playlist coming soon!
              </div>
            </div>
          </Card>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRetakeQuiz}
            variant="outline"
            className="border-caramel-500 text-caramel-600 hover:bg-caramel-50 px-8 py-3 rounded-full"
          >
            Retake Quiz
          </Button>
          <Button
            onClick={onGoHome}
            className="bg-caramel-500 hover:bg-caramel-600 text-white px-8 py-3 rounded-full"
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            className="border-mint-500 text-mint-600 hover:bg-mint-50 px-8 py-3 rounded-full"
          >
            Share Result
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;

import { Button } from '@/components/ui/button';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-mocha-900/20 via-caramel-800/30 to-mocha-800/40"
        style={{
          backgroundImage: `url('/images/hero-image.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Brew Your Mood
          </h1>
          
          <p className="text-xl md:text-2xl text-cream-100 mb-12 drop-shadow-md font-light leading-relaxed">
            Not sure what you're feeling? We've got just the brew for you.
          </p>
          
          <Button
            onClick={onStartQuiz}
            className="bg-caramel-500 hover:bg-caramel-600 text-white px-8 py-4 text-lg rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0"
          >
            Take the Quiz
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

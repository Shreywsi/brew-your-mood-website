
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentSection: 'hero' | 'quiz' | 'results' | 'about' | 'playlist-vault';
  onNavigate: (section: 'hero' | 'quiz' | 'results' | 'about' | 'playlist-vault') => void;
  onStartQuiz: () => void;
  onGoHome: () => void;
}

const Navigation = ({ currentSection, onNavigate, onStartQuiz, onGoHome }: NavigationProps) => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-mocha-100">
      <div className="flex items-center space-x-6">
        <button
          onClick={onGoHome}
          className={`text-sm font-medium transition-colors hover:text-mocha-600 ${
            currentSection === 'hero' ? 'text-mocha-600' : 'text-mocha-400'
          }`}
        >
          Home
        </button>
        
        <button
          onClick={onStartQuiz}
          className={`text-sm font-medium transition-colors hover:text-mocha-600 ${
            currentSection === 'quiz' ? 'text-mocha-600' : 'text-mocha-400'
          }`}
        >
          Take the Quiz
        </button>
        
        <button
          onClick={() => onNavigate('about')}
          className={`text-sm font-medium transition-colors hover:text-mocha-600 ${
            currentSection === 'about' ? 'text-mocha-600' : 'text-mocha-400'
          }`}
        >
          About
        </button>
        
        <button
          onClick={() => onNavigate('playlist-vault')}
          className={`text-sm font-medium transition-colors hover:text-mocha-600 ${
            currentSection === 'playlist-vault' ? 'text-mocha-600' : 'text-mocha-400'
          }`}
        >
          Playlist Vault
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
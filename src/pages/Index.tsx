import { useState } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import MoodQuiz from '../components/MoodQuiz';
import Results from '../components/Results';
import Footer from '../components/Footer';
import About from '../components/About'; // Make sure to import About
import PlaylistVault from '../components/PlaylistVault'; // Make sure to import PlaylistVault

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'hero' | 'quiz' | 'results' | 'about' | 'playlist-vault'>('hero');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const handleStartQuiz = () => {
    setCurrentSection('quiz');
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setCurrentSection('results');
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers({});
    setCurrentSection('quiz');
  };

  const handleGoHome = () => {
    setCurrentSection('hero');
    setQuizAnswers({}); // Clear answers when going home
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation
        currentSection={currentSection}
        onNavigate={setCurrentSection}
        onStartQuiz={handleStartQuiz}
        onGoHome={handleGoHome}
      />

      <main>
        {currentSection === 'hero' && <Hero onStartQuiz={handleStartQuiz} />}
        {currentSection === 'quiz' && <MoodQuiz onComplete={handleQuizComplete} />}
        {currentSection === 'results' && <Results answers={quizAnswers} onRetakeQuiz={handleRetakeQuiz} onGoHome={handleGoHome} />}
        {currentSection === 'about' && <About />}
        {currentSection === 'playlist-vault' && <PlaylistVault />}
      </main>

      <Footer />
    </div>
  );
};

export default Index; // THIS LINE IS CRUCIAL
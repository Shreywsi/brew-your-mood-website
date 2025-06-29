
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MoodQuizProps {
  onComplete: (answers: Record<string, string>) => void;
}

const questions = [
  {
    id: 'energy',
    question: "How's your energy today?",
    options: [
      { value: 'low', label: '☁️ Mellow & Calm', emoji: '☁️' },
      { value: 'medium', label: '🌤️ Balanced & Steady', emoji: '🌤️' },
      { value: 'high', label: '☀️ Energized & Ready', emoji: '☀️' },
      { value: 'tired', label: '🌙 Tired but Cozy', emoji: '🌙' }
    ]
  },
  {
    id: 'color',
    question: "Pick a color you feel drawn to:",
    options: [
      { value: 'warm', label: '🧡 Warm Orange', emoji: '🧡' },
      { value: 'cool', label: '💙 Cool Blue', emoji: '💙' },
      { value: 'earth', label: '🤎 Earthy Brown', emoji: '🤎' },
      { value: 'fresh', label: '💚 Fresh Green', emoji: '💚' }
    ]
  },
  {
    id: 'taste',
    question: "Sweet or strong?",
    options: [
      { value: 'sweet', label: '🍯 Sweet & Creamy', emoji: '🍯' },
      { value: 'strong', label: '⚡ Bold & Strong', emoji: '⚡' },
      { value: 'balanced', label: '⚖️ Perfectly Balanced', emoji: '⚖️' },
      { value: 'light', label: '🌸 Light & Delicate', emoji: '🌸' }
    ]
  },
  {
    id: 'activity',
    question: "Right now, would you rather...",
    options: [
      { value: 'journal', label: '📝 Journal & Reflect', emoji: '📝' },
      { value: 'dance', label: '💃 Dance & Move', emoji: '💃' },
      { value: 'nap', label: '😴 Nap & Rest', emoji: '😴' },
      { value: 'socialize', label: '📞 Call Someone', emoji: '📞' }
    ]
  }
];

const MoodQuiz = ({ onComplete }: MoodQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleAnswer = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl w-full animate-slide-up">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-mocha-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-mocha-100 rounded-full h-2">
            <div 
              className="bg-caramel-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-mocha-800 mb-8 text-center">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                  selectedOption === option.value
                    ? 'border-caramel-500 bg-caramel-50 shadow-lg'
                    : 'border-mocha-200 bg-white hover:border-caramel-300'
                }`}
              >
                <div className="text-2xl mb-2">{option.emoji}</div>
                <div className="text-mocha-700 font-medium">{option.label}</div>
              </button>
            ))}
          </div>

          {/* Next button */}
          <div className="text-center">
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-caramel-500 hover:bg-caramel-600 text-white px-8 py-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Get My Results'}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MoodQuiz;
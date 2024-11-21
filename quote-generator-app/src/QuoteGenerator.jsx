import { useState } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
  ];
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];


  const [currentQuote, setCurrentQuote] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');


  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[randomColorIndex]);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="quote-generator" style={{ backgroundColor }}>
      <h1>Random Quote Generator</h1>
      <button
        className="generate-button"
        onClick={generateQuote}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      >
        Generate Quote
      </button>
      <p className="quote">{currentQuote}</p>
    </div>
  );
};

export default QuoteGenerator;
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 150, delay: number = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const words = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? speed / 2 : speed);

      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(delay);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, words, speed, delay]);

  return displayText;
};

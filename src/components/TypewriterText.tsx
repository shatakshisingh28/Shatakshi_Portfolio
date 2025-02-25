import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className={`inline-block min-w-[20ch] ${className}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
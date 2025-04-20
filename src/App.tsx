import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark');
      return newTheme;
    });
  };
  
  return (
    <div className="font-inter text-gray-800 dark:text-gray-200 bg-white dark:bg-dark min-h-screen">
      <Background />
      
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 z-50" style={{ width: `${scrollProgress}%` }} />
      
      <Navbar />
      
      {/* <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-lg z-50 hover:bg-white/20 transition-colors"
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </motion.div>
        </AnimatePresence>
      </button> */}

      {/* Social buttons - Hidden on small screens */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-4 z-50 hidden md:block">
        <SocialButton href="https://github.com/shatakshisingh28" icon={<Github />} label="GitHub" />
        <SocialButton href="https://www.linkedin.com/in/shatakshi-singh-256625219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin />} label="LinkedIn" />
        <SocialButton href="https://x.com/i/flow/login?redirect_after_login=%2FShatakshis28" icon={<Twitter />} label="Twitter" />
      </div>

      <main className="relative">
        <Hero />
        <Resume />
        <Projects />
        <Social />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors shadow-lg"
    whileHover={{ y: -5 }}
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default App;

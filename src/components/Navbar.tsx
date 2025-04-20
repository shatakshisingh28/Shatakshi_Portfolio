import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Social', href: '#social' },
  { name: 'Contact', href: '#contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            className="text-xl font-poppins font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/s_OZy_icon.ico" alt="Logo" className="h-12" />
          </motion.span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white/95 dark:bg-dark/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Social', href: '#social' },
  { name: 'Contact', href: '#contact' }
];

function Navbar() {
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

          {/* <button className="md:hidden p-2">
            <Menu size={24} />
          </button> */}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-900 via-pink-700 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-cyan-200 to-white">
              Contact Me
            </h3>
            
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-200" />
                <a href="mailto:shatakshis@gmail.com" className="text-sm hover:text-indigo-400 transition-colors">
                  shatakshis@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-200" />
                <a href="tel:+919452724627" className="text-sm hover:text-indigo-400 00 transition-colors">
                  +91 94527 24627
                </a>
              </li>
            </ul>
            
            {/* Social Media Links (moved from middle column) */}
            <div className="flex space-x-3 pt-2">
              <motion.a 
                href="https://github.com/shatakshisingh28" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shatakshi-singh-256625219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="https://x.com/Shatakshis28?t=tEb7jfI_tGYdPHB3wzOnrw&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-cyan-200 to-white">
              Quick Links
            </h3>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <a href="#home" className="text-sm hover:text-indigo-400  transition-colors">Home</a>
              <a href="#projects" className="text-sm hover:text-indigo-400  transition-colors">Projects</a>
              <a href="#about" className="text-sm hover:text-indigo-400  transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-indigo-400  transition-colors">Skills</a>
              <a href="#experience" className="text-sm hover:text-indigo-400  transition-colors">Experience</a>
              <a href="#contact" className="text-sm hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Location Map */}
          <div className="space-y-3">
            <h3 className="text-xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-cyan-200 to-white">
              Location
            </h3>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5523108756083!2d77.48811837613958!3d28.46290899176207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1740496355788!5m2!1sen!2sin" 
                className="w-full h-44 border-0" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="NIET Greater Noida Location"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-4 text-center">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Shatakshi Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-36 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-4 relative">
            {/* Shadow layer underneath */}
            <span className="absolute top-0.5 left-0.5 text-black/30 blur-sm z-0">
              Shatakshi Singh
            </span>

            {/* Main text with gradient */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-indigo-100 relative z-10">
              Shatakshi Singh
            </span>
          </h1>

          <div className="h-20">
            <TypewriterText
              texts={[
                "Backend Developer",
                "Data Analyst",
                "Machine Learning Engineer"
              ]}
              className="text-2xl md:text-3xl font-semibold text-gray-100"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
          >
            Passionate about creating innovative solutions through code. Specializing in Backend development, data analysis, and machine learning.
          </motion.p>

          {/* Download Resume Button */}
          <motion.a
            href="img/ShatakshiSingh_InternshalaResume (2).pdf"
            download
            className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg transition-transform hover:scale-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            <Download className="mr-2 relative z-10" size={20} />
            <span className="relative z-10">Download Resume</span>

          </motion.a>
        </motion.div>

        {/* Right Section - Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="img/WhatsApp Image 2025-02-25 at 18.24.55.jpeg"
                alt="Shatakshi Singh"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
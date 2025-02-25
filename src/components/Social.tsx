import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/shatakshisingh28',
    stats: ['50+ Contributions', '10+ Repositories'],
    color: 'from-gray-600 to-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/shatakshi-singh-256625219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    stats: ['500+ Connections','600+ Followers'],
    color: 'from-blue-600 to-blue-900'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    url: 'https://leetcode.com/u/shatakshis/',
    stats: ['100+ Problems','50+ Submissions'],
    color: 'from-yellow-600 to-yellow-900'
  }
];

function Social() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section id="social" className="py-20 overflow-hidden  bg-gray-50 dark:bg-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 text-gray-800 dark:text-white">
            Connect With Me
          </h2>

          {/* Centered Cards */}
          <div className="flex justify-center items-center">
            <div ref={sliderRef} className="keen-slider max-w-4xl">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="keen-slider__slide flex justify-center"
                >
                  <motion.div
                    className="h-full w-[90%] md:w-80 lg:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Gradient Header */}
                    <div className={`h-24 bg-gradient-to-r ${social.color}`} />

                    {/* Card Content */}
                    <div className="p-6 relative">
                      {/* Floating Icon */}
                      <div className="absolute -top-8 left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                        <social.icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-4 mt-4 text-gray-800 dark:text-white text-center">
                        {social.name}
                      </h3>

                      {/* Stats List */}
                      <ul className="space-y-2 text-center">
                        {social.stats.map((stat) => (
                          <li key={stat} className="text-gray-600 dark:text-gray-300 text-sm">
                            {stat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Social;
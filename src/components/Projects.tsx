import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HealthCare Website',
    description: 'Medimate is an AI-powered health-tech platform offering symptom analysis, mental health chat, community discussions, and medical news.',
    image: 'img/Screenshot 2024-12-08 at 10.14.07 AM.png',
    tags: ['Vue js', 'Node.js', 'TailwindCSS'],
    github: 'https://github.com/safarBots/commmunity_page/tree/main',
    demo: 'https://commmunity-pagebus.onrender.com/'
  },
  {
    title: 'Ticket Booking Tourism Website',
    description: 'Safar Bots is a chatbot-based ticket booking platform which offers users seamless travel experiences and guidance with interactive AI assistance.',
    image: 'img/Screenshot 2024-12-08 at 10.26.15 AM.png',
    tags: ['TailwindCSS', 'Razorpay', 'Firebase'],
    github: 'https://github.com/safarBots/Varanasi/tree/main',
    demo: 'https://varanasi-3.onrender.com'
  }
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="py-20  bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-dark rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark/50 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Brain } from 'lucide-react';

const skills = [
  { name: 'Programming Languages', icon: Code, items: ['Java', 'Python','HTML','CSS','JavaScript'] },
  { name: 'Tools & Databases', icon: Database, items: ['Microsoft Azure', 'SQL','Firebase','Tableau','PowerBI'] },
  { name: 'Machine Learning Frameworks', icon: Brain, items: ['TensorFlow','Scikit-learn','NLTK','Spacy','Pandas'] }
];

function Resume() {
  return (
    <section id="resume" className="relative py-20  bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 bg-clip-text text-white">
            Skills & Experience
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50" />
                <div className="relative z-10">
                  <skill.icon className="w-12 h-12 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4 text-gray-100">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_fi7583n', // Replace with your EmailJS service ID
        'template_94lmfx6', // Replace with your EmailJS template ID
        formRef.current,
        '6OBg8YT_k7eR7J-hc' // Replace with your EmailJS public key
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-12">Get in Touch</h2>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <input type="hidden" name="to_email" value="shatakshis@gmail.com" />

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!, I will soon contact you on your email.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
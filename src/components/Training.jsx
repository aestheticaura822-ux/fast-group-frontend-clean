import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Training() {
  const trainings = [
    { name: 'UI/UX Design', desc: 'Master Figma, Adobe XD & User Research', icon: '🎨' },
    { name: 'Project Management', desc: 'Learn Agile, Scrum & PMP Methodologies', icon: '📊' },
    { name: 'E-Commerce Mastery', desc: 'Build, launch, and scale Shopify stores', icon: '🛒' },
    { name: 'Digital Marketing', desc: 'Expertise in SEO, Paid Ads, and Brand Identity', icon: '📈' },
    { name: 'Live Mentorship', desc: 'Guidance from industry experts', icon: '👨‍🏫' },
    { name: 'Practical Projects', desc: 'Real-world case studies', icon: '💼' },
    { name: 'Career Support', desc: 'Job readiness training and placement', icon: '🎯' },
    { name: 'Affordable Learning', desc: 'High-quality fast-track training', icon: '💰' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Everything <span className="text-red-600">You Need</span>
          </h2>
          <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive training programs designed to launch your career in the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {training.icon}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                  {training.name}
                </h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {training.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
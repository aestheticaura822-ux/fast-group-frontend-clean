import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Results() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  
  const stats = [
    { value: 80, label: 'Time Saved on Manual Tasks', suffix: '%' },
    { value: 300, label: 'Average ROI Within 6 Months', suffix: '%' },
    { value: 150, label: 'Increase in Lead Conversion', suffix: '%' },
    { value: 24, label: 'Automated Customer Support', suffix: '/7' }
  ];

  useEffect(() => {
    const timeouts = [];
    stats.forEach((stat, index) => {
      const timeout = setTimeout(() => {
        let current = 0;
        const increment = stat.value / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.value;
              return newCounts;
            });
            clearInterval(interval);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current);
              return newCounts;
            });
          }
        }, 40);
      }, index * 200);
      timeouts.push(timeout);
    });
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-fast-red to-red-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results That Matter</h2>
          <p className="text-xl text-red-100">Our clients see immediate impact on their bottom line</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </h3>
              <p className="text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
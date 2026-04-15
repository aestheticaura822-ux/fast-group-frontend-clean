import React from 'react';
import { FaLightbulb, FaHeadset, FaTrophy, FaRocket } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function WhyChoose() {
  const features = [
    { icon: <FaLightbulb />, title: 'Visionary Leadership', desc: 'Pioneering innovative strategies that redefine industry standards and drive sustainable growth.' },
    { icon: <FaHeadset />, title: 'Holistic Support', desc: 'Dedicated 24/7 expert assistance ensuring seamless operations and rapid problem resolution.' },
    { icon: <FaTrophy />, title: 'Decade of Excellence', desc: 'Ten years of proven expertise delivering high-impact solutions to global enterprises.' },
    { icon: <FaRocket />, title: 'Limitless Scalability', desc: 'Comprehensive service ecosystem designed to scale with your business from startup to enterprise.' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
          <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Excellence in Every Detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl text-red-600 mb-3 sm:mb-4 inline-block group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FaSearch, FaCode, FaPalette, FaImage, FaArrowRight, FaChartLine, FaMobile, FaCloud } from 'react-icons/fa';

function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { 
      initial: 'SS', 
      title: 'SEO Optimization', 
      desc: 'Maximize your online visibility with proven search engine optimization strategies that drive organic traffic.',
      icon: <FaSearch />,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      stats: '150% Traffic Boost'
    },
    { 
      initial: 'FF', 
      title: 'Frontend Coding', 
      desc: 'Build stunning, responsive user interfaces with modern frameworks and best practices in web development.',
      icon: <FaCode />,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '99% Performance Score'
    },
    { 
      initial: 'DD', 
      title: 'Design', 
      desc: 'Create compelling visual experiences with professional design that reflects your brand identity perfectly.',
      icon: <FaPalette />,
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      stats: '200+ Happy Clients'
    },
    { 
      initial: 'AA', 
      title: 'Adobe Photoshop', 
      desc: 'Professional photo editing and digital design services using industry-standard Adobe Creative Suite tools.',
      icon: <FaImage />,
      color: 'from-red-600 to-red-800',
      bgGradient: 'from-red-50 to-red-100',
      stats: '10+ Years Experience'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-semibold">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 sm:mb-4 px-4"
          >
            What{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              We Do
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-4 sm:mb-6 rounded-full"
            style={{ width: '60px' }}
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Comprehensive digital services designed to transform your business
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 shadow-lg group-hover:shadow-2xl overflow-hidden`}>
                
                {/* Animated Background Icon */}
                <motion.div 
                  className="absolute -right-8 -top-8 text-6xl sm:text-7xl md:text-8xl opacity-5"
                  animate={{ 
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Initial Badge with Animation */}
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white relative z-10">{service.initial}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    animate={{ 
                      x: hoveredIndex === index ? ['0%', '100%'] : '0%'
                    }}
                    transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />
                </motion.div>

                {/* Title with Icon */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <motion.div 
                    className="text-xl sm:text-2xl text-red-500"
                    animate={{ 
                      rotate: hoveredIndex === index ? [0, 360] : 0,
                      scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                  {service.desc}
                </p>

                {/* Stats Badge */}
                <motion.div 
                  className="mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block bg-green-100 text-green-700 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full">
                    📊 {service.stats}
                  </span>
                </motion.div>

                {/* Learn More Link */}
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2 text-red-500 font-semibold cursor-pointer group/link text-sm sm:text-base"
                  whileHover={{ x: 10 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform text-xs sm:text-sm" />
                </motion.div>

                {/* Animated Pulse Ring */}
                <motion.div 
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-red-200"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold overflow-hidden shadow-lg text-sm sm:text-base"
          >
            <Link to="/services">
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
              </span>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin-slow {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
          }
          .animate-pulse {
            animation: pulse 3s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
}

export default WhatWeDo;
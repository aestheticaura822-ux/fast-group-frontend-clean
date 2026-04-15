import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { name: 'Sarah Jenkins', role: 'CMO, TechFlow', text: 'The team at Fast IT Solutions didn\'t just build a website, they built a complete digital ecosystem for us. Their AI integration tripled our lead capture rate in the first month.', rating: 5 },
    { name: 'Michael Chen', role: 'Director of Ops, ScaleUp Inc', text: 'We were struggling with manual workflows until we implemented their automation solutions. Now, our team saves 40+ hours a week. Truly game-changing service.', rating: 5 },
    { name: 'Elena Rodriguez', role: 'Founder, Luxe Interiors', text: 'Professional, responsive, and incredibly talented. They understood our luxury brand identity immediately and translated it into a stunning digital presence.', rating: 5 },
    { name: 'David Park', role: 'CEO, Future Ventures', text: 'The ROI on their marketing services has been phenomenal. We\'ve seen a 300% increase in qualified traffic. I highly recommend Fast Group to any serious business.', rating: 5 }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Trusted by <span className="text-red-600">Industry Leaders</span>
          </h2>
          <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Don't just take our word for it. See what our partners have to say
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="bg-red-600 text-white p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="text-sm sm:text-base md:text-lg" />
            </button>

            {/* Testimonial Card */}
            <div className="flex-1 px-1 sm:px-2 md:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative"
                >
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-red-600 text-2xl sm:text-3xl md:text-4xl opacity-20 absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6" />
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg italic leading-relaxed mb-4 sm:mb-5 md:mb-6 pt-6 sm:pt-8 md:pt-10 px-2 sm:px-3 md:px-4">
                    "{testimonials[current].text}"
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm sm:text-base md:text-lg" />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="bg-red-600 text-white p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="text-sm sm:text-base md:text-lg" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'w-6 sm:w-8 bg-red-600' 
                    : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
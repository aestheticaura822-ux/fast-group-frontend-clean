import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero.mp4';
import { Link } from 'react-router-dom';
function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const bgVideo = document.getElementById('bgVideo');
    if (bgVideo) {
      bgVideo.play().catch(() => console.log('Auto-play failed'));
    }
  }, []);

 

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const starsArray = [1, 2, 3, 4, 5];
  

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Screen Background Video - Using Local hero.mp4 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          id="bgVideo"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
        
        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20 z-10"></div>
      </div>

      

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-red-600/20 backdrop-blur-md border border-red-500/50 text-white px-6 py-2 rounded-full text-sm font-semibold">
              AI and ROBOTICS SOLUTIONS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Drive Growth with</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              AI and Robotics
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Embrace the latest advancements in AI-powered robotics and automation. 
            Transform your business with cutting-edge technology engineered for the future.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <Link to="/contact">
    <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
      <span className="relative z-10 flex items-center gap-2">
        Get Free Consultation 
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </button>
  </Link>
  
  <Link to="/contact">
    <button 
      className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold flex items-center gap-2 justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
    >
      <FaPlay /> 
      <span>Watch Demo Video</span>
    </button>
  </Link>
</div>
          </motion.div>
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 justify-center flex-wrap"
          >
            <div className="flex gap-1">
              {starsArray.map((item) => (
                <svg key={item} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-300">Trusted by 500+ companies worldwide</span>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">AI Robots Deployed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Automation Support</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">300%</div>
              <div className="text-sm text-gray-400">ROI Increase</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-red-500 transition-colors"
            >
              Close
            </button>
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
import React, { useRef, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLaptopCode, FaChartLine, FaPrint, FaGraduationCap, FaPlane, FaUsers, FaBuilding, FaUtensils } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Ecosystem() {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  const services = [
    { 
      icon: <FaLaptopCode />, 
      name: 'Fast IT Solutions',
      bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      description: 'Cutting-edge IT solutions for modern businesses'
    },
    { 
      icon: <FaChartLine />, 
      name: 'Fast Marketing',
      bgImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
      description: 'Data-driven marketing strategies'
    },
    { 
      icon: <FaPrint />, 
      name: 'Fast Printing',
      // FIXED: Working printing images (choose any one)
      bgImage: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?w=400&h=300&fit=crop',
      description: 'Professional printing services'
    },
    { 
      icon: <FaGraduationCap />, 
      name: 'Fast Education',
      bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
      description: 'Quality education & training'
    },
    { 
      icon: <FaPlane />, 
      name: 'Fast Travel',
      bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
      description: 'Seamless travel experiences'
    },
    { 
      icon: <FaUsers />, 
      name: 'Fast Consulting',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      description: 'Expert business consulting'
    },
    { 
      icon: <FaBuilding />, 
      name: 'Dacor Dice',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      description: 'Premium real estate solutions'
    },
    { 
      icon: <FaBuilding />, 
      name: 'Fast Real Estate',
      bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      description: 'Smart property investments'
    },
    { 
      icon: <FaUtensils />, 
      name: 'Fast Hospitality',
      bgImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
      description: 'Luxury hospitality services'
    },
  ];

  // Duplicate services for infinite scroll effect
  const extendedServices = [...services, ...services, ...services];

  // Auto-scroll function
  const startAutoScroll = () => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    
    const interval = setInterval(() => {
      if (!isHovering && scrollRef.current) {
        const scrollAmount = scrollRef.current.scrollLeft + 9;
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 3) {
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
            }
          }, 100);
        }
      }
    }, 30);
    
    setAutoScrollInterval(interval);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (autoScrollInterval) clearInterval(autoScrollInterval);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoScroll();
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Business <span className="text-fast-red">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Integrated Solutions Across Industries
          </p>
        </motion.div>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-fast-red text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 md:block hidden"
          >
            <FaArrowLeft />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-fast-red text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 md:block hidden"
          >
            <FaArrowRight />
          </button>

          <div 
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 px-4 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'thin',
              scrollBehavior: 'smooth'
            }}
          >
            {extendedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % services.length) * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 w-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg group/card"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-80">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
                    style={{ 
                      backgroundImage: `url(${service.bgImage})`,
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-fast-red/80 via-fast-red/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="text-5xl mb-3 transform transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-12">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-fast-red font-semibold group-hover/card:text-white transition-colors">
                      <span>Discover</span>
                      <FaArrowRight className="transform transition-transform group-hover/card:translate-x-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <div className="flex gap-1">
            {services.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                style={{
                  backgroundColor: !isHovering ? '#dc2626' : '#d1d5db',
                  width: !isHovering ? '24px' : '8px'
                }}
              />
            ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          ✨ Auto-scrolling • Hover to pause
        </p>
      </div>
    </section>
  );
}

export default Ecosystem;
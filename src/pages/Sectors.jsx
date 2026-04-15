import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, FaChartLine, FaPrint, FaGraduationCap, 
  FaPlane, FaUsers, FaShoppingCart, FaBuilding, FaUtensils,
  FaExternalLinkAlt, FaCheckCircle, FaArrowRight, FaGlobe,
  FaRocket, FaShieldAlt, FaPalette, FaCrown
} from 'react-icons/fa';

function Sectors() {
  const videoRef = useRef(null);
  
  const heroVideoUrl = 'https://cdn.pixabay.com/video/2016/02/29/2319-157183741_medium.mp4';

  const sectors = [
    {
      id: 'it-solutions',
      icon: <FaLaptopCode />,
      title: 'Fast IT Solutions & Digital Tech',
      category: 'Technology',
      shortDesc: 'Pioneering digital transformation with cutting-edge software and cybersecurity solutions.',
      fullDesc: 'We deliver enterprise-grade software development, cloud solutions, and cybersecurity services that protect and empower businesses in the digital age.',
      features: ['Software Development', 'Cybersecurity', 'Cloud Systems', 'AI Integration'],
      website: 'https://fastitsolutions.com',
      bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      color: 'from-blue-500 to-cyan-600',
      achievements: '500+ Projects Delivered'
    },
    {
      id: 'marketing',
      icon: <FaChartLine />,
      title: 'Fast Marketing & Advertising',
      category: 'Marketing',
      shortDesc: 'Elevating brands through data-driven strategies and creative advertising campaigns.',
      fullDesc: 'Our data-driven marketing strategies help brands reach their target audience effectively, driving engagement and maximizing ROI across all digital channels.',
      features: ['Digital Marketing', 'Brand Strategy', 'Social Media', 'SEO/SEM'],
      website: 'https://fastmarketing.com',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      color: 'from-red-500 to-orange-600',
      achievements: '1000+ Campaigns Run'
    },
    {
      id: 'printing',
      icon: <FaPrint />,
      title: 'Fast Printing & Packaging',
      category: 'Manufacturing',
      shortDesc: 'Delivering premium printing and bespoke packaging solutions for global businesses.',
      fullDesc: 'State-of-the-art printing facilities offering custom packaging, offset printing, and branding materials that make your products stand out.',
      features: ['Custom Packaging', 'Offset Printing', 'Branding Materials', '3D Prototyping'],
      website: 'https://fastprinting.com',
      bgImage: 'https://www.packagingworldinsights.com/wp-content/uploads/2026/03/High-speed-label-printing-1.webp',
      color: 'from-green-500 to-emerald-600',
      achievements: '1M+ Units Produced'
    },
    {
      id: 'education',
      icon: <FaGraduationCap />,
      title: 'Fast Soft Skills & Education',
      category: 'Education',
      shortDesc: 'Empowering professionals with world-class training and international education pathways.',
      fullDesc: 'Transforming careers through comprehensive training programs, language courses, and international education consulting services.',
      features: ['Corporate Training', 'Language Programs', 'Study Abroad', 'Skill Development'],
      website: 'https://fastskills.com',
      bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
      color: 'from-purple-500 to-pink-600',
      achievements: '10,000+ Students Trained'
    },
    {
      id: 'travel',
      icon: <FaPlane />,
      title: 'Fast Travel Agency & Ticketing',
      category: 'Travel',
      shortDesc: 'Curating seamless travel experiences with comprehensive booking and visa services.',
      fullDesc: 'End-to-end travel solutions including flight booking, visa assistance, hotel reservations, and curated tour packages for memorable journeys.',
      features: ['Global Ticketing', 'Visa Assistance', 'Luxury Tours', 'Hotel Booking'],
      website: 'https://fasttravels.com',
      bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
      color: 'from-cyan-500 to-blue-600',
      achievements: '50,000+ Happy Travelers'
    },
    {
      id: 'consulting',
      icon: <FaUsers />,
      title: 'Fast Consultant & Advisory',
      category: 'Consulting',
      shortDesc: 'Providing strategic insights and personalized consultation for business growth.',
      fullDesc: 'Expert business consulting services including strategic planning, financial advisory, and market research to drive sustainable growth.',
      features: ['Business Strategy', 'Financial Advisory', 'Market Research', 'Risk Management'],
      website: 'https://fastconsulting.com',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      color: 'from-yellow-500 to-orange-600',
      achievements: '200+ Clients Served'
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart />,
      title: 'Fast Online Stores - Dacor Dice',
      category: 'E-Commerce',
      shortDesc: 'Connecting consumers with quality products through a seamless online shopping ecosystem.',
      fullDesc: 'Premium e-commerce platform offering quality products with fast shipping, secure payments, and exceptional customer service.',
      features: ['E-Commerce', 'Global Logistics', 'Product Sourcing', 'Customer Support'],
      website: 'https://dacordice.com',
      bgImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=500&fit=crop',
      color: 'from-teal-500 to-green-600',
      achievements: '100,000+ Orders Fulfilled'
    },
    {
      id: 'realestate',
      icon: <FaBuilding />,
      title: 'Fast Real Estate & Builders',
      category: 'Real Estate',
      shortDesc: 'Constructing modern living spaces and managing premium real estate portfolios.',
      fullDesc: 'Creating exceptional living spaces through innovative construction, professional property management, and architectural excellence.',
      features: ['Construction', 'Property Management', 'Architecture', 'Interior Design'],
      website: 'https://fastrealestate.com',
      bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      color: 'from-indigo-500 to-purple-600',
      achievements: '50+ Properties Developed'
    },
    {
      id: 'hospitality',
      icon: <FaUtensils />,
      title: 'Fast Hospitality & Booking App',
      category: 'Hospitality',
      shortDesc: 'Revolutionizing hospitality with integrated management and digital booking platforms.',
      fullDesc: 'Innovative hospitality solutions including hotel management, event planning, and digital booking platforms that enhance guest experiences.',
      features: ['Hotel Management', 'Event Planning', 'Booking Systems', 'CRM Solutions'],
      website: 'https://fasthospitality.com',
      bgImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop',
      color: 'from-rose-500 to-pink-600',
      achievements: '500+ Events Managed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">      
      {/* Hero Section - Responsive */}
      <section className="relative h-screen sm:h-[70vh] md:h-[65vh] lg:h-[70vh] min-h-[500px] sm:min-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%2F%3E%3C%2Fsvg%3E')]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 sm:mb-6">
                <span className="bg-red-600/30 backdrop-blur-md border border-red-500/50 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
                  <FaGlobe className="inline mr-1 sm:mr-2" /> Our Global Ecosystem
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Our Business
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Sectors & Ventures
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Nine integrated sectors working in synergy to deliver comprehensive excellence 
                across industries and global markets, driving innovation and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore Sectors <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                  View Success Stories
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-white/60 text-xs sm:text-sm">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-red-500 rounded-full animate-bounce mt-1 sm:mt-2"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Overview - Responsive */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center text-white">
            {[
              { value: '9', label: 'Integrated Sectors', icon: <FaCrown /> },
              { value: '25+', label: 'Global Locations', icon: <FaGlobe /> },
              { value: '500+', label: 'Team Members', icon: <FaUsers /> },
              { value: '1000+', label: 'Happy Clients', icon: <FaCheckCircle /> }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4"
              >
                <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{stat.value}</div>
                <div className="text-red-200 text-xs sm:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid Section - Responsive Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <span className="text-red-500 font-semibold text-xs sm:text-sm uppercase tracking-wider border border-red-500/30 px-3 py-1 sm:px-4 rounded-full inline-block mb-3 sm:mb-4">
              Our Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
              Integrated <span className="text-red-500">Business Sectors</span>
            </h2>
            <div className="w-16 h-0.5 sm:w-20 md:w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Nine specialized sectors working together to deliver comprehensive solutions across industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          >
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-white cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.bgImage})` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10">
                  <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-semibold text-white border border-white/20">
                    {sector.category}
                  </span>
                </div>
                
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10">
                  <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-red-600/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-semibold text-white">
                    🏆 {sector.achievements}
                  </span>
                </div>
                
                <div className="relative p-4 sm:p-5 md:p-6 h-[380px] sm:h-[400px] md:h-[420px] flex flex-col justify-between text-white">
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {sector.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight line-clamp-2">{sector.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {sector.fullDesc}
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {sector.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-[8px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          {feature}
                        </span>
                      ))}
                      {sector.features.length > 3 && (
                        <span className="text-[8px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                          +{sector.features.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <a 
                      href={sector.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 bg-red-600 hover:bg-red-700 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl group-hover:gap-2 sm:group-hover:gap-3"
                    >
                      Explore Sector <FaExternalLinkAlt className="text-[8px] sm:text-xs" />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-red-500/60 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Synergy Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-red-500 font-semibold text-xs sm:text-sm uppercase tracking-wider border border-red-500/30 px-3 py-1 sm:px-4 rounded-full inline-block mb-3 sm:mb-4">
                Our Strength
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Working in <span className="text-red-500">Synergy</span>
              </h2>
              <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                Our nine integrated sectors collaborate seamlessly to deliver comprehensive solutions 
                that drive excellence across industries and global markets. This synergy creates 
                unparalleled value for our clients and partners.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>Innovation First</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>Integrity Driven</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>Excellence Focused</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>Global Reach</span>
                </div>
              </div>
              <button className="px-5 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 inline-flex items-center gap-2 text-sm sm:text-base">
                Learn More <FaArrowRight />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
            >
              {[
                { num: '01', name: 'Technology', color: 'from-blue-500 to-cyan-500' },
                { num: '02', name: 'Marketing', color: 'from-red-500 to-orange-500' },
                { num: '03', name: 'Manufacturing', color: 'from-green-500 to-emerald-500' },
                { num: '04', name: 'Education', color: 'from-purple-500 to-pink-500' },
                { num: '05', name: 'Travel', color: 'from-cyan-500 to-blue-500' },
                { num: '06', name: 'Consulting', color: 'from-yellow-500 to-orange-500' },
                { num: '07', name: 'E-Commerce', color: 'from-teal-500 to-green-500' },
                { num: '08', name: 'Real Estate', color: 'from-indigo-500 to-purple-500' },
                { num: '09', name: 'Hospitality', color: 'from-rose-500 to-pink-500' }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{item.num}</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-white/80 mt-0.5 sm:mt-1 line-clamp-1">{item.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white">
                <FaRocket className="inline mr-1 sm:mr-2" /> Limited Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Start your journey with a free consultation from our experts. 
              Discover how our integrated sectors can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4">
              <div className="flex items-center gap-1 sm:gap-2 text-white bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm">
                <FaCheckCircle className="text-green-400 text-xs sm:text-sm" /> Free Consultation
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-white bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm">
                <FaCheckCircle className="text-green-400 text-xs sm:text-sm" /> Custom Solutions
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-white bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm">
                <FaCheckCircle className="text-green-400 text-xs sm:text-sm" /> 24/7 Support
              </div>
            </div>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group text-sm sm:text-base">
              Book Free Consultation <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }
          
          .animate-bounce { animation: bounce 1s ease-in-out infinite; }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </div>
  );
}

export default Sectors;
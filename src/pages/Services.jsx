import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, FaCode, FaPaintBrush, FaChartLine, 
  FaCloud, FaSearch, FaMobile, FaVideo, FaUsers,
  FaShieldAlt, FaPalette, FaDatabase,
  FaRobot, FaWifi, FaVrCardboard, FaCogs, FaGlobe,
  FaArrowRight
} from 'react-icons/fa';
import heroVideo from '../assets/hero-video.mp4';
// Images import (directly from assets folder)
import seoContentImg from '../assets/seo-content.jpg';
import videoAnimationImg from '../assets/video-animation.jpg';

function Services() {
  const [, setHoveredCard] = useState(null);
  const videoRef = useRef(null);

  const heroVideoUrl = heroVideo;


  const services = [
    { 
      id: 'ecommerce',
      icon: <FaShoppingCart />, 
      title: 'E-commerce Solutions', 
      shortDesc: 'Build powerful online stores that drive sales',
      longDesc: 'Custom e-commerce platforms with payment integration, inventory management, and analytics.',
      bgImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
      color: 'from-green-500 to-emerald-600',
      features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard']
    },
    { 
      id: 'software-development',
      icon: <FaCode />, 
      title: 'Software Development', 
      shortDesc: 'Custom software solutions for complex challenges',
      longDesc: 'Scalable enterprise software, SaaS platforms, and API integrations.',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-indigo-600',
      features: ['SaaS Development', 'API Integration', 'Cloud Solutions']
    },
    { 
      id: 'ui-ux-design',
      icon: <FaPaintBrush />, 
      title: 'UI/UX Design', 
      shortDesc: 'User-centered design for intuitive products',
      longDesc: 'Beautiful, responsive designs that users love to interact with.',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-600',
      features: ['Prototyping', 'User Research', 'Usability Testing']
    },
    { 
      id: 'branding',
      icon: <FaPalette />, 
      title: 'Branding & Identity', 
      shortDesc: 'Build a unique and memorable brand identity',
      longDesc: 'Complete brand strategy, logo design, and visual identity systems.',
      bgImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-600',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity']
    },
    { 
      id: 'digital-marketing',
      icon: <FaChartLine />, 
      title: 'Digital Marketing', 
      shortDesc: 'Strategic campaigns that boost visibility',
      longDesc: 'Data-driven marketing strategies for maximum ROI.',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'from-red-500 to-red-700',
      features: ['SEO/SEM', 'Social Media', 'Email Marketing']
    },
    { 
      id: 'cloud-hosting',
      icon: <FaCloud />, 
      title: 'Cloud Hosting & Security', 
      shortDesc: 'Secure, scalable cloud hosting solutions',
      longDesc: 'Enterprise-grade cloud infrastructure with 99.9% uptime.',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-blue-600',
      features: ['Cloud Migration', 'Security Audits', '24/7 Monitoring']
    },
    { 
      id: 'seo-content',
      icon: <FaSearch />, 
      title: 'SEO & Content Creation', 
      shortDesc: 'Improve search rankings with quality content',
      longDesc: 'Content strategies that drive organic traffic and engagement.',
      bgImage: seoContentImg,
      color: 'from-teal-500 to-green-600',
      features: ['Keyword Research', 'Content Strategy', 'Blog Management']
    },
    { 
      id: 'mobile-apps',
      icon: <FaMobile />, 
      title: 'Mobile App Development', 
      shortDesc: 'iOS and Android apps with exceptional UX',
      longDesc: 'Native and cross-platform mobile applications.',
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-purple-600',
      features: ['iOS/Android', 'Cross-Platform', 'App Store Deployment']
    },
    { 
      id: 'web-development',
      icon: <FaGlobe />, 
      title: 'Web Development', 
      shortDesc: 'Responsive websites and web applications',
      longDesc: 'Modern, fast, and SEO-friendly websites.',
      bgImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      color: 'from-blue-600 to-cyan-600',
      features: ['React/Next.js', 'Node.js/Python', 'CMS Integration']
    },
    { 
      id: 'video-animation',
      icon: <FaVideo />, 
      title: 'Video & Animation', 
      shortDesc: 'Professional video editing and motion graphics',
      longDesc: 'Engaging video content that tells your story.',
      bgImage: videoAnimationImg,
      color: 'from-rose-500 to-pink-600',
      features: ['Motion Graphics', '3D Animation', 'Video Editing']
    },
    { 
      id: 'lead-generation',
      icon: <FaUsers />, 
      title: 'Leads Generation', 
      shortDesc: 'Drive high-quality leads and grow sales',
      longDesc: 'Targeted lead generation strategies for B2B and B2C.',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      color: 'from-yellow-500 to-orange-600',
      features: ['B2B Lead Gen', 'Email Marketing', 'Sales Funnel']
    },
    { 
      id: 'cybersecurity',
      icon: <FaShieldAlt />, 
      title: 'Cybersecurity', 
      shortDesc: 'Advanced threat detection and protection',
      longDesc: 'Comprehensive security solutions for your digital assets.',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      color: 'from-red-700 to-red-900',
      features: ['Penetration Testing', 'Security Audits', 'Compliance']
    },
    { 
      id: 'graphic-designing',
      icon: <FaPalette />, 
      title: 'Graphic Designing', 
      shortDesc: 'Transform ideas into compelling visual stories',
      longDesc: 'Professional graphic design for all your marketing needs.',
      bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      color: 'from-fuchsia-500 to-purple-600',
      features: ['Brand Identity', 'Marketing Materials', 'UI Design']
    },
    { 
      id: 'data-science',
      icon: <FaDatabase />, 
      title: 'Data Science', 
      shortDesc: 'Advanced analytics and machine learning',
      longDesc: 'Turn your data into actionable insights.',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-emerald-500 to-teal-600',
      features: ['Predictive Analytics', 'Big Data', 'Data Visualization']
    },
    { 
      id: 'ai-ml',
      icon: <FaRobot />, 
      title: 'Artificial Intelligence & ML', 
      shortDesc: 'Intelligent systems with AI engineering',
      longDesc: 'Cutting-edge AI solutions for business automation.',
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      color: 'from-violet-500 to-purple-700',
      features: ['NLP', 'Computer Vision', 'AI Agents']
    },
    { 
      id: 'iot-solutions',
      icon: <FaWifi />, 
      title: 'IoT Solutions', 
      shortDesc: 'Connect and control smart devices',
      longDesc: 'Internet of Things solutions for smart environments.',
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      color: 'from-lime-500 to-green-600',
      features: ['Smart Home', 'Industrial IoT', 'Wearables']
    },
    { 
      id: 'ar-vr',
      icon: <FaVrCardboard />, 
      title: 'AR & VR Technology', 
      shortDesc: 'Immersive augmented and virtual reality',
      longDesc: 'Next-generation immersive experiences.',
      bgImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
      color: 'from-indigo-600 to-purple-700',
      features: ['Virtual Showrooms', 'Training Simulations', 'Interactive Apps']
    },
    { 
      id: 'rpa-solutions',
      icon: <FaCogs />, 
      title: 'RPA Solutions', 
      shortDesc: 'Robotic process automation technology',
      longDesc: 'Automate repetitive tasks with RPA bots.',
      bgImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
      color: 'from-gray-600 to-gray-800',
      features: ['Workflow Automation', 'Bot Development', 'Process Mining']
    },
    { 
      id: 'metaverse',
      icon: <FaGlobe />, 
      title: 'Metaverse Technology', 
      shortDesc: 'Next-generation virtual worlds',
      longDesc: 'Build immersive metaverse experiences.',
      bgImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
      color: 'from-fuchsia-600 to-pink-700',
      features: ['3D Modeling', 'Virtual Real Estate', 'Blockchain']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section - Fully Responsive */}
      <section className="relative h-screen sm:h-[70vh] md:h-[65vh] lg:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
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
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70"></div>
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
                <span className="bg-red-600/20 backdrop-blur-md border border-red-500/50 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
                  🚀 Our Expertise
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Comprehensive
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Transform your business with our cutting-edge technology services. 
                From AI to cloud computing, we deliver excellence at every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                <Link to="/contact">
                  <button className="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                    Explore Services <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </button>
                </Link>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                  Watch Showreel
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

      {/* Services Grid Section - Responsive Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="text-red-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-3 sm:mb-4 px-4">
              Solutions for Every <span className="text-red-600">Business Need</span>
            </h2>
            <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From startups to enterprises, we provide tailored solutions that drive real business outcomes
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-white cursor-pointer h-[350px] sm:h-[380px] md:h-[400px]"
              >
                {/* Image Section */}
                <div className="absolute inset-0 h-2/3">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                {/* Content Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-5 md:p-6 pt-8 sm:pt-10 md:pt-12">
                  <div className="mb-2 sm:mb-3">
                    <div className={`text-3xl sm:text-4xl text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-1">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-2 sm:mb-3">
                    {service.shortDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-[8px] sm:text-[10px] px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/20 rounded-full text-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-red-400 transition-all duration-300 group-hover:gap-2 sm:group-hover:gap-3"
                  >
                    Explore Solution <FaArrowRight className="text-[10px] sm:text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-red-500/50 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '200+', label: 'Happy Clients' },
              { value: '50+', label: 'Expert Team' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{stat.value}</div>
                <div className="text-red-100 text-xs sm:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how our solutions can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap px-4">
              <Link to="/contact">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  Get Free Consultation
                </button>
              </Link>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(5px);
            }
          }
          
          .animate-bounce {
            animation: bounce 1s ease-in-out infinite;
          }
          
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </div>
  );
}

export default Services;
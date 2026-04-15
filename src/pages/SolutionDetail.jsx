import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  FaRobot, FaChartLine, FaBrain, FaCheckCircle, 
  FaArrowLeft, FaPlay, FaPause, 
  FaChartBar, FaCog
} from 'react-icons/fa';

import chatbotVideo from '../assets/chatbot.mp4';
import workflowVideo from '../assets/workflow.mp4';  
import aiAgentsVideo from '../assets/ai-agents.mp4';

function SolutionDetail() {
  const { id } = useParams();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const solutionsData = {
    'ai-chatbots': {
      title: 'AI Chatbots',
      icon: <FaRobot />,
      gradient: 'from-blue-600 to-cyan-600',
      bgVideo: chatbotVideo,
      shortDesc: 'Intelligent conversational agents that transform customer engagement',
      fullDesc: 'Our AI-powered chatbots leverage natural language processing and machine learning to provide human-like conversations. They work 24/7 to qualify leads, answer customer queries, and automate support tasks.',
      features: [
        '24/7 Automated Customer Support',
        'Natural Language Processing',
        'Multi-language Support',
        'Seamless CRM Integration',
        'Lead Qualification & Scoring',
        'Analytics & Insights Dashboard'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase lead conversion by 150%',
        'Save 40+ hours of manual work weekly',
        'Improve customer satisfaction by 85%'
      ],
      useCases: [
        'E-commerce Customer Support',
        'SaaS Product Onboarding',
        'Healthcare Appointment Booking',
        'Banking & Financial Services',
        'Real Estate Lead Generation'
      ],
      techStack: ['OpenAI GPT-4', 'TensorFlow', 'Dialogflow', 'Rasa', 'Twilio', 'WhatsApp API'],
      stats: [
        { value: '24/7', label: 'Availability' },
        { value: '90%', label: 'Faster Response' },
        { value: '10k+', label: 'Conversations Daily' },
        { value: '98%', label: 'Customer Satisfaction' }
      ]
    },
    'workflow-automation': {
      title: 'Workflow Automation',
      icon: <FaChartLine />,
      gradient: 'from-purple-600 to-pink-600',
      bgVideo: workflowVideo,
      shortDesc: 'Connect your tools and automate complex business processes',
      fullDesc: 'Streamline your operations with our no-code workflow automation platform. Connect your favorite apps, automate repetitive tasks, and focus on what matters most - growing your business.',
      features: [
        'No-code Visual Builder',
        '500+ App Integrations',
        'Conditional Logic & Branching',
        'Real-time Monitoring',
        'Custom Webhooks',
        'Error Handling & Logging'
      ],
      benefits: [
        'Save 60+ hours monthly',
        'Reduce human errors by 95%',
        'Scale operations without hiring',
        'ROI within 3 months'
      ],
      useCases: [
        'Lead-to-Customer Automation',
        'Invoice Processing',
        'Employee Onboarding',
        'Social Media Scheduling',
        'Data Synchronization'
      ],
      techStack: ['Zapier', 'Make.com', 'n8n', 'Node.js', 'Python', 'REST APIs'],
      stats: [
        { value: '500+', label: 'Integrations' },
        { value: '60h', label: 'Time Saved/Week' },
        { value: '95%', label: 'Error Reduction' },
        { value: '3x', label: 'Productivity Boost' }
      ]
    },
    'ai-agents': {
      title: 'AI Agents',
      icon: <FaBrain />,
      gradient: 'from-red-600 to-orange-600',
      bgVideo: aiAgentsVideo,
      shortDesc: 'Autonomous agents that work 24/7 to execute tasks and drive growth',
      fullDesc: 'Deploy intelligent AI agents that autonomously execute complex tasks, analyze data patterns, and make smart decisions. Perfect for data analysis, research, and automated decision-making.',
      features: [
        'Autonomous Task Execution',
        'Machine Learning Models',
        'Real-time Data Analysis',
        'Predictive Analytics',
        'Self-learning Capabilities',
        'API-first Architecture'
      ],
      benefits: [
        '24/7 Autonomous Operation',
        'Data-driven Decisions',
        'Scalable Intelligence',
        'Continuous Learning'
      ],
      useCases: [
        'Market Research & Analysis',
        'Financial Trading',
        'Inventory Optimization',
        'Customer Segmentation',
        'Risk Assessment'
      ],
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'AutoGPT', 'ChromaDB'],
      stats: [
        { value: '24/7', label: 'Autonomous Work' },
        { value: '99.9%', label: 'Accuracy' },
        { value: '1000+', label: 'Tasks/Day' },
        { value: '50%', label: 'Cost Reduction' }
      ]
    }
  };

  const solution = solutionsData[id];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/" className="text-red-500 hover:underline">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section - Responsive */}
      <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={solution.bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
          <div className="max-w-3xl pt-16 pb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 md:mb-6 transition text-sm md:text-base">
              <FaArrowLeft /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl text-white mb-3 md:mb-4"
            >
              {solution.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}
            >
              {solution.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 md:mb-6 leading-relaxed"
            >
              {solution.shortDesc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <button className="px-5 py-2.5 md:px-8 md:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition text-sm md:text-base">
                Get Started
              </button>
              <button 
                onClick={handlePlayVideo}
                className="px-5 py-2.5 md:px-8 md:py-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-full font-semibold flex items-center gap-2 justify-center hover:bg-white/30 transition text-sm md:text-base"
              >
                {isPlaying ? <FaPause /> : <FaPlay />} Watch Demo
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white/60 rounded-full mt-1 md:mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive Grid */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {solution.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-3 md:p-4"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section - Responsive Layout */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">What is {solution.title}?</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">{solution.fullDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="px-4 py-2 md:px-6 md:py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition text-sm md:text-base">
                  Request Demo
                </button>
                <button className="px-4 py-2 md:px-6 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm md:text-base">
                  Contact Sales
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex-1 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
                alt={solution.title}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-20 h-20 md:w-32 md:h-32 bg-red-100 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Key Features</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Everything you need to transform your business with {solution.title}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solution.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-base md:text-lg" />
                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Responsive */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Business Benefits</h2>
            <p className="text-gray-600 text-sm sm:text-base">Why leading companies choose our solution</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {solution.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-4 md:p-6 bg-gradient-to-br from-red-50 to-white rounded-xl"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <FaChartBar className="text-red-600 text-base md:text-lg" />
                </div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Responsive */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Use Cases</h2>
            <p className="text-gray-300 text-sm sm:text-base">Real-world applications across industries</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solution.useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 md:p-6 hover:bg-gray-750 transition"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <FaCog className="text-sm md:text-base" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{useCase}</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">Industry-specific solution tailored to your needs</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Responsive */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Technology Stack</h2>
            <p className="text-gray-600 text-sm sm:text-base">Built with cutting-edge technologies</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {solution.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-xs md:text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-red-100 text-sm sm:text-base mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Join hundreds of businesses that have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap px-4">
              <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition text-sm md:text-base">
                Book Free Consultation
              </button>
              <button className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition text-sm md:text-base">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SolutionDetail;
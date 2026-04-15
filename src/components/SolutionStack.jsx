import React from 'react';
import { FaRobot, FaChartLine, FaBrain } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

function SolutionStack() {
  const solutions = [
    { 
      id: 'ai-chatbots',
      icon: <FaRobot />, 
      title: 'AI Chatbots', 
      desc: 'Intelligent conversational agents that qualify leads and provide instant, 24/7 customer support.', 
      linkText: 'Learn more',
      linkPath: '/solutions/ai-chatbots'
    },
    { 
      id: 'workflow-automation',
      icon: <FaChartLine />, 
      title: 'Workflow Automation', 
      desc: 'Connect your tools and automate complex business processes without writing a single line of code.', 
      linkText: 'Explore automation',
      linkPath: '/solutions/workflow-automation'
    },
    { 
      id: 'ai-agents',
      icon: <FaBrain />, 
      title: 'AI Agents', 
      desc: 'Autonomous agents that work 24/7 to execute tasks, analyze data, and drive business growth.', 
      linkText: 'Discover agents',
      linkPath: '/solutions/ai-agents'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Solution Stack</h2>
          <p className="section-subtitle">Powered by cutting-edge AI technology and industry best practices</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center card-hover group"
            >
              <div className="text-6xl text-fast-red mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-fast-gray mb-4">{solution.desc}</p>
              <Link 
                to={solution.linkPath}
                className="text-fast-red font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                {solution.linkText} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionStack;
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FaRobot, FaChartLine, FaUsers, FaPlug, FaClock, FaBell, FaChartBar, FaTachometerAlt } from 'react-icons/fa';

function AISolutions() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-fast-dark to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Managing Everything Manually?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><FaClock className="text-fast-red" /> <span>Spending hours on repetitive tasks that could be automated</span></li>
              <li className="flex items-center gap-3"><FaBell className="text-fast-red" /> <span>Missing leads because you can't respond to inquiries 24/7</span></li>
              <li className="flex items-center gap-3"><FaUsers className="text-fast-red" /> <span>Struggling to scale operations without hiring more staff</span></li>
              <li className="flex items-center gap-3"><FaChartBar className="text-fast-red" /> <span>Losing competitive edge to AI-powered competitors</span></li>
            </ul>
          </motion.div>

          {/* Right Side - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Build AI Solutions That Work</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><FaRobot className="text-fast-red" /> <span>AI-powered chatbots that handle inquiries instantly, 24/7</span></li>
              <li className="flex items-center gap-3"><FaTachometerAlt className="text-fast-red" /> <span>Workflow automation that eliminates repetitive tasks</span></li>
              <li className="flex items-center gap-3"><FaChartLine className="text-fast-red" /> <span>Intelligent data analysis for smarter business decisions</span></li>
              <li className="flex items-center gap-3"><FaPlug className="text-fast-red" /> <span>Seamless integration with your existing tools and platforms</span></li>
            </ul>
<Link to="/contact">
  <button className="btn-primary w-full md:w-auto">
    Start Automating Now →
  </button>
</Link>          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AISolutions;
import React, { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, 
  FaInstagram, FaArrowRight, FaCheckCircle,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { submitContactForm } from '../services/apiService';

function Contact() {
  const videoRef = useRef(null);
  const heroVideoUrl = 'https://cdn.pixabay.com/video/2022/10/02/133285-756241206_medium.mp4';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
      console.error('Failed:', result.error);
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const faqs = [
    {
      question: 'What makes Fast Group unique?',
      answer: 'Fast Group stands out through our integrated ecosystem of nine specialized sectors working in synergy. We provide end-to-end solutions across IT, marketing, printing, education, travel, consulting, e-commerce, real estate, and hospitality—all under one roof.'
    },
    {
      question: 'How quickly can we start?',
      answer: 'We can typically start within 24-48 hours after initial consultation and agreement. Our agile methodology allows us to move quickly while maintaining quality standards.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes! We specialize in creating tailored solutions for enterprises of all sizes. Our team works closely with you to understand your unique requirements and deliver customized solutions.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and transparent. We offer flexible engagement models including fixed-price, time & material, and retainer-based pricing. Contact us for a detailed quote.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section - Responsive */}
      <section className="relative h-screen sm:h-[45vh] md:h-[50vh] lg:h-[50vh] min-h-[350px] sm:min-h-[400px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-purple-600/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 sm:mb-6">
                <span className="bg-red-600/20 backdrop-blur-md border border-red-500/50 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
                  📞 Get in Touch
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Contact
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed px-4 sm:px-0">
                Have a project in mind or want to learn more about our ecosystem? 
                Our experts are ready to assist you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Responsive Cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Contact <span className="text-red-600">Information</span>
            </h2>
            <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Visit our headquarters or reach out through our digital channels. 
              We're here to provide the support you need to scale your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <FaPhone className="text-xl sm:text-2xl text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Phone / WhatsApp</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">+92 325 2467463</p>
              <p className="text-gray-600 text-xs sm:text-sm">+92 321 0846667</p>
              <p className="text-xs text-gray-400 mt-1 sm:mt-2">Available Mon-Fri, 9am-6pm</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <FaEnvelope className="text-xl sm:text-2xl text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Email</h3>
              <p className="text-gray-600 text-xs sm:text-sm break-all">xfastgroup001@gmail.com</p>
              <p className="text-xs text-gray-400 mt-1 sm:mt-2">Response within 24 hours</p>
            </motion.div>

            {/* Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <FaMapMarkerAlt className="text-xl sm:text-2xl text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Office</h3>
              <p className="text-gray-600 text-xs sm:text-sm">101A, J1 Block, Valencia Town</p>
              <p className="text-gray-600 text-xs sm:text-sm">Main Defence Road, Lahore, Pakistan</p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <FaClock className="text-xl sm:text-2xl text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Business Hours</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 text-xs sm:text-sm">Sat: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600 text-xs sm:text-sm">Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section - Responsive */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Fill out the form below and our specialists will get back to you within one business day.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm sm:text-base"
                    placeholder="+92 300 1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Training Programs">Training Programs</option>
                    <option value="IT Solutions">IT Solutions</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  {!isSubmitting && <FaArrowRight />}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-500 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
                    <FaCheckCircle /> Message sent successfully! We'll contact you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217801.07955391563!2d74.17436955!3d31.48213855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903c7f2a2c4b9%3A0x6b9f5e5c5c5c5c5c!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Fast Group Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Responsive */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <div className="w-16 h-0.5 sm:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Quick answers to common inquiries about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto px-2 sm:px-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-3 sm:mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-3 sm:p-4 md:p-5 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-left pr-2">{faq.question}</span>
                  {openFaq === index ? <FaChevronUp className="flex-shrink-0" /> : <FaChevronDown className="flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-3 sm:p-4 md:p-5 bg-gray-50 rounded-lg sm:rounded-xl">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section - Responsive */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaFacebook className="text-white text-base sm:text-xl" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-white text-base sm:text-xl" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaLinkedin className="text-white text-base sm:text-xl" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-white text-base sm:text-xl" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaWhatsapp className="text-white text-base sm:text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Ready to Transform Since Today?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Start your AI journey with a free consultation from our experts.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base">
              Book Your Free Consultation
            </button>
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
        `
      }} />
    </div>
  );
}

export default Contact;
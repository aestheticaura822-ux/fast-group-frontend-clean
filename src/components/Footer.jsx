import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  // WhatsApp number (remove + and special characters)
  const whatsappNumber = '1(604)2396141'; // +92 325 2467463 → 923252467463
  
  // WhatsApp chat link
  
  // Optional: Add pre-filled message
  const whatsappLinkWithMessage = `https://wa.me/${whatsappNumber}?text=Hello%20Fast%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
              Fast Group
            </h3>
            <p className="text-sm leading-relaxed">
              Pioneering excellence across industries through innovation, integrity, and sustainable growth. 
              Your trusted partner for global business solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <span>101 Queen Street, West Toronto ON M5H 2N1 CANADA</span>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <FaPhone className="text-red-500" />
                <span>+1 (604) 239-6141</span>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-red-500" />
                <span>fastmediaagencyofficial@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
            
            {/* WhatsApp Button - FIXED: Direct chat opens */}
            <a 
              href={whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 w-full justify-center"
            >
              <FaWhatsapp /> Chat with us on WhatsApp
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe to get updates on latest AI trends</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Fast Group of Companies. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
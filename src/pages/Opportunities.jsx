import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock, 
  FaGraduationCap, FaUserTie, FaArrowRight, FaTimes,
  FaUpload, FaCheckCircle, FaBuilding, FaUsers, FaTrophy,
  FaDollarSign, FaGlobe, FaBookOpen, FaLaptopCode, FaRegBuilding
} from 'react-icons/fa';
import { submitJobApplication } from '../services/apiService';

function Opportunities() {
  const videoRef = useRef(null);
  const heroVideoUrl = 'https://cdn.pixabay.com/video/2022/10/02/133285-756241206_medium.mp4';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobDetail, setShowJobDetail] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    cnic: '',
    phone: '',
    email: '',
    address: '',
    resume: null
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [particlesArray, setParticlesArray] = useState([]);

  const categories = ['All', 'Creative & Design', 'Sales & Marketing', 'Support Services', 'Digital Marketing', 'Software Engineering', 'IT Security', 'Data & AI', 'IT Infrastructure', 'Project Management', 'Real Estate Division', 'Corporate Administration', 'Executive Management', 'Human Resources', 'Consulting & Strategy', 'Education & Training', 'Education & Services'];

  const jobs = [
    { id: 1, title: 'Graphic Designer', category: 'Creative & Design', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '40k - 60k', description: 'Create stunning visual designs for digital and print media. Collaborate with marketing team to develop brand assets.', requirements: ['Proficiency in Adobe Creative Suite', 'Portfolio required', 'Strong communication skills'] },
    { id: 2, title: 'Mockup Designer', category: 'Creative & Design', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '35k - 55k', description: 'Design high-fidelity mockups for web and mobile applications. Work closely with UI/UX team.', requirements: ['Figma/Sketch expertise', 'Attention to detail', 'Understanding of design systems'] },
    { id: 3, title: 'Packaging Designer', category: 'Creative & Design', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '40k - 60k', description: 'Develop innovative packaging designs that stand out on shelves.', requirements: ['3D rendering skills', 'Knowledge of printing processes', 'Creative mindset'] },
    { id: 4, title: 'Leads Generation Specialist', category: 'Sales & Marketing', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '50k - 80k', description: 'Generate qualified leads through multiple channels including LinkedIn, email, and cold calling.', requirements: ['Sales experience', 'CRM knowledge', 'Target-driven attitude'] },
    { id: 5, title: 'Sales Agent', category: 'Sales & Marketing', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '30k - 50k + Commission', description: 'Handle inbound and outbound sales calls. Convert leads into customers.', requirements: ['Excellent communication', 'Persuasion skills', 'Goal oriented'] },
    { id: 6, title: 'Sales Executive', category: 'Sales & Marketing', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '60k - 100k', description: 'Drive business growth through strategic partnerships and client relationships.', requirements: ['B2B sales experience', 'Negotiation skills', 'Proven track record'] },
    { id: 7, title: 'Customer Care Representative', category: 'Support Services', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '30k - 45k', description: 'Provide exceptional customer support via phone, email, and chat.', requirements: ['Patience', 'Problem-solving', 'Empathy'] },
    { id: 8, title: 'Chat Support Executive', category: 'Support Services', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '30k - 45k', description: 'Handle customer inquiries through live chat and messaging platforms.', requirements: ['Fast typing', 'Multi-tasking', 'Customer focus'] },
    { id: 9, title: 'Content Writer (SEO Optimised)', category: 'Digital Marketing', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '35k - 60k', description: 'Create SEO-friendly content for blogs, websites, and social media.', requirements: ['Excellent writing skills', 'SEO knowledge', 'Portfolio required'] },
    { id: 10, title: 'Meta Ads Expert', category: 'Digital Marketing', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '60k - 100k', description: 'Manage Facebook and Instagram ad campaigns. Optimize for ROAS.', requirements: ['Meta Ads certification', 'Analytics skills', 'Budget management'] },
    { id: 11, title: 'SMM (Social Media Manager)', category: 'Digital Marketing', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '50k - 80k', description: 'Develop and execute social media strategies across platforms.', requirements: ['Content creation', 'Analytics tools', 'Trend awareness'] },
    { id: 12, title: 'Web Development Professional', category: 'Software Engineering', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '80k - 150k', description: 'Build responsive web applications using modern frameworks.', requirements: ['React/Next.js', 'Node.js', 'Database management'] },
    { id: 13, title: 'Cyber Security Expert', category: 'IT Security', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '100k - 200k', description: 'Protect company assets through security audits and implementation.', requirements: ['Security certifications', 'Penetration testing', 'Risk assessment'] },
    { id: 14, title: '2D & 3D Animation Specialist', category: 'Creative & Design', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '60k - 120k', description: 'Create engaging animations for marketing and product demos.', requirements: ['Blender/After Effects', 'Storyboarding', 'Portfolio required'] },
    { id: 15, title: 'Android Development Specialist', category: 'Software Engineering', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '80k - 150k', description: 'Develop native Android applications with modern architecture.', requirements: ['Kotlin/Java', 'Android SDK', 'API integration'] },
    { id: 16, title: 'AI Expert', category: 'Data & AI', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '120k - 250k', description: 'Build and deploy machine learning models for business solutions.', requirements: ['Python', 'TensorFlow/PyTorch', 'ML algorithms'] },
    { id: 17, title: 'IT Expert', category: 'IT Infrastructure', location: 'Remote / On-site', experience: '2+ years', type: 'Full-time', salary: '70k - 130k', description: 'Manage IT infrastructure and provide technical support.', requirements: ['Network administration', 'Cloud services', 'Troubleshooting'] },
    { id: 18, title: 'Project Head', category: 'Project Management', location: 'Remote / On-site', experience: '3+ years', type: 'Full-time', salary: '150k - 250k', description: 'Lead multiple projects and ensure timely delivery.', requirements: ['PMP certification', 'Team leadership', 'Agile methodology'] },
    { id: 19, title: 'Real Estate Project Head', category: 'Real Estate Division', location: 'On-site', experience: '3+ years', type: 'Full-time', salary: '150k - 250k', description: 'Oversee real estate development projects from planning to completion.', requirements: ['Real estate knowledge', 'Project management', 'Vendor coordination'] },
    { id: 20, title: 'CSR Head', category: 'Corporate Administration', location: 'On-site', experience: '3+ years', type: 'Full-time', salary: '100k - 180k', description: 'Manage corporate social responsibility initiatives.', requirements: ['Communication skills', 'Event planning', 'Stakeholder management'] },
    { id: 21, title: 'General Manager', category: 'Executive Management', location: 'On-site', experience: '5+ years', type: 'Full-time', salary: '250k - 500k', description: 'Lead overall business operations and strategy.', requirements: ['Leadership experience', 'Strategic planning', 'P&L management'] },
    { id: 22, title: 'HR Manager', category: 'Human Resources', location: 'On-site', experience: '3+ years', type: 'Full-time', salary: '80k - 150k', description: 'Manage recruitment, employee relations, and HR operations.', requirements: ['HR experience', 'Labor law knowledge', 'Communication skills'] },
    { id: 23, title: 'Consultant Specialist', category: 'Consulting & Strategy', location: 'Remote / On-site', experience: '3+ years', type: 'Full-time', salary: '100k - 200k', description: 'Provide strategic consulting to clients across industries.', requirements: ['MBA preferred', 'Analytical skills', 'Client management'] },
    { id: 24, title: 'Instructor', category: 'Education & Training', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '40k - 70k', description: 'Deliver training sessions on various professional skills.', requirements: ['Teaching experience', 'Subject expertise', 'Communication'] },
    { id: 25, title: 'Trainer', category: 'Education & Training', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '40k - 70k', description: 'Conduct corporate training programs.', requirements: ['Training certification', 'Industry knowledge', 'Engaging delivery'] },
    { id: 26, title: 'Teacher', category: 'Education & Training', location: 'On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '30k - 50k', description: 'Teach courses in your area of expertise.', requirements: ['Degree in subject', 'Teaching skills', 'Patience'] },
    { id: 27, title: 'Linguistic Expert', category: 'Education & Services', location: 'Remote / On-site', experience: 'Max 1-2 years', type: 'Full-time', salary: '50k - 80k', description: 'Provide language translation and localization services.', requirements: ['Multiple languages', 'Translation experience', 'Attention to detail'] },
    { id: 28, title: 'Virtual Assistant', category: 'Support Services', location: 'Remote', experience: 'Max 1-2 years', type: 'Full-time', salary: '30k - 50k', description: 'Provide administrative support remotely.', requirements: ['Organizational skills', 'Tech savvy', 'Self-motivated'] }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const particles = [...Array(20)].map(() => ({
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 3
    }));
    setParticlesArray(particles);
  }, []);

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setShowJobDetail(true);
          // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden';
  };

  const handleApply = () => {
    setShowJobDetail(false);
    setShowApplication(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobDetail = () => {
    setShowJobDetail(false);
    document.body.style.overflow = 'auto';
  };

  const closeApplication = () => {
    setShowApplication(false);
    document.body.style.overflow = 'auto';
    setSubmitStatus(null);
    setApplicationData({
      firstName: '', lastName: '', cnic: '', phone: '', email: '', address: '', resume: null
    });
  };

  const handleApplicationChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setApplicationData({ ...applicationData, [name]: files[0] });
    } else {
      setApplicationData({ ...applicationData, [name]: value });
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const result = await submitJobApplication(applicationData, selectedJob.title);
    
    if (result.success) {
      setSubmitStatus('success');
      setTimeout(() => {
        setShowApplication(false);
        setApplicationData({
          firstName: '', lastName: '', cnic: '', phone: '', email: '', address: '', resume: null
        });
        document.body.style.overflow = 'auto';
      }, 2000);
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section - Responsive */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[350px] md:min-h-[450px] overflow-hidden">
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

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particlesArray.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-red-500/30 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size + 'px',
                height: particle.size + 'px',
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: particle.delay + 's'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-3 md:mb-6">
                <span className="bg-red-600/20 backdrop-blur-md border border-red-500/50 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider">
                  💼 Join Our Team
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
                Careers & Growth
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Shape the Future
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Join a dynamic ecosystem of innovation across multiple sectors. 
                We're looking for passionate individuals to drive excellence and grow with us.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white/60 rounded-full mt-1 md:mt-2"></div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section - Responsive */}
      <section className="py-6 md:py-8 lg:py-12 bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm md:text-base" />
              <input
                type="text"
                placeholder="Search by title, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="sm:w-64 md:w-72 lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings - Responsive Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-2 sm:gap-0">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Open Positions
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mt-1">{filteredJobs.length} opportunities available</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                onClick={() => handleViewJob(job)}
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-red-100 text-red-600 text-xs rounded-full font-semibold">
                        {job.type}
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {job.category}
                      </span>
                    </div>
                    <div className="text-green-600 font-semibold text-xs md:text-sm">
                      {job.salary}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 hover:text-red-600 transition">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-red-400 text-xs" /> {job.location}</span>
                    <span className="flex items-center gap-1"><FaClock className="text-red-400 text-xs" /> {job.experience}</span>
                    <span className="flex items-center gap-1"><FaBriefcase className="text-red-400 text-xs" /> {job.type}</span>
                  </div>
                  
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-3 md:mb-4">
                    {job.description}
                  </p>
                  
                  <button className="mt-1 md:mt-2 px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2 text-xs md:text-sm">
                    View Details <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-gray-500 text-base md:text-lg">No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Fast Group Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Why Join <span className="text-red-600">Fast Group?</span>
            </h2>
            <div className="w-16 h-1 md:w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We offer more than just a job; we offer a path to mastery in your craft within a supportive, high-performance culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <FaTrophy />, title: 'Career Velocity', desc: 'Rapid growth opportunities across 9 diverse industries with structured mentorship.' },
              { icon: <FaBuilding />, title: 'Global Perks', desc: 'Competitive packages, health premiums, and performance-based incentives.' },
              { icon: <FaUsers />, title: 'Expert Culture', desc: 'Work alongside industry pioneers in an environment that rewards bold innovation.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <div className="text-2xl md:text-3xl text-red-600 group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal - Responsive */}
      <AnimatePresence>
        {showJobDetail && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
            onClick={closeJobDetail}
          >
            <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6 text-white rounded-t-xl md:rounded-t-2xl sticky top-0 z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{selectedJob.title}</h2>
                      <p className="text-red-100 text-sm md:text-base mt-1">{selectedJob.category}</p>
                    </div>
                    <button
                      onClick={closeJobDetail}
                      className="p-1.5 md:p-2 hover:bg-white/20 rounded-full transition"
                    >
                      <FaTimes className="text-sm md:text-base" />
                    </button>
                  </div>
                </div>

                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
                    <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
                      <FaMapMarkerAlt className="mx-auto text-red-500 mb-1 text-sm md:text-base" />
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-xs md:text-sm font-semibold">{selectedJob.location}</p>
                    </div>
                    <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
                      <FaClock className="mx-auto text-red-500 mb-1 text-sm md:text-base" />
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-xs md:text-sm font-semibold">{selectedJob.experience}</p>
                    </div>
                    <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
                      <FaBriefcase className="mx-auto text-red-500 mb-1 text-sm md:text-base" />
                      <p className="text-xs text-gray-500">Job Type</p>
                      <p className="text-xs md:text-sm font-semibold">{selectedJob.type}</p>
                    </div>
                    <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
                      <FaDollarSign className="mx-auto text-red-500 mb-1 text-sm md:text-base" />
                      <p className="text-xs text-gray-500">Salary Range</p>
                      <p className="text-xs md:text-sm font-semibold">{selectedJob.salary}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2">Job Description</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2">Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleApply}
                    className="w-full py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    Apply Now <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Modal - Responsive */}
      <AnimatePresence>
        {showApplication && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
            onClick={closeApplication}
          >
            <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6 text-white rounded-t-xl md:rounded-t-2xl sticky top-0 z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Apply for {selectedJob.title}</h2>
                      <p className="text-red-100 text-sm md:text-base mt-1">Please fill out the form below</p>
                    </div>
                    <button
                      onClick={closeApplication}
                      className="p-1.5 md:p-2 hover:bg-white/20 rounded-full transition"
                    >
                      <FaTimes className="text-sm md:text-base" />
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmitApplication} className="p-4 md:p-6 space-y-4 md:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={applicationData.firstName}
                        onChange={handleApplicationChange}
                        required
                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={applicationData.lastName}
                        onChange={handleApplicationChange}
                        required
                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">CNIC Number *</label>
                    <input
                      type="text"
                      name="cnic"
                      value={applicationData.cnic}
                      onChange={handleApplicationChange}
                      required
                      className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="42101-XXXXXXX-X"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleApplicationChange}
                      required
                      className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required
                      className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={applicationData.address}
                      onChange={handleApplicationChange}
                      required
                      className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your full address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Upload Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center hover:border-red-500 transition">
                      <FaUpload className="mx-auto text-2xl md:text-3xl text-gray-400 mb-2" />
                      <p className="text-xs md:text-sm text-gray-500">Click or drag to upload CV</p>
                      <p className="text-xs text-gray-400 mt-1">PDF or DOCX (Max 5MB)</p>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleApplicationChange}
                        accept=".pdf,.docx"
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label
                        htmlFor="resume-upload"
                        className="mt-2 md:mt-3 inline-block px-3 py-1.5 md:px-5 md:py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition text-xs md:text-sm"
                      >
                        Choose File
                      </label>
                      {applicationData.resume && (
                        <p className="mt-2 text-xs md:text-sm text-green-600">✓ {applicationData.resume.name}</p>
                      )}
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-500 text-green-700 px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                      <FaCheckCircle className="text-green-500" /> Application submitted successfully! We'll contact you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-500 text-red-700 px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                      Failed to submit application. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    All applications are reviewed within 48 business hours
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Join Fast Group and be part of something extraordinary.
            </p>
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 text-sm md:text-base">
              Explore All Positions
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
        `
      }} />
    </div>
  );
}

export default Opportunities;
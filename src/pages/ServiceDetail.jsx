import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaClock,
  FaPlay,
  FaPause,
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaStar,
  FaRocket,
  FaShoppingCart,
  FaCode,
  FaPaintBrush,
  FaPalette,
  FaCloud,
  FaSearch,
  FaMobile,
  FaVideo,
  FaShieldAlt,
  FaDatabase,
  FaRobot,
  FaWifi,
  FaVrCardboard,
  FaCogs,
  FaGlobe,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

// CDN Video URLs (Working - No local files needed)
const digitalMarketingVideo = "https://cdn.pixabay.com/video/2019/03/21/22192-326722755_medium.mp4";
const ecommerceVideo = "https://cdn.pixabay.com/video/2021/09/29/90251-620258654_medium.mp4";
const softwareDevelopmentVideo = "https://cdn.pixabay.com/video/2023/08/01/174086-850404739_medium.mp4";
const uiUxDesignVideo = "https://cdn.pixabay.com/video/2021/03/08/67358-521707474_medium.mp4";
const brandingVideo = "https://cdn.pixabay.com/video/2019/03/20/22135-325481684_medium.mp4";
const cloudHostingVideo = "https://cdn.pixabay.com/video/2019/12/06/29879-377759955_medium.mp4";
const seoContentVideo = "https://cdn.pixabay.com/video/2019/03/21/22192-326722755_medium.mp4";
const mobileAppsVideo = "https://cdn.pixabay.com/video/2022/08/17/128210-747086064_medium.mp4";
const webDevelopmentVideo = "https://cdn.pixabay.com/video/2017/06/19/10066-222361320_medium.mp4";
const videoAnimationVideo = "https://cdn.pixabay.com/video/2016/09/13/5130-183300011_medium.mp4";
const leadGenerationVideo = "https://cdn.pixabay.com/video/2019/03/21/22192-326722755_medium.mp4";
const cybersecurityVideo = "https://cdn.pixabay.com/video/2026/03/14/340193_medium.mp4";
const graphicDesigningVideo = "https://cdn.pixabay.com/video/2021/03/08/67358-521707474_medium.mp4";
const dataScienceVideo = "https://cdn.pixabay.com/video/2024/06/06/215500_medium.mp4";
const aiMlVideo = "https://cdn.pixabay.com/video/2024/06/10/216098_medium.mp4";
const iotSolutionsVideo = "https://cdn.pixabay.com/video/2025/02/25/260943_medium.mp4";
const arVrVideo = "https://cdn.pixabay.com/video/2025/04/07/270312_medium.mp4";
const rpaSolutionsVideo = "https://cdn.pixabay.com/video/2025/02/25/260943_medium.mp4";
const metaverseVideo = "https://cdn.pixabay.com/video/2025/04/07/270312_medium.mp4";
// Images import
import seoContentImg from '../assets/seo-content.jpg';
import videoAnimationImg from '../assets/video-animation.jpg';

function ServiceDetail() {
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

  // Services Data (Same as yours - abbreviated for space)
  const servicesData = {
    "digital-marketing": {
      title: "Digital Marketing",
      icon: <FaChartLine />,
      gradient: "from-red-500 to-red-700",
      bgVideo: digitalMarketingVideo,
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      shortDesc: "Reach your target audience effectively with our data-driven digital marketing strategies.",
      fullDesc: "We specialize in social media management, targeted advertising, and performance tracking to drive measurable results.",
      stats: [
        { value: "200%", label: "Efficiency Boosted" },
        { value: "24/7", label: "Service Level" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "500+", label: "Campaigns Run" },
      ],
      deliverables: ["Marketing Audit", "Social Media Campaign", "SEO/SEM", "Email Marketing", "Analytics"],
      features: [
        { title: "Social Media Marketing", desc: "Professional implementation for your business objectives." },
        { title: "Search Engine Marketing", desc: "Data-driven paid advertising campaigns." },
        { title: "Content Marketing", desc: "Engaging content that drives organic traffic." },
        { title: "Email Marketing", desc: "Personalized email campaigns." },
        { title: "Analytics Dashboard", desc: "Real-time insights and reporting." },
        { title: "Influencer Marketing", desc: "Strategic partnerships for brand reach." },
      ],
      whyChoose: [
        { icon: <FaRocket />, text: "Boost brand awareness" },
        { icon: <FaUsers />, text: "Generate quality leads" },
        { icon: <FaHandshake />, text: "Real-time engagement" },
        { icon: <FaChartLine />, text: "Maximize ROI" },
      ],
    },
    // Add other services here (ecommerce, software-development, etc.)
    // For brevity, I'm showing the pattern - you can keep your existing data
    // E-commerce Solutions
    ecommerce: {
      title: "E-commerce Solutions",
      icon: <FaShoppingCart />,
      gradient: "from-green-500 to-emerald-600",
      bgVideo:
        ecommerceVideo,
      bgImage:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=500&fit=crop",
      shortDesc:
        "Build powerful online stores that drive sales and provide seamless shopping experiences.",
      fullDesc:
        "Our e-commerce solutions help you create stunning online stores with powerful features like custom storefronts, secure payment integration, inventory management, and real-time analytics. We ensure your customers enjoy a frictionless shopping experience from browse to checkout.",
      stats: [
        { value: "150%", label: "Sales Growth" },
        { value: "99.9%", label: "Uptime" },
        { value: "500+", label: "Stores Launched" },
        { value: "50K+", label: "Transactions/Day" },
      ],
      deliverables: [
        "Custom Storefront Design",
        "Payment Gateway Integration",
        "Inventory Management System",
        "Shopping Cart Optimization",
        "Analytics Dashboard",
      ],
      features: [
        {
          title: "Custom Storefront Design",
          desc: "Unique, brand-aligned designs that convert visitors into customers with intuitive navigation.",
        },
        {
          title: "Secure Payment Gateways",
          desc: "Multiple payment options with bank-level security and PCI compliance for customer peace of mind.",
        },
        {
          title: "Inventory Management",
          desc: "Real-time tracking, automated stock updates, and low inventory alerts to prevent stockouts.",
        },
        {
          title: "Order Management System",
          desc: "Streamlined order processing, shipping integration, and customer notification automation.",
        },
        {
          title: "Mobile Commerce Ready",
          desc: "Fully responsive designs that provide seamless shopping on any device.",
        },
        {
          title: "SEO Optimization",
          desc: "Built-in SEO features to help your products rank higher in search results.",
        },
      ],
      whyChoose: [
        { icon: <FaRocket />, text: "Increase conversion rates by up to 40%" },
        {
          icon: <FaShoppingCart />,
          text: "Reduce cart abandonment with smart features",
        },
        { icon: <FaCloud />, text: "Scale seamlessly as your business grows" },
        { icon: <FaUsers />, text: "24/7 customer support and monitoring" },
      ],
    },

    // Software Development
    "software-development": {
      title: "Software Development",
      icon: <FaCode />,
      gradient: "from-blue-500 to-indigo-600",
      bgVideo:
        softwareDevelopmentVideo,
      bgImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      shortDesc:
        "Custom software solutions designed to solve complex business challenges.",
      fullDesc:
        "We build scalable, secure, and high-performance software tailored to your specific business needs. From SaaS platforms to enterprise systems, our expert developers use cutting-edge technologies to deliver solutions that drive efficiency and growth.",
      stats: [
        { value: "98%", label: "Client Retention" },
        { value: "200+", label: "Projects Completed" },
        { value: "50+", label: "Expert Developers" },
        { value: "24/7", label: "Support Available" },
      ],
      deliverables: [
        "Custom SaaS Development",
        "Enterprise Software Solutions",
        "API Integration Services",
        "Cloud Native Applications",
        "Legacy System Migration",
      ],
      features: [
        {
          title: "Custom SaaS Platforms",
          desc: "Scalable software-as-a-service solutions with multi-tenancy and subscription management.",
        },
        {
          title: "Enterprise Systems",
          desc: "Complex business process automation with robust security and compliance features.",
        },
        {
          title: "API Development",
          desc: "Seamless third-party integrations with well-documented RESTful and GraphQL APIs.",
        },
        {
          title: "Cloud Native Applications",
          desc: "Microservices architecture with container orchestration for maximum scalability.",
        },
        {
          title: "Quality Assurance",
          desc: "Automated testing, CI/CD pipelines, and rigorous QA processes for bug-free delivery.",
        },
        {
          title: "DevOps & Infrastructure",
          desc: "Expert infrastructure management with monitoring, logging, and alerting systems.",
        },
      ],
      whyChoose: [
        { icon: <FaCode />, text: "Agile development methodology" },
        { icon: <FaCheckCircle />, text: "Comprehensive quality assurance" },
        { icon: <FaClock />, text: "On-time delivery guarantee" },
        { icon: <FaUsers />, text: "Dedicated support and maintenance" },
      ],
    },

    // UI/UX Design
    "ui-ux-design": {
      title: "UI/UX Design",
      icon: <FaPaintBrush />,
      gradient: "from-purple-500 to-pink-600",
      bgVideo:
        uiUxDesignVideo,
      bgImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      shortDesc:
        "User-centered design that combines aesthetics with functionality.",
      fullDesc:
        "Our design team creates intuitive, beautiful interfaces that users love to interact with. We combine user research, wireframing, prototyping, and visual design to deliver products that are not only stunning but also highly usable and accessible.",
      stats: [
        { value: "95%", label: "User Satisfaction" },
        { value: "60%", label: "Engagement Boost" },
        { value: "100+", label: "Design Projects" },
        { value: "50+", label: "Happy Clients" },
      ],
      deliverables: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "High-Fidelity UI Design",
        "Design Systems",
        "Usability Testing",
      ],
      features: [
        {
          title: "User Research",
          desc: "Deep understanding of your target audience through interviews, surveys, and analytics.",
        },
        {
          title: "Wireframing & Prototyping",
          desc: "Low and high-fidelity prototypes to validate ideas before development.",
        },
        {
          title: "Visual Design",
          desc: "Pixel-perfect UI components with modern design trends and brand consistency.",
        },
        {
          title: "Design Systems",
          desc: "Scalable component libraries that ensure consistency across all products.",
        },
        {
          title: "Usability Testing",
          desc: "Real user testing to identify pain points and optimize the user experience.",
        },
        {
          title: "Accessibility",
          desc: "WCAG compliant designs that are accessible to all users.",
        },
      ],
      whyChoose: [
        { icon: <FaUsers />, text: "User-first design approach" },
        { icon: <FaStar />, text: "Modern design trends" },
        { icon: <FaGlobe />, text: "Accessibility focused" },
        { icon: <FaRocket />, text: "Fast iteration cycles" },
      ],
    },

    // Branding & Identity
    branding: {
      title: "Branding & Identity",
      icon: <FaPalette />,
      gradient: "from-orange-500 to-red-600",
      bgVideo:
        brandingVideo,
      bgImage:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=500&fit=crop",
      shortDesc: "Build a unique and memorable brand identity that stands out.",
      fullDesc:
        "Complete brand strategy, logo design, and visual identity systems that help you connect with your audience. We create cohesive brand experiences across all touchpoints.",
      stats: [
        { value: "100+", label: "Brands Created" },
        { value: "95%", label: "Client Approval" },
        { value: "50+", label: "Industries Served" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "Logo Design",
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
      ],
      features: [
        {
          title: "Logo Design",
          desc: "Unique, memorable logos that capture your brand essence.",
        },
        {
          title: "Brand Strategy",
          desc: "Comprehensive brand positioning and messaging frameworks.",
        },
        {
          title: "Visual Identity",
          desc: "Complete color palettes, typography, and visual elements.",
        },
      ],
      whyChoose: [
        { icon: <FaPalette />, text: "Unique brand identity" },
        { icon: <FaUsers />, text: "Audience connection" },
        { icon: <FaStar />, text: "Memorable designs" },
        { icon: <FaRocket />, text: "Market differentiation" },
      ],
    },

    // Cloud Hosting
    "cloud-hosting": {
      title: "Cloud Hosting & Security",
      icon: <FaCloud />,
      gradient: "from-cyan-500 to-blue-600",
      bgVideo:
        cloudHostingVideo,
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      shortDesc:
        "Secure, scalable cloud hosting solutions for modern businesses.",
      fullDesc:
        "Enterprise-grade cloud infrastructure with 99.9% uptime, advanced security features, and 24/7 monitoring. We help you migrate, manage, and optimize your cloud environment.",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Monitoring" },
        { value: "100+", label: "Servers Managed" },
        { value: "50+", label: "Clients" },
      ],
      deliverables: [
        "Cloud Migration",
        "Security Audits",
        "24/7 Monitoring",
        "Backup Solutions",
      ],
      features: [
        {
          title: "Cloud Migration",
          desc: "Seamless migration to AWS, Azure, or Google Cloud.",
        },
        {
          title: "Security Audits",
          desc: "Comprehensive security assessments and penetration testing.",
        },
        {
          title: "24/7 Monitoring",
          desc: "Real-time monitoring and alerting for your infrastructure.",
        },
      ],
      whyChoose: [
        { icon: <FaCloud />, text: "Scalable infrastructure" },
        { icon: <FaShieldAlt />, text: "Enterprise security" },
        { icon: <FaClock />, text: "99.9% uptime" },
        { icon: <FaUsers />, text: "Expert support" },
      ],
    },

    // SEO & Content
    "seo-content": {
      title: "SEO & Content Creation",
      icon: <FaSearch />,
      gradient: "from-teal-500 to-green-600",
      bgVideo:
        seoContentVideo,
        bgImage: seoContentImg,
      shortDesc: "Improve search rankings with quality content that engages.",
      fullDesc:
        "Content strategies that drive organic traffic, improve search rankings, and engage your target audience. Our SEO experts and content creators work together to deliver results.",
      stats: [
        { value: "300%", label: "Traffic Growth" },
        { value: "50+", label: "Keywords Ranked" },
        { value: "1000+", label: "Articles Written" },
        { value: "24/7", label: "Analytics" },
      ],
      deliverables: [
        "Keyword Research",
        "Content Strategy",
        "Blog Management",
        "SEO Audit",
      ],
      features: [
        {
          title: "Keyword Research",
          desc: "Data-driven keyword targeting for maximum visibility.",
        },
        {
          title: "Content Strategy",
          desc: "Comprehensive content plans aligned with business goals.",
        },
        {
          title: "Blog Management",
          desc: "Regular, high-quality blog posts that drive engagement.",
        },
      ],
      whyChoose: [
        { icon: <FaSearch />, text: "Higher search rankings" },
        { icon: <FaUsers />, text: "More organic traffic" },
        { icon: <FaChartLine />, text: "Measurable results" },
        { icon: <FaStar />, text: "Quality content" },
      ],
    },

    // Mobile Apps
    "mobile-apps": {
      title: "Mobile App Development",
      icon: <FaMobile />,
      gradient: "from-indigo-500 to-purple-600",
      bgVideo:
        mobileAppsVideo,
      bgImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      shortDesc: "iOS and Android apps with exceptional user experience.",
      fullDesc:
        "Native and cross-platform mobile applications that deliver exceptional performance and user experience. From concept to app store deployment, we handle everything.",
      stats: [
        { value: "100+", label: "Apps Launched" },
        { value: "1M+", label: "Downloads" },
        { value: "4.8", label: "Avg Rating" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "iOS/Android Apps",
        "Cross-Platform",
        "App Store Deployment",
        "Maintenance",
      ],
      features: [
        {
          title: "iOS/Android Development",
          desc: "Native apps for Apple and Android platforms.",
        },
        {
          title: "Cross-Platform",
          desc: "React Native and Flutter solutions for both platforms.",
        },
        {
          title: "App Store Deployment",
          desc: "Complete submission and approval assistance.",
        },
      ],
      whyChoose: [
        { icon: <FaMobile />, text: "Native performance" },
        { icon: <FaUsers />, text: "User-centric design" },
        { icon: <FaRocket />, text: "Fast deployment" },
        { icon: <FaStar />, text: "High ratings" },
      ],
    },

    // Web Development
    "web-development": {
      title: "Web Development",
      icon: <FaGlobe />,
      gradient: "from-blue-600 to-cyan-600",
      bgVideo:
        webDevelopmentVideo,
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      shortDesc: "Responsive websites and web applications that perform.",
      fullDesc:
        "Modern, fast, and SEO-friendly websites built with cutting-edge technologies. We create responsive web applications that provide exceptional user experiences across all devices.",
      stats: [
        { value: "200+", label: "Websites Built" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "50+", label: "Technologies" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "React/Next.js",
        "Node.js/Python",
        "CMS Integration",
        "Performance Optimization",
      ],
      features: [
        {
          title: "React/Next.js",
          desc: "Modern, fast frontend applications with SSR capabilities.",
        },
        {
          title: "Node.js/Python",
          desc: "Scalable backend APIs and services.",
        },
        {
          title: "CMS Integration",
          desc: "Easy content management with WordPress, Sanio, or custom solutions.",
        },
      ],
      whyChoose: [
        { icon: <FaGlobe />, text: "Modern tech stack" },
        { icon: <FaRocket />, text: "Fast performance" },
        { icon: <FaSearch />, text: "SEO optimized" },
        { icon: <FaMobile />, text: "Fully responsive" },
      ],
    },

    "video-animation": {
  title: "Video & Animation",
  icon: <FaVideo />,
  gradient: "from-rose-500 to-pink-600",
  bgVideo: videoAnimationVideo,
  bgImage: videoAnimationImg,
  shortDesc: "Professional video editing and motion graphics that captivate.",
      fullDesc:
        "Engaging video content that tells your story, explains your products, and connects with your audience. Our creative team delivers high-quality videos for all platforms.",
      stats: [
        { value: "500+", label: "Videos Created" },
        { value: "10M+", label: "Views" },
        { value: "50+", label: "Happy Clients" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "Motion Graphics",
        "3D Animation",
        "Video Editing",
        "Social Media Videos",
      ],
      features: [
        {
          title: "Motion Graphics",
          desc: "Animated graphics that explain complex ideas simply.",
        },
        {
          title: "3D Animation",
          desc: "Stunning 3D animations for products and storytelling.",
        },
        {
          title: "Video Editing",
          desc: "Professional editing for promotional and corporate videos.",
        },
      ],
      whyChoose: [
        { icon: <FaVideo />, text: "High-quality production" },
        { icon: <FaUsers />, text: "Engaging content" },
        { icon: <FaRocket />, text: "Fast turnaround" },
        { icon: <FaStar />, text: "Creative excellence" },
      ],
    },

    // Lead Generation
    "lead-generation": {
      title: "Leads Generation",
      icon: <FaUsers />,
      gradient: "from-yellow-500 to-orange-600",
      bgVideo:
        leadGenerationVideo,
      bgImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      shortDesc: "Drive high-quality leads and grow your sales pipeline.",
      fullDesc:
        "Targeted lead generation strategies for B2B and B2C businesses. We help you attract, capture, and convert high-quality leads through multiple channels.",
      stats: [
        { value: "10K+", label: "Leads Generated" },
        { value: "30%", label: "Conversion Rate" },
        { value: "100+", label: "Campaigns" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "B2B Lead Gen",
        "Email Marketing",
        "Sales Funnel",
        "Lead Scoring",
      ],
      features: [
        {
          title: "B2B Lead Gen",
          desc: "Targeted outreach to decision-makers in your industry.",
        },
        {
          title: "Email Marketing",
          desc: "Automated email campaigns that nurture and convert.",
        },
        {
          title: "Sales Funnel",
          desc: "Optimized funnels that guide prospects to purchase.",
        },
      ],
      whyChoose: [
        { icon: <FaUsers />, text: "Quality leads" },
        { icon: <FaChartLine />, text: "Higher conversion" },
        { icon: <FaRocket />, text: "Scalable campaigns" },
        { icon: <FaStar />, text: "ROI focused" },
      ],
    },

    // Cybersecurity
    cybersecurity: {
      title: "Cybersecurity",
      icon: <FaShieldAlt />,
      gradient: "from-red-700 to-red-900",
      bgVideo:
        cybersecurityVideo,
      bgImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      shortDesc: "Advanced threat detection and protection for your business.",
      fullDesc:
        "Comprehensive security solutions for your digital assets. We protect your business from cyber threats with advanced monitoring, penetration testing, and compliance management.",
      stats: [
        { value: "100%", label: "Threat Protection" },
        { value: "24/7", label: "Monitoring" },
        { value: "50+", label: "Audits Completed" },
        { value: "0", label: "Breaches" },
      ],
      deliverables: [
        "Penetration Testing",
        "Security Audits",
        "Compliance",
        "Incident Response",
      ],
      features: [
        {
          title: "Penetration Testing",
          desc: "Identify vulnerabilities before attackers do.",
        },
        {
          title: "Security Audits",
          desc: "Comprehensive assessment of your security posture.",
        },
        {
          title: "Compliance",
          desc: "GDPR, HIPAA, SOC2 compliance management.",
        },
      ],
      whyChoose: [
        { icon: <FaShieldAlt />, text: "Advanced protection" },
        { icon: <FaClock />, text: "24/7 monitoring" },
        { icon: <FaCheckCircle />, text: "Compliance ready" },
        { icon: <FaUsers />, text: "Expert team" },
      ],
    },

    // Graphic Designing
    "graphic-designing": {
      title: "Graphic Designing",
      icon: <FaPalette />,
      gradient: "from-fuchsia-500 to-purple-600",
      bgVideo:
        graphicDesigningVideo,
      bgImage:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
      shortDesc: "Transform ideas into compelling visual stories.",
      fullDesc:
        "Professional graphic design for all your marketing needs. From logos to marketing materials, we create visuals that capture attention and communicate your message effectively.",
      stats: [
        { value: "1000+", label: "Designs Created" },
        { value: "500+", label: "Happy Clients" },
        { value: "98%", label: "Satisfaction" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
      ],
      features: [
        {
          title: "Brand Identity",
          desc: "Complete visual identity systems for brands.",
        },
        {
          title: "Marketing Materials",
          desc: "Brochures, flyers, banners, and more.",
        },
        {
          title: "Social Media Graphics",
          desc: "Engaging visuals for all social platforms.",
        },
      ],
      whyChoose: [
        { icon: <FaPalette />, text: "Creative designs" },
        { icon: <FaStar />, text: "Unique visuals" },
        { icon: <FaRocket />, text: "Fast delivery" },
        { icon: <FaUsers />, text: "Client focused" },
      ],
    },

    // Data Science
    "data-science": {
      title: "Data Science",
      icon: <FaDatabase />,
      gradient: "from-emerald-500 to-teal-600",
      bgVideo:
        dataScienceVideo,
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      shortDesc:
        "Advanced analytics and machine learning for better decisions.",
      fullDesc:
        "Turn your data into actionable insights with our data science expertise. We help you predict trends, understand customers, and optimize operations with advanced analytics.",
      stats: [
        { value: "1TB+", label: "Data Processed" },
        { value: "95%", label: "Accuracy" },
        { value: "50+", label: "Models Built" },
        { value: "24/7", label: "Analytics" },
      ],
      deliverables: [
        "Predictive Analytics",
        "Big Data",
        "Data Visualization",
        "ML Models",
      ],
      features: [
        {
          title: "Predictive Analytics",
          desc: "Forecast trends and customer behavior.",
        },
        {
          title: "Big Data",
          desc: "Process and analyze large datasets efficiently.",
        },
        {
          title: "Data Visualization",
          desc: "Interactive dashboards for insights.",
        },
      ],
      whyChoose: [
        { icon: <FaDatabase />, text: "Data-driven decisions" },
        { icon: <FaChartLine />, text: "Predictive insights" },
        { icon: <FaRobot />, text: "AI integration" },
        { icon: <FaStar />, text: "Proven results" },
      ],
    },

    // AI & ML
    "ai-ml": {
      title: "Artificial Intelligence & ML",
      icon: <FaRobot />,
      gradient: "from-violet-500 to-purple-700",
      bgVideo:
        aiMlVideo,
      bgImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      shortDesc: "Intelligent systems with cutting-edge AI engineering.",
      fullDesc:
        "Cutting-edge AI solutions for business automation and intelligence. We build custom AI models, chatbots, and computer vision systems that transform how you work.",
      stats: [
        { value: "100+", label: "AI Models" },
        { value: "99%", label: "Accuracy" },
        { value: "50+", label: "Clients" },
        { value: "24/7", label: "Automation" },
      ],
      deliverables: ["NLP", "Computer Vision", "AI Agents", "Chatbots"],
      features: [
        {
          title: "NLP",
          desc: "Natural language processing for text analysis and chatbots.",
        },
        {
          title: "Computer Vision",
          desc: "Image recognition and analysis systems.",
        },
        {
          title: "AI Agents",
          desc: "Intelligent automation for business processes.",
        },
      ],
      whyChoose: [
        { icon: <FaRobot />, text: "Cutting-edge AI" },
        { icon: <FaChartLine />, text: "Business automation" },
        { icon: <FaStar />, text: "Custom solutions" },
        { icon: <FaRocket />, text: "Future ready" },
      ],
    },

    // IoT Solutions
    "iot-solutions": {
      title: "IoT Solutions",
      icon: <FaWifi />,
      gradient: "from-lime-500 to-green-600",
      bgVideo:
        iotSolutionsVideo,
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      shortDesc: "Connect and control smart devices seamlessly.",
      fullDesc:
        "Internet of Things solutions for smart environments. We help you connect, monitor, and control devices remotely with secure and scalable IoT platforms.",
      stats: [
        { value: "10K+", label: "Devices Connected" },
        { value: "99.9%", label: "Uptime" },
        { value: "50+", label: "Projects" },
        { value: "24/7", label: "Monitoring" },
      ],
      deliverables: [
        "Smart Home",
        "Industrial IoT",
        "Wearables",
        "Device Management",
      ],
      features: [
        { title: "Smart Home", desc: "Connected home automation systems." },
        {
          title: "Industrial IoT",
          desc: "Factory and industrial monitoring solutions.",
        },
        { title: "Wearables", desc: "Fitness and health tracking devices." },
      ],
      whyChoose: [
        { icon: <FaWifi />, text: "Seamless connectivity" },
        { icon: <FaShieldAlt />, text: "Secure platforms" },
        { icon: <FaChartLine />, text: "Real-time insights" },
        { icon: <FaRocket />, text: "Scalable solutions" },
      ],
    },

    // AR/VR
    "ar-vr": {
      title: "AR & VR Technology",
      icon: <FaVrCardboard />,
      gradient: "from-indigo-600 to-purple-700",
      bgVideo:
        arVrVideo,
      bgImage:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=500&fit=crop",
      shortDesc: "Immersive augmented and virtual reality experiences.",
      fullDesc:
        "Next-generation immersive experiences for training, marketing, and entertainment. We build AR/VR applications that engage users and create memorable experiences.",
      stats: [
        { value: "50+", label: "Experiences" },
        { value: "100K+", label: "Users" },
        { value: "4.9", label: "Rating" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "Virtual Showrooms",
        "Training Simulations",
        "Interactive Apps",
        "360° Video",
      ],
      features: [
        {
          title: "Virtual Showrooms",
          desc: "Immersive product demonstrations.",
        },
        {
          title: "Training Simulations",
          desc: "Safe, realistic training environments.",
        },
        {
          title: "Interactive Apps",
          desc: "Engaging AR experiences for mobile.",
        },
      ],
      whyChoose: [
        { icon: <FaVrCardboard />, text: "Immersive experiences" },
        { icon: <FaUsers />, text: "User engagement" },
        { icon: <FaStar />, text: "Cutting-edge tech" },
        { icon: <FaRocket />, text: "Innovative solutions" },
      ],
    },

    // RPA Solutions
    "rpa-solutions": {
      title: "RPA Solutions",
      icon: <FaCogs />,
      gradient: "from-gray-600 to-gray-800",
      bgVideo:
        rpaSolutionsVideo,
      bgImage:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop",
      shortDesc: "Robotic process automation for business efficiency.",
      fullDesc:
        "Automate repetitive tasks with RPA bots. We help you streamline operations, reduce errors, and free up your team for higher-value work with intelligent automation.",
      stats: [
        { value: "80%", label: "Time Saved" },
        { value: "100%", label: "Accuracy" },
        { value: "50+", label: "Processes" },
        { value: "24/7", label: "Automation" },
      ],
      deliverables: [
        "Workflow Automation",
        "Bot Development",
        "Process Mining",
        "Analytics",
      ],
      features: [
        {
          title: "Workflow Automation",
          desc: "Streamline repetitive business processes.",
        },
        {
          title: "Bot Development",
          desc: "Custom RPA bots for your specific needs.",
        },
        { title: "Process Mining", desc: "Identify automation opportunities." },
      ],
      whyChoose: [
        { icon: <FaCogs />, text: "Process automation" },
        { icon: <FaClock />, text: "Time savings" },
        { icon: <FaCheckCircle />, text: "Error reduction" },
        { icon: <FaChartLine />, text: "ROI focused" },
      ],
    },

    // Metaverse
    metaverse: {
      title: "Metaverse Technology",
      icon: <FaGlobe />,
      gradient: "from-fuchsia-600 to-pink-700",
      bgVideo:
        metaverseVideo,
      bgImage:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=500&fit=crop",
      shortDesc: "Next-generation virtual worlds and experiences.",
      fullDesc:
        "Build immersive metaverse experiences for your brand. From virtual real estate to 3D spaces, we help you establish presence in the emerging metaverse.",
      stats: [
        { value: "20+", label: "Worlds Built" },
        { value: "50K+", label: "Visitors" },
        { value: "4.8", label: "Rating" },
        { value: "24/7", label: "Support" },
      ],
      deliverables: [
        "3D Modeling",
        "Virtual Real Estate",
        "Blockchain",
        "Avatar Design",
      ],
      features: [
        { title: "3D Modeling", desc: "Detailed 3D assets and environments." },
        {
          title: "Virtual Real Estate",
          desc: "Land and property in metaverse platforms.",
        },
        { title: "Blockchain", desc: "NFT integration and digital ownership." },
      ],
      whyChoose: [
        { icon: <FaGlobe />, text: "Future ready" },
        { icon: <FaUsers />, text: "Immersive engagement" },
        { icon: <FaStar />, text: "Innovative tech" },
        { icon: <FaRocket />, text: "First mover advantage" },
      ],
    },
  };

  // Fallback for missing service
  const getServiceData = () => {
    if (servicesData[id]) return servicesData[id];
    // Create fallback for any service
    return {
      title: id?.replace(/-/g, ' ') || "Service",
      icon: <FaStar />,
      gradient: "from-red-500 to-red-700",
      bgVideo: digitalMarketingVideo,
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      shortDesc: "Professional solutions tailored to your business needs.",
      fullDesc: "We provide comprehensive solutions to help your business grow and succeed.",
      stats: [
        { value: "100%", label: "Satisfaction" },
        { value: "24/7", label: "Support" },
        { value: "500+", label: "Projects" },
        { value: "50+", label: "Experts" },
      ],
      deliverables: ["Consultation", "Strategy", "Execution", "Support"],
      features: [
        { title: "Expert Team", desc: "Dedicated professionals for your project." },
        { title: "Quality Assurance", desc: "Rigorous testing and quality checks." },
        { title: "Timely Delivery", desc: "On-time project completion." },
        { title: "24/7 Support", desc: "Round-the-clock assistance." },
      ],
      whyChoose: [
        { icon: <FaRocket />, text: "Innovation first" },
        { icon: <FaUsers />, text: "Client focused" },
        { icon: <FaStar />, text: "Quality assured" },
        { icon: <FaChartLine />, text: "Results driven" },
      ],
    };
  };

  const service = getServiceData();

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={service.bgVideo} type="video/mp4" />
          </video>
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[80vh] md:min-h-[85vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full py-12 md:py-20">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 md:mb-6 transition group text-sm md:text-base"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Services
              </Link>

              <div className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6">{service.icon}</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {service.shortDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center text-sm md:text-base">
                  Get Started <FaRocket className="text-sm" />
                </button>
                <button
                  onClick={handlePlayVideo}
                  className="px-6 py-2.5 md:px-8 md:py-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-full font-semibold flex items-center gap-2 justify-center hover:bg-white/30 hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? "Pause" : "Watch"} Demo
                </button>
              </div>
            </motion.div>

            {/* Right Side - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-3 md:p-4 bg-white/5 rounded-xl">
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row items-center justify-between text-white/80 text-xs md:text-sm gap-3">
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" /> Trusted Partners
                  </span>
                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> 5 Star Rating
                  </span>
                </div>
              </div>
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

      {/* What We Deliver Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-red-100 text-red-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                What We Deliver
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Comprehensive {service.title} Solutions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {service.fullDesc}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                {service.deliverables.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 bg-red-50 text-red-600 rounded-full text-xs md:text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative group w-full"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
              <img
                src={service.bgImage}
                alt={service.title}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-red-100 text-red-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Key Features
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Every {service.title} package includes these enterprise-grade features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:translate-x-1"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <FaCheckCircle className="text-red-500 text-lg md:text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-red-100 text-red-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Why Our {service.title}?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              We deliver excellence through expertise, innovation, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {service.whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-xl md:text-2xl">{reason.icon}</div>
                </div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Deliverables CTA - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-red-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Start your journey with {service.title} today. Get a free consultation from our experts.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10 px-2">
              {service.deliverables.slice(0, 4).map((item, idx) => (
                <span key={idx} className="px-2 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium">
                  ✓ {item}
                </span>
              ))}
            </div>
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base">
              Get Free Consultation <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
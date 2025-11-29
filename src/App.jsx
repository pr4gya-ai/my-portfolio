import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Layers, User, BookOpen, GraduationCap, ClipboardList } from 'lucide-react';
import emailjs from '@emailjs/browser';
// image imports (match exact filenames in src/assets/images/)
import profileImg from './assets/images/leetcode pfp.png';
import blogImg from './assets/images/blog app.png';
import chatbotImg from './assets/images/chatbot.png';
import codemetricsImg from './assets/images/codemetrics.png';
import counterImg from './assets/images/counter app (1).png';
import expenseImg from './assets/images/expense tracker.png';
import mvcImg from './assets/images/MVC.png';
import quizImg from './assets/images/quiz game.png';
import todoImg from './assets/images/to do list.png';
import weatherImg from './assets/images/weather.png';


// --- 1. Portfolio Data ---
const portfolioData = {
  name: "Pragya Singh",
  title: "Full-Stack Developer & MERN Enthusiast",
  tagline: "Building seamless digital experiences from concept to deployment.",
  // Put your image URL here. To use a local file, add it to `src/assets/` and import it in `main.jsx` or `App.jsx`.
  profileImage: profileImg,
  contact: {
    email: "pragyasingh2132005@gmail.com",
    linkedin: "PRAGYA SINGH",
    github: "pr4gya-ai",
    phone: "+91 9904939120"
  },
  about: {
    paragraph1: "Hello! I'm Pragya Singh, an enthusiastic and self-driven Full-Stack Developer in the making, currently pursuing Integrated MCA in Artificial Intelligence at Parul University. I specialize in building clean, responsive, and user-friendly applications using React.js, JavaScript, Node.js, Express.js, and MongoDB. I enjoy turning ideas into functional digital experiences — from interactive chatbots to mini-tools, blogs, weather apps, and productivity applications.",
    paragraph2: "My background blends strong foundational knowledge in computer science, AI, and full-stack development, supported by hands-on projects that showcase real-world problem-solving. I am continuously sharpening my skills in Data Structures & Algorithms, exploring cloud technology, and improving my backend architecture. I believe in writing clean code, building efficient systems, and learning something new every day. I’m now looking for opportunities where I can contribute to meaningful projects and grow as a future full-stack developer and AI-focused engineer.",
  },
  skills: [
    { type: "Frontend", name: "React, Redux, Tailwind CSS" },
    { type: "Backend", name: "Node.js, Express" },
    { type: "Database", name: "MongoDB, MySQL" },
    { type: "Languages", name: "JavaScript, Python, Java" },
    { type: "Tools & Platforms", name: "Git, GitHub, VS Code, Postman" },
    { type: "Other Skills", name: "RESTful APIs, Responsive Design, Agile Methodologies" },
    
  ],
  education: [
    {
  degree: "Integrated MCA (Artificial Intelligence)",
  institution: "Parul University",
  period: "2022 – 2026 (Final Year)",
  details: "Focused on Artificial Intelligence, Data Structures & Algorithms, Web Development, DBMS, and Operating Systems."
}

  ],
  projects: [
    {
      title: "To-Do List App",
      description: "A simple and intuitive task management app that allows users to add, remove, and track their daily tasks with a clean UI.",
      screenshot: todoImg,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/pr4gya-ai/To-Do-List",
      liveLink: "https://to-do-list-rho-ten-89.vercel.app/"
    },
    {
      title: "Counter App",
      description: "A beginner-friendly React application demonstrating state management by incrementing, decrementing, and resetting values.",
      screenshot: counterImg,
      technologies: ["React", "JavaScript"],
      githubLink: "https://github.com/pr4gya-ai/Counter-App",
      DemoLink: "https://counter-app-ten-sandy-38.vercel.app/"
    },
    {
      title: "Weather App",
      description: "A React-based weather application that provides real-time weather updates using an external API. Includes search functionality and a clean UI.",
      screenshot: weatherImg,
      technologies: ["React", "JavaScript", "CSS", "API"],
      githubLink: "https://github.com/pr4gya-ai/My-Weather_App",
      liveLink: "https://weatherapp-puce-ten.vercel.app/"
    },
    {
      title: "CodeMetrics",
      description: "A tool that analyzes code snippets and provides insights like line count, word count, and basic code statistics for developers.",
      screenshot: codemetricsImg,
      technologies: ["JavaScript", "React", "CSS"],
      githubLink: "https://github.com/pr4gya-ai/CodeMetrics",
      DemoLink: "https://codemetrics-nine.vercel.app/"
    },
    {
      title: "Web Dev Quiz",
      description: "A quiz-based web application to test users on HTML, CSS, and JavaScript fundamentals with scoring and result tracking.",
      screenshot: quizImg,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/pr4gya-ai/Web-Dev-Quiz",
      DemoLink: "https://web-dev-quiz-pi.vercel.app/"
    },
    {
      title: "Expense Tracker",
      description: "A responsive expense tracking application allowing users to record, categorize, and visualize their daily expenses.",
      screenshot: expenseImg,
      technologies: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/pr4gya-ai/Expense-Tracker",
      DemoLink: "https://expense-tracker-nine-roan-72.vercel.app/"
    },
    {
      title: "AVA Chatbot",
      description: "A simple chatbot built with JavaScript to simulate AI-like responses and improve user engagement through interactive UI.",
      screenshot: chatbotImg,
      technologies: ["JavaScript", "HTML", "CSS","API Integration"],
      githubLink: "https://github.com/pr4gya-ai/AVA-chatbot",
      DemoLink: "https://ava-chatbot-lake.vercel.app/"
    },
    {
      title: "Blog App",
      description: "A frontend blog application built with React. Users can browse posts, navigate through pages, and interact with a clean and responsive UI. Designed with reusable components, state management, and dynamic routing.",
      screenshot: blogImg,
      technologies: ["React", "React Router", "CSS"],
      githubLink: "https://github.com/pr4gya-ai/React-Blog-App",
      DemoLink: "https://react-blog-app-rho-five.vercel.app/"
    },
    {
      title: "MCV Pattern Backend Project",
      description: "A backend project structured with the Model-Controller-View pattern, demonstrating clean architecture and modular route handling.",
      screenshot: mvcImg,
      technologies: ["Node.js", "Express", "MongoDB","React"],
      githubLink: "https://github.com/pr4gya-ai/MCV-Pattern-Backend-Project"
    }
  ]
};

// --- 2. Reusable Components ---

// SkillTag Component
const SkillTag = ({ name }) => (
  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition hover:bg-indigo-200 hover:shadow-md cursor-default whitespace-nowrap">
    {name}
  </span>
);

// ProjectCard Component
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
    {/* Project Screenshot */}
    {project.screenshot && (
      <div className="project-screenshot-container">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="project-screenshot"
        />
      </div>
    )}
    
    {/* Project Details */}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <SkillTag key={index} name={tech} />
        ))}
      </div>

      <div className="flex space-x-4">
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition"
        >
          <Github className="w-5 h-5 mr-1" />
          GitHub
        </a>
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-gray-600 hover:text-gray-800 font-medium transition"
        >
          <ExternalLink className="w-5 h-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Function to scroll to the target section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavLink = ({ id, label, Icon }) => (
    <button 
      onClick={() => scrollToSection(id)} 
      className="flex items-center w-full px-4 py-2 font-medium text-gray-600 hover:text-indigo-600 transition duration-150 rounded-lg hover:bg-indigo-50"
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-extrabold text-gray-900 hover:text-indigo-600 transition duration-150"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.id} id={item.id} label={item.label} Icon={item.icon} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition duration-150 rounded-full hover:bg-indigo-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 pb-2">
          <nav className="flex flex-col space-y-1 p-2">
            {navItems.map((item) => (
              <NavLink key={item.id} id={item.id} label={item.label} Icon={item.icon} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-indigo-400 transition">
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={`https://github.com/${portfolioData.contact.github}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} {portfolioData.name}. All rights reserved. | Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

// --- 3. Section Components ---

// Hero Section
const Hero = () => {
  return (
    // We add pt-20 here to compensate for the fixed header, ensuring the section starts below it.
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-6">
          {/* Mock Profile Picture */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-200 border-4 border-white shadow-xl mx-auto overflow-hidden flex items-center justify-center">
            <img
              src={portfolioData.profileImage || 'https://placehold.co/192x192/4F46E5/FFFFFF?text=AV'}
              alt={`${portfolioData.name} profile`}
              className="profile-img"
            />
          </div>
          <span className="absolute bottom-0 right-0 block h-6 w-6 rounded-full ring-4 ring-white bg-green-500"></span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="text-indigo-600">{portfolioData.name}</span>
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-6">
          {portfolioData.title}
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
          {portfolioData.tagline}
        </p>

        <div className="flex justify-center space-x-4">
          <a 
            href={`#contact`} 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
          <a 
            href={`#projects`} 
            className="inline-flex items-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-full shadow-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150 transform hover:scale-105"
          >
            <Layers className="w-5 h-5 mr-2" />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

// AboutMe Section
const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center">
          <User className="w-7 h-7 text-indigo-600 mr-2" />
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-600">
          <p>{portfolioData.about.paragraph1}</p>
          <p>{portfolioData.about.paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center">
          <Code className="w-7 h-7 text-indigo-600 mr-2" />
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([type, skillsList]) => (
            <div key={type} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-indigo-600 mb-4 border-b pb-2">{type}</h3>
              <div className="flex flex-wrap gap-3">
                {skillsList.flatMap(skillGroup => 
                  skillGroup.split(',').map(skill => skill.trim())
                ).map((skillName, index) => (
                  <SkillTag key={index} name={skillName} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center">
          <Layers className="w-7 h-7 text-indigo-600 mr-2" />
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a 
              href={`https://github.com/${portfolioData.contact.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 transition duration-150 shadow-md"
            >
              <Github className="w-5 h-5 mr-2" />
              See All {portfolioData.projects.length}+ Projects on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center">
          <GraduationCap className="w-7 h-7 text-indigo-600 mr-2" />
          Education & Background
        </h2>

        <div className="space-y-8 relative pl-6 border-l-4 border-indigo-200">
          {portfolioData.education.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-8 top-1 ring-8 ring-indigo-50"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 ml-4">
                <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                <p className="text-indigo-600 font-semibold">{item.institution}</p>
                <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                <p className="text-gray-600">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

    // Initialize EmailJS (you'll need to replace with your EmailJS credentials)
    useEffect(() => {
        emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your public key
    }, []);

    // Using useCallback for optimization
    const handleCopy = useCallback((text) => {
        try {
            // Using document.execCommand('copy') for better compatibility in iframe environments
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed"; 
            textArea.style.opacity = 0; // Hide the element
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus('');

        try {
            // Send email using EmailJS
            await emailjs.send(
                'YOUR_EMAILJS_SERVICE_ID', // Replace with your service ID
                'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: portfolioData.contact.email
                }
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(''), 3000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 3000);
        } finally {
            setLoading(false);
        }
    };

    const contacts = [
        {
            icon: Mail,
            label: "Email",
            value: portfolioData.contact.email,
            href: `mailto:${portfolioData.contact.email}`,
            copyable: true
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: `@${portfolioData.contact.linkedin}`,
            href: `https://linkedin.com/in/${portfolioData.contact.linkedin}`,
            copyable: false
        },
        {
            icon: Github,
            label: "GitHub",
            value: `@${portfolioData.contact.github}`,
            href: `https://github.com/${portfolioData.contact.github}`,
            copyable: false
        },
        {
            icon: ClipboardList,
            label: "Resume",
            value: "Download PDF",
            href: "src/assets/resume_placements.pdf", 
            copyable: false
        }
    ];

    return (
        <section id="contact" className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center">
                    <Mail className="w-7 h-7 text-indigo-600 mr-2" />
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition duration-300">
                            <contact.icon className="w-8 h-8 text-indigo-600 mb-3" />
                            <p className="text-lg font-semibold text-gray-800">{contact.label}</p>
                            
                            <div className="mt-2 flex flex-col items-center">
                                <a 
                                    href={contact.href} 
                                    target={contact.label === "Resume" ? "_self" : "_blank"} 
                                    rel="noopener noreferrer"
                                    className={`text-indigo-600 hover:text-indigo-800 break-all ${contact.copyable ? 'cursor-pointer' : ''}`}
                                >
                                    {contact.value}
                                </a>

                                {contact.copyable && (
                                    <button
                                        onClick={() => handleCopy(contact.value)}
                                        className="mt-2 text-xs font-medium text-white bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-full transition"
                                    >
                                        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form with Email Functionality */}
                <div className="mt-16 max-w-lg mx-auto p-8 bg-gray-50 rounded-xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Send a Message</h3>
                    
                    {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
                            ✗ Error sending message. Please try again or contact me directly.
                        </div>
                    )}
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                            required 
                        />
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message" 
                            rows="4" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full p-3 text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};


// --- 4. Main App Component ---
const App = () => {
    // Ensure smooth scrolling behavior is applied globally on initial load
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        // The main container relies on Tailwind classes for styling, including the Inter font.
        <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
            <Header />
            {/* The main tag needs padding-top to ensure content is visible below the fixed header */}
            <main className="pt-16">
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );

}

export default App;
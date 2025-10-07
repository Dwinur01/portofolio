import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Impor motion dari framer-motion

// Data portofolio
const portfolioData = {
  hero: {
    name: "Dwi Nur Hidayat",
    tagline: "Seorang mahasiswa Teknik Informatika yang bersemangat dengan fokus pada pengembangan web dan pembelajaran mesin. Saya senang membangun solusi inovatif dan mengeksplorasi teknologi baru.",
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQw40y8RkE_NfmQq4k4f9CRhjG_hxDlgMAisXRqBIFTUInnH2wXiw-yDNFz3wzdZ_4Lvt-WwJpUQnzwUKaklYdIOt01-u1BPyCgJCujttMQg9ORaGuoROqf4J9J7q_msI6HHamZYMmciZK8yXx2jJXuufoU2JYilLLJ3zPW-L4H-az2LNgyDEvoFsagguBlE0b2kfPfV64ub06VV9VnJpXu3LMQrvCT5yeuo6xx8VrLPlTI6ricDPlKa6RgXIxN7U1J6JH7BIf",
  },
  about: {
    description: "Saya mahasiswa Teknik Informatika di Universitas Muhammadiyah Gresik, dengan minat yang kuat dalam pengembangan web dan pembelajaran mesin. Saya mahir dalam berbagai bahasa pemrograman dan kerangka kerja, dan saya selalu bersemangat untuk belajar dan menerapkan keterampilan baru untuk memecahkan masalah dunia nyata. Tujuan saya adalah berkontribusi pada proyek-proyek inovatif dan memberikan dampak positif melalui teknologi.",
    hardSkills: ['React', 'Tailwind CSS', 'JavaScript', 'Python', 'Node.js', 'Express.js', 'PHP', 'MongoDB', 'SQL', 'Machine Learning', 'Git'],
    softSkills: ['Teamwork', 'Communication', 'Problem-solving', 'Time management', 'Creativity', 'Adaptability'],
  },
  projects: [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      screenshot: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjiGjzonLGzwSHMLVI0zHDYKup2Cnp-He_dftDRedjTbhnF6y4Hs-sk07S_nZzHgQvZhHwreHN4cfeGwSxkP-lKeixOeEEPax8TbBeAy7_w4NtICqCvM6aN8qn0zKI8w6oCrbhokBDmuDIaMP8c1UBR1f0vfltersfuPsd9Hp8FnxDLN7YtmtVDGRyADEnhM-QVh9yqS-2Mj-v_dfNZ7UqjNNaICum9yWeNHCxUk4zmbQ7RGYOJ7BdeWHp8r9FRtwB5pLcJJhy",
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      screenshot: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBHZzvuRiTpYZTnQqqx-KrTESvZVMuWvQTURTgBTKczbSV1LKFkFv83zb27tDy6RFjS5f53WkV2Sz309IL7PPFehHNq0D-DGaUdaVy5Cwzjn-MrItdTLi894gqcUdNqKEslHMncMJ-UnojssTk_hSO8Wp-fiC4VxhtqW9aaMFH2NqnWKFXvmcGP_o2fgcqWToxoQZWwc-va0DfOZopvY7kURVhx_mY39AM0TXNFt9HwRBXdvxenUR1X6EBBkFocX6oN1iN_Sug",
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Machine Learning Model',
      description: 'A machine learning model for predicting customer churn using Python.',
      screenshot: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1hFgETHIfHEAtDV1WGmVL410IUaAD9Bvqf7aw2DqU6kosX1PHU-HGTe4g4LLG2uh6amwIaX4mNhey4vhGGb6u31enyto1eJ8-eDr2K7CK6F1hAwS0SDaDSEx8qAxt_P8jidgw3uPYdLDwTzo1NBLze8aAzHOIeDOmM4eJY62tnaXVVcWs5_ScVyRyFdMKwQrzLGlZqnA7T0uZLvFLtaTGteUn6uUs_bxS-bkOwgCAn5c0-isVaIAoHZ6GsDUEZtLQ5qYBCU-V",
      demoUrl: '#',
      githubUrl: '#',
    },
  ],
  blog: [
    {
      title: 'Getting Started with React Hooks',
      date: 'October 26, 2023',
      description: 'A beginner-friendly guide to understanding and using React Hooks for state management.',
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRnJGhkUPkxqLUstXeP8Tcg3JnGBApQhJbOQ-wx5NB68s964BBZ6hFqmCr3U5lRLT3d7iqmpxU2MPzpWSQ66zHxBckCTL4Zd8m8xG0Kj9Xd7zh0judQEU2uUDGYZCuWLahHBQNU-wINWQlFiVRfktk1i30dCMDXucwQXUcFWNPA9IcypFnPvq4zZVzGL-HuLb4pSBkJuBiFkM9Gy5vCsKOLCjc3w8vRB6SYLLJgmp_OxbmDuAIyYqAB4nCEQT1LxqqWmiZfwfK",
      url: "#"
    },
    {
      title: 'Modern CSS with Tailwind',
      date: 'September 15, 2023',
      description: 'Explore how Tailwind CSS can speed up your development workflow and create modern designs.',
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHF5ysnwQhjXVdY7OPZm7KMHFYN2ade3t7pHquXyLLn_pGb4vGvMMhwYmhpC62vVT_0pzwX6xkzyslJ6p_wpV2N1_nMrkdtSApStUE1togw2WhzJir4bCHmWAKY9ONvvu-p89WEMYsfFfwblMXehxjF-oJ4zMc5G42uViSm0pt7qXLSWUgHvrRHJn53KvCgbMywzQFAJ4vwRheND6J1e3v64wwRheND6J1e3v64wwltgNldnhMKFQLblPnqE_N0kEn9t9V8cl_-m7Z7cGAYOJLKTZ",
      url: "#"
    },
    {
      title: 'Introduction to Python for Data Science',
      date: 'August 5, 2023',
      description: 'A comprehensive introduction to the Python libraries essential for data science projects.',
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUzPRhsThqXFHXD4Ch-L7ObTKs0UC_T-Fi-HeuU-JCo5GsJ0bEBKT2dR0XB_G1cxWDtNfuDG3jfvHyhv8ABZooJt_Z4Veqx6HY2-fyvyseyNHTNva1wjih-BjHq3S33A5twm3Sxx7LY3JTgTawDh-koJH1FzFOOpFoTqi7CwM0Hv5Eu0NXgpCgCv8-elneXYyj_tW-wbJ5igwAEch0gxitqPjto6rBBVfZezDO2Qz21aGEDCwul5fzNil7dezsydZ89GtO9l2V",
      url: "#"
    }
  ],
  timeline: [
    { year: '2023', title: 'Software Engineer Intern', description: 'Tech Solutions Inc. | Jun 2023 - Aug 2023' },
    { year: '2022', title: 'Freelance Web Developer', description: 'Self-Employed | Jan 2022 - Present' },
    { year: '2021', title: 'Bachelor of Science in Computer Science', description: 'University of Technology | Sep 2021 - May 2025' },
  ],
  certificates: [
    { 
      title: 'Front End Web Developer', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/front end.png',
      pdfUrl: '/sertifikat/front end.pdf' 
    },
    { 
      title: 'Structured Query Language (SQL)', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/sql.png',
      pdfUrl: '/sertifikat/dasar sql.pdf' 
    },
    { 
      title: 'Visualisasi Data', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/visualisasi data.png',
      pdfUrl: '/sertifikat/dasar visualisasi data.pdf' 
    },
    { 
      title: 'Pemrograman Web', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/pemrograman web.png',
      pdfUrl: '/sertifikat/pemrograman web.pdf' 
    },
    { 
      title: 'Pemrograman JavaScript', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/js.png',
      pdfUrl: '/sertifikat/pemrograman javascript.pdf' 
    },
    { 
      title: 'Pemrograman dengan Python', 
      issuer: 'Dicoding | 2024', 
      previewImage: '/sertifikat/pemrograman python.png',
      pdfUrl: '/sertifikat/pemrograman dengan python.pdf' }
  ],
  socials: {
    github: 'https://github.com/Dwinur01',
    linkedin: '#',
    instagram: '#',
  }
};

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const [showStatus, setShowStatus] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ganti dengan SERVICE ID dan TEMPLATE ID dari akun EmailJS Anda
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const userId = 'YOUR_USER_ID';

    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || userId === 'YOUR_USER_ID') {
        setShowStatus(true);
        setStatusMessage({ text: 'Harap konfigurasi EmailJS Anda terlebih dahulu di kode.', type: 'error' });
        setTimeout(() => setShowStatus(false), 5000);
        return;
    }

    window.emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setShowStatus(true);
        setStatusMessage({ text: 'Pesan Anda berhasil dikirim!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        setShowStatus(true);
        setStatusMessage({ text: 'Gagal mengirim pesan. Silakan coba lagi.', type: 'error' });
      });
      setTimeout(() => setShowStatus(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101722] font-display text-gray-800 dark:text-gray-200">
      <style>
        {`
        .timeline-item::before {
          content: "";
          position: absolute;
          top: 28px;
          left: 19px;
          bottom: 0;
          width: 2px;
          background-color: #d1d5db; /* gray-300 */
        }
        .timeline-item:last-child::before {
          display: none;
        }
        `}
      </style>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#3680f7]/20 bg-[#f5f7f8]/80 px-4 py-3 backdrop-blur-sm dark:bg-[#101722]/80 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 text-[#3680f7]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">portofolio</h2>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#about">About</a>
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#projects">Projects</a>
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#blog">Blog</a>
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#experience">Experience</a>
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#certifications">Certifications</a>
          <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3680f7] dark:text-gray-300 dark:hover:text-[#3680f7]" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          {/* Tombol Toggle Tema */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3680f7]/10 text-gray-700 transition-colors hover:bg-[#3680f7]/20 dark:bg-[#3680f7]/20 dark:text-gray-300 dark:hover:bg-[#3680f7]/30"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
          <a className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3680f7]/10 text-gray-700 transition-colors hover:bg-[#3680f7]/20 dark:bg-[#3680f7]/20 dark:text-gray-300 dark:hover:bg-[#3680f7]/30" href={portfolioData.socials.github}>
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
          </a>
          <a className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3680f7]/10 text-gray-700 transition-colors hover:bg-[#3680f7]/20 dark:bg-[#3680f7]/20 dark:text-gray-300 dark:hover:bg-[#3680f7]/30" href={portfolioData.socials.linkedin}>
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
          </a>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="hero" className="py-16 sm:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div 
              className="order-2 flex flex-col gap-6 text-center lg:order-1 lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Hi, I'm {portfolioData.hero.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">{portfolioData.hero.tagline}</p>
              <a href="#projects" className="w-full self-center rounded-lg bg-[#3680f7] px-6 py-3 text-center text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto lg:self-start">
                View Projects
              </a>
            </motion.div>
            <motion.div
              className="order-1 h-80 w-80 justify-self-center rounded-full bg-cover bg-center bg-no-repeat shadow-xl lg:order-2 lg:h-96 lg:w-96"
              style={{ backgroundImage: `url("${portfolioData.hero.photo}")` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>
        </section>
        
        <div className="space-y-16 sm:space-y-24">
          {/* About Me Section */}
          <section id="about" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">{portfolioData.about.description}</p>
            <div className="mt-10">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">My Skills</h3>
              <motion.div 
                className="flex flex-wrap justify-center gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[...portfolioData.about.hardSkills, ...portfolioData.about.softSkills].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="rounded-lg bg-[#3680f7]/10 px-4 py-2 text-sm font-medium text-[#3680f7] dark:bg-[#3680f7]/20 dark:text-[#3680f7]"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800/50"
                  whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${project.screenshot}")` }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Blog Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.blog.map((post, index) => (
                <motion.div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800/50"
                  whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img alt={`Blog post thumbnail for ${post.title}`} className="h-48 w-full object-cover" src={post.thumbnail} />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.description}</p>
                    <a className="mt-4 inline-block text-sm font-medium text-[#3680f7] hover:underline" href={post.url}>Read More →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience & Education Section */}
          <section id="experience" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Experience & Education</h2>
            <div className="relative mx-auto max-w-2xl">
              {portfolioData.timeline.map((item, index) => (
                <div key={index} className="timeline-item relative grid grid-cols-[40px_1fr] gap-x-4 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3680f7] text-white">
                      <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,72H184V48a16,16,0,0,0-16-16H88A16,16,0,0,0,72,48v24H32A16,16,0,0,0,16,88v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V88A16,16,0,0,0,224,72ZM88,48H168V72H88ZM224,184H32V88H72v16a8,8,0,0,0,16,0V88H168v16a8,8,0,0,0,16,0V88h40Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col pt-1">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates & Achievements Section */}
          <section id="certifications" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Certifications</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.certificates.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.pdfUrl}
                  target="_blank"    
                  rel="noopener noreferrer"
                >
                  <motion.div 
                    className="group h-full overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800/50"
                    whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={cert.previewImage} // Menampilkan gambar pratinjau
                      alt={`Certificate for ${cert.title}`} 
                      className="h-48 w-full object-cover"
                      // Fallback jika gambar gagal dimuat
                      onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/300x200?text=Certificate+Preview"; }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Me</h2>
            {showStatus && (
                <div
                    className={`p-4 rounded-lg text-center mb-6 transition-all duration-500 ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                    {statusMessage.text}
                </div>
            )}
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-[#3680f7] focus:ring-[#3680f7] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#3680f7] dark:focus:ring-[#3680f7]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-[#3680f7] focus:ring-[#3680f7] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#3680f7] dark:focus:ring-[#3680f7]"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-[#3680f7] focus:ring-[#3680f7] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#3680f7] dark:focus:ring-[#3680f7]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#3680f7] px-6 py-3 text-center text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#3680f7]/20 bg-[#f5f7f8] dark:bg-[#101722]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-10">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 {portfolioData.hero.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a className="text-gray-500 hover:text-[#3680f7] dark:text-gray-400 dark:hover:text-[#3680f7]" href={portfolioData.socials.github}>
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
            </a>
            <a className="text-gray-500 hover:text-[#3680f7] dark:text-gray-400 dark:hover:text-[#3680f7]" href={portfolioData.socials.linkedin}>
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
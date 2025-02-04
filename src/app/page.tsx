"use client";

import React, { useState, useEffect } from 'react';
import { BackgroundBeamsDemo, } from './components/preview/background-beams-demo';
import Navbar from './components/preview/navbar';
import AboutSection from './components/preview/about-section';
import { TimelineDemo } from './components/preview/timeline';
import ProjectShowcaseGrid from './components/preview/projects';
import BlogGrid from './components/preview/blogs';
import SecurityReportGrid from './components/preview/reports';
import Footer from "./components/preview/footer";

const RoleDisplay = ({ onComplete }) => {
  const roles = ["Software Engineer", "Technical Writer", "Community Builder"];
  const [visibleRoles, setVisibleRoles] = useState([]);
  
  useEffect(() => {
    roles.forEach((_, index) => {
      setTimeout(() => {
        setVisibleRoles(prev => [...prev, roles[index]]);
        
        if (index === roles.length - 1) {
          setTimeout(() => {
            onComplete();
          }, 1500);
        }
      }, 1000 * (index + 1));
    });
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-row space-x-8 px-4 flex-wrap justify-center">
        {roles.map((role) => (
          <div
            key={role}
            className={`
              transition-all duration-1000
              transform
              ${visibleRoles.includes(role) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'}
              text-2xl md:text-3xl lg:text-4xl
              font-bold tracking-wider
              mb-4 md:mb-0
              bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500
              bg-clip-text text-transparent
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            `}
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="relative">
      <div
        className={`
          transition-opacity duration-1000
          ${showMainContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          absolute inset-0 z-10
        `}
      >
        <RoleDisplay onComplete={() => setShowMainContent(true)} />
      </div>
      
      <div
        className={`
          transition-opacity duration-1000
          ${showMainContent ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Navbar />
        <BackgroundBeamsDemo />
        <AboutSection/>
        <TimelineDemo/>
        <ProjectShowcaseGrid/>
        <BlogGrid/>
        <SecurityReportGrid/>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
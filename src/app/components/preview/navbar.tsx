import React, { useState, useEffect } from 'react';

const Navbar = ({ 
  onAboutClick, 
  onTimelineClick, 
  onProjectsClick, 
  onBlogsClick, 
  onReportsClick, 
  onContactClick 
}) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down or up
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show the navbar
        setShowNavbar(true);
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="px-6 py-3 rounded-2xl bg-black/30 backdrop-blur-md border border-gray-800">
        <ul className="flex items-center gap-8">
          <li>
            <button onClick={onAboutClick} className="text-gray-300 hover:text-white">About</button>
          </li>
          <li>
            <button onClick={onTimelineClick} className="text-gray-300 hover:text-white">Experience</button>
          </li>
          <li>
            <button onClick={onProjectsClick} className="text-gray-300 hover:text-white">Projects</button>
          </li>
          <li>
            <button onClick={onBlogsClick} className="text-gray-300 hover:text-white">Blogs</button>
          </li>
          <li>
            <button onClick={onReportsClick} className="text-gray-300 hover:text-white">Reports</button>
          </li>
          <li>
            <button onClick={onContactClick} className="text-gray-300 hover:text-white">Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAboutClick: () => void;
  onTimelineClick: () => void;
  onProjectsClick: () => void;
  onBlogsClick: () => void;
  onReportsClick: () => void;
  onContactClick: () => void;
}

const Navbar = ({
  onAboutClick,
  onTimelineClick,
  onProjectsClick,
  onBlogsClick,
  onReportsClick,
  onContactClick
}: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { label: 'About', onClick: onAboutClick },
    { label: 'Experience', onClick: onTimelineClick },
    { label: 'Projects', onClick: onProjectsClick },
    { label: 'Blogs', onClick: onBlogsClick },
    { label: 'Reports', onClick: onReportsClick },
    { label: 'Contact', onClick: onContactClick },
  ];

  const handleItemClick = (onClick: () => void) => {
    setIsMobileMenuOpen(false);
    onClick();
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
        showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="px-4 md:px-6 py-3 rounded-2xl bg-black/30 backdrop-blur-md border border-gray-800">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => item.onClick()}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-gray-300">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleItemClick(item.onClick)}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

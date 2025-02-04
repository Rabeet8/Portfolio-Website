import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About');
  
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="px-6 py-3 rounded-2xl bg-black/30 backdrop-blur-md border border-gray-800">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveItem(item)}
                className={`
                  relative px-2 py-1
                  transition-all duration-300
                  ${activeItem === item 
                    ? 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent'
                    : 'text-gray-400 hover:text-gray-200'}
                  font-medium text-sm tracking-wide
                `}
                style={{
                  WebkitBackgroundClip: activeItem === item ? 'text' : 'unset',
                  WebkitTextFillColor: activeItem === item ? 'transparent' : 'unset'
                }}
              >
                {item}
                {activeItem === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
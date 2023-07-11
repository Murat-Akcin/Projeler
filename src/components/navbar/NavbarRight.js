import React from 'react';
import About from '../About';
import HomePage from '../HomePage';
import Roadmap from '../Roadmap';
import Tokenomics from '../Tokenomics';
import Game from '../Game';
import Faq from '../Faq';
import Contact from '../Contact';
import HowToBuy from '../HowToBuy';
import { useState } from 'react';

const NavbarRight = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const [click, setClick] = useState(false);
  return (
    <div className="!flex p-3 text-sm font-semibold py-3 px-1 space-x-9 text-white cursor-pointer ">
      <span
        className={`relative inline-block ${
          activeIndex === 0 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <HomePage />

        {activeIndex === 0 && (
          <span className=" absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200 ml-1"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 1 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <HowToBuy />

        {activeIndex === 1 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 2 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <About />
        {activeIndex === 2 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 3 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <Roadmap />
        {activeIndex === 3 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 4 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <Tokenomics />
        {activeIndex === 4 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 5 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
      >
        <Game />
        {activeIndex === 5 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 6 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={handleMouseLeave}
      >
        <Faq />
        {activeIndex === 6 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>

      <span
        className={`relative inline-block ${
          activeIndex === 7 ? 'text-gray-400' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}
      >
        <Contact />
        {activeIndex === 7 && (
          <span className="absolute w-full h-0.5 bg-gray-400 bottom-0 left-0 transform -translate-y-2 transition-all duration-200"></span>
        )}
      </span>
    </div>
  );
};

export default NavbarRight;

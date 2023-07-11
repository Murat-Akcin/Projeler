import React from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Navbar = () => {
  return (
    <div className="flex">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;

import React from 'react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';

const Header = () => {
  return (
    <header
      id="page-header"
      className="z-1 flex flex-none items-center bg-white shadow-sm"
    >
      <div className="container px-4 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-4">
          <Logo />
          <DesktopMenu />
        </div>
      </div>

    </header>
  );
};

export default Header;

'use client';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import Hamburger from './Hamburger';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header
      id="page-header"
      className="z-1 flex flex-none items-center bg-white shadow-sm"
    >
      <div className="container px-4 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-4">
          <Logo />
          <DesktopMenu>
            <Hamburger setIsMobileNavOpen={setIsMobileNavOpen} />
          </DesktopMenu>
        </div>
        <MobileMenu isMobileNavOpen={isMobileNavOpen} />
      </div>

    </header>
  );
};

export default Header;

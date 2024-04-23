import Link from 'next/link';
import { PropsWithChildren } from 'react';

type MenuLinkProps = {
  href: string;
};

const MenuLink = ({ href, children }: PropsWithChildren<MenuLinkProps>) => {
  return (
    <li className='align-middle'>
      <Link href={href} className='text-center px-4 leading-10 h-full block text-base'>{children}</Link>
    </li>
  );
};

const DesktopMenu = () => {
  return (
    <ul className='flex items-strech gap-4 px-4 h-10 xl:ml-7  lg:justify-center'>
      <MenuLink href="/products">Products</MenuLink>
      <MenuLink href="/about-us">About Us</MenuLink>
      <MenuLink href="/contact">Contact</MenuLink>
    </ul>
  );
};

export default DesktopMenu;

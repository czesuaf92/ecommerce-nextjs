import Image from 'next/image';
import Link from 'next/link';
import DesktopMenu from './DesktopMenu';
import Search from './Search';
import AdditionalMenu from './AdditionalMenu';


const Header = () => {
  return (
    <header className='lg:container bg-white px-2 lg:px-4 lg:py-4 py-2'>
      <nav className='flex items-center'>
        <Link href="/">
          <Image src="https://placehold.co/160x62" alt="logo" width={160} height={62} />
        </Link>

        <DesktopMenu />
        <Search />
        <AdditionalMenu />
      </nav>
    </header>
  );
};

export default Header;

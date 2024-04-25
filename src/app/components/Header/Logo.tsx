import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { GiCandlebright } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-orange-600">
        <GiCandlebright className='size-8 text-gray-900 group-hover:text-orange-600 transition-all' />
        <span className='text-gray-900'>CandleShop</span>
      </Link>
    </div>
  );
};

export default Logo;

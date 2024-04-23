import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  return (
    <div className='flex-auto relative lg:mr-4 max-w-xl ml-auto'>
      <IoSearchOutline className="absolute size-8 left-4 text-gray-400 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder='Search for products...'
        className='bg-gray-100 h-14 pl-16 pr-2 rounded-full w-full'
      />
    </div>
  );
};

export default Search;

import { Dispatch, SetStateAction } from 'react';
import { HiMenu } from 'react-icons/hi';

type HamburgerProps = {
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ setIsMobileNavOpen }: HamburgerProps) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
      >
        <HiMenu className='inline-block size-5' />
      </button>
    </div>
  );
};

export default Hamburger;

import Link from 'next/link';
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const AdditionalMenu = () => {
  return (
    <ul className='flex items-center gap-2'>
      <li>
        <Link href="/cart" className='block p-2' aria-label="Cart">
          <IoCartOutline className='size-8' />
        </Link>
      </li>
      <li>
        <Link href="/profile" className='block p-2' aria-label='Profile'>
          <IoPersonOutline className='size-8' />
        </Link>
      </li>
    </ul>
  );
};

export default AdditionalMenu;

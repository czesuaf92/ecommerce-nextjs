import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_MENU_ITEMS, MenuItemProps } from './menuItems';

const mobileMenuItemStyles = cva("group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 active:border-orange-100", {
  variants: {
    active: {
      true: "text-orange-600 border-orange-50 bg-orange-50",
    }
  }
});

const MobileMenuItem = ({ href, label, Icon }: MenuItemProps) => {
  const currentPathname = usePathname();
  const isActive = currentPathname === href;

  return (
    <li>
      <Link
        href={href}
        className={mobileMenuItemStyles({ active: isActive })}
      >
        {Icon ? <Icon className='inline-block size-4' /> : <div className="size-4" />}
        <span>{label}</span>
      </Link>
    </li >
  );
};

type MobileMenuProps = {
  isMobileNavOpen: boolean;
};

const MobileMenu = ({ isMobileNavOpen }: MobileMenuProps) => {
  return (
    <div className={`lg:hidden ${isMobileNavOpen ? "" : "hidden"}`}>
      <nav className="border-t border-gray-200 py-4">
        <ul className='flex flex-col gap-2'>
          {
            MAIN_MENU_ITEMS.map(({ href, label, Icon }) => (
              <MobileMenuItem href={href} label={label} key={label} Icon={Icon} />
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

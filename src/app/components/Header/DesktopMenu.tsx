
'use client';
import { MAIN_MENU_ITEMS } from './menuItems';
import UserMenu from './UserMenu';

import { usePathname } from "next/navigation";
import { MenuItemProps } from "./menuItems";
import Link from "next/link";
import { cva } from "class-variance-authority";

const desktopMenuItemStyles = cva("group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium hover:bg-orange-50 hover:text-orange-600 active:border-orange-100", {
  variants: {
    active: {
      true: "text-orange-600 bg-orange-50 border-orange-100",
      false: "text-gray-800"
    },
  }
});

const DesktopMenuItem = ({ href, label, Icon }: MenuItemProps) => {
  const currentPathname = usePathname();
  const isActive = currentPathname === href;
  return (
    <li>
      <Link
        href={href}
        className={desktopMenuItemStyles({ active: isActive })}
      >
        {Icon && <Icon className='size-4' />}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const DesktopMenu = () => {
  return (
    <div className="flex items-center gap-2 lg:gap-5">
      <nav className="hidden items-center gap-2 lg:flex">
        <ul className='items-center gap-2 lg:flex'>
          {
            MAIN_MENU_ITEMS.map(({ href, label, Icon }) => (
              <DesktopMenuItem href={href} label={label} key={label} Icon={Icon} />
            ))
          }
        </ul>
      </nav>
      <UserMenu />
    </div>
  );
};

export default DesktopMenu;

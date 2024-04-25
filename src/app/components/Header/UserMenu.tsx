'use client';
import { Menu, Transition } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiMiniChevronDown, HiMiniCog6Tooth, HiMiniFlag, HiMiniInbox, HiMiniLockClosed, HiMiniUserCircle } from "react-icons/hi2";

import { MenuItemProps } from './menuItems';

interface UserMenuItemProps extends MenuItemProps {
  counter?: number;
}

const userMenuItemStyles = cva("group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium", {
  variants: {
    active: {
      true: "bg-orange-50 text-orange-800",
      false: "text-gray-700 hover:bg-orange-50 hover:text-orange-800 active:border-orange-100"
    }
  }
});

const UserMenuItem = ({ href, label, Icon, counter }: UserMenuItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={href}
          className={userMenuItemStyles({ active })}
        >
          <>
            {Icon && <Icon className='inline-block size-5 flex-none opacity-25 group-hover:opacity-50' />}
            <span className="grow">{label}</span>
            {
              counter && (
                <div className="inline-flex rounded-full border border-orange-200 bg-orange-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-orange-700">
                  {counter}
                </div>
              )
            }
          </>
        </Link>
      )}
    </Menu.Item>
  );
};

const UserMenu = () => {
  return (
    <Menu as="div" className="relative inline-block">

      <Menu.Button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none">
        <span>John</span>
        <HiMiniChevronDown className="inline-block size-5 opacity-40" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg shadow-xl focus:outline-none ">
          <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 ">
            <div className="space-y-1 p-2.5">
              <UserMenuItem
                href="/inbox"
                label="Wiadomości"
                Icon={HiMiniInbox}
                counter={2}
              />
              <UserMenuItem
                href="/notifications"
                label="Powiadomienia"
                Icon={HiMiniFlag}
                counter={5}
              />
            </div>
            <div className="space-y-1 p-2.5">
              <UserMenuItem
                href="/profile"
                label="Profil"
                Icon={HiMiniUserCircle}
              />
              <UserMenuItem
                href="/profile/settings"
                label="Ustawienia"
                Icon={HiMiniCog6Tooth}
              />
            </div>
            <div className="space-y-1 p-2.5">
              <UserMenuItem
                href="/logout"
                label="Wyloguj"
                Icon={HiMiniLockClosed}
              />
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;

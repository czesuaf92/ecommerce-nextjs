'use client';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MenuItemProps } from './menuItems';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { HiMiniInbox, HiMiniFlag, HiMiniUserCircle, HiMiniCog6Tooth, HiMiniLockClosed } from "react-icons/hi2";

interface UserMenuItemProps extends MenuItemProps {
  counter?: number;
}

const userMenuItemStyles = cva("group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium", {
  variants: {
    active: {
      true: "bg-blue-50 text-blue-800",
      false: "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100"
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
                <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700">
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
        <svg
          className="hi-mini hi-chevron-down inline-block size-5 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
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

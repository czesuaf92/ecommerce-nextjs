import { IconType } from "react-icons";
import { HiMiniShoppingCart } from "react-icons/hi2";

export interface MenuItemProps {
  href: string;
  label: string;
  Icon?: IconType;
};

export const MAIN_MENU_ITEMS: MenuItemProps[] = [
  {
    href: "/products",
    label: "Produkty",
  },
  {
    href: '/about-us',
    label: 'O nas',
  },
  {
    href: '/contact',
    label: 'Kontakt',
  },
  {
    href: '/cart',
    label: 'Koszyk',
    Icon: HiMiniShoppingCart
  }
];

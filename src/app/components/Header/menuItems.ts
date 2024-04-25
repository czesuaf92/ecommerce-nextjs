import { IconType } from "react-icons";
import { GiCandlebright } from "react-icons/gi";
import { HiMiniShoppingCart } from "react-icons/hi2";

export type MenuItemProps = {
  href: string;
  label: string;
  Icon?: IconType;
};

export const MAIN_MENU_ITEMS: MenuItemProps[] = [
  {
    href: "/products",
    label: "Świeczki",
    Icon: GiCandlebright
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

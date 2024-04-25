import Link from "next/link";
import { HiHeart } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer
      id="page-footer"
      className="flex flex-none items-center bg-white"
    >
      <div className="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8 xl:max-w-7xl">
        <div className="pb-1 pt-4 md:pb-4">
          <Link
            href="https://candleshop.com"
            className="font-medium text-orange-600 hover:text-orange-400"
            target="_blank"
          >
            CandleShop
          </Link>{" "}
          ©
        </div>
        <div className="inline-flex items-center justify-center pb-4 pt-1 md:pt-4">
          <span>Crafted with</span>
          <HiHeart className="mx-1 inline-block size-4 text-red-600" />
          <span>
            {" "}
            by{" "}
            <Link
              href="https://github.com/czesuaf92"
              className="font-medium text-orange-600 hover:text-orange-400"
              target="_blank"
            >
              czesuaf92
            </Link>
          </span>
        </div>
      </div>
    </footer >

  );
};

export default Footer;


import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = () => {
  return (
    <>
      {/* Pagination: Simple */}
      <div className="text-center">
        {/* Visible on mobile */}
        <nav className="flex sm:hidden">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none"
          >
            <HiChevronLeft className="-mx-1.5 inline-block size-5" />
          </a>
          <div className="flex grow items-center justify-center px-2 sm:px-4">
            <span>
              Page <span className="font-semibold">2</span> of
              <span className="font-semibold">20</span>
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none "
          >
            <HiChevronRight className="-mx-1.5 inline-block size-5" />
          </a>
        </nav>
        {/* END Visible on mobile */}

        {/* Visible on desktop */}
        <nav className="hidden sm:inline-flex">
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 rounded-l-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none "
          >
            <HiChevronLeft className="-mx-1.5 inline-block size-5" />
          </a>
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none  "
          >
            1
          </a>
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 border border-gray-200 bg-gray-100 px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none  "
          >
            2
          </a>
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none  "
          >
            3
          </a>
          <div className="-mr-px flex items-center justify-center border border-gray-200 bg-white px-4 text-gray-800 ">
            ...
          </div>
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none "
          >
            19
          </a>
          <a
            href="#"
            className="-mr-px inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none "
          >
            20
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-r-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300/25 active:z-1 active:border-gray-200 active:shadow-none "
          >
            <HiChevronRight className="-mx-1.5 inline-block size-5" />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Pagination;

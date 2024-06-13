import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="z-10 flex items-center justify-between w-full p-6 bg-gray-800 navbar">
      <div className="items-center flex-1 px-2 mx-2">
        <Link
          href="/"
          className="font-serif font-bold text-justify text-white "
        >
          Fernando Aponte
        </Link>
      </div>

      <div className="items-center flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <Link
              href="/about"
              className={
                router.pathname == "/about"
                  ? " text-white font-medium btn btn-neutral"
                  : " text-white font-medium  btn btn-ghost "
              }
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/portfolio"
              className={
                router.pathname == "/portfolio"
                  ? " text-white font-medium btn btn-neutral"
                  : " text-white font-medium  btn btn-ghost "
              }
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={
                router.pathname == "/contact"
                  ? " text-white font-medium btn btn-neutral"
                  : " text-white font-medium  btn btn-ghost "
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 text-white stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

import Link from "next/link";
import { useRouter } from 'next/router';

export const Navbar = () => {
 
  const router = useRouter();
 
  return( 
    <div className="bg-gray-800 p-6 flex items-center justify-between navbar w-full z-10">
      <div className="flex-1 px-2 mx-2 items-center">
          <Link href="/" className="text-white font-bold font-serif text-justify " >
            Fernando Aponte
          </Link>
      </div>

      <div className="flex-none items-center hidden lg:block">
      <ul className="menu menu-horizontal">
        
      <li><Link href="/about" className={router.pathname == "/about" ? " text-white font-medium btn btn-neutral" : " text-white font-medium  btn btn-ghost "}>
        About
        </Link></li>
        
        <li><Link href="/coming_soon" className={router.pathname == "/coming_soon" ? " text-white font-medium btn btn-neutral" : " text-white font-medium  btn btn-ghost "}>
        Portfolio
        </Link></li>
        
        <li><Link href="/contact" className={router.pathname == "/contact" ? " text-white font-medium btn btn-neutral" : " text-white font-medium  btn btn-ghost "}>
        Contact
        </Link></li>
        </ul>
      </div>

      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    </div>
    );
  }
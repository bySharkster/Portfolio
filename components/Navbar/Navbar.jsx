import Link from "next/link";

export const Navbar = () => {
   return( 
    <nav className="bg-gray-800 p-6 flex items-center- justify-between">
      <div className="flex items-center">
          <Link href="/" className="text-white font-bold font-serif text-justify " >
            Fernando Aponte
          </Link>
      </div>
      <div className="flex items-center">
        <Link href="/about" className="text-white font-medium mr-4">
         About
        </Link>
        <Link href="/portfolio" className="text-white font-medium mr-4">
        Portfolio</Link>
        <Link href="/contact" className="text-white font-medium mr-4">
        Contact
        </Link>
      </div>
    </nav>
    );
  }
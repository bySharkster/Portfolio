import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export const Layout = ({ children }) => {

    const router = useRouter();

    return (
        <div className="drawer drawer-end text-neutral ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">

            <Navbar />
            {children}
            <Footer />

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-neutral">
                    <li><Link href="/" className={router.pathname == "/" ? " text-accent font-medium bg-gray-300 " : " text-accent font-medium "}>
                    Home</Link></li>
                    <hr className="mt-2 mb-2"/>
                    <li><Link href="/about" className={router.pathname == "/about" ? " text-accent font-medium bg-gray-300 " : " text-accent font-medium "}>
                    About</Link></li>
                    <li><Link href="/coming_soon" className={router.pathname == "/coming_soon" ? " text-accent font-medium bg-gray-300 " : " text-accent font-medium "}>
                    Portfolio</Link></li>
                    <li><Link href="/contact" className={router.pathname == "/contact" ? " text-accent font-medium bg-gray-300 " : " text-accent font-medium "}>
                    Contact
                    </Link></li>
                </ul>

            </div>
        </div>

    );
    }


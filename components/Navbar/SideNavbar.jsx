import Link from "next/link";
import { navPaths } from "@/config";
import { useRouter } from "next/router";

export default function SideNavbar() {
  const router = useRouter();

  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="p-4 w-60 sm:w-80 lg:hidden menu bg-neutral">
        {navPaths.map((navPath) => (
          <li key={navPath}>
            <Link
              href={navPath.url}
              className={`text-accent font-medium capitalize ${
                router.pathname === navPath.url ? " bg-gray-300" : ""
              }`}
            >
              {navPath.url === "/" ? "Home" : navPath.url.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Navbar } from "../Navbar/Navbar";
import SideNavbar from "../Navbar/SideNavbar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="drawer drawer-end text-neutral ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="flex flex-col drawer-content">
        <Navbar />
        {children}
        <Footer />
      </div>
      <SideNavbar />
    </div>
  );
};

import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function HeaderTop() {
  // handle show menu
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  //   sticky navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div
        className={`${
          sticky ? "fixed top-0 z-[9999] bg-white" : "bg-transparent"
        }  w-full shadow-sm shadow-border-color my-transition`}
      >
        {/* navbar */}
        <nav className="container py-3 flex justify-between items-center">
          {/* humberger menu */}
          <button
            onClick={handleShowMenu}
            className="p-2 rounded-md  border border-border-color bg-white "
          >
            <RiMenu2Fill className="font-bold text-black"></RiMenu2Fill>
          </button>

          {/* mobile menu */}
          <MobileMenu showMenu={showMenu}></MobileMenu>

          {/* desktop menu */}
          <DesktopMenu></DesktopMenu>

          {/* contact number */}
          <div className="text-[15px] flex items-center gap-2">
            <FaPhone></FaPhone> <p>+8801830143234</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderTop;

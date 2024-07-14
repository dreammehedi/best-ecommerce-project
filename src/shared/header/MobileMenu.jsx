import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import menuData from "./MenuData";

function MobileMenu({ showMenu }) {
  return (
    <>
      <ul
        className={`${
          showMenu ? "right-0" : "-right-full"
        } my-transition w-2/3 md:w-1/3 h-screen z-[999] fixed top-0 bg-white shadow-sm shadow-border-color p-10 flex flex-col text-sm  justify-start items-start gap-4 md:gap-6 lg:gap-8 font-medium text-black`}
      >
        {menuData?.map((menu, ind) => {
          return (
            <li key={ind} className="flex justify-center items-center gap-2">
              <NavLink to={menu?.path}>{menu?.name}</NavLink>
              {menu?.icon}
            </li>
          );
        })}
      </ul>
    </>
  );
}

MobileMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default MobileMenu;

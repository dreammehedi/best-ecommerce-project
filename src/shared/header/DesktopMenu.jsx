import { NavLink } from "react-router-dom";
import menuData from "./MenuData";

function DesktopMenu() {
  return (
    <>
      <ul className="hidden lg:flex text-sm  justify-center items-center gap-4 md:gap-6 lg:gap-8 font-medium text-black">
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

export default DesktopMenu;

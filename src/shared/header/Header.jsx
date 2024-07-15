import { useLocation } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {/* header */}
      <header className="bg-white">
        {/* header top */}
        <HeaderTop></HeaderTop>

        {/* header bottom */}
        <HeaderBottom></HeaderBottom>
        {/* breadcrumbs */}
        {pathname === "/" ? null : <Breadcrumbs></Breadcrumbs>}
      </header>
    </>
  );
}

export default Header;

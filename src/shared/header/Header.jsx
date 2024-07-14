import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <>
      {/* header */}
      <header className="bg-white">
        {/* header top */}
        <HeaderTop></HeaderTop>

        {/* header bottom */}
        <HeaderBottom></HeaderBottom>
      </header>
    </>
  );
}

export default Header;

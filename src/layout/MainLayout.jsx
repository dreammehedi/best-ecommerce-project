import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
function MainLayout() {
  return (
    <>
      {/* header */}
      <Header></Header>
      {/* main content */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default MainLayout;

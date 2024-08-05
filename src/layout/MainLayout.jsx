import { Outlet } from "react-router-dom";
import useUserData from "../hooks/user/useUserData";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
import Loader from "../shared/loader/Loader";
function MainLayout() {
  const { userLoader } = useUserData();

  if (userLoader) {
    return <Loader></Loader>;
  }
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

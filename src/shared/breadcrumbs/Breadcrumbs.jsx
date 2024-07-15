import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const { pathname } = useLocation();
  const currentLocation = pathname.split("/");

  return (
    <>
      {/* breadcrumbs */}
      <section className="bg-orange-f5">
        <div className="container flex justify-between items-center py-5 text-white font-medium capitalize">
          <h3 className="capitalize">{currentLocation}</h3>
          <h3>Home - {currentLocation}</h3>
        </div>
      </section>
    </>
  );
}

export default Breadcrumbs;

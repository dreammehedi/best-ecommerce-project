import { Link } from "react-router-dom";
const companyMenuData = [
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Delivery Information",
    path: "#",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms-and-conditions",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    name: "Support Center",
    path: "/support-center",
  },
];

function Company() {
  return (
    <>
      <div>
        <h3 className="mb-4 font-bold text-black text-[18px]">Company</h3>

        <ul className="flex flex-col space-y-3 text-sm text-gray-77">
          {companyMenuData?.map((menu, ind) => {
            return (
              <li key={ind}>
                <Link
                  className="my-transition hover:!text-orange-f5 hover:pl-2 capitalize"
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Company;

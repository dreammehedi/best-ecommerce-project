import { CiHeart, CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import useUserData from "./../../hooks/user/useUserData";
import FoodTroveLogo from "./../logo/FoodTroveLogo";

function HeaderBottom() {
  const { user } = useUserData();
  console.log(user);

  return (
    <>
      <div className="border-b border-border-color">
        {/* secondary menu */}
        <div className="container py-6 flex justify-between items-center">
          {/* logo */}
          <Link to={"/"}>
            <FoodTroveLogo></FoodTroveLogo>
          </Link>

          {/* search form */}
          <form className="hidden lg:inline-block w-[50%] relative overflow-hidden">
            {/* search form */}
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full rounded-md border border-[#64B496] outline-none px-4 py-3 bg-white placeholder:text-sm text-gray-7a text-sm"
            />
            {/* category select option */}
            <select
              name="category"
              id="category"
              className="text-sm text-black outline-none border-none absolute top-1/2 -translate-y-1/2 right-12 bg-white pr-4"
            >
              <option value="All Category">All Category</option>
              <option value="Dairy & Bakery">Dairy & Bakery</option>
              <option value="Fruits & Vegetable">Fruits & Vegetable</option>
              <option value="Snack & Spice">Snack & Spice</option>
              <option value="Juice & Drinks">Juice & Drinks</option>
              <option value="Chicken & Meat">Chicken & Meat</option>
              <option value="Fast Food">Fast Food</option>
            </select>
            {/* search button */}
            <button
              type="submit"
              className="bg-orange-f5 text-white rounded-tr-md rounded-br-md p-4 absolute top-1/2 right-0 -translate-y-1/2 "
            >
              <FaSearch></FaSearch>
            </button>
          </form>

          {/* cart info */}
          <ul className="flex justify-end items-center gap-4 md:gap-6 lg:gap-8">
            {user ? (
              <li className="font-bold text-black-2b">
                {user.firstName} {user.lastName}
              </li>
            ) : (
              <li>
                <Link
                  to={"/login"}
                  className="flex items-center gap-1 font-medium"
                >
                  <CiUser className="font-bold text-black text-xl"></CiUser>{" "}
                  Account
                </Link>
              </li>
            )}

            <li className="hidden md:inline-block">
              <Link
                to={"/wishing"}
                className="flex items-center gap-1 font-medium"
              >
                <CiHeart className="font-bold text-black text-xl"></CiHeart>{" "}
                Wishing
              </Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                className="flex items-center gap-1 font-medium"
              >
                <FiShoppingCart className="font-bold text-black text-xl"></FiShoppingCart>{" "}
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;

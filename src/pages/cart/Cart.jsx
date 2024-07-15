import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import PagesSectionTitle from "../../shared/pages_section_title/PagesSectionTitle";
import PopularProducts from "../home/popular_products/PopularProducts";
import ShopNowBtn from "./../../shared/button/ShopNowBtn";

function Cart() {
  return (
    <>
      {/* cart */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container">
          {/* all cart table */}
          <table className="w-full h-auto border border-border-color rounded-md overflow-hidden">
            {/* table head */}
            <thead className="bg-[#E9E9E9]">
              <tr className="*:py-4 *:px-4 *:font-semibold *:text-gray-44 *:capitalize text-left">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody className="bg-[#F7F7F8]">
              <tr className="*:p-4">
                <td className="text-gray-44 text-sm">
                  <div className="flex justify-start items-center gap-3">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product"
                      className="border border-border-color size-[60px] object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-44">
                        Product Name
                      </h3>
                    </div>
                  </div>
                </td>
                <td>$56.00</td>
                <td className="">
                  <div className="max-w-[150px] relative bg-white rounded-md border border-border-color px-6 py-2 flex justify-between items-center">
                    {/* increment */}
                    <FaPlus className="text-sm text-gray-44"></FaPlus>
                    <span className="text-sm text-gray-44 font-medium">10</span>
                    {/* decrement */}
                    <FaMinus className="text-sm text-gray-44"></FaMinus>
                  </div>
                </td>
                <td>$56.00</td>
                <td>
                  <button>
                    <MdOutlineDeleteSweep className="text-2xl text-gray-44"></MdOutlineDeleteSweep>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* table foot */}
          <div className="pt-3 lg:pt-4 w-full flex justify-between items-center">
            <Link
              className="font-medium underline text-gray-44 text-sm"
              to={"/"}
            >
              Continue Shoping
            </Link>
            <Link to={"/checkout"}>
              <ShopNowBtn name="Check Out"></ShopNowBtn>
            </Link>
          </div>

          {/* popular product in cart */}
          <div className="py-10 md:py-12 lg:py-16">
            <PagesSectionTitle></PagesSectionTitle>
            <PopularProducts></PopularProducts>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

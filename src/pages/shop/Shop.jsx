import { FaStar, FaTableCells, FaTableList } from "react-icons/fa6";
import ProductLeft from "../../shared/product_left/ProductLeft";

function Shop() {
  return (
    <>
      {/* shop */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {/* shop left */}
          <ProductLeft></ProductLeft>
          {/* shop right */}
          <div className="lg:col-span-9 h-fit">
            {/* shop right head */}
            <div className="bg-[#F7F7F8] rounded-md flex flex-col md:flex-row gap-2 justify-between items-center px-4 py-2">
              <div className="flex items-center gap-2">
                <button className="p-2 bg-orange-f5 rounded-md">
                  <FaTableCells className="text-white"></FaTableCells>
                </button>
                <button className="p-2 bg-white rounded-md">
                  <FaTableList className="text-black-2b"></FaTableList>
                </button>

                <p className="text-sm text-gray-7a ml-3">
                  We found 29 items for you!
                </p>
              </div>
              <div className="rounded-md px-4 py-2 bg-white border border-border-color space-x-2">
                <button className=" text-gray-7a text-sm">Sort By: </button>
                <select
                  className="text-sm text-gray-7a bg-transparent outline-none"
                  name="sortBy"
                  id="sortBy"
                >
                  <option value="">Featured</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>

            {/* popular products */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-md overflow-hidden p-4 md:p-6 relative border border-border-color">
                <div className="w-full ">
                  {/* image */}
                  <img
                    className="w-full h-[250px] object-fill"
                    src="df"
                    alt=""
                  />

                  {/* cart information */}
                  <div className="pt-4 md:pt-6 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="font-lato text-[#ADADAD]">Vegetables</span>
                    <div className="flex items-center justify-start gap-2 text-sm">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>
                    <h1 className="font-medium text-black-2b">
                      Fresh organic villa farm lomon 500gm pack
                    </h1>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-orange-f5 font-bold">
                        $120.25
                        <del className="font-semibold text-sm text-gray-b6 ml-2">
                          $123.25
                        </del>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md overflow-hidden p-4 md:p-6 relative border border-border-color">
                <div className="w-full ">
                  {/* image */}
                  <img
                    className="w-full h-[250px] object-fill"
                    src="df"
                    alt=""
                  />

                  {/* cart information */}
                  <div className="pt-4 md:pt-6 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="font-lato text-[#ADADAD]">Vegetables</span>
                    <div className="flex items-center justify-start gap-2 text-sm">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>
                    <h1 className="font-medium text-black-2b">
                      Fresh organic villa farm lomon 500gm pack
                    </h1>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-orange-f5 font-bold">
                        $120.25
                        <del className="font-semibold text-sm text-gray-b6 ml-2">
                          $123.25
                        </del>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md overflow-hidden p-4 md:p-6 relative border border-border-color">
                <div className="w-full ">
                  {/* image */}
                  <img
                    className="w-full h-[250px] object-fill"
                    src="df"
                    alt=""
                  />

                  {/* cart information */}
                  <div className="pt-4 md:pt-6 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="font-lato text-[#ADADAD]">Vegetables</span>
                    <div className="flex items-center justify-start gap-2 text-sm">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>
                    <h1 className="font-medium text-black-2b">
                      Fresh organic villa farm lomon 500gm pack
                    </h1>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-orange-f5 font-bold">
                        $120.25
                        <del className="font-semibold text-sm text-gray-b6 ml-2">
                          $123.25
                        </del>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md overflow-hidden p-4 md:p-6 relative border border-border-color">
                <div className="w-full ">
                  {/* image */}
                  <img
                    className="w-full h-[250px] object-fill"
                    src="df"
                    alt=""
                  />

                  {/* cart information */}
                  <div className="pt-4 md:pt-6 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="font-lato text-[#ADADAD]">Vegetables</span>
                    <div className="flex items-center justify-start gap-2 text-sm">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>
                    <h1 className="font-medium text-black-2b">
                      Fresh organic villa farm lomon 500gm pack
                    </h1>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-orange-f5 font-bold">
                        $120.25
                        <del className="font-semibold text-sm text-gray-b6 ml-2">
                          $123.25
                        </del>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* pagination */}
            <div className="mt-8 flex justify-center items-center">
              <div className="rounded-md mx-auto  border border-border-color bg-[#F7F7F8] overflow-hidden">
                <button className="px-5 p-3 border-r border-border-color text-gray-7a my-transition hover:bg-orange-f5 hover:text-white">
                  Previous
                </button>
                <button className="px-5 p-3 border-r border-border-color text-gray-7a my-transition hover:bg-orange-f5 hover:text-white">
                  1
                </button>
                <button className="px-5 p-3 border-r border-border-color text-gray-7a my-transition hover:bg-orange-f5 hover:text-white">
                  2
                </button>
                <button className="px-5 p-3 border-r border-border-color text-gray-7a my-transition hover:bg-orange-f5 hover:text-white">
                  3
                </button>
                <button className="px-5 p-3 text-gray-7a my-transition hover:bg-orange-f5 hover:text-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;

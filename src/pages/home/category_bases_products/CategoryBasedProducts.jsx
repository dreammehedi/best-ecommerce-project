import { FaStar } from "react-icons/fa";
import thumbnail1 from "../../../assets/thumbnail-1.png";

function CategoryBasedProducts() {
  return (
    <>
      {/* category bases products */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* top selling */}
          <div className="space-y-4 md:space-y-6">
            {/* title */}
            <h1 className="font-quicksand font-bold text-black-25 text-xl md:text-2xl border-b-[3px] border-green-3b pb-4">
              Top Selling
            </h1>
            {/* products */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* trending product */}
          <div className="space-y-4 md:space-y-6">
            {/* title */}
            <h1 className="font-quicksand font-bold text-black-25 text-xl md:text-2xl border-b-[3px] border-green-3b pb-4">
              Trending Product
            </h1>
            {/* products */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* product */}
              <div className="flex justify-between items-center gap-4">
                {/* product image */}
                <img
                  className="size-[110px] object-cover rounded-md"
                  src={thumbnail1}
                  alt=""
                />
                {/* product info */}
                <div className="space-y-3">
                  <h1 className="font-medium text-black-2b">
                    Nestle Original Coffee-Mate Coffee Creamer
                  </h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">(5)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      $3232
                      <del className="text-sm text-gray-b6 ml-2">$4303</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryBasedProducts;

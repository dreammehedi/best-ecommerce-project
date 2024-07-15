import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import banner1 from "../../../assets/daily_best_sales_product/banner-1.png";
import ProductsTopSection from "../../../components/home/ProductsTopSection";
const dealsCategoryItemsData = ["All Deals"];
const popularProductsData = [
  {
    status: "Hot",
    statusColor: "bg-[#F74C81]",
    category: "Snack",
    image: banner1,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
  {
    status: "Hot",
    statusColor: "bg-[#F72B81]",
    category: "Snack",
    image: banner1,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
  {
    status: "Hot",
    statusColor: "bg-[#F12B81]",
    category: "Snack",
    image: banner1,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
];

function DealsOfTheDay() {
  return (
    <>
      {/* deals of the day */}
      <section className="py-8 md:py-10 lg:py-14">
        {/* top section */}
        <ProductsTopSection
          title={"Deals Of The Day"}
          categoryItemsData={dealsCategoryItemsData}
        ></ProductsTopSection>

        {/* deals products */}
        <div className="container pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* deals product */}
          {popularProductsData?.map((dealsProduct, ind) => {
            const {
              image,
              title,
              rating,
              postBy,
              currentPrice,
              previousPrice,
            } = dealsProduct;
            return (
              <div key={ind} className="w-full h-auto">
                {/* image */}
                <img
                  className="w-full h-[250px] object-cover rounded-3xl"
                  src={image}
                  alt=""
                />

                {/* cart information */}
                <div className="-mt-10 m-3 shadow-sm bg-white relative z-10 rounded-3xl w-[80%] mx-auto p-4 md:p-6 space-y-3">
                  <h1 className="font-medium text-black-2b">{title}</h1>
                  <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
                    <FaStar className="text-[#fcc044]"></FaStar>
                    <span className="text-gray-b6">({rating})</span>
                  </div>
                  <p className="font-lato text-gray-b6">
                    By <span className="text-orange-f5">{postBy}</span>
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[18px] font-quicksand text-green-3b">
                      ${currentPrice}
                      <del className="text-sm text-gray-b6 ml-2">
                        ${previousPrice}
                      </del>
                    </p>
                    <button className="rounded-md px-5 py-2 bg-orange-f5 my-transition hover:bg-orange-f5/70 text-white font-medium text-sm font-lato flex items-center gap-2">
                      <FiShoppingCart></FiShoppingCart> Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DealsOfTheDay;

import { Link } from "react-router-dom";
import dailyBasedSalesBg from "../../../assets/daily-based-sales.png";
import dailyProductSale from "../../../assets/daily_best_sales_product/product1.png";
import ProductsTopSection from "../../../components/home/ProductsTopSection";
import ShopNowBtn from "../../../shared/button/ShopNowBtn";
import PopularProductCart from "../popular_products/PopularProductCart";

const productCategoryItemsData = ["Featured", "Popular", "New Added"];

const popularProductsData = [
  {
    status: "Hot",
    statusColor: "bg-[#F74B81]",
    category: "Snack",
    image: dailyProductSale,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
    totalSold: 120,
    soldOut: 90,
  },
  {
    status: "Hot",
    statusColor: "bg-[#C74B81]",
    category: "Snack",
    image: dailyProductSale,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
  {
    status: "Hot",
    statusColor: "bg-[#F74C81]",
    category: "Snack",
    image: dailyProductSale,
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
    image: dailyProductSale,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
];

function DailyBestSales() {
  return (
    <>
      {/* daily best seles */}
      <section className="py-8 md:py-10 lg:py-14">
        {/* top section */}
        <ProductsTopSection
          title={"Daily Best Sells"}
          categoryItemsData={productCategoryItemsData}
        ></ProductsTopSection>

        {/* main section */}
        <div className="container pt-8 md:pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* daily based sale bg */}
          <div
            style={{ backgroundImage: `url(${dailyBasedSalesBg})` }}
            className="w-auto h-full rounded-3xl overflow-hidden p-4 md:p-6 flex flex-col gap-8"
          >
            <h1 className="w-[90%] font-bold text-xl lg:text-2xl font-quicksand text-white">
              Bring nature into your home
            </h1>
            <Link to={"#"}>
              <ShopNowBtn name="Shop Now"></ShopNowBtn>
            </Link>
          </div>

          {/* daily based sale product */}
          {popularProductsData?.map((product, ind) => {
            return (
              <PopularProductCart
                key={ind}
                productItem={product}
              ></PopularProductCart>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DailyBestSales;

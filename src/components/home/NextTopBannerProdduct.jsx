import { Link } from "react-router-dom";
import nextBanner1 from "../../assets/next_top_banner_product/banner1.png";
import nextBanner2 from "../../assets/next_top_banner_product/banner2.png";
import nextBanner3 from "../../assets/next_top_banner_product/banner3.png";
import ShopNowBtn from "../../shared/button/ShopNowBtn";

const top3ProductsData = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    bannerImg: nextBanner1,
    bgColor: "bg-[#FF8FB1]",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    bannerImg: nextBanner2,
    bgColor: "bg-[#EBB200]",
  },
  {
    title: "The best Organic Products Online",
    bannerImg: nextBanner3,
    bgColor: "bg-[#E7EAF3]",
  },
];

function NextTopBannerProdduct() {
  return (
    <>
      {/* next banner top 3 product */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* product info */}
          {top3ProductsData?.map((topProduct, ind) => {
            return (
              <div
                key={ind}
                className={`${topProduct?.bgColor} flex flex-col space-y-8 items-start overflow-hidden px-8 py-14 lg:px-[50px] lg:py-[80px] rounded-md relative z-20`}
              >
                <h1 className="w-[90%] font-bold text-xl lg:text-2xl font-quicksand text-black-25">
                  {topProduct?.title}
                </h1>
                <Link to={"#"}>
                  <ShopNowBtn name="Shop Now"></ShopNowBtn>
                </Link>
                <img
                  className="absolute bottom-0 right-0 -z-10 w-[250px] h-auto object-cover"
                  src={topProduct?.bannerImg}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default NextTopBannerProdduct;

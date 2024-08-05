import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductsTopSection from "../../../components/home/ProductsTopSection";
import useAxiosPublic from "./../../../hooks/axios/useAxiosPublic";
import Loader from "./../../../shared/loader/Loader";
import PopularProductCart from "./PopularProductCart";

const productCategoryItemsData = [
  "All",
  "Hot",
  "Trending",
  "Popular",
  "Best Seller",
];

function PopularProducts() {
  const [productsPopularity, setProductsPopularity] = useState("All");
  const { pathname } = useLocation();
  const axiosPublic = useAxiosPublic();

  // get popular products
  const { isPending, data: popularProducts = [] } = useQuery({
    queryKey: ["popularProducts", productsPopularity],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/popular-products?popularity=${productsPopularity}`
      );
      const resData = await response.data;
      return resData;
    },
  });

  return (
    <>
      {/* popular products  */}
      <section className="py-8 md:py-10 lg:py-14">
        {/* top section */}
        {pathname === "/cart" ? null : (
          <ProductsTopSection
            title={"Popular Products"}
            setProductsPopularity={setProductsPopularity}
            categoryItemsData={productCategoryItemsData}
          ></ProductsTopSection>
        )}

        {isPending && <Loader></Loader>}

        {/* main section */}
        <div className="container pt-8 md:pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* popular product  cart*/}
          {popularProducts?.map((productItem, ind) => {
            return (
              <PopularProductCart
                key={ind}
                productItem={productItem}
              ></PopularProductCart>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default PopularProducts;

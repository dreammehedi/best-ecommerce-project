import popularProduct1 from "../../../assets/popular_products/product-1.png";
import popularProduct2 from "../../../assets/popular_products/product-2.png";
import popularProduct3 from "../../../assets/popular_products/product-3.png";
import ProductsTopSection from "../../../components/home/ProductsTopSection";
import PopularProductCart from "./PopularProductCart";

const productCategoryItemsData = [
  "All",
  "Milks & Dairies",
  "Coffes & Teas",
  "Pet Foods",
  "Meates",
  "Vegetables",
  "Fruits",
];

const popularProductsData = [
  {
    status: "Hot",
    statusColor: "bg-[#F74B81]",
    category: "Snack",
    image: popularProduct1,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
  {
    status: "Hot",
    statusColor: "bg-[#C74B81]",
    category: "Snack",
    image: popularProduct1,
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
    image: popularProduct2,
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
    image: popularProduct3,
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
    image: popularProduct3,
    title: "Fresh organic villa farm lomon 500gm pack",
    rating: "4.0",
    postBy: "NestFood",
    currentPrice: "28.85",
    previousPrice: "35.95",
  },
];

function PopularProducts() {
  return (
    <>
      {/* popular products  */}
      <section className="py-8 md:py-10 lg:py-14">
        {/* top section */}
        <ProductsTopSection
          title={"Popular Products"}
          productCategoryItemsData={productCategoryItemsData}
        ></ProductsTopSection>

        {/* main section */}
        <div className="container pt-8 md:pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* popular product  cart*/}
          {popularProductsData?.map((productItem, ind) => {
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

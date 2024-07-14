import ProductsTopSection from "../../../components/home/ProductsTopSection";
const productCategoryItemsData = [
  "All",
  "Milks & Dairies",
  "Coffes & Teas",
  "Pet Foods",
  "Meates",
  "Vegetables",
  "Fruits",
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
        <div className="container pt-8 md:pt-10">df</div>
      </section>
    </>
  );
}

export default PopularProducts;

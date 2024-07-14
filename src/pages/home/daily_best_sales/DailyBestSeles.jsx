import ProductsTopSection from "../../../components/home/ProductsTopSection";
const productCategoryItemsData = ["Featured", "Popular", "New Added"];

function DailyBestSeles() {
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
        <div className="container pt-8 md:pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"></div>
      </section>
    </>
  );
}

export default DailyBestSeles;

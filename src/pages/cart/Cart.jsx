import PagesSectionTitle from "../../shared/pages_section_title/PagesSectionTitle";
import PopularProducts from "../home/popular_products/PopularProducts";

function Cart() {
  return (
    <>
      {/* cart */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container">
          {/* all cart */}
          <div>d</div>

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

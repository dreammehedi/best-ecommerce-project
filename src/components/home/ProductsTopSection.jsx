import PropTypes from "prop-types";
function ProductsTopSection({ title, categoryItemsData }) {
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-between items-center py-2 gap-6">
        {/* title */}
        <h1 className="text-black-25 font-quicksand font-bold  text-2xl lg:text-3xl">
          {title}
        </h1>

        {/* category */}
        <ul className="flex flex-wrap justify-center lg:justify-end items-center gap-4 md:gap-6 lg:gap-8">
          {categoryItemsData?.map((productItem, ind) => {
            return (
              <li
                key={ind}
                className="capitalize font-semibold font-quicksand text-black-25 my-transition hover:text-green-3b cursor-pointer"
              >
                {productItem}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

ProductsTopSection.propTypes = {
  title: PropTypes.string.isRequired,
  categoryItemsData: PropTypes.array.isRequired,
};
export default ProductsTopSection;

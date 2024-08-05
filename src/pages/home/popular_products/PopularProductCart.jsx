import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function PopularProductCart({ productItem }) {
  const {
    category,
    availability,
    popularity,
    description,
    image,
    brand,
    name,
    rating,
    price,
  } = productItem;

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden p-4 md:p-6 relative border border-border-color">
        {/* image & status */}
        <div className="w-full ">
          {/* status */}
          <span
            className={`absolute top-0 left-0 px-6 md:px-8 py-2 text-black-25 rounded-tl-3xl rounded-br-3xl capitalize `}
          >
            {popularity}
          </span>
          {/* image */}
          <img className="w-full h-[250px] object-fill" src={image} alt="" />

          {/* cart information */}
          <div className="pt-4 md:pt-6 space-y-3">
            <span className="font-lato text-[#ADADAD]">{category}</span>
            <h1 className="font-medium text-black-2b">{name}</h1>
            <p className="font-lato text-[#ADADAD] text-sm">{description}</p>
            <div className="flex items-center justify-start gap-4 md:gap-6 text-sm font-lato">
              <FaStar className="text-[#fcc044]"></FaStar>
              <span className="text-gray-b6">({rating})</span>
            </div>
            <p className="font-lato text-gray-b6">
              By <span className="text-orange-f5">{brand}</span>
            </p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[18px] font-quicksand text-green-3b">
                ${price?.current}
                <del className="text-sm text-gray-b6 ml-2">
                  ${price?.original}
                </del>
              </p>

              <button
                disabled={availability !== "In Stock" ? true : false}
                className={` rounded-md px-5 py-2 bg-orange-f5 my-transition hover:bg-orange-f5/70 text-white font-medium text-sm font-lato flex items-center gap-2`}
              >
                <FiShoppingCart></FiShoppingCart> Add
              </button>
            </div>
            {/* sold */}

            {productItem?.totalSold && (
              <p className="font-lato text-sm text-black-25">
                Sold: {productItem?.soldOut}/{productItem?.totalSold}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

PopularProductCart.propTypes = {
  productItem: PropTypes.object.isRequired,
};
export default PopularProductCart;

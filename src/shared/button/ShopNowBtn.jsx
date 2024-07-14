import PropTypes from "prop-types";
function ShopNowBtn({ name }) {
  return (
    <>
      <button className="px-3 py-2 rounded-md bg-orange-f5 text-white font-medium text-sm capitalize my-transition hover:bg-orange-f5/70 font-quicksand">
        {name}
      </button>
    </>
  );
}

ShopNowBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ShopNowBtn;

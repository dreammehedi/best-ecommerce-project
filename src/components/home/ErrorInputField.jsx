import PropTypes from "prop-types";

function ErrorInputField({ field }) {
  return (
    <>
      <span className="text-red-500 text-xs font-semibold">
        {field} is Required!
      </span>
    </>
  );
}
ErrorInputField.propTypes = {
  field: PropTypes.string,
};
export default ErrorInputField;

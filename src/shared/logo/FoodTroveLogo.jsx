import foodTroveLogo from "../../assets/logo-icon.png";
function FoodTroveLogo() {
  return (
    <>
      <div className="flex items-center gap-1">
        <img
          className="object-cover size-10"
          src={foodTroveLogo}
          alt="FoodTrove"
        />
        <span className="font-extrabold text-black text-2xl font-playwrite">
          FoodTrove
        </span>
      </div>
    </>
  );
}

export default FoodTroveLogo;

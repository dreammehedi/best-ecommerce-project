import oportunity1 from "../../assets/great_oportunity/icon-1.svg";

function GreatOpotunityHome() {
  return (
    <>
      {/* great oportunity home */}
      <section className="py-8 md:py-10 lg:py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {/* oportunity */}
          <div className="w-[280px] mx-auto md:w-auto md:mx-0 bg-[#F4F6FA] rounded-md p-4 md:p-6 flex items-center justify-between gap-3">
            <img src={oportunity1} alt="" />
            <div>
              <h3 className="font-quicksand text-base md:text-[18px] text-black-25 font-semibold">
                Best prices & offers
              </h3>
              <p className="font-lato text-gray-ad">Orders $50 or more</p>
            </div>
          </div>{" "}
          {/* oportunity */}
          <div className="w-[280px] mx-auto md:w-auto md:mx-0 bg-[#F4F6FA] rounded-md p-4 md:p-6 flex items-center justify-between gap-3">
            <img src={oportunity1} alt="" />
            <div>
              <h3 className="font-quicksand text-base md:text-[18px] text-black-25 font-semibold">
                Best prices & offers
              </h3>
              <p className="font-lato text-gray-ad">Orders $50 or more</p>
            </div>
          </div>
          {/* oportunity */}
          <div className="w-[280px] mx-auto md:w-auto md:mx-0 bg-[#F4F6FA] rounded-md p-4 md:p-6 flex items-center justify-between gap-3">
            <img src={oportunity1} alt="" />
            <div>
              <h3 className="font-quicksand text-base md:text-[18px] text-black-25 font-semibold">
                Best prices & offers
              </h3>
              <p className="font-lato text-gray-ad">Orders $50 or more</p>
            </div>
          </div>{" "}
          {/* oportunity */}
          <div className="w-[280px] mx-auto md:w-auto md:mx-0 bg-[#F4F6FA] rounded-md p-4 md:p-6 flex items-center justify-between gap-3">
            <img src={oportunity1} alt="" />
            <div>
              <h3 className="font-quicksand text-base md:text-[18px] text-black-25 font-semibold">
                Best prices & offers
              </h3>
              <p className="font-lato text-gray-ad">Orders $50 or more</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GreatOpotunityHome;

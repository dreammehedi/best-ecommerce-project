import { IoClose } from "react-icons/io5";
import { PiEnvelopeFill } from "react-icons/pi";
import bannerImage from "../../assets/banner-img.png";
const bannerItemsData = ["Shoping", "Recipes", "Kitchen", "News", "Food"];

function Banner() {
  return (
    <>
      {/* banner */}
      <section className="bg-[#E6E6E6] w-full h-screen flex justify-center items-center min-h-[700px] max-h-[750px] relative">
        <div className="container py-16 justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* banner content */}
          <div className="flex flex-col space-y-4 z-20">
            <h4 className="font-semibold text-black-21 text-xl">
              <span className="text-orange-f5">100% </span>Organic Vegetables
            </h4>
            <h1 className="lg:max-w-xl font-bold text-2xl md:text-3xl lg:text-[55px] text-black-21 leading-normal lg:leading-[55px]">
              The best way to stuff your wallet.
            </h1>
            <p className="text-gray-7a pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>

            {/* subscribe form */}
            <form className="relative">
              <PiEnvelopeFill className="absolute top-1/2 -translate-y-1/2 left-5"></PiEnvelopeFill>
              <input
                type="email"
                placeholder="Your Email Address..."
                className="bg-white rounded-full pl-12 px-8 py-4 outline-none border-none placeholder:text-sm text-[#838383] w-full my-transition focus:ring-1 focus:ring-green-3b"
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-0 text-white rounded-full px-8 py-4 bg-green-3b"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* banner items */}
          {/* items */}
          <ul className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 justify-start z-20">
            {bannerItemsData?.map((item, ind) => {
              return (
                <li
                  key={ind}
                  className="flex items-center gap-2 text-green-3b bg-white shadow-sm shadow-white rounded-full px-5 py-2 cursor-pointer my-transition hover:text-black-21 capitalize font-medium group"
                >
                  <IoClose className="text-[#B6B6B6] my-transition group-hover:text-black-21"></IoClose>
                  {item}
                </li>
              );
            })}
          </ul>

          {/* banner image */}
          <img
            src={bannerImage}
            alt="banner image"
            className="absolute bottom-0 right-0 z-10 w-[550px] h-auto object-fill"
          />
        </div>
      </section>
    </>
  );
}

export default Banner;

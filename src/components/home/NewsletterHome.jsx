import { PiEnvelopeFill } from "react-icons/pi";
import newsletterHomeBg from "../../assets/newsletter-home-bg.png";
import newsletterHomeImage from "../../assets/newsletter-home-img.png";
function NewsletterHome() {
  return (
    <>
      {/* newsletter home */}
      <section
        style={{ backgroundImage: `url(${newsletterHomeBg})` }}
        className="!bg-no-repeat !bg-center !bg-cover"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 relative py-8 md:py-10 lg:py-14">
          {/* newsletter info */}
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold font-quicksand text-3xl md:text-4xl lg:text-[40px] text-black-25 leading-normal md:leading-[48px]">
              Stay home & get your daily needs from our shop
            </h1>
            <h4 className="font-lato text-base md:text-[18px] text-gray-7a">
              {` Start You'r Daily Shopping with`}
              <span className="text-green-3b"> Nest Mart</span>
            </h4>

            {/* subscribe form */}
            <form className="relative w-[80%]">
              <PiEnvelopeFill className="absolute top-1/2 -translate-y-1/2 left-5"></PiEnvelopeFill>
              <input
                type="email"
                placeholder="Your Email Address..."
                className="w-full bg-white rounded-full pl-12 px-8 py-4 outline-none border-none placeholder:text-sm text-[#838383] my-transition focus:ring-1 focus:ring-green-3b"
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-0 text-white rounded-full px-8 py-4 bg-green-3b"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* newsletter image */}
          <img
            className="hidden lg:inline-block w-[500px] absolute bottom-0 right-0 object-fill"
            src={newsletterHomeImage}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default NewsletterHome;

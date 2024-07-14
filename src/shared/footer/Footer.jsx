import { BsEnvelopePaperFill, BsFillSendArrowUpFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FoodTroveLogo from "../logo/FoodTroveLogo";
import Category from "./Category";
import Company from "./Company";
import FootGallery from "./FootGallery";

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="bg-footer-bg">
        <div className="container">
          {/* footer top */}
          <div className="py-[50px] md:py-[80px] lg:py-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* logo, desc, contact info */}
            <div className="flex flex-col space-y-2">
              <Link to={"/"} className="mb-4">
                <FoodTroveLogo></FoodTroveLogo>
              </Link>
              <p className="text-gray-77">
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
              {/* contact info */}
              <ul className="*:flex *:items-center *:gap-3 text-gray-77 flex flex-col space-y-4">
                <li>
                  <FaLocationDot className="text-xl size-5 text-orange-f5"></FaLocationDot>
                  <p>
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </p>
                </li>
                <li>
                  <BsEnvelopePaperFill className="text-xl size-5 text-orange-f5"></BsEnvelopePaperFill>
                  <p>dreammehedihassan@gmail.com</p>
                </li>
                <li>
                  <FaPhoneAlt className="text-xl size-5 text-orange-f5"></FaPhoneAlt>
                  <p>+8801830143234</p>
                </li>
              </ul>
            </div>

            {/* company & category */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* company */}

              <Company></Company>
              {/* category */}
              <Category></Category>
            </div>

            {/* subscribe newsletter */}
            <div className="space-y-4">
              <h3 className="mb-4 font-bold text-black text-[18px]">
                Subscribe Our Newsletter
              </h3>

              {/* form */}
              <form className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 text-gray-700 bg-white rounded-md outline-none border border-[#E9E9E9] focus:ring-1 focus:ring-orange-f5 placeholder:text-sm my-transition"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-black my-transition hover:text-orange-f5 rounded-md hover:bg-orange-f7 "
                >
                  <BsFillSendArrowUpFill></BsFillSendArrowUpFill>
                </button>
              </form>

              {/* social */}
              <ul className="flex justify-start items-center gap-4 md:gap-6 lg:gap-8">
                <li>
                  <Link
                    to={"https://www.facebook.com/dreammehedihassan/"}
                    target="_blank"
                    className="border border-border-color p-3 font-semibold rounded-md flex justify-center items-center text-[18px]"
                  >
                    <FaFacebookF></FaFacebookF>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.linkedin.com/in/mehedi-hassan-miraj/"}
                    target="_blank"
                    className="border border-border-color p-3 font-semibold rounded-md flex justify-center items-center text-[18px]"
                  >
                    <FaLinkedinIn></FaLinkedinIn>
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    to={"https://github.com/dreammehedi"}
                    target="_blank"
                    className="border border-border-color p-3 font-semibold rounded-md flex justify-center items-center text-[18px]"
                  >
                    <FaGithub></FaGithub>
                  </Link>
                </li>
              </ul>

              {/* gallery */}
              <FootGallery></FootGallery>
            </div>
          </div>

          {/* footer bottom */}
          <div className="text-center font-medium py-5 border-t  border-[#E9E9E9]">
            &copy; <span className="text-orange-f5">FoodTrove</span>, All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

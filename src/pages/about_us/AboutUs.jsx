import { BiSupport } from "react-icons/bi";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import faqImage from "../../assets/faq-image.png";

const AboutUs = () => {
  return (
    <>
      {/* about us */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* about us content */}
          <div className="space-y-4">
            {/* title */}
            <h1 className="font-bold text-black-21 text-2xl md:text-3xl lg:text-4xl">
              About The Carrot
            </h1>

            {/* description */}
            <div className="text-sm font-poppins text-gray-7a space-y-4 lg:space-y-6 *:leading-[24px]">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae rerum cum accusamus magni consequuntur architecto, ipsum
                deleniti expedita doloribus suscipit voluptatum eius perferendis
                amet!.
              </p>

              <p className="text-sm text-gray-7a ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, maxime amet architecto est exercitationem optio ea
                maiores corporis beatae, dolores doloribus libero nesciunt qui
                illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                blanditiis quod aspernatur! Iusto?
              </p>
            </div>

            {/* vendor customer product */}
            <div className="bg-[#F7F7F8] rounded-md grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
              <div className="text-center p-5">
                <h2 className="text-gray-7a font-bold text-3xl">
                  <span className="text-orange-f5 text-5xl lg:text-6xl ">
                    0.1
                  </span>
                  k
                </h2>
                <p className="text-black-21">Vendors</p>
              </div>
              <div className="text-center p-5">
                <h2 className="text-gray-7a font-bold text-3xl">
                  <span className="text-orange-f5 text-5xl lg:text-6xl ">
                    23
                  </span>
                  k
                </h2>
                <p className="text-black-21">Customers</p>
              </div>
              <div className="text-center p-5">
                <h2 className="text-gray-7a font-bold text-3xl">
                  <span className="text-orange-f5 text-5xl lg:text-6xl ">
                    2
                  </span>
                  k
                </h2>
                <p className="text-black-21">Products</p>
              </div>
            </div>
          </div>

          {/* about us image */}
          <img
            className="w-full h-fit object-fill rounded-md"
            src={faqImage}
            alt=""
          />
        </div>

        {/* about extra info */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-10">
          <div className="bg-[#F7F7F8] rounded-md flex text-center flex-col items-center justify-center space-y-3 p-4 lg:p-6">
            <GiBoxUnpacking className="text-4xl" />
            <h3 className="text-black-2b text-lg font-semibold">
              Product Packing
            </h3>
            <p className="text-sm font-light text-gray-7a px-8 md:p-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <div className="bg-[#F7F7F8] rounded-md flex text-center flex-col items-center justify-center space-y-3 p-4 lg:p-6">
            <BiSupport className="text-4xl" />
            <h3 className="text-black-2b text-lg font-semibold">
              24X7 Support
            </h3>
            <p className="text-sm font-light text-gray-7a px-8 md:p-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <div className="bg-[#F7F7F8] rounded-md flex text-center flex-col items-center justify-center space-y-3 p-4 lg:p-6">
            <TbTruckDelivery className="text-4xl" />
            <h3 className="text-black-2b text-lg font-semibold">
              Delivery in 5 Days
            </h3>
            <p className="text-sm font-light text-gray-7a px-8 md:p-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <div className="bg-[#F7F7F8] rounded-md flex text-center flex-col items-center justify-center space-y-3 p-4 lg:p-6">
            <RiSecurePaymentFill className="text-4xl" />
            <h3 className="text-black-2b text-lg font-semibold">
              Payment Secure
            </h3>
            <p className="text-sm font-light text-gray-7a px-8 md:p-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

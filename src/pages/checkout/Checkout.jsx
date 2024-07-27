import { FaStar } from "react-icons/fa";
import mastercard from "../../assets/payment_icon/mastercard.png";
import paypal from "../../assets/payment_icon/paypal.png";
import skrill from "../../assets/payment_icon/skrill.png";
import visa from "../../assets/payment_icon/visa.png";

function Checkout() {
  return (
    <>
      {/* checkout */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {/* checkout left */}
          <div className="lg:col-span-4 space-y-5 h-fit">
            {/* summary */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-3">
              <h2 className="font-semibold text-xl text-black">Summary</h2>
              <div className="space-y-2 border-b border-border-color pb-3">
                {/* sub total */}
                <div className="flex items-center justify-between ">
                  <span className="text-gray-7a text-sm">Sub-Total</span>
                  <span className="text-black text-base">$80.00</span>
                </div>
                {/* delivery chargers */}
                <div className="flex items-center justify-between ">
                  <span className="text-gray-7a text-sm">Delivery Charges</span>
                  <span className="text-black text-base">$80.00</span>
                </div>
              </div>
              {/* total amount */}
              <div className="flex items-center justify-between ">
                <span className="text-black text-base font-bold">
                  Total Amount
                </span>
                <span className="text-black text-base font-bold">$80.00</span>
              </div>

              {/* checkout products */}
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-start gap-4">
                  {/* image */}
                  <img className="size-[100px] object-fill" src={""} alt="" />

                  {/* cart information */}
                  <div className="space-y-2">
                    <h1 className="font-medium text-black-2b">
                      Dates Value Pack Pouch
                    </h1>
                    <div className="flex items-center justify-start gap-2 md:gap-3 text-sm font-lato">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-green-3b">
                        $80.00
                        <del className="text-sm text-gray-b6 ml-2">$80.00</del>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex items-center justify-start gap-4">
                  {/* image */}
                  <img className="size-[100px] object-fill" src={""} alt="" />

                  {/* cart information */}
                  <div className="space-y-2">
                    <h1 className="font-medium text-black-2b">
                      Dates Value Pack Pouch
                    </h1>
                    <div className="flex items-center justify-start gap-2 md:gap-3 text-sm font-lato">
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                      <FaStar className="text-[#fcc044]"></FaStar>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[18px] font-quicksand text-green-3b">
                        $80.00
                        <del className="text-sm text-gray-b6 ml-2">$80.00</del>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-3">
              <h2 className="font-semibold text-xl text-black">
                Delivery Method
              </h2>
              <p className="text-sm text-gray-7a">
                Please select the preferred shipping method to use on this
                order.
              </p>

              {/* shiping method */}
              <div className="flex justify-between items-start gap-3">
                {/* free shiping */}
                <div>
                  <h5 className="text-sm text-black-2b font-semibold">
                    Free Shipping
                  </h5>
                  <div className="pt-3">
                    <input type="radio" name="shiping" />
                    <label
                      htmlFor="shiping"
                      className="text-sm text-gray-7a ml-2"
                    >
                      Rate - $0 .00
                    </label>
                  </div>
                </div>
                {/* flat shiping */}
                <div>
                  <h5 className="text-sm text-black-2b font-semibold">
                    Flat Rate
                  </h5>
                  <div className="pt-3">
                    <input type="radio" name="shiping" />
                    <label
                      htmlFor="shiping"
                      className="text-sm text-gray-7a ml-2"
                    >
                      Rate - $5.00
                    </label>
                  </div>
                </div>
              </div>

              {/* comments */}
              <div>
                <h5 className="pb-3 text-sm text-black-2b font-semibold">
                  Add Comments About Your Order
                </h5>
                <textarea
                  className="w-full border border-border-color rounded-md outline-none p-4"
                  name="comment"
                  id="comment"
                  rows={4}
                ></textarea>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-3">
              <h2 className="font-semibold text-xl text-black">
                Payment Method
              </h2>
              <p className="text-sm text-gray-7a">
                Please select the preferred payment method to use on this order.
              </p>

              {/* payment methods */}
              <form className="space-y-2">
                <div>
                  <input type="radio" name="paymentMethods" />
                  <label
                    htmlFor="paymentMethods"
                    className="text-sm text-gray-7a ml-2"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <div>
                  <input type="radio" name="paymentMethods" />
                  <label
                    htmlFor="paymentMethods"
                    className="text-sm text-gray-7a ml-2"
                  >
                    UPI
                  </label>
                </div>
                <div>
                  <input type="radio" name="paymentMethods" />
                  <label
                    htmlFor="paymentMethods"
                    className="text-sm text-gray-7a ml-2"
                  >
                    Bank Transfer
                  </label>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-3">
              <h2 className="font-semibold text-xl text-black">
                Payment Method
              </h2>

              {/* methods icon */}
              <div className="flex items-center justify-start gap-2">
                <img
                  className="w-[48px] h-auto object-fill"
                  src={visa}
                  alt=""
                />
                <img
                  className="w-[48px] h-auto object-fill"
                  src={mastercard}
                  alt=""
                />
                <img
                  className="w-[48px] h-auto object-fill"
                  src={paypal}
                  alt=""
                />
                <img
                  className="w-[48px] h-auto object-fill"
                  src={skrill}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* checkout right */}
          <div className="lg:col-span-8 p-4 md:p-6 rounded-md border border-border-color h-fit">
            df
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;

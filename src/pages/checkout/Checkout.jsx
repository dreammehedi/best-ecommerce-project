import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import mastercard from "../../assets/payment_icon/mastercard.png";
import paypal from "../../assets/payment_icon/paypal.png";
import skrill from "../../assets/payment_icon/skrill.png";
import visa from "../../assets/payment_icon/visa.png";

function Checkout() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <div className="lg:col-span-8 space-y-5 h-fit">
            {/* new customer */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-3 ">
              <h2 className="font-semibold text-xl text-black">New Customer</h2>

              {/* checkout options */}
              <p className="text-sm text-black-2b">Checkout Options:</p>

              <div className="flex justify-between items-start gap-3">
                {/* register account */}

                <div>
                  <input type="radio" name="account" />
                  <label
                    htmlFor="account"
                    className="text-sm text-gray-7a ml-2"
                  >
                    Register Account
                  </label>
                </div>
                {/*  Guest Account */}
                <div>
                  <input type="radio" name="account" />
                  <label
                    htmlFor="account"
                    className="text-sm text-gray-7a ml-2"
                  >
                    Guest Account
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-7a">
                {`By creating an account you will be able to shop faster, be up to
                date on an order's status, and keep track of the orders you have
                previously made.`}
              </p>
              <button className="px-3 py-2 rounded-md bg-orange-f5 text-white font-medium text-sm capitalize my-transition hover:bg-orange-f5/70 font-quicksand">
                Continue
              </button>

              {/* returning customer */}
              <div>
                <h2 className="font-semibold text-xl text-black">
                  Returning Customer
                </h2>

                {/* login form */}
                <form
                  className="pt-8 space-y-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="space-y-2">
                    <label className="text-[#444444] text-sm" htmlFor="email">
                      Email Address*
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-[#444444] text-sm"
                      htmlFor="password"
                    >
                      Password*
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                      type="password"
                      placeholder="Enter Your Password"
                      {...register("password", { required: true })}
                    />
                  </div>

                  {/* remember me & forgot password */}
                  <div className="flex justify-between text-sm items-center">
                    <button
                      className="bg-orange-f5 text-white px-5 py-3 rounded-md font-medium"
                      type="submit"
                    >
                      Login
                    </button>
                    <button className="text-gray-77 text-sm">
                      Forgot Password?
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* billing detailes */}
            <div className="p-4 md:p-6 rounded-md border border-border-color space-y-2">
              <h2 className="font-semibold text-xl text-black">
                Blilling Detailes
              </h2>
              <p className="text-sm text-black-2b">Checkout Options:</p>
              <div className="flex justify-between items-start gap-3">
                {/* checkout options */}

                <div>
                  <input type="radio" name="address" />
                  <label
                    htmlFor="address"
                    className="text-sm text-gray-7a ml-2"
                  >
                    I want to use an existing address
                  </label>
                </div>
                {/*  Guest Account */}
                <div>
                  <input type="radio" name="address" />
                  <label
                    htmlFor="address"
                    className="text-sm text-gray-7a ml-2"
                  >
                    I want to use new address
                  </label>
                </div>
              </div>

              {/* form */}
              <form className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    name="firstName"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="Enter Your First Name"
                    {...register("firstName", { required: true })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="lastName">
                    Last Name*
                  </label>
                  <input
                    name="lastName"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="Enter Your Last Name"
                    {...register("lastName", { required: true })}
                  />
                </div>
                <div className="lg:col-span-2 space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="lastName">
                    Address
                  </label>
                  <input
                    name="address"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="Address Line 1"
                    {...register("address")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="city">
                    City*
                  </label>
                  <input
                    name="city"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="postCode">
                    Post Code
                  </label>
                  <input
                    name="postCode"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="number"
                    placeholder="Post Code"
                    {...register("postCode")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#444444] text-sm" htmlFor="country">
                    Country*
                  </label>
                  <input
                    name="country"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="Country"
                    {...register("country", { required: true })}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-[#444444] text-sm"
                    htmlFor="regionState"
                  >
                    Region State*
                  </label>
                  <input
                    name="regionState"
                    className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                    type="text"
                    placeholder="Region/State"
                    {...register("regionState", { required: true })}
                  />
                </div>
              </form>
              <div className="flex justify-end items-end">
                <button
                  className="ml-auto bg-orange-f5 text-white px-5 py-3 rounded-md font-medium"
                  type="submit"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;

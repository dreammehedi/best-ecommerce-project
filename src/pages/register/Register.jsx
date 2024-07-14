import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FoodTroveLogo from "../../shared/logo/FoodTroveLogo";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* register */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container max-w-[600px] border p-5 border-border-color rounded-md">
          {/* logo */}
          <Link to={"/"} className="flex justify-center">
            <FoodTroveLogo></FoodTroveLogo>
          </Link>

          {/* register form */}
          <form
            className="pt-8 items-center grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="email">
                Email*
              </label>
              <input
                name="email"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="password">
                Password*
              </label>
              <input
                name="password"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="phone">
                Phone Number*
              </label>
              <input
                name="phone"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="number"
                placeholder="Enter Your Phone Number"
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="address">
                Address*
              </label>
              <input
                name="address"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="text"
                placeholder="Enter Your Address"
                {...register("address", { required: true })}
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
                type="number"
                placeholder="Country"
                {...register("country", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="regionState">
                Region State*
              </label>
              <input
                name="regionState"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="number"
                placeholder="Region/State"
                {...register("regionState", { required: true })}
              />
            </div>

            {/* sign up or login */}
            <div className="lg:col-span-2 flex justify-between items-center">
              <button
                className="bg-orange-f5 text-white px-5 py-3 rounded-md font-medium"
                type="submit"
              >
                Sign Up
              </button>

              <Link to="/login" className="text-sm text-gray-77 cursor-pointer">
                Have an Account?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

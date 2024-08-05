import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ErrorInputField from "../../components/home/ErrorInputField";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import FoodTroveLogo from "../../shared/logo/FoodTroveLogo";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post("/users", data);
      const resData = await response.data;
      if (resData.success) {
        reset();
        Swal.fire({
          title: "Registration Successful",
          text: resData.message,
          icon: "success",
          confirmButtonText: "Go to Login",
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "Something went wrong!",
        timer: 1200,
      });
    }
  };

  // Predefined acceptable values for country and city
  // const acceptableCountries = [
  //   "Bangladesh",
  //   "USA",
  //   "Canada",
  //   "UK",
  //   "Australia",
  //   "Germany",
  //   "France",
  //   "Japan",
  //   "China",
  //   "India",
  //   "Brazil",
  //   "Russia",
  //   "Italy",
  //   "Spain",
  //   "Mexico",
  //   "South Africa",
  //   "South Korea",
  //   "Saudi Arabia",
  //   "Argentina",
  //   "Netherlands",
  //   "Turkey",
  // ];

  // const acceptableCities = [
  //   "Dhaka",
  //   "New York",
  //   "Toronto",
  //   "London",
  //   "Sydney",
  //   "Berlin",
  //   "Paris",
  //   "Tokyo",
  //   "Beijing",
  //   "Mumbai",
  //   "São Paulo",
  //   "Moscow",
  //   "Rome",
  //   "Madrid",
  //   "Mexico City",
  //   "Johannesburg",
  //   "Seoul",
  //   "Riyadh",
  //   "Buenos Aires",
  //   "Amsterdam",
  //   "Istanbul",
  // ];

  if (token) {
    return <Navigate to={"/"}></Navigate>;
  }
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
              {errors.firstName && (
                <ErrorInputField field={"First Name"}></ErrorInputField>
              )}
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
              {errors.lastName && (
                <ErrorInputField field={"Last Name"}></ErrorInputField>
              )}
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
                {...register("email", {
                  required: "Email is Required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email Address!",
                  },
                })}
              />
              {errors.email && (
                <ErrorInputField field={errors.email.message}></ErrorInputField>
              )}
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
                {...register("password", {
                  required: "Password is Required!",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs font-semibold">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="phone">
                Phone Number*
              </label>
              <input
                name="phone"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                placeholder="Enter Your Phone Number"
                {...register("phoneNumber", { required: true })}
                type="text"
                {...register("phoneNumber", {
                  required: "Phone number is Required!",
                  pattern: {
                    value:
                      /^\+?(\d{1,3})?[-. ]?\(?\d{1,4}\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs font-semibold">
                  {errors.phoneNumber.message}
                </span>
              )}
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
              {errors.address && (
                <ErrorInputField field={"Address"}></ErrorInputField>
              )}
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
                {...register("city", {
                  required: "City is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Invalid city name",
                  },
                })}
              />
              {errors.city && (
                <span className="text-red-500 text-xs font-semibold">
                  {errors.city.message}
                </span>
              )}
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
                {...register("country", {
                  required: "Country is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Invalid country name",
                  },
                })}
              />
              {errors.country && (
                <span className="text-red-500 text-xs font-semibold">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="regionState">
                Region State*
              </label>
              <input
                name="regionState"
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="text"
                placeholder="Region/State"
                {...register("regionState", { required: true })}
              />
              {errors.regionState && (
                <ErrorInputField field={"Region/State"}></ErrorInputField>
              )}
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

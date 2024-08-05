import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ErrorInputField from "../../components/home/ErrorInputField";
import FoodTroveLogo from "../../shared/logo/FoodTroveLogo";
import useAxiosPublic from "./../../hooks/axios/useAxiosPublic";
const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post("/login", data);
      const resData = await response.data;
      if (resData.success) {
        localStorage.setItem("token", JSON.stringify(resData.token));
        Swal.fire({
          title: "Success",
          text: "Logged In Successfully!",
          icon: "success",
          timer: 1000,
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Credentials Error!",
        icon: "error",
        timer: 1000,
      });
    }
  };

  if (token) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <>
      {/* login */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container max-w-[400px] border p-5 border-[#E9E9E9] rounded-md">
          {/* logo */}
          <Link to={"/"} className="flex justify-center">
            <FoodTroveLogo></FoodTroveLogo>
          </Link>

          {/* login form */}
          <form className="pt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.email && (
                <ErrorInputField field={"Email"}></ErrorInputField>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-[#444444] text-sm" htmlFor="password">
                Password*
              </label>
              <input
                className="w-full px-4 py-3 border border-border-color rounded-md outline-none placeholder:text-sm text-gray-77"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />{" "}
              {errors.password && (
                <ErrorInputField field={"Password"}></ErrorInputField>
              )}
            </div>

            {/* remember me & forgot password */}
            <div className="flex justify-between text-sm items-center">
              <div className="space-x-2 ">
                <input
                  type="checkbox"
                  id="remember"
                  {...register("remember")}
                />
                <label className="text-sm text-gray-77" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button className="text-gray-77 text-sm">Forgot Password?</button>
            </div>

            {/* login & sign up */}
            <div className="flex justify-between items-center">
              <button
                className="bg-orange-f5 text-white px-5 py-3 rounded-md font-medium"
                type="submit"
              >
                Login
              </button>

              <Link
                to="/register"
                className="text-sm text-gray-77 cursor-pointer"
              >
                Signup?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

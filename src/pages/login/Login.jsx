import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FoodTroveLogo from "../../shared/logo/FoodTroveLogo";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              />
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

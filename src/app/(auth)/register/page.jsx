"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [isShowPassword, setisShowPassword] = useState(false);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // Watch password field
  const password = watch("password");

    const HandleGooglesignIn = async () => {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });
    };

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });

    if (error) {
      toast.warning(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      return;
    }

    if (res) {
      toast.success("Sign-Up successful", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHOTO URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>

              <input
                type="url"
                placeholder="Enter photo url"
                className="input input-bordered w-full"
                {...register("photo", {
                  required: "Photo URL is required",
                })}
              />

              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },

                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message:
                      "Password must contain one uppercase and one lowercase letter",
                  },
                })}
              />

              <span
                onClick={() => setisShowPassword(!isShowPassword)}
                className="absolute right-2 top-9 cursor-pointer"
              >
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>

              <input
                type={isShowConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="input input-bordered w-full"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",

                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <span
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                className="absolute right-2 top-9 cursor-pointer"
              >
                {isShowConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* PASSWORD RULES */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>• Minimum 6 characters</p>

              <p>• At least one uppercase letter</p>

              <p>• At least one lowercase letter</p>
            </div>

            {/* REGISTER BUTTON */}
            <button className="btn btn-primary w-full mt-2" type="submit">
              Register
            </button>
            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Login */}
            <button
              className="btn btn-outline w-full"
              onClick={HandleGooglesignIn}
            >
              <FcGoogle />
              Continue with Google
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

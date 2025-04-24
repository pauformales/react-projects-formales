import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Required";
    if (!password.trim()) newErrors.password = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { email, password });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <section className="bg-white min-h-screen flex justify-center px-6">
      <div
        className="w-full max-w-2xl flex flex-col items-center justify-start"
        style={{ transform: "translateY(clamp(5rem, 12vw, 8rem))" }}
      >
        <div className="w-96 p-6 bg-white rounded-lg  flex flex-col items-center">
          <img
            src="/src/assets/ftc_svg_logo.svg"
            alt="Logo"
            className="w-[300px] h-[89px] mb-8"
          />

          <h2 className="w-full text-left text-lg font-semibold text-[#3a3b36] uppercase mb-5">
            Login
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full text-sm"
          >
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                className={`w-full h-[38px] border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pt-4 pb-2 text-xs focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
              {errors.email && (
                <span className="absolute right-2 -bottom-5 italic text-[11px] text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="relative w-full mb-3">
              <label
                htmlFor="password"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                className={`w-full h-[38px] border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pt-4 pb-1 text-xs focus:outline-none focus:ring-1 ${
                  errors.password
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                } pr-10`}
              />
              {password && (
                <div
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </div>
              )}
              {errors.password && (
                <span className="absolute right-2 -bottom-5 italic text-[11px] text-red-500">
                  {errors.password}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:opacity-90 text-white text-[12px] font-medium py-2 px-4 rounded-md transition"
            >
              Login
            </button>

            <div className="text-xs text-gray-600">
              <p className="mb-2">
                Need an Account?{" "}
                <a href="/register" className="text-primary underline">
                  Create an Account
                </a>
              </p>
              <p>
                Did you forget your password?{" "}
                <a href="/forgot-password" className="text-primary underline">
                  Forgot password
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

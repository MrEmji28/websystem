import React from "react";
import { Link } from "react-router-dom";
import logoBrand from "../assets/images/weight_king.png"; // Import your logoBrand image here
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen pt-2 pb-4">
        {/* Logo at the top */}
        <div className="mb-4">
          <img
            src={logoBrand}
            alt="Brand Logo"
            className="w-80 h-90 mx-auto" // Increased width and height
          />
        </div>

        {/* Sign-up form */}
        <div className="flex flex-col justify-center w-full lg:w-1/3 mb-4">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">
              Log In
            </h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#F7CD3E" }}
              >
                Log In
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Forgot your password?{" "}
                <Link to="/forgot-password" className="text-yellow-700 hover:underline">
                  Reset password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

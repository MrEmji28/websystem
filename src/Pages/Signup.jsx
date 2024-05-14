import React from "react";
import { Link } from "react-router-dom";
import logoBrand from "../assets/images/weight_king.png"; // Import your logoBrand image here
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen pt-4 pb-4">
        {/* Logo at the top */}
        <div className="mb-4">
          <img
            src={logoBrand}
            alt="Brand Logo"
            className="w-80 h-90 mx-auto" // Adjusted width and height
          />
        </div>

        {/* Sign-up form */}
        <div className="flex flex-col justify-center w-full lg:w-1/3 mb-4">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">
              Sign Up
            </h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                className="input input-bordered bg-white text-black border-black w-full lg:w-96"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#F7CD3E" }}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account?</p>
              <Link to="/login" className="text-yellow-700 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;

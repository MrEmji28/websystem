import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function ProfilePage() {
  return (
    <>
      <Navbar />
      <br></br>
    <div className="container mx-auto py-8 mt-20 mb-20">
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="flex">
            {/* Side section box */}
            <div className="w-1/4 bg-gray-100 p-4 mr-4 rounded-lg">
              <ul className="space-y-2">
                <li>
                  <h2><a href="#my-purchases text-lg font-semibold">My Purchases</a></h2>
                </li>
                <li>
                  <h2><a href="#my-account text-lg font-semibold">My Account</a></h2>
                </li>
              </ul>
            </div>
            {/* Profile section */}
            <div className="w-3/4 bg-white shadow-xl rounded-lg p-8 flex items-center">
              {/* Form fields */}
              <div className="flex flex-col mr-8">
                <h1 className="text-3xl font-bold mb-4">My Profile</h1>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-black"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-black"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-black"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 focus:outline-none focus:border-black focus:ring focus:ring-black"
                  />
                </div>
              </div>
              {/* Profile picture */}
              <div className="flex flex-col items-center ml-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <BsPersonCircle size={128} color="#bbb" />
                </div>
                <Button variant="primary">Select Image</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer/>
      </>
  );
}

export default ProfilePage;

import React, { useState } from "react";
import treadmill from "../images/product-img/machines-tredmill.jpeg"; // Import the image
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

function Treadmill() {
  const [quantity, setQuantity] = useState(1); // State for quantity

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-4xl mx-auto p-8 bg-white text-black rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={treadmill}
              alt="Dumbell"
              className="max-w-xs rounded-lg shadow-md"
            />{" "}
            {/* Use the imported image */}
          </div>

          {/* Product Details */}
          <div className="md:col-span-1 text-black">
            <h1 className="text-3xl font-semibold mb-4">Treadmill</h1>
            <p className="mb-4 text-yellow-500 text-2xl font-bold">₱20,000</p>
            <div className="flex items-center mb-4">
              <p className="mr-4">Quantity:</p>
              <button onClick={decrementQuantity} className="px-2 ">
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-12 text-center mx-2 bg-gray-300"
              />
              <button onClick={incrementQuantity} className="px-2">
                +
              </button>
            </div>
            <p className="mb-4">Shipping: Free Shipping</p>
            <div className="flex mb-4">
              <button className="border-yellow-500 border text-yellow-500 px-4 py-2 mr-2 rounded-md">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">
              Product Specifications
            </h2>
            <ul className="list-disc pl-5" style={{ listStyleType: 'none' }}>
              <li><span className="text-gray-500 font-bold">Category</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machines</li> 
              <li><span className="text-gray-500 font-bold">Brand</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weight King</li> 
              <li><span className="text-gray-500 font-bold">Condition</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New</li> 
              <li><span className="text-gray-500 font-bold">Stock</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</li> 
              <li><span className="text-gray-500 font-bold">Ships From</span>&nbsp;&nbsp;&nbsp;&nbsp;Valenzuela City, Metro Manila</li> 
            </ul>
          </div>
        </div>
        <br />

        {/* Product Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Product Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              ante magna. Donec efficitur, odio eget dictum vehicula, purus mi
              condimentum magna, sed tincidunt nulla arcu eget ipsum.
            </p>
          </div>
        </div>
        <br />

        {/* Product Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Product Ratings</h2>
            <p>⭐⭐⭐⭐</p>
          </div>
        </div>
        <br />

        {/* Reviews and Comments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Reviews and Comments</h2>
            {/* Add your review and comments section here */}
          </div>
        </div>
        <br />
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Treadmill;

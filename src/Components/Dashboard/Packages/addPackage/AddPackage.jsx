/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: Number(0),
    location: "",
    division: "",
    coverImage: "",
    duration: "",
    content: "",
    map: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tour-utopia.vercel.app/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Package Added Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Reset the form data
      setFormData({
        name: "",
        price: "",
        location: "",
        division: "",
        coverImage: "",
        duration: "",
        content: "",
        map: ""
      });
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h3 className="text-center text-2xl md:text-3xl font-bold pb-2 uppercase border-b-2 mb-2">
        Add Package
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            required
            placeholder="Name"
            type="text"
            name="name"
            className="p-2 border rounded-md w-full"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            required
            placeholder="Price"
            type="number"
            name="price"
            className="p-2 border rounded-md w-full"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            required
            placeholder="Location"
            type="text"
            name="location"
            className="p-2 border rounded-md w-full"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Division
          </label>
          <select
            required
            name="division"
            className="p-2 border rounded-md w-full"
            value={formData.division}
            onChange={handleInputChange}
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Cover Image
          </label>
          <input
            required
            placeholder="Image"
            type="text"
            name="coverImage"
            className="p-2 border rounded-md w-full"
            value={formData.coverImage}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Duration
          </label>
          <input
            required
            placeholder="Duration"
            type="text"
            name="duration"
            className="p-2 border rounded-md w-full"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            required
            placeholder="Tour Details...."
            name="content"
            rows={6}
            className="p-2 border rounded-md w-full"
            value={formData.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Map
          </label>
          <input
            required
            placeholder="Map"
            type="text"
            name="map"
            className="p-2 border rounded-md w-full"
            value={formData.map}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-span-2 flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
          >
            Submit
          </button>
          <Link to={"/dashboard/packages"}>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">
              Return
            </button>
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AddPackage;

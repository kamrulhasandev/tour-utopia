/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const AddPackage = ({ handleModalClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const division = e.target.division.value;
    const image = e.target.coverImage.value;
    const details = e.target.description.value;
    const duration = e.target.duration.value;
    const tourData = {
      name,
      price,
      location,
      division,
      image,
      details,
      duration,
    };
    console.log(tourData);

    try {
      const response = await fetch("http://localhost:5000/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Package added successfully!");
      handleModalClose();
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">

      <h3 className="text-center text-3xl font-bold pb-2 uppercase border-b-2 mb-2">Add Package</h3>
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
            type="text"
            name="name"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            required
            type="number"
            name="price"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            required
            type="text"
            name="location"
            className="p-2 border rounded-md w-full"
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
            type="text"
            name="coverImage"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Duration
          </label>
          <input
            required
            type="text"
            name="duration"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            required
            name="description"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="col-span-2 flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
          <button
            onClick={handleModalClose}
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackage;

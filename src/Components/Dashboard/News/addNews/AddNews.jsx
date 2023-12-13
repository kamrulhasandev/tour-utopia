/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNews = ({ handleModalClose, handleAddNewsClick }) => {
  const [formData, setFormData] = useState({
    headline: "",
    source: "",
    date: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
    handleModalClose();
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Headline
          </label>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Source
          </label>
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
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

export default AddNews;

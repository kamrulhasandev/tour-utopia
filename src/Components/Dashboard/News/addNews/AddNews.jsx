/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const AddNews = () => {
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
  };

  return (
    <div className="container mx-auto p-4 md:p-6">

      <h3 className="text-center text-2xl md:text-3xl font-bold pb-2 uppercase border-b-2 mb-2">Add News</h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Headline
          </label>
          <input
            required
            type="text"
            name="headline"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Source
          </label>
          <input
            required
            type="text"
            name="source"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            required
            type="date"
            name="date"
            className="p-2 border rounded-md w-full"
          />
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
            Content
          </label>
          <textarea
            required
            name="content"
            rows={6}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="col-span-2  flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
          >
            Submit
          </button>
          <Link to={'/dashboard/news'}>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Return
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default AddNews;

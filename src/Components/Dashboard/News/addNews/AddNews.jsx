/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = () => {
  const [formData, setFormData] = useState({
    headline: "",
    source: "",
    date: "",
    coverImage: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tour-utopia.vercel.app/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("News Added Successfully!", {
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
        headline: "",
        source: "",
        date: "",
        coverImage: "",
        content: "",
      });
    } catch (error) {
      console.error("Error adding news:", error);
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
        Add News
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Headline
          </label>
          <input
            placeholder="Headline"
            required
            type="text"
            name="headline"
            className="p-2 border rounded-md w-full"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Source
          </label>
          <input
            required
            placeholder="Source"
            type="text"
            name="source"
            className="p-2 border rounded-md w-full"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
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
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            required
            placeholder="News Details"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows={6}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="col-span-2 flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
          >
            Submit
          </button>
          <Link to="/dashboard/news">
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

export default AddNews;

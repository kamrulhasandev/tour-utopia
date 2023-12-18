/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverImage: "",
    date: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tour-utopia.vercel.app/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Blog Added Successfully!", {
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
        title: "",
        author: "",
        coverImage: "",
        date: "",
        content: "",
      });


    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h3 className="text-center text-2xl md:text-3xl font-bold pb-2 uppercase border-b-2 mb-2">
        Add Blog
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:grid grid-cols-2 gap-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            required
            placeholder="Title"
            type="text"
            name="title"
            className="p-2 border rounded-md w-full"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            required
            placeholder="Author"
            type="text"
            name="author"
            className="p-2 border rounded-md w-full"
            value={formData.author}
            onChange={handleChange}
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
            value={formData.coverImage}
            onChange={handleChange}
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
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            required
            placeholder="Blog Details........"
            name="content"
            rows={6}
            className="p-2 border rounded-md w-full"
            value={formData.content}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2  flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
          >
            Submit
          </button>
          <Link to={"/dashboard/blogs"}>
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

export default AddBlogs;

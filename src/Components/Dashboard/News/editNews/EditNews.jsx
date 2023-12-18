import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNews = () => {
  const { newsId } = useParams();
  const [formData, setFormData] = useState({
    headline: "",
    source: "",
    date: "",
    coverImage: "",
    content: "",
  });

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`https://tour-utopia.vercel.app/news/${newsId}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };
    fetchNewsDetails();
  }, [newsId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://tour-utopia.vercel.app/news/${newsId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("News Updated Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Failed to Update News!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error updating news:", error);
      toast.error("Error updating news");
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 md:p-6">
        <h3 className="text-center text-2xl md:text-3xl font-bold pb-2 uppercase border-b-2 mb-2">
          Edit News
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
              value={formData.headline}
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
              value={formData.source}
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
              value={formData.date}
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
              value={formData.coverImage}
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
              Update
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
    </div>
  );
};

export default EditNews;

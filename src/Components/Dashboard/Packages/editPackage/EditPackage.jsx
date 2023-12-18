import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPackage = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState({
    name: "",
    division: "",
    location: "",
    price: 0,
    coverImage: "",
    duration: "",
    content: "",
  });

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await fetch(
          `https://tour-utopia.vercel.app/packages/${packageId}`
        );
        const data = await response.json();
        setPackageDetails(data);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };
    fetchPackageDetails();
  }, [packageId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://tour-utopia.vercel.app/packages/${packageId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(packageDetails),
        }
      );

      if (response.ok) {
        toast.success("Package Update Successfully!", {
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
        toast.error("Failed to Update package!", {
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
      console.error("Error updating package:", error);
      toast.error("Error updating package");
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 md:p-6">
        <h3 className="text-center text-2xl md:text-3xl font-bold pb-2 uppercase border-b-2 mb-2">
          Edit Package
        </h3>
        <form
          className="mx-auto md:grid grid-cols-2 gap-4"
          onSubmit={handleUpdate}
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
              value={packageDetails?.name}
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
              value={packageDetails?.price}
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
              value={packageDetails?.location}
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
              value={packageDetails?.division}
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
              value={packageDetails?.coverImage}
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
              value={packageDetails?.duration}
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
              value={packageDetails?.content}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2 flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
            >
              Update
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
    </div>
  );
};

export default EditPackage;

import { useState } from "react";
import { Link } from "react-router-dom";

const SearchField = () => {
  const [formData, setFormData] = useState({
    destination: ""
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className=" p-8 bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form className="grid grid-cols-1 md:grid-cols-2   gap-2 items-center">
            {/* Destination Dropdown */}
            <div>
              <label htmlFor="destination" className="block text-gray-700 mb-2">
                Destination
              </label>
              <select
                value={formData.destination}
                onChange={handleInputChange}
                id="destination"
                name="destination"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Destination</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Barishal">Barishal</option>
                <option value="Khulna">Khulna</option>
                <option value="Sylhet">Sylhet </option>
                <option value="Rangpur ">Rangpur </option>
              </select>
            </div>
            {/* Search Button */}
            <div className="md:mt-8">
              <Link to={`/${formData.destination}`}>
                <button
                  type="button"
                  className="w-full bg-[#FF5522] text-white px-6 py-3 rounded-md hover:bg-[#ec7551] focus:outline-none"
                >
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchField;

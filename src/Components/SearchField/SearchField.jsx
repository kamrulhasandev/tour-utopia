const SearchField = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-5 ">
        <div className=" p-8 bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Destination Dropdown */}
            <div>
              <label htmlFor="destination" className="block text-gray-700 mb-2">
                Destination
              </label>
              <select
                id="destination"
                name="destination"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Destination</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
                <option value="new-york">New York</option>
              </select>
            </div>

            {/* Activity Type */}
            <div>
              <label htmlFor="activity" className="block text-gray-700 mb-2">
                Activity Type
              </label>
              <input
                type="text"
                id="activity"
                name="activity"
                placeholder="e.g., Adventure, Relaxation"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-gray-700 mb-2">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Search Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#FF5522] text-white px-6 py-2 rounded-md hover:bg-[#ec7551] focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchField;

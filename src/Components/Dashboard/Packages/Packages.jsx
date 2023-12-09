import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './Packages.css'

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dummyPackages.json");
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredPackages = packages
    .filter(
      (tourPackage) =>
        tourPackage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tourPackage.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tourPackage.division.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const pageCount = Math.ceil(
    packages.filter(
      (tourPackage) =>
        tourPackage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tourPackage.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tourPackage.division.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4 flex justify-between">
      <input
          type="text"
          placeholder="Search by name, location, or division"
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-500 py-2 px-2 rounded-lg text-white">Add Package</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-4 cursor-pointer">No</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Image</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Name</th>
              <th className="py-2 px-4 min-w-[150px] cursor-pointer">
                Division
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Location
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Price</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPackages.map((tourPackage, index) => (
              <tr
                key={tourPackage?.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4 ">
                  {currentPage * itemsPerPage + index + 1}
                </td>
                <td className="py-2 px-4 sm:table-cell">
                  <img
                    src={tourPackage?.coverImage}
                    alt={tourPackage?.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-2 px-4 sm:table-cell">{tourPackage?.name}</td>
                <td className="py-2 px-4 sm:table-cell">
                  {tourPackage?.division}
                </td>
                <td className="py-2 px-4 sm:table-cell">
                  {tourPackage?.location}
                </td>
                <td className="py-2 px-4 sm:table-cell">
                  ${tourPackage?.price}
                </td>
                <td className="py-2  flex gap-1  px-4 ">
                  <button className="bg-green-500 px-2 text-white py-1 text-xs rounded-full ">
                    Edit
                  </button>
                  <button className="bg-red-500 px-2 text-white py-1 text-xs rounded-full ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousClassName={"pagination-arrow"}
          nextClassName={"pagination-arrow"}
          pageClassName={"pagination-item"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Packages;

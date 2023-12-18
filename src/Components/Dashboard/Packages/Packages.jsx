import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Packages.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/packages");
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

  const handleDelete = (tourPackageId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://tour-utopia.vercel.app/packages/${tourPackageId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            // Update the state or refetch the data after deletion
            const updatedPackages = packages.filter(
              (tourPackage) => tourPackage._id !== tourPackageId
            );
            setPackages(updatedPackages);
          } else {
            Swal.fire({
              title: "Error",
              text: "Failed to delete the package.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting package:", error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while deleting the package.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">Packages Manage</h1>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search by name, location, or division"
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={"/dashboard/packages/addPackage"}>
          <button className="bg-green-500 py-2 px-2 rounded-lg text-white">
            Add Package
          </button>
        </Link>
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
                  <Link to={`/dashboard/packages/edit/${tourPackage._id}`}>
                    <button className="bg-green-500 px-2 text-white py-1 text-xs rounded-full ">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 px-2 text-white py-1 text-xs rounded-full "
                    onClick={() => handleDelete(tourPackage._id)}
                  >
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

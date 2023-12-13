import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dummyBlogs.json");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const pageCount = Math.ceil(
    blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">Blogs Manage</h1>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search by headline, source, or description"
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={"/dashboard/blogs/addBlog"}>
          <button className="bg-green-500 py-2 px-2 rounded-lg text-white">
            Add Blog
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-4 cursor-pointer">No</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Image</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Title</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Author</th>

              <th className="py-2 px-4 sm:table-cell cursor-pointer">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog, index) => (
              <tr
                key={blog?.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4 ">
                  {currentPage * itemsPerPage + index + 1}
                </td>
                <td className="py-2 px-4 sm:table-cell">
                  <img
                    src={blog?.image}
                    alt={blog?.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-2 px-4 sm:table-cell">{blog?.title}</td>
                <td className="py-2 px-4 sm:table-cell">{blog?.author}</td>

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

export default Blogs;

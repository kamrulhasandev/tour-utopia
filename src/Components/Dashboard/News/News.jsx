import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dummyNews.json");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredNews = news
    .filter(
      (article) =>
        article.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const pageCount = Math.ceil(
    news.filter(
      (article) =>
        article.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">News Manage</h1>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search by headline, source, or description"
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={"/dashboard/news/addNews"}>
          <button className="bg-green-500 py-2 px-2 rounded-lg text-white">
            Add News
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-4 cursor-pointer">No</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Image</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Headline
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Source</th>

              <th className="py-2 px-4 sm:table-cell cursor-pointer">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.map((article, index) => (
              <tr
                key={article?.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4 ">
                  {currentPage * itemsPerPage + index + 1}
                </td>
                <td className="py-2 px-4 sm:table-cell">
                  <img
                    src={article?.image}
                    alt={article?.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-2 px-4 sm:table-cell">{article?.headline}</td>
                <td className="py-2 px-4 sm:table-cell">{article?.source}</td>

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

export default News;

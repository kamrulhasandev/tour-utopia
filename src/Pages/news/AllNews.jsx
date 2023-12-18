import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/news");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pt-20">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url('./news.jpg')`,
        }}
        className="w-full bg-center bg-cover h-72 flex justify-center items-center pt-[64px]" // Adjust the height as needed
      >
        <h3 className="text-white text-3xl md:text-5xl font-bold">News</h3>
      </div>
      <div className="container mx-auto px-5 md:px-0 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {data.map((item) => (
          <Link
            to={`/news/${item?._id}`}
            className="flex flex-col shadow-sm rounded-md p-5"
            key={item._id}
          >
            <div className="overflow-hidden">
              <img
                src={item?.coverImage}
                className="w-full h-[220px] object-cover hover:scale-125 duration-300 transition-all"
                alt=""
              />
            </div>
            <p className="my-2 font-medium text-blue-600">{item?.source}</p>
            <h1 className="text-2xl flex-grow">{item?.headline}</h1>
            <button className="bg-[#FF5522]  mt-3 flex justify-center py-3 px-6 rounded-md text-white hover:bg-[#ec7551] transition-all w-32">
              Read More
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;

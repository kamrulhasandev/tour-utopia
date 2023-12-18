import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
    const [data, setData] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch("https://tour-utopia.vercel.app/blogs");
           const result = await response.json();
           setData(result);
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };

       fetchData();
     }, []);
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url('./blog.jpg')`,
        }}
        className="w-full bg-center bg-cover h-72 flex justify-center items-center pt-[64px]" // Adjust the height as needed
      >
        <h3 className="text-white text-3xl md:text-5xl font-bold">Blog</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container px-5 md:px-0 mx-auto py-10">
        {data.map((item) => (
          <div key={item._id} className="shadow-2xl rounded-2xl">
            <Link to={`/blog/${item._id}`}>
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  className="rounded-t-2xl h-[500px] w-full object-cover hover:scale-150 duration-700 transition-all"
                  src={item.coverImage}
                  alt=""
                />
              </div>
              <div className="p-5">
                <strong className="flex items-center gap-3">
                  <span className="text-[#FF5522] ">
                    <FaCalendar />
                  </span>
                  {item.date}
                </strong>
                <h1 className="my-5 text-3xl font-bold hover:text-[#FF5522] transition-all">
                  {item.title}
                </h1>
                <p className="text-gray-400 text-[19px] mb-5">
                  {item.content.substring(0, 200)}....
                </p>
                <button className="bg-[#FF5522]  flex justify-center py-3 px-6 rounded-md text-white hover:bg-[#ec7551] transition-all w-32">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import { useEffect, useState } from "react";
import {
  FaCalendar,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);
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
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/blogs");
        const result = await response.json();
        setBlog(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  const singleData = data.find((item) => item._id === id);
  console.log(singleData);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url(${singleData?.coverImage})`,
        }}
        className="w-full bg-center bg-cover h-72 flex justify-center items-center pt-[64px]" // Adjust the height as needed
      >
        <div className="text-center">
          <h3 className="text-white text-2xl md:text-4xl font-bold">
            {singleData?.title}
          </h3>
          <h3 className="text-white font-bold text-[20px] mt-3">
            {singleData?.author}
          </h3>
        </div>
      </div>
      <div className="container px-5 md:px-0  mx-auto my-10 space-y-10">
        <p className="text-center text-[#494848] font-bold relative border-b-2 border-gray-400 pb-4 w-40 mx-auto">
          {singleData?.date}
        </p>
        <img
          src={singleData?.coverImage}
          className="w-full md:w-3/4 object-cover mx-auto h-1/2 md:h-screen"
          alt=""
        />
        <div className="md:flex justify-between border-y-[1px] border-[#494848] py-6">
          <div className="flex gap-6 text-center md:text-left items-center">
            
            <div>
              <p className="text-[#494848] ">Written By</p>
              <p className="text-2xl font-bold mt-2 text-orange-700">
                {singleData?.author}
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-normal items-center mt-3 md:mt-0 gap-3">
            <FaFacebook className="h-12 cursor-pointer text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaTwitter className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaGoogle className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaInstagram className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
          </div>
        </div>
        <p className="text-3xl font-bold">{singleData?.title}</p>
        <p className="text-[#6b6969] text-[22px] font-normal leading-10">
          {singleData?.content}
        </p>
        <h1 className="text-3xl font-bold">Related Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {blog.slice(0, 4).map((item) => (
            <div key={item.id} className="shadow-2xl rounded-2xl">
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
    </div>
  );
};

export default BlogDetails;

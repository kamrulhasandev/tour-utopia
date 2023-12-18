import { useEffect, useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
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
  }, [id]);
  const singleData = data.find((item) => item._id === id);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url(${singleData?.coverImage})`,
        }}
        className="w-full bg-center bg-cover h-72 flex justify-center items-center pt-[64px]" // Adjust the height as needed
      >
        <h3 className="text-white text-3xl md:text-5xl font-bold">News</h3>
      </div>
      <div className="container mx-auto px-5 md:px-0 my-20 space-y-5">
        <h1 className="text-2xl font-bold">{singleData?.headline}</h1>
        <small>{singleData?.source}</small> <br />
        <small>{singleData?.date}</small>
        <div className="flex justify-center border-y-[1px] border-[#8f8d8d] py-6">
          <div className="flex justify-center md:justify-normal items-center mt-3 md:mt-0 gap-3">
            <FaFacebook className="h-12 cursor-pointer text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaTwitter className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaGoogle className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
            <FaInstagram className="h-12 cursor-pointer  text-[20px] w-12 rounded-full border-[1px] bg-white border-orange-600 text-orange-700 p-3 grid place-items-center transition-all hover:text-white hover:bg-orange-700" />
          </div>
        </div>
        <img
          className="h-1/2 md:h-screen-[500px] w-3/4 mx-auto object-cover"
          src={singleData?.coverImage}
          alt=""
        />
        <p className="text-[#6b6969] text-[22px] font-normal leading-10">
          {singleData?.content}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;

import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Packages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/packages");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRandomSubset = (array, size) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, size);
  };

  const randomDataSubset = getRandomSubset(data, 6);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5">
        <p className="text-[#FF2200] font-bold mt-20">Packages</p>
        <h3 className="text-4xl font-bold">Travel Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 py-10">
          {randomDataSubset.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl">
              <div>
                <div className="image-container rounded-t-2xl">
                  <div className="relative">
                    <img
                      className="rounded-t-2xl h-48 w-full object-cover"
                      src={item.coverImage}
                      alt=""
                    />
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="p-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <p className="text-[#FF5522] font-bold text-lg">
                        {item.location}
                      </p>
                      <Link target="_blank" to={item?.map}>
                        <CiLocationOn className="text-[25px] text-[#FF5522]" />
                      </Link>
                    </div>
                    <h6 className="text-xl font-semibold text-[#6C7171]">
                      {item.name}
                    </h6>
                    <div className="flex justify-between items-center">
                      <p className="flex  items-center gap-1">
                        <FaClock className="text-[#FF5522]" size={15} />
                        <span className="text-[#6C7171] font-bold uppercase">
                          {item.duration} hours
                        </span>
                      </p>
                      <p className="text-[#FF5522] font-bold">
                        {item.division}
                      </p>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between">
                    {/* <p className="flex items-center gap-1">
                      <FaStar />
                      <span className="text-[#6C7171]">4.9</span>
                    </p> */}
                    <p className="text-[#6C7171]">
                      Start From:{" "}
                      <span className="text-[#FF5522] font-bold">
                        {item.price}
                      </span>
                    </p>
                    <Link to={`/package/${item._id}`}>
                      <FaArrowRight className="text-[#FF5522] font-bold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;

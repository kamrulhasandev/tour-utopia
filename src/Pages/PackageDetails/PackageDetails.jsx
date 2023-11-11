import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const matchingResults = data.find((item) => item.id == id);

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%), url(${matchingResults?.image})`,
        }}
        className="w-full bg-center bg-cover  h-[30vh] flex justify-center items-center flex-col pt-[64px]"
      >
        <h5 className="text-white text-2xl font-bold">
          {matchingResults?.location}
        </h5>
        <hp className="text-white text-2xl">{matchingResults?.name}</hp>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className="md:w-3/5">
          <div>
            <img src={matchingResults?.image} alt="" />
            <div className="flex justify-between py-5 overflow-x-auto md:overflow-x-hidden gap-1">
            {matchingResults?.gallery?.map((item, index) => (
              <img key={index} src={item} className="w-36"/>
            ))}
            </div>
          </div>
        </div>
        <div className="md:w-2/5"></div>
      </div>
    </div>
  );
};

export default PackageDetails;

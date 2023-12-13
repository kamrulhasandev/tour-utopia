import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import Loader from "../../Components/loader/Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dummyBlogs.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  if (navigation.state === "loading") {
    return <Loader />;
  }
  console.log(data);
  const singleData = data.find((item) => item.id === id);
  console.log(singleData);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url(${singleData?.image})`,
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
      <div className="container mx-auto">
        <h2>{singleData?.title}</h2>
      </div>
    </div>
  );
};

export default BlogDetails;

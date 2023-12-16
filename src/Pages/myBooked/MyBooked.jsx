import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const MyBooked = () => {
  const [data, setData] = useState([]);

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
  const deleteItem = async (itemId) => {
    try {
      await fetch(`/booked/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setData((prevData) => prevData.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <div className="py-[80px] mt-20 container mx-auto px-5 md:px-0">
      <h1 className="text-center text-2xl font-bold">My Booked</h1>
      <hr className="my-10" />
      {data.length === 0 && (
        <h1 className="text-[20px] text-center text-red-600 font-bold my-10">
          No Favorite Selected Yet
        </h1>
      )}
      <div className="mt-10">
        {data.map((item) => (
          <div key={item} className="grid grid-cols-6 gap-4 mt-3 shadow-sm p-3">
            <img className="w-10 h-10 rounded-full" src={item.image} alt="" />
            <p className="">{item.name}</p>
            <p className="">{item.location}</p>
            <p className="">{item.duration}</p>
            <p className="">{item.price}</p>
            <FaTrash
              onClick={() => deleteItem(item._id)}
              className="text-red-700 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooked;

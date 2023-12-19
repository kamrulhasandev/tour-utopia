import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardHome = () => {
  const [users, setUsers] = useState([]);
  const [packages, setPackage] = useState([]);
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch("https://tour-utopia.vercel.app/users");

         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = await response.json();

         setUsers(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

     fetchData();
   }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://tour-utopia.vercel.app/packages"
          );
          const result = await response.json();
          setPackage(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://tour-utopia.vercel.app/blogs");
          const result = await response.json();
          setBlogs(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://tour-utopia.vercel.app/news");
          const data = await response.json();
          setNews(data);
        } catch (error) {
          console.error("Error fetching news data:", error);
        }
      };
      fetchData();
    }, []);
  const data = [
    { name: "Total Users", value: users.length },
    { name: "Total Packages", value: packages.length },
    { name: "Total News", value: news.length },
    { name: "Total Blogs", value: blogs.length },
  ];
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4 gap-5 text-white text-center">
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Users</p>
          <h5 className="font-bold text-[20px]">{users.length}</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Packages</p>
          <h5 className="font-bold text-[20px]">{packages.length}</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total News</p>
          <h5 className="font-bold text-[20px]">{news.length}</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Blogs</p>
          <h5 className="font-bold text-[20px]">{blogs.length}</h5>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
        <LineChart
          className="w-full mt-10"
          width={window.innerWidth < 600 ? window.innerWidth : 950}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default DashboardHome;

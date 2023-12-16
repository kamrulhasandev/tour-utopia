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
  const data = [
    { name: "Total Users", value: 40 },
    { name: "Total Packages", value: 47 },
    { name: "Total News", value: 34 },
    { name: "Total Blogs", value: 54 },
  ];
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4 gap-5 text-white text-center">
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Users</p>
          <h5 className="font-bold text-[20px]">40</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Packages</p>
          <h5 className="font-bold text-[20px]">47</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total News</p>
          <h5 className="font-bold text-[20px]">34</h5>
        </div>
        <div className="bg-green-500 px-10 py-10">
          <p className="font-bold text-[22px]">Total Blogs</p>
          <h5 className="font-bold text-[20px]">54</h5>
        </div>
      </div>
      <div>
        <LineChart
          className="w-full mt-10"
          width={950}
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

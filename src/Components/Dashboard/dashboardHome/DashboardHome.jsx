const DashboardHome = () => {
  return (
    <div className="container mx-auto p-6">
      <div className=" md:flex justify-between ">
        <div className="bg-green-500 px-10 py-3 rounded-md text-white font-bold my-2 md:my0">
          <p>Total Users</p>
          <h5>100</h5>
        </div>
        <div className="bg-[#2B2A4C] px-10 py-3 rounded-md text-white font-bold my-2 md:my0">
          <p>Total Packages</p>
          <h5>100</h5>
        </div>
        <div className="bg-[#5FBDFF] px-10 py-3 rounded-md text-white font-bold my-2 md:my0">
          <p>Total News</p>
          <h5>100</h5>
        </div>
        <div className="bg-[#860A35] px-10 py-3 rounded-md text-white font-bold my-2 md:my0">
          <p>Total Blogs</p>
          <h5>100</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

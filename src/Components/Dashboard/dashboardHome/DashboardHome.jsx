const DashboardHome = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between">
        <div className="bg-green-500 px-10 py-3">
          <p>Total Users</p>
          <h5>100</h5>
        </div>
        <div className="bg-green-500 px-10 py-3">
          <p>Total Packages</p>
          <h5>100</h5>
        </div>
        <div className="bg-green-500 px-10 py-3">
          <p>Total News</p>
          <h5>100</h5>
        </div>
        <div className="bg-green-500 px-10 py-3">
          <p>Total Blogs</p>
          <h5>100</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

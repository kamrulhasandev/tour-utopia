import { useState, useEffect } from "react";

const DashboardHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPackages, setTotalPackages] = useState(0);
  const [totalNews, setTotalNews] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total users
        const usersResponse = await fetch("http://localhost:5000/users");
        const usersData = await usersResponse.json();
        setTotalUsers(usersData);

        // Fetch total packages
        const packagesResponse = await fetch("http://localhost:5000/packages");
        const packagesData = await packagesResponse.json();
        setTotalPackages(packagesData);

        // Fetch total news
        const newsResponse = await fetch("http://localhost:5000/news");
        const newsData = await newsResponse.json();
        setTotalNews(newsData);

        // Fetch total blogs
        const blogsResponse = await fetch("http://localhost:5000/blogs");
        const blogsData = await blogsResponse.json();
        setTotalBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="md:flex justify-between">
        <div className="bg-green-500 px-10 py-3 rounded-md text-white font-bold my-2 md:my-0">
          <p>Total Users</p>
          <h5>{totalUsers.length}</h5>
        </div>
        <div className="bg-[#2B2A4C] px-10 py-3 rounded-md text-white font-bold my-2 md:my-0">
          <p>Total Packages</p>
          <h5>{totalPackages.length}</h5>
        </div>
        <div className="bg-[#5FBDFF] px-10 py-3 rounded-md text-white font-bold my-2 md:my-0">
          <p>Total News</p>
          <h5>{totalNews.length}</h5>
        </div>
        <div className="bg-[#860A35] px-10 py-3 rounded-md text-white font-bold my-2 md:my-0">
          <p>Total Blogs</p>
          <h5>{totalBlogs.length}</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

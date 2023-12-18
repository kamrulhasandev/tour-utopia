import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = sortBy
    ? [...filteredUsers].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      })
    : filteredUsers;

  const handleSort = (key) => {
    setSortBy(key === sortBy ? null : key);
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">User Manage</h1>
      <div className="py-5">
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md outline-none"
          />
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <button
              onClick={() => handleSort("name")}
              className={`font-semibold ${
                sortBy === "name" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Name
            </button>
            <button
              onClick={() => handleSort("email")}
              className={`font-semibold ${
                sortBy === "email" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => handleSort("role")}
              className={`font-semibold ${
                sortBy === "role" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Role
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th
                className="py-2 px-4 min-w-[150px] cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name
              </th>
              <th
                className="py-2 px-4 sm:table-cell cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email
              </th>
              <th
                className="py-2 px-4 sm:table-cell cursor-pointer"
                onClick={() => handleSort("role")}
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr
                key={user.email}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4 sm:min-w-[150px]">{user.name}</td>
                <td className="py-2 px-4 sm:table-cell">{user.email}</td>
                <td className="py-2 px-4 sm:table-cell">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

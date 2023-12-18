import { useEffect, useState } from "react";

const Booked = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/orders");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Check the console to verify the structure of the data
        setBookings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">Booking Management</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-4 cursor-pointer">No</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Name</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Price</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Customer Name</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Customer Email</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Customer Phone</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 sm:table-cell">{booking.productName}</td>
                <td className="py-2 px-4 sm:table-cell">{booking.price}</td>
                <td className="py-2 px-4 sm:table-cell">{booking.userName}</td>
                <td className="py-2 px-4 sm:table-cell">{booking.userEmail}</td>
                <td className="py-2 px-4 sm:table-cell">{booking.userPhoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booked;

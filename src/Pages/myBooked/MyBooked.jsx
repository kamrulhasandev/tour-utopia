import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaPen } from "react-icons/fa";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";

const MyBooked = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tour-utopia.vercel.app/orders/${user?.email}`
        );
        const result = await response.json();
        setBookings(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user?.email]);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-32 min-h-[100vh]">
      <h1 className="text-center text-3xl font-bold pb-10">My Booking</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-4 cursor-pointer">No</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Name</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Price</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Trax ID
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Customer Email
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Customer Phone
              </th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">
                Give Review
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 sm:table-cell">
                    {booking.productName}
                  </td>
                  <td className="py-2 px-4 sm:table-cell">{booking.price}</td>
                  <td className="py-2 px-4 sm:table-cell">
                    {booking.transactionId?.slice(0, 26)}
                  </td>
                  <td className="py-2 px-4 sm:table-cell">
                    {booking.userEmail}
                  </td>
                  <td className="py-2 px-4 sm:table-cell">
                    {booking.userPhoneNo}
                  </td>
                  <td className="py-2 px-4 sm:table-cell">
                    <button
                      className="bg-green-300 p-3 rounded-md"
                      onClick={() => openModal(booking)}
                    >
                      <FaPen />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-2 px-4 text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {isModalOpen && (
          <ReviewModal booking={selectedBooking} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default MyBooked;
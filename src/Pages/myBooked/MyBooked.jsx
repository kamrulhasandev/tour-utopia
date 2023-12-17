import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaPen  } from "react-icons/fa";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";


const MyBooked = () => {
  const {user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/orders/${user?.email}`);
        const result = await response.json();
        console.log(result);
        setBooking(result);
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
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Trax ID</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Customer Email</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Customer Phone</th>
              <th className="py-2 px-4 sm:table-cell cursor-pointer">Give Review</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 sm:table-cell">{booking?.orderDetails?.tourName}</td>
                <td className="py-2 px-4 sm:table-cell">{booking?.orderDetails?.price}</td>
                <td className="py-2 px-4 sm:table-cell">{booking?.tranId}</td>
                <td className="py-2 px-4 sm:table-cell">{booking?.orderDetails?.userEmail}</td>
                <td className="py-2 px-4 sm:table-cell">{booking?.orderDetails?.phoneNo}</td>
                <td className="py-2 px-4 sm:table-cell"><button className="bg-green-300 p-3 rounded-md" onClick={() => openModal(booking)}>
                    <FaPen />
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <ReviewModal
            booking={selectedBooking}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default MyBooked;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const ReviewModal = ({ booking, onClose }) => {
  const [reviewText, setReviewText] = useState("");
  const [userName, setUserName] = useState("");

  const sendReview = async () => {
    try {
      const response = await fetch("https://tour-utopia.vercel.app/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId: booking?.matchingResultId,
          userName: userName, 
          reviewText: reviewText,
        }),
      });
      // Handle response as needed (e.g., show success message)
      alert("FeedBack Sent")
      console.log("Review sent successfully");
    } catch (error) {
      console.error("Error sending review:", error);
    }

    // Close the modal after sending the review
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-4 rounded-md z-10">
        <span className="cursor-pointer absolute top-4 right-4" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-lg font-semibold mb-4">Review for: {booking?.orderDetails?.tourName}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your review..."
          className="w-full p-2 border rounded-md mb-4"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={sendReview}
          >
            Send Review
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

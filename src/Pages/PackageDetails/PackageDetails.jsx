import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaArrowRight, FaClock, FaStar } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { CiLocationOn } from "react-icons/ci";

const PackageDetails = () => {
  const [data, setData] = useState([]);
  const [showNotLoggedInPopup, setShowNotLoggedInPopup] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(user);

  const [bookingForm, setBookingForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phoneNumber: "",
  });

  // Update form field values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/packages");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
  console.log(users);

  const matchingResults = data.find((item) => item._id == id);
  console.log(matchingResults);
  const popularTour = data.filter(
    (item) => item.division === matchingResults?.division
  );

  //payment---------------------------------

  const handleBookNow = async () => {
    // Check if the user is logged in
    if (!user?.email) {
      // Redirect to the login page
      navigate("/login");
      return;
    }

    // Check if required form fields are filled
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phoneNumber) {
      alert("Please fill out the form");
      return;
    }

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

    // Assuming matchingResults is defined in your frontend
    const matchingResult = matchingResults;

    try {
      const response = await fetch(
        "https://tour-utopia.vercel.app/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            matchingResult,
            userEmail: bookingForm.email,
            userName: bookingForm.name,
            userPhoneNo: bookingForm.phoneNumber,
          }),
        }
      );

      if (response.ok) {
        const session = await response.json();

        // Redirect the user to the Stripe Checkout page with only the sessionId
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          // Handle errors
          console.error(result.error.message);
        }
      } else {
        // Handle errors with the server response
        console.error("Server error:", response.status, response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%), url(${matchingResults?.coverImage})`,
        }}
        className="w-full bg-center bg-cover  h-[30vh] flex justify-center items-center flex-col pt-[64px]"
      >
        <h5 className="text-white text-2xl font-bold">
          {matchingResults?.division}
        </h5>
        <hp className="text-white text-2xl">{matchingResults?.name}</hp>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className=" md:flex justify-between gap-10">
          <div className="md:w-3/5">
            <div>
              <img src={matchingResults?.coverImage} alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-10 items-center">
                <p className="text-[#FF5522] text-2xl font-bold">
                  {matchingResults?.location}
                </p>
                <p className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  4.9
                </p>
                <p className="text-[#6C7171]">{matchingResults?.division}</p>
              </div>
              <h1 className="text-5xl font-bold text-[#6C7171]">
                {matchingResults?.name}
              </h1>
              <div>
                <p className="flex items-center gap-1 uppercase">
                  <FaClock className="text-[#FF5522]" />{" "}
                  {matchingResults?.duration} hours
                </p>
              </div>
              <div>
                <h6 className="text-2xl font-bold text-[#6C7171]">
                  Tour Details
                </h6>
                <p className="text-lg text-[#6C7171]">
                  {matchingResults?.content}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="shadow-2xl">
              <div className="flex items-center gap-3 bg-[#FF5522] text-white p-5">
                <h4 className="text-3xl font-bold">
                  BDT {matchingResults?.price}{" "}
                  <span className="text-base"> / Per Person</span>
                </h4>
              </div>
              <form>
                <div className="p-5 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <label
                      className="w-2/5 font-bold text-[#6C7171]"
                      htmlFor="name"
                    >
                      Full Name:{" "}
                    </label>
                    <input
                      className="w-[100%] border-2 p-2 rounded-md"
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label
                      className="w-2/5 font-bold text-[#6C7171]"
                      htmlFor="email"
                    >
                      Email :{" "}
                    </label>
                    <input
                      className="w-[100%] border-2 p-2 rounded-md"
                      type="text"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label
                      className="w-2/5 font-bold text-[#6C7171]"
                      htmlFor="phoneNumber"
                    >
                      Mobile :{" "}
                    </label>
                    <input
                      className="w-[100%] border-2 p-2 rounded-md"
                      type="text"
                      name="phoneNumber"
                      placeholder="Mobile Number"
                      value={bookingForm.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button
                  onClick={handleBookNow}
                  type="button"
                  className="bg-[#FF5522] font-bold py-3 text-white w-full"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Popular tour  */}

        <div className="pt-20 pb-5">
          <h3 className="text-4xl font-bold">
            Popular Tour in {popularTour[0]?.division}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 py-10">
          {popularTour.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl">
              <div>
                <div className="image-container rounded-t-2xl">
                  <div className="relative">
                    <img
                      className="rounded-t-2xl h-48 w-full object-cover"
                      src={item.coverImage}
                      alt=""
                    />
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="p-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <p className="text-[#FF5522] font-bold text-lg">
                        {item.location}
                      </p>
                      <Link target="_blank" to={item?.map}>
                        <CiLocationOn className="text-[25px] text-[#FF5522]" />
                      </Link>
                    </div>
                    <h6 className="text-xl font-semibold text-[#6C7171]">
                      {item.name}
                    </h6>
                    <div className="flex justify-between items-center">
                      <p className="flex  items-center gap-1">
                        <FaClock className="text-[#FF5522]" size={15} />
                        <span className="text-[#6C7171] font-bold uppercase">
                          {item.duration} hours
                        </span>
                      </p>
                      <p className="text-[#FF5522] font-bold">
                        {item.division}
                      </p>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between">
                    {/* <p className="flex items-center gap-1">
                      <FaStar />
                      <span className="text-[#6C7171]">4.9</span>
                    </p> */}
                    <p className="text-[#6C7171]">
                      Start From:{" "}
                      <span className="text-[#FF5522] font-bold">
                        {item.price}
                      </span>
                    </p>
                    <Link to={`/package/${item._id}`}>
                      <FaArrowRight className="text-[#FF5522] font-bold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showNotLoggedInPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-2xl font-bold text-[#6C7171] mb-4">
                You are not logged in!
              </p>
              <p className="text-lg text-[#6C7171]">
                Please login to proceed with the booking.
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setShowNotLoggedInPopup(false);
                    navigate("/login");
                  }}
                  className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowNotLoggedInPopup(false)}
                  className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetails;

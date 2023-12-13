import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaClock, FaStar, FaLongArrowAltRight } from "react-icons/fa";

const PackageDetails = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotLoggedInPopup, setShowNotLoggedInPopup] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const matchingResults = data.find((item) => item.id == id);
  console.log(matchingResults);
  const popularTour = data.filter(
    (item) => item.location === matchingResults?.location
  );
  console.log(popularTour);

  const handleBookNow = () => {
    if (user?.email) {
      // User is logged in, show booking success popup
      setShowPopup(true);
    } else {
      // User is not logged in, show not logged in popup
      setShowNotLoggedInPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%), url(${matchingResults?.image})`,
        }}
        className="w-full bg-center bg-cover  h-[30vh] flex justify-center items-center flex-col pt-[64px]"
      >
        <h5 className="text-white text-2xl font-bold">
          {matchingResults?.location}
        </h5>
        <hp className="text-white text-2xl">{matchingResults?.name}</hp>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className=" md:flex justify-between gap-10">
          <div className="md:w-3/5">
            <div>
              <img src={matchingResults?.image} alt="" />
              <div className="flex justify-between py-5 overflow-x-auto md:overflow-x-hidden gap-1">
                {matchingResults?.gallery?.map((item, index) => (
                  <img key={index} src={item} className="w-36" />
                ))}
              </div>
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
                <p className="text-[#6C7171]">{matchingResults?.category}</p>
              </div>
              <h1 className="text-5xl font-bold text-[#6C7171]">
                {matchingResults?.name}
              </h1>
              <div>
                <p className="flex items-center gap-1 uppercase">
                  <FaClock className="text-[#FF5522]" />{" "}
                  {matchingResults?.duration}
                </p>
              </div>
              <div>
                <h6 className="text-2xl font-bold text-[#6C7171]">
                  Tour Details
                </h6>
                <p className="text-lg text-[#6C7171]">
                  {matchingResults?.details}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="shadow-2xl">
              <div className="flex items-center gap-3 bg-[#FF5522] text-white p-5">
                <small>
                  Start
                  <br />
                  From
                </small>
                <h4 className="text-4xl font-bold">
                  ${matchingResults?.price}{" "}
                  <span className="text-base"> / Per Person</span>
                </h4>
              </div>
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
                    name=""
                    value={user?.displayName}
                    id=""
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label
                    className="w-2/5 font-bold text-[#6C7171]"
                    htmlFor="name"
                  >
                    Email :{" "}
                  </label>
                  <input
                    className="w-[100%] border-2 p-2 rounded-md"
                    type="text"
                    name=""
                    value={user?.email}
                    id=""
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label
                    className="w-2/5 font-bold text-[#6C7171]"
                    htmlFor="name"
                  >
                    Mobile :{" "}
                  </label>
                  <input
                    className="w-[100%] border-2 p-2 rounded-md"
                    type="text"
                    name=""
                    placeholder="Mobile Number"
                    id=""
                  />
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className="bg-[#FF5522] font-bold py-3 text-white w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* extra details  */}
        <div className="pt-10">
          <h5 className="text-[#6C7171] text-xl font-bold">HighLights</h5>
          <ul className="flex flex-col gap-2 py-2">
            {matchingResults?.highlights?.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaLongArrowAltRight className="text-[#FF5522]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-10">
          <h5 className="text-[#6C7171] text-xl font-bold">Recommendation</h5>
          <ul className="flex flex-col gap-2 py-2">
            {matchingResults?.recommendedGear?.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaLongArrowAltRight className="text-[#FF5522]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular tour  */}

        <div className="pt-20 pb-5">
          <h3 className="text-4xl font-bold">
            Popular Tour in {popularTour[0]?.location}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 py-10">
          {popularTour.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl">
              <Link to={`/package/${item.id}`}>
                <div className="image-container rounded-t-2xl">
                  <img className="rounded-t-2xl" src={item.image} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="p-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#FF5522] font-bold text-lg">
                      {item.location}
                    </p>
                    <h6 className="text-xl font-semibold text-[#6C7171]">
                      {item.name}
                    </h6>
                    <div className="flex justify-between items-center">
                      <p className="flex  items-center gap-1">
                        <FaClock className="text-[#FF5522]" size={15} />
                        <span className="text-[#6C7171] font-bold uppercase">
                          {item.duration}
                        </span>
                      </p>
                      <p className="text-[#FF5522] font-bold">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                      <FaStar />
                      <span className="text-[#6C7171]">4.9</span>
                    </p>
                    <p className="text-[#6C7171]">
                      Start From:{" "}
                      <span className="text-[#FF5522] font-bold">
                        ${item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Popup for booking success*/}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-2xl font-bold text-[#6C7171] mb-4">
                Booking Successful!
              </p>
              <p className="text-lg text-[#6C7171]">
                Thank you for booking with us.
              </p>
              <button
                onClick={closePopup}
                className="mt-4 bg-[#FF5522] text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Popup for not logged in */}

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

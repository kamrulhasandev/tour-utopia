import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaClock, FaHeart} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Destination = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const toggleFavorite = (card) => {
    if (!user) {
      alert("you need to login first");
      return;
    }

    const isFavorite = favorites.some(
      (favCard) => favCard._id === card._id && favCard.user_email === user.email
    );

    const updatedCard = { ...card, user_email: user.email };

    const updatedFavorites = isFavorite
      ? favorites.filter(
          (favCard) =>
            favCard._id !== card._id || favCard.user_email !== user.email
        )
      : [...favorites, updatedCard];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
  const filteredCard = data.filter((item) =>
    item.location.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    const checkUserRole = async () => {
      // Fetch user role from the server
      const response = await fetch(
        `https://tour-utopia.vercel.app/checkUserRole/${user?.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch user role");
        return;
      }

      const data = await response.json();
      console.log(data.isAdmin);
      setIsAdmin(data.isAdmin);
    };

    checkUserRole();
  }, [user?.email]);
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url('./banner1.jpg')`,
        }}
        className="w-full bg-center bg-cover h-64 flex justify-center items-center pt-[64px]" // Adjust the height as needed
      >
        <h3 className="text-white text-3xl md:text-5xl font-bold">
          Destinations
        </h3>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="w-1/2 mx-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search By Location "
            className="p-3 outline-none rounded-md w-full mt-8 border-2 border-gray-400"
            type="text"
          />
        </div>
        {filteredCard.length === 0 && (
          <h1 className="text-3xl text-center font-bold my-4">
            There is no matched location
          </h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 py-10">
          {filteredCard.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl">
              <div>
                <div className="image-container rounded-t-2xl">
                  <div className="relative">
                    <img
                      className="rounded-t-2xl h-48 w-full object-cover"
                      src={item.coverImage}
                      alt=""
                    />
                    {user && !isAdmin && (
                      <FaHeart
                        onClick={() => toggleFavorite(item)}
                        className={`absolute top-3 cursor-pointer right-4 text-[20px] ${
                          favorites.some((favItem) => favItem._id === item._id)
                            ? "text-red-500"
                            : "text-white"
                        }`}
                      />
                    )}
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
      </div>
    </div>
  );
};

export default Destination;

import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Saved = () => {
    const {user} = useContext(AuthContext)
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const filterItem = favorites.filter((item) => item.user_email === user?.email);
  console.log(filterItem);

  const deleteFavorite = (id) => {
    const updatedFavorites = favorites.filter((item) => item._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <div className="py-[80px] min-h-[calc(100vh-300px)] mt-20 container mx-auto px-5 md:px-0">
      <h1 className="text-center text-2xl font-bold">My Favorites</h1>
      <hr className="my-10" />
      {filterItem.length === 0 && (
        <h1 className="text-[20px] text-center text-red-600 font-bold my-10">
          No Favorite Selected Yet
        </h1>
      )}
      <div className="mt-10">
        {filterItem.map((item) => (
          <div key={item} className="grid grid-cols-6 gap-4 mt-3 shadow-sm p-3">
            <img
              className="w-10 h-10 rounded-full"
              src={item.coverImage}
              alt=""
            />
            <p className="font-bold">{item.name}</p>
            <p className="font-bold">{item.location}</p>
            <p className="font-bold">{item.duration}</p>
            <p className="font-bold">{item.price}</p>
            <FaTrash
              onClick={() => deleteFavorite(item._id)}
              className="text-red-700 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;

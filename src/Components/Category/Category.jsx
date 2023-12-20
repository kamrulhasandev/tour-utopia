const Category = () => {
  const category = [
    { id: 1, image: "./city.png", name: "City Tours", quantity: "10 Tours+" },
    { id: 1, image: "./beach.png", name: "Beaches", quantity: "10 Tours+" },
    { id: 1, image: "./boat.png", name: "Boat Tours", quantity: "10 Tours+" },
    {
      id: 1,
      image: "./adventurer.png",
      name: " Adventure",
      quantity: "10 Tours+",
    },
    { id: 1, image: "./diet.png", name: "Food", quantity: "10 Tours+" },
    { id: 1, image: "./hiking.png", name: "Hiking", quantity: "10 Tours+" },
  ];

  return (
    <div className="py-10 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center pb-6">
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 justify-center items-center gap-5 ">
          {category.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(233,138,109,0.50)] py-5 rounded-md border-2 border-transparent hover:border-[#FF5522] transition-all "
            >
              <img className="h-10 w-10" src={item.image} alt="" />
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-400">{item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

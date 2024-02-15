import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const slider = [
    {
      id: 1,
      image: "./banner4.jpg",
      title: "Explore the World",
      heading: "Gateway to Adventure",
      subheading:
        "Discover exciting destinations and create unforgettable memories.Indulge in luxury and relaxation with our curated travel experiences.",
    },
    {
      id: 2,
      image: "./banner5.jpg",
      title: "Dream Vacations",
      heading: "Escape to Paradise",
      subheading:
        "Indulge in luxury and relaxation with our curated travel experiences.Discover exciting destinations and create unforgettable memories.",
    },
    {
      id: 3,
      image: "./banner6.png",
      title: "Adventure Awaits",
      heading: "Embrace the Journey",
      subheading: "Embark on thrilling adventures and make every moment count.Indulge in luxury and relaxation with our curated travel experiences.",
    },
  ];

  return (
    <div>
      <Swiper
        className="mySwiper h-[80vh]"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slider.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              backgroundImage: `linear-gradient(38deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%), url(${item.image})`,
            }}
            className="w-full bg-center bg-cover "
          >
            <div className="max-w-screen-xl mx-auto px-5 flex  h-full items-center ">
              <div className="md:w-1/2 flex flex-col gap-3">
                <h5 className="text-[#FF5522] font-semibold italic">{item.title}</h5>
                <h1 className="text-5xl font-bold text-white">
                  {item.heading}
                </h1>
                <p className="text-white text-base">{item.subheading}</p>
                <Link to={'/destination'} className="bg-[#FF5522]  flex justify-center py-2 rounded-md text-white hover:bg-[#ec7551] transition-all w-32">Book Now</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

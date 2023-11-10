import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Smith",
      text: "Himalaya Travel turned our mountain dreams into reality! From seamless bookings to breathtaking views, every step was a peak experience. Highly recommended!",
      image: "./testimonial1.jpg",
    },
    {
      id: 2,
      name: "John Week",
      text: "Himalaya Travel turned our mountain dreams into reality! From seamless bookings to breathtaking views, every step was a peak experience. Highly recommended!",
      image: "./testimonial2.jpg",
    },
    {
      id: 3,
      name: "Alisa Jahan",
      text: "Himalaya Travel turned our mountain dreams into reality! From seamless bookings to breathtaking views, every step was a peak experience. Highly recommended!",
      image: "./testimonial3.jpg",
    },
    {
      id: 4,
      name: "Mark Melon",
      text: "Himalaya Travel turned our mountain dreams into reality! From seamless bookings to breathtaking views, every step was a peak experience. Highly recommended!",
      image: "./testimonial4.jpg",
    },
    {
      id: 5,
      name: "Kamrul Hasan",
      text: "Himalaya Travel turned our mountain dreams into reality! From seamless bookings to breathtaking views, every step was a peak experience. Highly recommended!",
      image: "./testimonial1.jpg",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 py-10 md:py-28">
        <div className="text-center">
            <p className="text-lg font-bold text-[#FF5522]">Testimonials</p>
            <h5 className="text-4xl font-bold text-[#6C7171]">What Travelers Says</h5>
        </div>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="py-10 px-5">
              <div className="flex flex-col items-center text-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10">
                <FaQuoteLeft size={36} className="text-[#FF5522]"/>
                <p className="text-[#6C7171] text-lg text-justify">{item.text}</p>
                <div className="flex items-center gap-4">
                  <img className="h-28 w-28 rounded-full" src={item.image} alt="" />
                  <div>
                    <div className="flex text-[#FFB400]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="font-bold text-lg">{item.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

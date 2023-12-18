import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://tour-utopia.vercel.app/reviews"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 py-10 md:py-28">
        <div className="text-center">
          <p className="text-lg font-bold text-[#FF5522]">Testimonials</p>
          <h5 className="text-4xl font-bold text-[#6C7171]">What Travelers Say</h5>
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
            <SwiperSlide key={item._id} className="py-10 px-5">
              <div className="flex flex-col justify-between min-h-[400px] items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10" style={{ maxHeight: '400px', overflow: 'hidden' }}>
                <FaQuoteLeft size={36} className="text-[#FF5522]" />
                <p className="text-[#6C7171] text-lg ">{item.reviewText.slice(0,150)}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex text-[#FFB400]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="font-bold text-lg">{item.userName}</p>
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

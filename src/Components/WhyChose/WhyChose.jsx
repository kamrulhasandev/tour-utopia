/* eslint-disable react/no-unescaped-entities */
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhyChose = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 md:flex gap-10 py-20 justify-center items-center">
        <div className="md:w-1/2">
          <div className="md:relative">
            <img className="lg:rotate-[25deg]" src="./tickets.jpg" alt="" />
            <img
              className="-rotate-[25deg] absolute top-56 border-[10px] border-white rounded-2xl hidden lg:block"
              src="./man-hiking.jpg"
              alt=""
            />
            <div className="bg-green-500 w-36 absolute rounded-full h-36 flex flex-col items-center justify-center px-10 text-center top-52 text-white animate-bounce">
              <h4 className="text-3xl font-bold">1</h4>
              <p className="text-lg font-bold">Successful Years</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pt-5 md:pt-0">
          <div className="flex flex-col gap-10">
            <p className="text-[#FF2200] font-bold">Let's Explore the World</p>
            <h3 className="text-4xl font-bold">
              We Make Your Travel More Enjoyable
            </h3>
            <p className="text-lg text-[#6C7171]">
              Embrace a worry-free travel experience with us as we strive to
              make your journey more enjoyable. From seamless itineraries to
              handpicked accommodations, we take care of every detail, leaving
              you free to savor every moment and create unforgettable memories.
            </p>
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <img src="./f-icon-1.png" alt="" />
                <p className="text-lg font-bold">
                  Award winning tour & travel arranger
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="./f-icon-2.png" alt="" />
                <p className="text-lg font-bold">
                  Most popular booking provider
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <FaLongArrowAltRight className="text-[#FF5522]" />
                <p className="text-[#6C7171] text-lg">
                  Personalized Itineraries: Tailored to your preferences and
                  interests.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <FaLongArrowAltRight className="text-[#FF5522]" />
                <p className="text-[#6C7171] text-lg">
                  Hand picked premium Accommodations that guarantee comfort and
                  relaxation.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <FaLongArrowAltRight className="text-[#FF5522]" />
                <p className="text-[#6C7171] text-lg">
                  Dedicated 24/7 support team ready to assist you at any moment.
                </p>
              </div>
            </div>
            <Link to={'/destination'}>
            <button className="bg-[#FF5522] w-36 font-semibold py-2 rounded-md text-white mt-2">Explore More</button></Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhyChose;

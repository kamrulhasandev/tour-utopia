const AboutMission = () => {
  return (
    <div className="bg-[#F2F4F7] py-20">
      <div className="max-w-screen-xl mx-auto px-5 md:flex justify-between items-center gap-10">
        <div className="flex flex-col gap-5">
          <img src="/intro-4.png" className="w-[30%]" alt="" />
          <h4 className="text-3xl font-bold text-[#6C7171]">Our Mission</h4>
          <p className="text-[#6C7171] text-lg">
            to inspire and empower travelers to explore the world with wonder,
            creating unforgettable experiences.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img src="/intro-5.png" className="w-[30%]" alt="" />
          <h4 className="text-3xl font-bold text-[#6C7171]">Destination Insights</h4>
          <p className="text-[#6C7171] text-lg">
            Gain valuable insights into captivating destinations through our
            comprehensive guides and expert recommendations.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img src="/intro-6.png" className="w-[30%]" alt="" />
          <h4 className="text-3xl font-bold text-[#6C7171]">Tailored Travel Planning</h4>
          <p className="text-[#6C7171] text-lg">
            Our website offers personalized travel planning services tailored to
            your preferences and interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSec() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: () => {
      AOS.refreshHard();
    },
  };

  const dummyData = [
    {
      id: 1,
      title: "Headphones",
      subtitle: "Experience pure sound",
      company: "AudioNova",
      imageUrl: "img1.png",
    },
    {
      id: 2,
      title: "Laptop",
      subtitle: "Want to work anywhere",
      company: "Apple",
      imageUrl: "img2.png",
    },
    {
      id: 3,
      title: "Fitness Watch",
      subtitle: "Track your health",
      company: "FitPulse",
      imageUrl: "img3.png",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Slider ref={sliderRef} className="container py-0" {...settings}>
      {dummyData.map((item) => (
        <div
          key={item.id}
          className="container bg-gradient-to-r from-zinc-300/80 to-zinc-100 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 h-[90%] md:h-[85vh] container mx-auto px-4">
            {/* Text Section */}
            <div
              className="flex flex-col items-start gap-3 justify-center text-left order-2 sm:order-1 max-w-xl relative z-10"
              data-aos="fade-right"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.company}
              </h3>
              <p className="text-2xl md:text-5xl font-bold text-black mb-1">
                {item.subtitle}
              </p>
              <h1 className="text-4xl md:text-[100px] lg:text-[150px] font-extrabold tracking-wide bg-gradient-to-r from-primary to-black/30 md:whitespace-nowrap text-transparent bg-clip-text">
                {item.title}
              </h1>
              <button className="bg-secondary text-xs md:text-xl hover:bg-primary text-white px-4 py-2 mt-4 rounded-xl transition-all duration-300">
                Click to buy
              </button>
            </div>

            {/* Image Section */}
            <div
              className="order-1 sm:order-2 flex justify-center z-10"
              data-aos="fade-left"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSec;

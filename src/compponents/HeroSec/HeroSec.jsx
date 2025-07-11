import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSec() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  return (
    <Slider
      {...settings}
      className="container w-full h-[85vh] bg-linear-to-r from-zinc-300/80 to-zinc-100 rounded-2xl"
    >
      {dummyData.map((item) => (
        <div key={item.id}>
          <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-4 h-[100vh]">
            <div className="flex flex-col text-left items-start md:mb-24 max-w-xl flex-1 order-2 sm:order-1 relative z-10">
              <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
              <p className="text-4xl font-extrabold text-black mb-1">
                {item.subtitle}
              </p>
              <h1 className="text-[150px] bg-gradient-to-r from-primary to-white font-extrabold tracking-widest whitespace-nowrap text-transparent bg-clip-text">
                {item.title}
              </h1>
              <button className="bg-secondary text-white p-3 rounded-xl">Click to buy</button>
            </div>

            {/* Image */}
            <div className="order-1 sm:order-2  z-10">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[500px] h-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSec;

import React from "react";

const categories = [
  {
    id: 1,
    title: "Headphones",
    image: "/category/cate1.png",
    gradient: "from-[#2C3E50] to-[#4CA1AF]", // steel blue
    customClasses: "items-center justify-center flex-col",
    fontClass: "text-4xl",
  },
  {
    id: 2,
    title: "Smartphones",
    image: "/category/cate2.png",
    gradient: "from-[#0F2027] to-[#2C5364]", // deep blue teal
    customClasses: "items-center justify-center flex-col",
    fontClass: "text-4xl",
  },
  {
    id: 3,
    title: "Gaming",
    image: "/category/cate3.png",
    customClasses: "items-center justify-center flex-col md:flex-row md:justify-between",
    fontClass: "text-4xl md:text-[100px] lg:text-[120px] md:order-1 top-10 md:top-0 relative tracking-widest",
    gradient: "from-[#1F1C2C] to-[#928DAB]", // gamer vibe
    span: 2,
    imgClass: "md:order-2 md:right-20 scale-200 md:z-10 md:relative",
  },
  {
    id: 4,
    title: "Laptops",
    image: "/category/img2.png",
    gradient: "from-[#232526] to-[#414345]", // dark metallic gray
    customClasses: "items-center justify-between",
    span: 2,
    fontClass: "text-[100px] order-1 relative tracking-widest",
    imgClass: "order-2 right-20 scale-200 z-10 relative",
  },
  {
    id: 5,
    title: "Watches",
    image: "/category/img3.png",
    gradient: "from-[#3E5151] to-[#DECBA4]", // dark green to gold (higher contrast)
    customClasses: "items-center justify-center flex-col",
    fontClass: "text-4xl",
  },
  {
    id: 6,
    title: "Cameras",
    image: "/category/camera.png",
    gradient: "from-[#000000] to-[#434343]", // black silver
    customClasses: "items-center justify-center flex-col",
    fontClass: "text-4xl",
  },
];

function CategorySec() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`h-80 rounded-2xl bg-gradient-to-b ${cat.gradient} ${
            cat.span === 2 ? "md:col-span-2" : ""
          } flex text-gray-800 text-center p-4 transform hover:scale-[1.03] transition-all duration-500 shadow-md hover:shadow-xl ${
            cat.customClasses
          }`}
        >
          <img
            src={cat.image}
            alt={cat.title}
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 scale-160 object-contain mb-4 transition-transform duration-300 hover:scale-125 ${cat.imgClass}`}
          />
          <h3 className={`${cat.fontClass} font-semibold text-white/80`}>
            {cat.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CategorySec;

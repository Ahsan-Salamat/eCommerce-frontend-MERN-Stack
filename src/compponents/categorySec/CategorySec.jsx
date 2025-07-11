import React from "react";

function CategorySec() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="h-80 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-600">Category 1</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-[#FCC83A] to-[#FCC83A]/70">Category 2</div>
      <div className="md:col-span-2 h-80 rounded-2xl bg-gradient-to-b from-[#F4353D] to-[#F4353D]/70">Category 3</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-600">Category 1</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-[#FCC83A] to-[#FCC83A]/70">Category 2</div>
      <div className="md:col-span-2 h-80 rounded-2xl bg-gradient-to-b from-[#F4353D] to-[#F4353D]/70">Category 3</div>
    </div>
  );
}

export default CategorySec;

import React from "react";

function CategorySec() {
  return (
    <div className="container grid grid-cols-4 gap-6">
      <div className="h-80 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-600">Category 1</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-[#FCC83A] to-[#FCC83A]/70">Category 2</div>
      <div className="col-span-2 h-80 rounded-2xl bg-gradient-to-b from-[#F4353D] to-[#F4353D]/70">Category 3</div>
      <div className="col-span-2 h-80 rounded-2xl bg-gradient-to-r from-zinc-500/80 to-zinc-300">Category 4</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-[#4BD17D] to-[#4BD17D]/70">Category 5</div>
      <div className="h-80 rounded-2xl bg-gradient-to-b from-[#247DF5] to-[#247DF5]/70">Category 6</div>
    </div>
  );
}

export default CategorySec;

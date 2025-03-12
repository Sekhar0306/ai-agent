import React from "react";

export default function CategoryButtons({ categories }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {categories.map((category, index) => (
        <button key={index} className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-100">
          {category}
        </button>
      ))}
    </div>
  );
}

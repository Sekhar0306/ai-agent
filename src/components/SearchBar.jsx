import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder }) {
  return (
    <div className="relative max-w-3xl mx-auto mb-8">
      <div className="flex items-center bg-white rounded-md border border-gray-300 px-3 py-2">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full focus:outline-none text-black placeholder-gray-500"
        />
      </div>
    </div>
  );
}

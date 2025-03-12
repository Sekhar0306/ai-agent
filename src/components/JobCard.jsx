import React from "react";

export default function JobCard({ logo, position, company, category, salary, location, featured }) {
  return (
    <div className="bg-white rounded-lg p-4 relative">
      {featured && <div className="absolute top-4 right-4 bg-secondary-light text-primary text-xs font-medium px-2 py-0.5 rounded">Featured</div>}
      <div className="flex items-start">
        <img src={logo} alt={company} width={40} height={40} className="rounded mr-4" />
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="font-semibold text-primary">{position}</h3>
            <span className="mx-2">•</span>
            <span className="text-primary">{company}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-gray-100 text-sm px-2 py-0.5 rounded">{category}</span>
            <span className="bg-gray-100 text-sm px-2 py-0.5 rounded">{salary}</span>
            <span className="bg-gray-100 text-sm px-2 py-0.5 rounded">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Search, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoryButtons from "./CategoryButtons";
import JobListings from "./JobListings";
import logo from "../assets/agent.png";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-100 via-orange-200 to-peach-100">
      
      {/* 🔹 Navbar */}
      <header className="w-full px-10 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="AI Agents Logo" width={50} height={50} className="mr-2" />
          <span className="text-primary text-3xl font-bold">AI Agents</span>
        </div>
        <div className="flex items-center space-x-4">
          <NavItem title="Find AI Jobs">
            <DropdownItem label="All AI Jobs" />
            <DropdownItem label="Machine Learning" />
            <DropdownItem label="Data Science" />
            <DropdownItem label="AI Research" />
          </NavItem>
          <NavItem title="Resources">
            <DropdownItem label="AI Career Guide" />
            <DropdownItem label="Top AI Companies" />
            <DropdownItem label="AI Tools & Platforms" />
          </NavItem>
          <button className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
            Log in
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-dark transition">
            Hire AI Talent
          </button>
        </div>
      </header>

      {/* 🔹 Hero Section */}
      <section className="w-full px-10 py-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Discover AI-powered remote job opportunities
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          AI Agents connects top AI talent with cutting-edge companies offering remote roles in AI, ML, and automation.
        </p>
        
        <SearchBar placeholder="Search AI & ML jobs..." />

        <CategoryButtons categories={["Machine Learning", "Data Science", "AI Research", "Automation", "Software Engineering"]} />
        
        <div className="flex justify-end items-center text-xs text-gray-600 mt-2">
          <span>Search powered by</span>
          <img src="/assets/algolia.svg" alt="Algolia" width={60} height={20} className="ml-1" />
        </div>
      </section>

      {/* 🔹 Job Listings */}
      <JobListings />
      
    </div>
  );
}

/* 🔹 Navbar Items */
function NavItem({ title, children }) {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-900 hover:text-gray-600 font-medium">
        {title} <ChevronDown className="ml-1 h-5 w-5" />
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 mt-1 w-52 z-10">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ label }) {
  return (
    <a href="#" className="block p-2 hover:bg-gray-100 rounded text-gray-700">
      {label}
    </a>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import JobListings from "./components/JobListings";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-200 to-peach-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Discover AI-powered remote job opportunities
        </h1>
        <p className="text-primary max-w-3xl mx-auto mb-8">
          AI Agents connects top AI talent with cutting-edge companies offering remote roles in AI, ML, and automation.
        </p>
        
        <SearchBar placeholder="Search AI & ML jobs..." />
        <CategoryButtons categories={["Machine Learning", "Data Science", "AI Research", "Automation", "Software Engineering"]} />
        
        <div className="flex justify-end items-center text-xs text-gray-500">
          <span>Search powered by</span>
          <img src="./assets/algolia.svg" alt="Algolia" width={60} height={20} />
        </div>
      </section>

      <JobListings />
    </div>
  );
}

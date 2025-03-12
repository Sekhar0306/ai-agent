import React from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="AIAgents Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-primary text-2xl font-semibold">AIAgents</span>
        </div>
        <div className="flex items-center gap-4">
          <NavItem title="Find remote jobs">
            <DropdownItem label="All Jobs" />
            <DropdownItem label="Software Development" />
            <DropdownItem label="Marketing" />
            <DropdownItem label="Design" />
          </NavItem>
          <NavItem title="Resources">
            <DropdownItem label="Remote Work Guide" />
            <DropdownItem label="Remote Companies" />
            <DropdownItem label="Remote Tools" />
          </NavItem>
          <button className="border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
            Log in
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary-light transition-colors">
            For Employers
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Find your dream remote job without the hassle
        </h1>
        <p className="text-primary max-w-3xl mx-auto mb-8">
          AiAgents is where top talents go to easily access active and fully remote job opportunities from vetted tech companies.
        </p>
        <SearchBar placeholder="Search 2,080 Remote Jobs..." />
        <CategoryButtons categories={["Software Development", "Customer Service", "Design", "Marketing", "Sales / Business"]} />
        <div className="flex justify-end items-center text-xs text-gray-500">
          <span>Search by</span>
          <img src="./assets/placeholder.svg?height=20&width=60" alt="Algolia" width={60} height={20} />
        </div>
      </section>

      {/* Job Listings Section */}
      <JobListings />
    </div>
  );
}

function NavItem({ title, children }) {
  return (
    <div className="relative group">
      <button className="flex items-center text-primary hover:text-primary-light font-medium">
        {title} <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 mt-1 w-48 z-10">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ label }) {
  return (
    <a href="#" className="block p-2 hover:bg-gray-100 rounded">
      {label}
    </a>
  );
}

function SearchBar({ placeholder }) {
  return (
    <div className="relative max-w-3xl mx-auto mb-8">
      <div className="flex items-center bg-white rounded-md border border-gray-300 px-3 py-2">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <input type="text" placeholder={placeholder} className="w-full focus:outline-none" />
      </div>
    </div>
  );
}

function CategoryButtons({ categories }) {
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

function JobListings() {
  const jobs = [
    { logo: "/placeholder.svg", position: "Office Assistant", company: "Coalition Technologies", category: "Marketing", salary: "$31.2k-$72.8k", location: "Worldwide", featured: true },
    { logo: "/placeholder.svg", position: "Senior Sharepoint Developer", company: "Proxify", category: "Software Development", salary: "$50k-$80k", location: "CET +/- 3 HOURS", featured: true },
    { logo: "/placeholder.svg", position: "Freelance Writer", company: "IAPWE", category: "Writing", salary: "$50-$75 /hour", location: "Worldwide", featured: true },
  ];
  return (
    <div className="md:w-3/4 mx-auto space-y-4">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}

function JobCard({ logo, position, company, category, salary, location, featured }) {
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

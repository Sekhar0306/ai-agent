import React from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/assets/logo.svg" alt="AI Agents Logo" width={40} height={40} className="mr-2" />
        <span className="text-primary text-2xl font-semibold">AI Agents</span>
      </div>
      <div className="flex items-center gap-4">
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
        <button className="border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
          Log in
        </button>
        <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary-light transition-colors">
          Hire AI Talent
        </button>
      </div>
    </header>
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

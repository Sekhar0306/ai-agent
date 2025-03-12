import React from "react";
import JobCard from "./JobCard";

export default function JobListings() {
  const jobs = [
    { logo: "/assets/ml.svg", position: "AI Engineer", company: "DeepMind", category: "Machine Learning", salary: "$120k-$160k", location: "Remote", featured: true },
    { logo: "/assets/ds.svg", position: "Data Scientist", company: "OpenAI", category: "Data Science", salary: "$100k-$140k", location: "Worldwide", featured: true },
    { logo: "/assets/research.svg", position: "AI Researcher", company: "Meta AI", category: "AI Research", salary: "$150k-$200k", location: "Remote", featured: true },
  ];

  return (
    <div className="md:w-3/4 mx-auto space-y-4">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}

"use client"; 

import { useState, useEffect } from 'react';
import BorderImage from './Image'; 

type Project = {
  id: number;
  name: string;
  url: string;
  desc: string;
  type: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project Name 1",
    url: "https://www.facebook.com",
    desc: "Description for project name 1",
    type: "Mobile"
  },
  {
    id: 2,
    name: "Project Name 2",
    url: "https://www.google.com",
    desc: "Description for project name 2",
    type: "Website"
  },
];

const Portfolio: React.FC = () => {
  const [searchOptions, setSearchOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("All");

  useEffect(() => {
    const options = ["All", ...Array.from(new Set(projects.map(project => project.type)))];
    setSearchOptions(options);
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const filteredProjects = selectedOption === "All" ? projects : projects.filter(project => project.type === selectedOption);

  return (
    <div className="bg-dark text-white p-4 mt-20">
      <h1 className="text-3xl text-center font-bold mb-4">PORTFOLIO</h1>
      <div className="flex justify-center mb-8 space-x-4 md:space-x-12">
        {searchOptions.map(option => (
          <div
            key={option}
            className={`text-center text-lg cursor-pointer capitalize ${selectedOption === option ? "font-bold" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-24`}
        >
          <div className="flex-1 ml-12 relative">
            <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
            <p className="mb-4">{project.desc}</p>
            <a href={project.url} className="text-blue-500">Read more</a>
          </div>
          <div className="flex-1">
            <BorderImage src="/designer.png" alt={project.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

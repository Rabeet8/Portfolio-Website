import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

export function ProjectCard({ image, title, description, techStack, githubLink, liveLink }) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 hover:border-gray-700">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 text-xs rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  const projects = [
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    },
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    },
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    },
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    },
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    },
    {
      image: "/project-image-1.jpg",
      title: "Project Name",
      description: "Short description of the project goes here.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

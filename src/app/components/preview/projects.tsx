import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import project1 from "../../../../public/project1.png";
import project2 from "../../../../public/project2.png";
import project3 from "../../../../public/project3.png";
import project4 from "../../../../public/project4.png";
import project5 from "../../../../public/project5.png";
import project6 from "../../../../public/project6.jpg";
import promptkit from "../../../../public/promptkit.png";
import snapntrade from "../../../../public/snapntrade.png";
import thrive from "../../../../public/thrive.png";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export function ProjectCard({ image, title, description, techStack, githubLink, liveLink }: ProjectCardProps) {
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
  const projects: ProjectCardProps[] = [
    {
      image: promptkit.src,
      title: "PromptKit",
      description: "PromptKit is a powerful all-in-one AI utility app that helps you analyze prompts, generate JSON schemas, estimate token costs, and work faster with LLMs. Everything you need for building with AI.",
      techStack: ["React Native", "Expo", "Open AI", "Fast API"],
      liveLink: "https://promptkit-landing-page.vercel.app",

    },
    {
      image: thrive.src,
      title: "Thrive",
      description: "Thrive is a comprehensive plant care mobile app that helps users track watering schedules and monitor plant growth through visual timelines, ensuring your houseplants remain healthy with timely reminders and easy logging of care activities.",
      techStack: ["React Native", "Expo", "Supabase"],
      githubLink: "https://github.com/Rabeet8/Thrive",

    },
    {
      image: snapntrade.src,
      title: "snapNtrade",
      description: "snapNtrade is a trust-first electronics marketplace built to eliminate fraud and uncertainty in online trading.It ensures authenticity through real-time in-app image capture and AI-based condition analysis. Each transaction generates a digitally verifiable invoice as proof of purchase and ownership. With a buyer-first reverse marketplace and privacy-safe location sharing, snapNtrade makes trading safer and more reliable.",
      techStack: ["React Native", "Fast API", "Open AI", "Firebase"],
      liveLink: "snapntrade.com"

    },
    {
      image: project1.src,
      title: "ERC20 Factory",
      description: "This project allows users to quickly create ERC20 tokens without the need for coding.",
      techStack: ["Next.JS", "Tailwind", "Solidity", "Hardhat", "Rainbow Wallet", "Ethers.js"],
      githubLink: "https://github.com/Rabeet8/ERC20Factory",
      liveLink: "https://erc20-factory-1bgdglvaa-rabeet8s-projects.vercel.app/"
    },

    {
      image: project2.src,
      title: "Doc Vouch",
      description: "DocVouch is a decentralized application and implementation of Proof-Of-Existence (PoE) that securely timestamps and verifies document existence on the blockchain, ensuring immutability, transparency, and privacy without storing the actual document content..",
      techStack: ["React.JS", "Tailwind", "Solidity", "Remix", "IPFS"],
      githubLink: "https://github.com/Rabeet8/DocVouch",
    },
    {
      image: project4.src,
      title: "TokenStash",
      description: "A decentralized application (DApp) for staking ERC20 tokens and earning rewards using smart contracts on the Ethereum blockchain.",
      techStack: ["React", "Tailwind", "Solidity", "Rainbow Wallet", "Ethers.js"],
      githubLink: "https://github.com/Rabeet8/TokenStash",
    },
    {
      image: project3.src,
      title: "Mars Travel Web Application",
      description: "This web application is designed to assist users in planning, organizing, and experiencing a trip to the planet Mars..",
      techStack: ["React.JS", "CSS"],
      githubLink: "https://github.com/Rabeet8/Mars-Travel-Web-Application",
      liveLink: "https://mars-travel-web-application.vercel.app/"
    },
    {
      image: project5.src,
      title: "Invoice Flow",
      description: "Streamline your invoicing with simplicity and style.",
      techStack: ["Next.JS", "Tailwind", "Firebase"],
      githubLink: "https://github.com/Rabeet8/InvoiceFlow",
    }
  ];

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

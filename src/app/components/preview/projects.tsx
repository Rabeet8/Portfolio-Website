import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import project1 from "../../../../public/project1.png";
import project2 from "../../../../public/project2.png";
import project3 from "../../../../public/project3.png";
import project4 from "../../../../public/project4.png";
import project5 from "../../../../public/project5.png";
import project6 from "../../../../public/project6.jpg";


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
      image: project1.src, 
      title: "ERC20 Factory",
      description: "This project allows users to quickly create ERC20 tokens without the need for coding.",
      techStack: ["Next.JS", "Tailwind","Solidity" ,"Hardhat","Rainbow Wallet","Ethers.js"],
      githubLink: "https://github.com/Rabeet8/ERC20Factory",
      liveLink: "https://erc20-factory-1bgdglvaa-rabeet8s-projects.vercel.app/"
    },
    {
      image: project6.src,
      title: "Islamic Ease",
      description: "This mobile app provides a seamless platform for managing and calculating Zakat,Iddat and Fidya payments with an intuitive user interface. It ensures accurate Islamic charitable contributions while offering a smooth navigation experience.",
      techStack: ["React Native", "Expo"],
      githubLink: "https://github.com/Rabeet8/Islamic-Ease",
      liveLink: "https://github.com/Rabeet8/Islamic-Ease"
    },
    {
      image: project2.src,
      title: "Doc Vouch",
      description: "DocVouch is a decentralized application and implementation of Proof-Of-Existence (PoE) that securely timestamps and verifies document existence on the blockchain, ensuring immutability, transparency, and privacy without storing the actual document content..",
      techStack: ["React.JS", "Tailwind", "Solidity","Remix", "IPFS"],
      githubLink: "https://github.com/Rabeet8/DocVouch",
      liveLink: "https://doc-vouch-ide018ofg-rabeet8s-projects.vercel.app/"
    },
    {
      image: project4.src,
      title: "TokenStash",
      description: "A decentralized application (DApp) for staking ERC20 tokens and earning rewards using smart contracts on the Ethereum blockchain.",
      techStack: ["React", "Tailwind","Solidity","Rainbow Wallet","Ethers.js"],
      githubLink: "https://github.com/Rabeet8/TokenStash",
      liveLink: "https://github.com/Rabeet8/TokenStash"
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
      liveLink: "https://invoice-generator-q2po.vercel.app/"
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

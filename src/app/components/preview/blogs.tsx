import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import blog1 from "../../../../public/blog1.jpeg";
import blog2 from "../../../../public/blog2.webp";
import blog3 from "../../../../public/blog3.jpg";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  blogLink: string;
  author: string;
  date: string;
}

export function BlogCard({ image, title, description, tags, blogLink, author, date }: BlogCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:border-gray-700 hover:shadow-xl duration-300">
      
      {/* Blog Image */}
      <div className="w-full md:w-1/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 w-full md:w-2/3 flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-auto">
          <a 
            href={blogLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
          >
            <FaExternalLinkAlt size={16} />
            <span className="text-sm">Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BlogGrid() {
  const blogs: BlogCardProps[] = [
    {
      image: blog1.src,
      title: "Understanding Denial of Service (DoS) in Smart Contracts",
      description: "A deep dive into Denial of Service (DoS) in smart contracts with a practical example .",
      tags: ["Ethereum", "Smart Contracts", "Blockchain"],
      blogLink: "https://syedrabeet.hashnode.dev/understanding-denial-of-service-dos-in-smart-contracts",
      author: "Syed Rabeet",
      date: "Aug 17, 2024"
    },
    {
      image: blog2.src,
      title: "What is DeFi and how is it beneficial for the unbanked population?",
      description: "How Decentralize Finance (DeFi) is crucial for common people.",
      tags: ["DeFi", "Finance", "Blockchain"],
      blogLink: "https://syedrabeet.hashnode.dev/what-is-defi-and-how-is-it-beneficial-for-the-unbanked-population",
      author: "Syed Rabeet",
      date: "Apr 30, 2023"
    },
    {
      image: blog3.src,
      title: "Web3: The Decentralized Internet Built On The BlockChain Technology",
      description: "What the next generation of decentralized applications might look like.",
      tags: ["Web3", "Decentralization", "Future Tech"],
      blogLink: "https://syedrabeet.hashnode.dev/web3-the-decentralized-internet-built-on-the-blockchain-technology",
      author: "Syed Rabeet",
      date: "Mar 21, 2023"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Latest Blogs</h2>
        <div className="w-24 h-1 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              {...blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function BlogCard({ image, title, description, tags, blogLink, author, date }) {
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
  const blogs = [
    {
      image: "/blog-image-1.jpg",
      title: "Understanding Ethereum Scaling Solutions",
      description: "A deep dive into L2 solutions like Optimism, Arbitrum, and ZK-rollups.",
      tags: ["Ethereum", "Layer 2", "Blockchain"],
      blogLink: "https://yourblog.com/ethereum-scaling",
      author: "Rabeet",
      date: "Feb 4, 2025"
    },
    {
      image: "/blog-image-2.jpg",
      title: "Security Risks in Smart Contracts",
      description: "How to identify and mitigate common vulnerabilities in Solidity.",
      tags: ["Smart Contracts", "Security", "Blockchain"],
      blogLink: "https://yourblog.com/smart-contract-security",
      author: "Rabeet",
      date: "Jan 25, 2025"
    },
    {
      image: "/blog-image-3.jpg",
      title: "The Future of Web3 Development",
      description: "What the next generation of decentralized applications might look like.",
      tags: ["Web3", "Decentralization", "Future Tech"],
      blogLink: "https://yourblog.com/web3-future",
      author: "Rabeet",
      date: "Jan 10, 2025"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Latest Blogs</h2>
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

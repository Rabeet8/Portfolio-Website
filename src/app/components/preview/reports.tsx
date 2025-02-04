import React, { useState } from "react";
import { FaShieldAlt, FaBug, FaLock, FaFileAlt } from "react-icons/fa";

export function SecurityReportCard({ title, description, type, reportLink, date }) {
  const [flipped, setFlipped] = useState(false);

  const icons = {
    "Audit Report": <FaShieldAlt size={28} className="text-gray-400" />,
    "Exploit Analysis": <FaBug size={28} className="text-gray-400" />,
    "Bug Bounty Report": <FaLock size={28} className="text-gray-400" />,
    "General Security Report": <FaFileAlt size={28} className="text-gray-400" />
  };

  return (
    <div 
      className={`relative w-full md:w-[400px] h-56 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:border-gray-700 cursor-pointer ${
        flipped ? "transform rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front Side */}
      <div className={`absolute w-full h-full p-6 flex flex-col justify-between ${flipped ? "hidden" : "block"}`}>
        <div className="flex items-center gap-3">
          {icons[type] || <FaFileAlt size={28} className="text-gray-400" />}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>

      {/* Back Side (Revealed on Click) */}
      <div className={`absolute w-full h-full p-6 flex flex-col justify-between bg-gray-950 rounded-xl transform rotate-y-180 ${flipped ? "block" : "hidden"}`}>
        <p className="text-gray-300 text-sm">{description}</p>
        <a
          href={reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Read Full Report →
        </a>
      </div>
    </div>
  );
}

export default function SecurityReportGrid() {
  const reports = [
    {
      title: "Ethereum Smart Contract Audit",
      description: "An in-depth security review of a DeFi protocol's smart contracts.",
      type: "Audit Report",
      reportLink: "https://yourreport.com/ethereum-audit",
      date: "Jan 5, 2025"
    },
    {
      title: "Recent Exploit Breakdown",
      description: "Analysis of a $200M exploit and how it could have been prevented.",
      type: "Exploit Analysis",
      reportLink: "https://yourreport.com/exploit-breakdown",
      date: "Dec 20, 2024"
    },
    {
      title: "Bug Bounty Findings",
      description: "Vulnerabilities discovered in a major blockchain project.",
      type: "Bug Bounty Report",
      reportLink: "https://yourreport.com/bug-bounty",
      date: "Dec 10, 2024"
    }
  ];

  return (
    <div className="bg-black max-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-10 mt-[-10]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🛡 Security Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reports.map((report, index) => (
            <SecurityReportCard key={index} {...report} />
          ))}
        </div>
      </div>
    </div>
  );
}
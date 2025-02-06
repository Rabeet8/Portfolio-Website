import React, { useState } from "react";
import { FaShieldAlt, FaBug, FaLock, FaFileAlt, FaUser } from "react-icons/fa";

type ReportType = "Audit Report" | "Exploit Analysis" | "Bug Bounty Report" | "General Security Report";

interface ReportCardProps {
  title: string;
  description: string;
  type: ReportType;
  reportLink: string;
  date: string;
  author: string;
}

export function SecurityReportCard({ title, description, type, reportLink, date, author }: ReportCardProps) {
  const [flipped, setFlipped] = useState(false);

  const icons: Record<ReportType, JSX.Element> = {
    "Audit Report": <FaShieldAlt size={28} className="text-gray-400 shrink-0" />,
    "Exploit Analysis": <FaBug size={28} className="text-gray-400 shrink-0" />,
    "Bug Bounty Report": <FaLock size={28} className="text-gray-400 shrink-0" />,
    "General Security Report": <FaFileAlt size={28} className="text-gray-400 shrink-0" />
  };

  return (
    <div 
      className={`relative w-full md:w-[400px] h-64 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:border-gray-700 cursor-pointer ${
        flipped ? "transform rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front Side */}
      <div className={`absolute w-full h-full p-6 flex flex-col justify-between ${flipped ? "hidden" : "block"}`}>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              {icons[type] || <FaFileAlt size={28} className="text-gray-400 shrink-0" />}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400">
            <FaUser size={14} className="shrink-0" />
            <span className="text-sm">{author}</span>
          </div>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>

      {/* Back Side (Revealed on Click) */}
      <div className={`absolute w-full h-full p-6 flex flex-col justify-between bg-gray-950 rounded-xl transform rotate-y-180 ${flipped ? "block" : "hidden"}`}>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400">
            <FaUser size={14} className="shrink-0" />
            <span className="text-sm">{author}</span>
          </div>
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
    </div>
  );
}

export default function SecurityReportGrid() {
  const reports: ReportCardProps[] = [
    {
      title: "High - Inability to Claim Available Rewards Due to Insufficient Balance in One Token",
      description: "The ERC4626i contract's _claim::ERC4626i function fails to process rewards independently for multiple tokens, leading to a situation where the failure to claim one reward token prevents the claiming of other available reward tokens..",
      type: "Audit Report",
      reportLink: "https://github.com/Rabeet8/Competitive-Audits-Findings/blob/main/Royco%20Protocol.md",
      date: "Oct 23, 2024",
      author: " Syed Rabeet "
    },
    {
      title: "High - Incorrect Distribution of Unclaimed Rewards in closePot::Pot Contract",
      description: "The closePot:Pot function incorrectly distributes unclaimed rewards, potentially shortchanging users who have claimed them. Instead of allocating all remaining funds (after the manager's cut) to claimants, it distributes only a portion, leaving funds trapped in the contract.",
      type: "Exploit Analysis",
      reportLink: "https://github.com/Rabeet8/CodeHawks-FirstFlights-Findings/blob/main/My%20Cut.md",
      date: "Sept 12, 2024",
      author: "Syed Rabeet "
    },
    {
      title: "H - Lack of Player's Addresses Authentication in ThePredicter::makePrediction Function",
      description: "The ThePredicter::makePrediction function is designed to be called by addresses within the player's array. However, any address can currently call this function and submit a prediction.",
      type: "Bug Bounty Report",
      reportLink: "https://github.com/Rabeet8/CodeHawks-FirstFlights-Findings/blob/main/The%20Predicter.md",
      date: "July 24th, 2024",
      author: "Syed Rabeet "
    }
  ];

  return (
    <div className="bg-black max-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-10 mt-[-10]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
           Security Reports
        </h2>
        <div className="w-24 h-1 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reports.map((report, index) => (
            <SecurityReportCard key={index} {...report} />
          ))}
        </div>
      </div>
    </div>
  );
}
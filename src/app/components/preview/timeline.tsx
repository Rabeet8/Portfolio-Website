import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  
  const data = [
    {
      title: "0xequity' 24",
      
      content: (
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text mb-6">
          ❯ Blockchain Developer and Technical Writer
          </h1>
          <ul className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text text-base sm:text-lg md:text-xl font-medium font-bold mb-8 space-y-4 list-disc pl-6">
            <li>
              Design, develop, and execute comprehensive test cases for smart contracts to ensure they function as expected.
            </li>
            <li>
              Implement and maintain automated testing frameworks (using tools like Hardhat) to validate the integrity and security of smart contracts.
            </li>
            <li>
              Ensure that best practices are followed and that code is secure and efficient.
            </li>
            <li>
              Document the whole user flow for the protocol in GitBook platform for both the website and mobile.
            </li>
            <li>
              Explain all the technical details of the protocol to the user while helping them go through all the functionalities.
            </li>
          </ul>




          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "Grayhat' 24",
      content: (
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text mb-6">
          ❯ Developer Relations
          </h1>
          <ul className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text text-base sm:text-lg md:text-xl font-medium font-bold mb-8 space-y-4 list-disc pl-6">
            <li>
            Act as a bridge between the developer community and the organization, ensuring developers' needs, feedback, and pain points are heard and addressed.
            </li>
            <li>
            Write technical documentation, tutorials, blog posts, and sample code to help developers learn and integrate the company's products or services.
            </li>
            <li>
            Build, support, and grow a developer community through social media, forums, events, and direct communication.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Webners' 23",
      content: (
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text mb-6">
          ❯ Frontend Developer
          </h1>
          <ul className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text text-base sm:text-lg md:text-xl font-medium font-bold mb-8 space-y-4 list-disc pl-6">
            <li>
            Build frontend for dApps using Reactjs and Nextjs
            </li>
            <li>
            Seamlessly integrate frontend with smart contracts with Web3/Ethers.js ensuring application works as
            expected
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Metaschool' 23",
      content: (
        <div>
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text mb-6">
          ❯ Web3 Technical Writer
          </h1>
          <ul className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text text-base sm:text-lg md:text-xl font-medium font-bold mb-8 space-y-4 list-disc pl-6">
            <li>
            My role is to write and explain complex topics and concepts related web3 and blockchain
            </li>
            <li>
            Research and curate concepts and make it easily understandable
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

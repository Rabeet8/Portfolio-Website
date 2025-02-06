import Image from "next/image";
import React, { useState, ReactNode } from "react";
import { Timeline } from "../ui/timeline";
import company1 from "../../../../public/company1.png"
import company11 from "../../../../public/company1-1.png"
import company2 from "../../../../public/company2.png"
import company3 from "../../../../public/company3.png"
import company4 from "../../../../public/company4.png"

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

// Add new ImageModal component
const ImageModal = ({ src, alt, onClose }: ImageModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full h-auto">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          Close ×
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

interface TimelineData {
  title: string;
  content: ReactNode;
}

export function TimelineDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const data: TimelineData[] = [
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
            <div 
              onClick={() => setSelectedImage(company1.src)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src= {company1}
                alt="startup template"
                width={600}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div 
              onClick={() => setSelectedImage(company11.src)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src= {company11}
                alt="startup template"
                width={600}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
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
            <div 
              onClick={() => setSelectedImage(company2.src)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src={company2}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
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
            <div 
              onClick={() => setSelectedImage(company3.src)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src={company3}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
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
            <div 
              onClick={() => setSelectedImage(company4.src)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src= {company4}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Timeline image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

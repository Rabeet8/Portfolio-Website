import { FaGithub, FaLinkedin, FaTwitter,FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Contact Heading */}
        <h2 className="text-3xl font-bold text-white mb-6">📩 Get in Touch</h2>


        {/* Social Links */}
        <div className="flex space-x-6 mt-6 text-gray-400">
        <a href="mailto:syedrabeet2002@gmail.com" className="text-gray-400 hover:text-white transition-all">
            <FaMailBulk size={24} />
          </a>
          <a href="https://github.com/Rabeet8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/syedrabeet/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/CuriousRabeet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Rabeet. All rights reserved.
        </p>
      </div>
    </div>
  );
}

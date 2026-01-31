import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Pen, Users, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Code2, text: "Software Engineer", detail: "React.JS, Next.JS, React Native, Blockchain Development" },
    { icon: Terminal, text: "Developer Relations", detail: "Advocacy, Developer Experience, Management" },
    { icon: Pen, text: "Technical Writing", detail: "Documentation, Tutorials, SEO " },
    { icon: Users, text: "Community Building", detail: "Mentorship, Knowledge Sharing, Marketing" }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 space-y-4"
            >
              <p className="leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems.
                With extensive experience in modern web and app technologies, I specialize in building
                robust and scalable applications that make a difference.
              </p>
              <p className="leading-relaxed">
                Beyond coding, I'm dedicated to sharing knowledge through technical writing
                and community engagement. I believe in the power of clear documentation and
                helping others grow in their technical journey.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1_pG6mL3U5zK_KU6YAxvWtkf3CAG9q0eE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
              >
                View Resume
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div> */}
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 hover:border-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <skill.icon className="w-6 h-6 text-gray-400" />
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {skill.text}
                  </h3>
                </div>
                <p className="text-gray-500">{skill.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
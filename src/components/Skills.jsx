import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'HTML', logo: '/logos/html.png' },
  { name: 'CSS', logo: '/logos/css.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'Haskell', logo: '/logos/haskell.png' },
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'SQL', logo: '/logos/sql.png' },
];

const Skills = () => {
    return (
        <section id="habilidades" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        Habilidades
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(167, 139, 250, 0.5)' }}
                            className="flex flex-col items-center p-4 bg-white/10 rounded-xl border border-white/20 shadow-lg cursor-pointer transition-all duration-300"
                        >
                            <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-2" />
                            <p className="text-center text-sm font-medium text-white/80">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
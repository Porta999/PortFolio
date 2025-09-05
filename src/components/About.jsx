import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        Sobre Mí
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <User className="w-12 h-12 text-purple-400 mb-4" />
                            <p className="text-lg text-white/90 leading-relaxed">Soy estudiante de segundo año de la Licenciatura en Ciencias de la Computación en la Universidad de Buenos Aires. Durante la carrera, adquirí conocimientos en diseño y análisis de algoritmos, estructuras de datos y distintos paradigmas de programación.</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <Briefcase className="w-12 h-12 text-pink-400 mb-4" />
                            <p className="text-lg text-white/90 leading-relaxed">Exploré el desarrollo web creando mi primer sitio, lo que me permitió aplicar conceptos de programación en un proyecto concreto. Me interesa seguir aprendiendo y creciendo en el mundo del desarrollo de software, explorando distintas áreas dentro de la computación.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <img  class="w-full h-80 object-cover rounded-xl" alt="Desarrollador trabajando en código" src="/developer/aboutme.png" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
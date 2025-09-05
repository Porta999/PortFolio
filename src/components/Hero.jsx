import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = ({ scrollToSection }) => {
    
    const handleSocialClick = (url) => {
        
            window.open(url, "_blank");
    };
    
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
                        >
                            <img  class="w-full h-full rounded-full object-cover bg-gray-800" alt="Foto de perfil profesional" src="/developer/cvfoto.jpeg" />
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                    >
                        Desarrollador Web
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        Segundo año en Ciencias de la Computación UBA | Experiencia desarrollando Sitios Web
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            onClick={() => scrollToSection('proyectos')}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Ver Proyectos
                        </Button>
                         <Button
                            onClick={() => scrollToSection('habilidades')}
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold"
                        >
                            Mis Habilidades
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        {[{ icon: Github, href: "https://github.com/Porta999" }, { icon: Linkedin, href: "https://www.linkedin.com/in/dante-perez-porta-66ab092a3/" }, { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=danteperezporta@gmail.com.com&su=Contacto%20desde%20tu%20portafolio&" }].map((social, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleSocialClick(social.href)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                            >
                                <social.icon size={24} />
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
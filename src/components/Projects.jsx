import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const projectsData = [
    {
        id: 1,
        title: "Rock&Fire",
        "description": "Página web para un servicio de catering con menú digital y diseño responsivo",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "link": "https://rockandfire.com.ar",
        "image":"/proyects/rockandfire.jpg",
    }
];

const Projects = () => {

    const handleProjectClick = (type) => {
        toast({
            title: type === 'github' ? "GitHub" : "Demo",
            description: "🚧 Esta funcionalidad no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo ! 🚀",
            duration: 5000,
        });
    };

    return (
        <section id="proyectos" className="py-20 px-4 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        Mis Proyectos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
                        Una selección de mis trabajos más destacados
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" alt={project.title} src={project.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {/* <Button onClick={() => handleProjectClick('github')} variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2">
                                        <Github size={16} /> Código
                                    </Button> */}
                                    <Button onClick={() => window.open(project.link, '_blank')} size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center gap-2" >
                                        <ExternalLink size={16} /> Ver
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
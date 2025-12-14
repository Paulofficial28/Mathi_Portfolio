"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // Helper function to get all gallery items (images + videos)
    const getGalleryItems = (project: typeof portfolioData.projects[0]) => {
        const items: Array<{ type: 'image' | 'video'; src: string }> = [];

        if (project.gallery_images) {
            project.gallery_images.forEach(img => items.push({ type: 'image', src: img }));
        }

        if (project.gallery_videos) {
            project.gallery_videos.forEach(vid => items.push({ type: 'video', src: vid }));
        }

        return items;
    };

    const openGallery = (project: typeof portfolioData.projects[0]) => {
        setSelectedProject(project);
        setCurrentMediaIndex(0);
    };

    const nextMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            const galleryItems = getGalleryItems(selectedProject);
            if (galleryItems.length > 0) {
                setCurrentMediaIndex((prev) => (prev + 1) % galleryItems.length);
            }
        }
    };

    const prevMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            const galleryItems = getGalleryItems(selectedProject);
            if (galleryItems.length > 0) {
                setCurrentMediaIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
            }
        }
    };

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Featured <span className="text-neon-green">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-neon-green transition-all duration-300 flex flex-col"
                            >
                                <div
                                    className="h-48 bg-black/50 flex items-center justify-center overflow-hidden relative cursor-pointer"
                                    onClick={() => openGallery(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                                    {project.image_filename ? (
                                        <Image
                                            src={`/${project.image_filename}`}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="z-20 text-gray-500 text-sm">
                                            Video Content
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-neon-green uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-3 flex-1">
                                        {project.description}
                                    </p>

                                    {project.video_url && (
                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <a
                                                href={project.video_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-neon-green hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Watch Video
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-white hover:text-neon-green transition-colors z-[101]"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const galleryItems = getGalleryItems(selectedProject);

                                if (galleryItems.length > 0) {
                                    const currentItem = galleryItems[currentMediaIndex];

                                    return (
                                        <>
                                            <button
                                                onClick={prevMedia}
                                                className="absolute left-4 z-[102] p-2 bg-black/50 rounded-full text-white hover:bg-neon-green hover:text-black transition-all"
                                            >
                                                ←
                                            </button>

                                            {currentItem.type === 'image' ? (
                                                <Image
                                                    key={currentItem.src}
                                                    src={`/${currentItem.src}`}
                                                    alt={`${selectedProject.title} - ${currentMediaIndex + 1}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center p-8">
                                                    <video
                                                        key={currentItem.src}
                                                        controls
                                                        autoPlay
                                                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                                                    >
                                                        <source src={`/${currentItem.src}`} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            )}

                                            <button
                                                onClick={nextMedia}
                                                className="absolute right-4 z-[102] p-2 bg-black/50 rounded-full text-white hover:bg-neon-green hover:text-black transition-all"
                                            >
                                                →
                                            </button>

                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                                                {currentMediaIndex + 1} / {galleryItems.length}
                                            </div>
                                        </>
                                    );
                                } else if (selectedProject.video_url) {
                                    // Fallback for single video projects
                                    return (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-8">
                                            <video
                                                key={selectedProject.video_url}
                                                controls
                                                autoPlay
                                                className="w-full h-full rounded-lg shadow-2xl"
                                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                            >
                                                <source src={`/${selectedProject.video_url}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-lg">
                                                <h3 className="text-white font-semibold text-lg">{selectedProject.title}</h3>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    // Fallback for single image projects
                                    return (
                                        <Image
                                            src={`/${selectedProject.image_filename}`}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-contain"
                                        />
                                    );
                                }
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

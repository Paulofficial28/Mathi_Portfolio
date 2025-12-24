"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import ImageSkeleton from "./ui/ImageSkeleton";

// --- Sub-component for the 3D Tilt Card ---
const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Define Bento sizing: 1st project is large, others smaller
    const isLarge = index === 0 || index === 3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group h-[400px] rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden cursor-pointer
                ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
            onClick={onClick}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={`/${project.image_filename}`}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    quality={85}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            {/* Content */}
            <div
                className="absolute inset-0 z-20 p-8 flex flex-col justify-end"
                style={{ transform: "translateZ(50px)" }} // Pushes text forward in 3D
            >
                <span className="text-neon-green text-xs font-mono mb-2 block tracking-widest uppercase">
                    {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6 max-w-md">
                    {project.description}
                </p>

                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                    >
                        View Project <ChevronRight className="w-4 h-4" />
                    </motion.button>

                    {project.video_url && (
                        <a href={project.video_url} target="_blank" className="text-white/70 hover:text-neon-green transition-colors" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Spotlight Glow Effect */}
            <motion.div
                className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(39, 245, 175, 0.15), transparent 80%)`,
                }}
            />
        </motion.div>
    );
};

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
        <section id="projects" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                            FEATURED <span className="text-neon-green italic">WORKS</span>
                        </h2>

                    </div>
                    <div className="h-px flex-1 bg-white/10 hidden md:block mx-12 mb-4" />

                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} onClick={() => openGallery(project)} />
                    ))}
                </div>
            </div>

            {/* Modal Gallery */}
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
                                                    sizes="(max-width: 768px) 100vw, 80vw"
                                                    quality={90}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center p-8">
                                                    <video
                                                        key={currentItem.src}
                                                        controls
                                                        autoPlay
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                                                    >
                                                        <source src={currentItem.src.startsWith('http') ? currentItem.src : `/${currentItem.src}`} type="video/mp4" />
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
                                    return (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-8">
                                            <video
                                                key={selectedProject.video_url}
                                                controls
                                                autoPlay
                                                muted
                                                playsInline
                                                preload="metadata"
                                                className="w-full h-full rounded-lg shadow-2xl"
                                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                            >
                                                <source src={selectedProject.video_url.startsWith('http') ? selectedProject.video_url : `/${selectedProject.video_url}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-lg">
                                                <h3 className="text-white font-semibold text-lg">{selectedProject.title}</h3>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <Image
                                            src={`/${selectedProject.image_filename}`}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 80vw"
                                            quality={90}
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
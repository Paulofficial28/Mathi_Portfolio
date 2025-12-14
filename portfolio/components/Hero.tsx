"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-deep-purple/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.h2
                            style={{ y: y2 }}
                            className="text-neon-green font-syne text-xl md:text-2xl tracking-widest uppercase mb-4"
                        >
                            {portfolioData.profile.roles[0]}
                        </motion.h2>

                        <motion.h1
                            style={{ y: y1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-syne tracking-tighter"
                        >
                            {portfolioData.profile.nickname}
                            <span className="text-neon-green">.</span>
                        </motion.h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl lg:max-w-none mb-8 leading-relaxed font-light">
                            {portfolioData.profile.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <MagneticButton>
                                <Link
                                    href="#projects"
                                    className="px-8 py-4 bg-neon-green text-black font-bold rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    View Work <ArrowRight className="w-4 h-4" />
                                </Link>
                            </MagneticButton>
                            <MagneticButton>
                                <Link
                                    href="#contact"
                                    className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-neon-green hover:text-neon-green transition-all duration-300 bg-white/5 backdrop-blur-sm"
                                >
                                    Contact Me
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Profile Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                            {/* Main Profile Image with Neon Border */}
                            <motion.div
                                animate={{
                                    rotate: [0, 1, 0, -1, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative aspect-square rounded-3xl overflow-hidden border-4 border-neon-green/30 shadow-2xl shadow-neon-green/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-deep-purple/20 z-10 mix-blend-overlay" />
                                <Image
                                    src="/profile_1.jpg"
                                    alt={portfolioData.profile.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Animated Neon Glow Effect */}
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 border-4 border-neon-green/50 rounded-3xl blur-sm"
                                />
                            </motion.div>

                            {/* Secondary Profile Image - Floating */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, -2, 0, 2, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-12 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl backdrop-blur-sm bg-white/5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-neon-green/30 to-transparent z-10 mix-blend-overlay" />
                                <Image
                                    src="/profile_2.jpg"
                                    alt={`${portfolioData.profile.name} - Alternative`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -left-4 w-24 h-24 border-4 border-neon-green/50 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-6 -left-6 w-32 h-32 bg-neon-green/10 rounded-full blur-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

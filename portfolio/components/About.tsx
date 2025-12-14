"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobelightroom, SiAdobexd, SiFigma, SiDavinciresolve } from "react-icons/si";

const skillIcons: { [key: string]: any } = {
    "Adobe Photoshop": SiAdobephotoshop,
    "Adobe Premiere Pro": SiAdobepremierepro,
    "Adobe After Effects": SiAdobeaftereffects,
    "Lightroom": SiAdobelightroom,
    "Adobe XD": SiAdobexd,
    "Figma": SiFigma,
    "DaVinci Resolve": SiDavinciresolve,
   
};

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 font-syne">
                        About <span className="text-neon-green">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <GlassCard className="p-8 space-y-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {portfolioData.about_me_text}
                            </p>

                            <div className="pt-6 border-t border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4 font-syne">Education</h3>
                                <div>
                                    <h4 className="text-neon-green font-medium text-lg">{portfolioData.profile.education.degree}</h4>
                                    <p className="text-white mt-1">{portfolioData.profile.education.college}</p>
                                    <p className="text-gray-400 text-xs mt-1">{portfolioData.profile.education.year}</p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <h3 className="text-xl font-bold text-white mb-6 font-syne">Technical Skills</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {portfolioData.profile.skills.map((skill, index) => {
                                    const Icon = skillIcons[skill];
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 group"
                                        >
                                            {Icon ? (
                                                <Icon className="w-8 h-8 text-gray-400 group-hover:text-neon-green mb-2 transition-colors" />
                                            ) : (
                                                <div className="w-8 h-8 bg-gray-400 rounded-full mb-2" />
                                            )}
                                            <span className="text-xs text-center text-gray-300 group-hover:text-white transition-colors">
                                                {skill}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

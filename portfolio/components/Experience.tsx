"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Work <span className="text-neon-green">History</span>
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {portfolioData.profile.experience.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 border-l-2 border-white/10 last:border-0 pb-8 last:pb-0"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-green" />

                                <div className="bg-black/20 p-6 rounded-xl border border-white/5 hover:border-neon-green/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-neon-green font-medium text-sm bg-neon-green/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                            {exp.company}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

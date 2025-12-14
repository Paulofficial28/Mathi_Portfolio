"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Get In <span className="text-neon-green">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                            <p className="text-gray-400 mb-8">
                                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">{portfolioData.profile.contact.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">{portfolioData.profile.contact.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">{portfolioData.profile.contact.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <GlassCard className="p-8 flex flex-col justify-center items-center text-center space-y-8">
                            <h3 className="text-2xl font-bold text-white font-syne">Connect With Me</h3>
                            <p className="text-gray-400">
                                Follow my creative journey on social media.
                            </p>

                            <div className="grid grid-cols-2 gap-4 w-full">
                                {portfolioData.profile.contact.social && Object.entries(portfolioData.profile.contact.social).map(([platform, url]) => (
                                    <MagneticButton key={platform} className="w-full">
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300 capitalize font-bold"
                                        >
                                            {platform}
                                        </a>
                                    </MagneticButton>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

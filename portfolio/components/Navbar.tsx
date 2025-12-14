"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <MagneticButton>
                    <Link href="/" className="text-2xl font-bold text-white font-syne">
                        {portfolioData.profile.nickname}<span className="text-neon-green">.</span>
                    </Link>
                </MagneticButton>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
                    {navLinks.map((link) => (
                        <MagneticButton key={link.name}>
                            <Link
                                href={link.href}
                                className="text-gray-300 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition-colors block"
                            >
                                {link.name}
                            </Link>
                        </MagneticButton>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden"
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-neon-green px-4 py-3 rounded-lg text-lg font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

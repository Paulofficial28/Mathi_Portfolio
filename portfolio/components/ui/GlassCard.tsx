"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", hoverEffect = false }: GlassCardProps) {
    return (
        <motion.div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}
            whileHover={hoverEffect ? { scale: 1.02, borderColor: "rgba(57, 255, 20, 0.5)" } : {}}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

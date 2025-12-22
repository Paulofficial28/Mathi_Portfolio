import { motion } from "framer-motion";

export default function ImageSkeleton({ className }: { className?: string }) {
    return (
        <motion.div
            className={`relative overflow-hidden bg-white/5 ${className || ''}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </motion.div>
    );
}

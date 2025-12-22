import { motion } from "framer-motion";

export default function ProjectsSkeleton() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Skeleton */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="h-12 bg-white/10 rounded-lg w-64 animate-pulse" />
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7].map((index) => {
                        const isLarge = index === 1 || index === 4;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`h-[400px] rounded-3xl bg-white/5 border border-white/10 overflow-hidden
                                    ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
                            >
                                <div className="w-full h-full flex flex-col justify-end p-8 space-y-4">
                                    <div className="h-6 bg-white/10 rounded w-24 animate-pulse" />
                                    <div className="h-8 bg-white/10 rounded w-3/4 animate-pulse" />
                                    <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
                                    <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

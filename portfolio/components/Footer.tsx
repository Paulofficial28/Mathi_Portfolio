import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    {/* Social links removed as they are not in the provided data */}
                </div>
            </div>
        </footer>
    );
}

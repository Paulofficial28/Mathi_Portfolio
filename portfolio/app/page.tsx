import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-neon-green selection:text-black cursor-none">
            <Cursor />
            <div className="aurora-bg" />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

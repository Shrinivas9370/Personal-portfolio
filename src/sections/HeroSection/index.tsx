import { HeroBackground } from "./components/HeroBackground";
import { HeroContent } from "./components/HeroContent";
export const HeroSection = () => {
    return (
        <section className="relative items-center box-border caret-transparent flex justify-center min-h-[800px] overflow-hidden pt-16">       <HeroBackground />
            <HeroContent />
        </section>
    );
};
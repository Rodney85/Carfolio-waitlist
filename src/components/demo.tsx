import { HeroGeometric } from "./ui/shape-landing-hero";
import Features from "./Features";

function DemoHeroGeometric() {
    return (
        <HeroGeometric 
            badge="CarFolio" 
            title1="Showcase Your" 
            title2="Car Builds Like Never Before" 
        />
    );
}

function DemoFeatures() {
    return (
        <div className="bg-[#030303] min-h-screen">
            <Features />
        </div>
    );
}

export { DemoHeroGeometric, DemoFeatures };

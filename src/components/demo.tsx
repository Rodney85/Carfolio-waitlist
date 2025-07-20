import { HeroGeometric } from "./ui/shape-landing-hero";

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
        <div className="bg-[#030303] min-h-screen text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Features Demo</h1>
            <p className="text-white/60">Features component has been integrated into the main BeforeAfter section.</p>
        </div>
    );
}

export { DemoHeroGeometric, DemoFeatures };

import { HeroText } from "./HeroText"; 
import { HeroImage } from "./HeroImage";
 import { ScrollIndicator } from "./ScrollIndictor"; 
 export const HeroContent = () => {
    return (
    <div className="relative box-border caret-transparent max-w-screen-xl min-h-[auto] min-w-[auto] z-10 mx-auto px-4 md:px-8"> 
          <div className=" items-center box-border caret-transparent gap-x-12 grid grid-cols-none gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <HeroText />
        <HeroImage />
    </div>
        <ScrollIndicator />
    </div>
    );
};
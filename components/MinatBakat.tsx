import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@data";
import { FlipWords } from "./ui/flip";
import { words } from "@data";

const MinatBakat = () => {
  return (
    <section>
        <div className="w=full h-full bg-[#2f1034] px-10 md:px-20 relative" id="about">
            <div className="absolute inset-0 w-full h-full z-0 bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="relative z-20 flex justify-center lg:text-5xl text-center font-bold text-white text-2xl md:gap-1 lg:gap-2 pt-28 sm:pt-20 sm:text-3xl">
                Here is some of my
                {/* Added FlipWords effect to enhance experience */} 
                <FlipWords words={words} className="text-[#e0b8ff]" duration={1000}/>
            </div>
            <HoverEffect items={skills} className="overflow-hidden"/>
        </div>
    </section>
  )
}

export default MinatBakat

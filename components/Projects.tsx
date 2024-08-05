import ProjectList from "./ProjectList";
import Elipse from "@public/elipse.svg";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
        <div className='relative h-full w-full bg-gradient-to-b from-[#19152d] to-black px-10 md:px-20 py-20 overflow-hidden' id="projects">
            <Image 
                src={Elipse}
                alt="Elipse"
                className="absolute z-0 top-0 opacity-50 md:opacity-40"
            />
            <Image 
                src={Elipse}
                alt="Elipse"
                className="absolute z-0 right-0 top-[40%] opacity-50 md:opacity-40"
            />
            <Image 
                src={Elipse}
                alt="Elipse"
                className="absolute z-0 bottom-0 scale-110 opacity-60 md:opacity-40"
            />
            <div className="relative z-10">
                <div className='flex justify-center gap-2 lg:gap-3 font-bold lg:text-5xl text-3xl text-center'>
                    <h1 className='text-white'> A small selection of <span className="text-[#e0b8ff]"> recent projects</span></h1>
                </div>
                <div className="relative z-20">
                    <ProjectList/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects

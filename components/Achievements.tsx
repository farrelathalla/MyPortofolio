import { SparklesCore } from "./ui/sparkles";
import { Button } from "./ui/moving-borders";
import { workExperience } from "@data";
import Circle from "@public/cirr.svg";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@data";

const Achievements = () => {
  return (
    <section className="bg-black md:px-20 px-10 pb-20 overflow-hidden pt-10 md:pt-36">
        <div className='relative h-full w-full bg-black px-10 md:px-20 py-20 overflow-hidden flex flex-col items-center justify-center' id="achievements" data-aos="zoom-in">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                Achievements
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
                {/* Core component */}
                <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />
    
            {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 relative">
            <Image 
                src={Circle}
                alt="Circle"
                className="absolute -left-64 w-full -top-20 opacity-70 scale-150"
            />
            <Image 
                src={Circle}
                alt="Circle"
                className="absolute -right-64 w-full top-72 opacity-70 scale-150 md:hidden"
            />
            <Image 
                src={Circle}
                alt="Circle"
                className="absolute -left-64 w-full bottom-0 opacity-70 scale-150 md:left-0 lg:hidden"
            />
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   Random duration effects on the edges
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{ 
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // Add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // Remove bg-white dark:bg-slate-900
            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800" data-aos="zoom-in-up"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="pt-36 flex justify-center items-center flex-col" id="contact">
        <h1 className="text-white text-center font-bold text-3xl lg:text-5xl" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"> Reach out to me <span className="text-[#e0b8ff]"> today </span> and let's discuss how I can help you <span className="text-[#e0b8ff]"> achieve </span> your goals </h1>
        <div className="flex gap-6 pt-10">
            <a href="mailto:farrelxag@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
            </a>
            <a href="https://www.linkedin.com/in/farrelathallaputra/" target="_blank">
            <MagicButton
                title="Connect on LinkedIn"
                icon={<FaLocationArrow />}
                position="right"
            />
            </a>
        </div>
        <div className="flex items-center md:gap-3 gap-6 pt-10 pb-20">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank"><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

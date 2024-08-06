"use client";
import Image from "next/image";
import Profil from "@public/profil.jpg"
import { ReactTyped } from "react-typed";
import { Spotlight } from "./ui/Spotlight";
import Circle from "@public/circle.svg";

const Hero = () => {
  return (
    <section>
      <div className="md:h-screen h-auto relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        {/* Added spotlight effects */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen overflow-x-hidden"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-[50%] overflow-x-hidden"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] overflow-x-hidden" fill="blue" />  
        <div className="md:h-screen w-full h-auto grid md:grid-cols-2 items-center justify-center md:gap-10 xl:gap-0 p-10 md:p-40 pt-52 relative bg-gradient-to-tl from-[#3d1545] to-[#000300]">
          <Image
              src={Circle}
              alt="Circle"
              className="absolute object-fill opacity-10"
              // Circle ornament
          />
          <Image
              src={Profil}
              alt="Profil"
              className="z-20 md:w-[400px] w-[300px] rounded-full mx-auto mb-10 md:mb-0 shadow-[0_0px_100px_-35px_rgba(0,0,0,0.3)] shadow-white/75"
              // Profile picture
          />
          <div className="text-white md:text-left text-center">
            <h3 className="font-semibold"> Hello Everyone! My name is </h3>
            <h1 className="font-bold text-2xl xl:text-5xl lg:text-3xl bg-gradient-to-br from-white to-[#e0b8ff] inline-block text-transparent bg-clip-text"> Farrel Athalla Putra </h1>
            <div className="flex gap-2 md:text-base font-bold text-xl xl:text-3xl mb-6 md:justify-start justify-center"><h2> I am a </h2>
            {/* Added ReactTyped to add typing effect */}
            <ReactTyped strings={["Front End Developer", "UI/UX Designer", "Student"]} typeSpeed={40} backSpeed={20} loop className="bg-gradient-to-tl from-white to-[#e0b8ff] inline-block text-transparent bg-clip-text"/>
            </div>
            <p className="text-xs lg:text-sm z-40"> A third-semester Computer Science student at Institut Teknologi Bandung, currently 19 years old. My academic focus is on becoming a Software Engineer, with a particular interest in Front-End Development. I am passionate about creating intuitive and visually appealing user interfaces, and I am continuously developing my skills in HTML, CSS, and Next JS and modern front-end frameworks. As I progress in my studies, I aim to contribute to innovative projects that enhance user experiences and solve real-world problems.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa6";
import { infest, impact, agro, hack } from "@/data";

const ProjectList = () => {
  return (
    <section>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative z-20">
                <PinContainer
                    title="infestitb2024.com"
                    href="https://infestitb2024.com/"
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl object-contain "
                        style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src="/p1.svg"
                            alt="cover"
                            className="z-10 absolute scale-125"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        INFEST 2024 - Front End Developer
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                        }}
                    >
                        The biggest Investment Festival held by KSEP ITB for Indonesia.
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {infest[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2" />
                            </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>

            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer
                    title="figma.com"
                    href="https://www.figma.com/design/pwyUrAQSQ9N4KA0yXd3GXE/IMPACT-4.0-UI%2FUX?node-id=0-1&t=1qMF5RtRZOQeSr2l-1"
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl object-contain "
                        style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src="/p2.svg"
                            alt="cover"
                            className="z-10 absolute -bottom-[8rem]"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        IMPACT 4.0 - UI/UX Designer
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                        }}
                    >
                        STEI Mathematics, Physics, and Informatics Competition 2024. Annual competition for senior high school students
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {impact[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2 scale-50" />
                            </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>

            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer
                    title="github.com"
                    href="https://github.com/farrelathalla/agronomix"
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl object-contain "
                        style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src="/p3.svg"
                            alt="cover"
                            className="z-10 absolute -bottom-2s scale-125"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        Agronomix - Fullstack Developer
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                        }}
                    >
                        One-Stop Hub for Seamless Agriculture Connections. PRD Project
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {agro[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2 h-10" />
                            </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>

            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer
                    title="figma.com"
                    href="https://www.figma.com/proto/p4mRSM6dLfOTu7IcIcGHM1/Material-3-Design-Kit-(Community)?page-id=54708%3A25457&node-id=54708-25458&starting-point-node-id=54708%3A25458&t=hCDO6Qeorn8L1lar-1"
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl object-contain "
                        style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src="/p4.svg"
                            alt="cover"
                            className="z-10 absolute -bottom-2s scale-125"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        BisaBisnis Mobile App - UI/UX Designer
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                        }}
                    >
                        UMKM App for Hackfest
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {hack[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2 h-10 scale-75" />
                            </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>

            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer
                    title="figma.com"
                    href="https://www.figma.com/design/dCgDXakki0L1YzsbC2v1XE/main-project?node-id=0-1&t=FTabRZxP5FmwpDe8-1"
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl object-contain "
                        style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src="/p5.svg"
                            alt="cover"
                            className="z-10 absolute -bottom-[8.7rem]"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        STEI-K 23 Website - UI/UX Designer
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                        }}
                    >
                        STEI-K's 2023 Website for centered information about all STEI-K needs
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {hack[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2 h-10" />
                            </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>
        </div>
    </section>
  )
}

export default ProjectList

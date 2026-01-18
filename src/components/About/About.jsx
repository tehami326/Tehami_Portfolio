import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from "react-parallax-tilt"
import Image from "../../assets/Image.png"


const About = () => {
    return (
        <section id='about' className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight  whitespace-nowrap">
                        Muhammad Tehami
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer', 2000,
                                'Blockchain Developer', 2000,
                                'UI/UX Designer', 2000,
                                'Coder', 2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-[#8245ec]"
                        />
                    </h3>
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a Full-Stack Developer skilled in building scalable, user focused web applications using the MERN stack. I have hands on experience developing responsive frontends, designing RESTful APIs, and creating robust backend systems. I also work with blockchain technologies, including Solidity, Ethers.js, and Hardhat, to build decentralized applications. Passionate about modern web and Web3 technologies, I focus on writing clean code, solving real-world problems, and continuously improving my technical skills.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/15FKhBR7pYgutKa_gCMGDUAFOPqM3IMwx/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>
                <div className='md:w-[45%] flex justify-center md:justify-center md:pl-10'>
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={Image}
                            alt="Muhammad Tehami"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default About

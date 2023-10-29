"use client";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroimage from "/public/hero-image.png";
import { RevealWrapper } from "next-reveal";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="w-full bg-heroblue flex flex-col-reverse  items-stretch md:flex-row justify-center">
          {/* Left Side of the Hero section */}
          <div className="flex-1">
            <Image src={heroimage} /*height={878}*/ alt="hero image" />
          </div>
          {/*   Right side of the Hero Section */}
          <div className="flex-1 grow flex flex-col   bg-heroblue md:flex-1 md:grow text-slate-300">
            <RevealWrapper delay={100} duration={2000}>
              <div className="mt-10 ml-8 md:mt-20 md:ml-0 lg:mt-40">
                <h4 className="text-sm font-light md:text-lg">
                  Presidential Initiative for Artificial Intelligence and
                  Computing(PIAIC)
                </h4>

                <h1 className="text-3xl font-semibold md:text-4xl md:font-bold lg:text-6xl">
                  Certified Web 3.0 and Metaverse Developer
                </h1>

                <p className="mt-4 text-md">
                  The Next generation of internet is here!
                </p>
                <RevealWrapper delay={1500} duration={1000}>
                  <div className="mt-4">
                    <button className=" bg-heroblue px-8 py-4 md:px-10  rounded border-solid border-2 shadow-md">
                      Join Today
                    </button>
                  </div>
                </RevealWrapper>
              </div>
            </RevealWrapper>

            {/*
             */}
            {/* <h4 className="text-lg font-semibold ml-10">
              Presidential Initiative for Artificial Intelligence and
              Computing(PIAIC)
            </h4>
            <h1 className="text-5xl font-bold ml-10">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            
             */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

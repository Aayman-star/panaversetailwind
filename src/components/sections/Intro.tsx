"use client";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import introimage from "/public/intro-image1.png";
import { RevealWrapper } from "next-reveal";

const Intro = () => {
  return (
    <Wrapper>
      {/* Main div housing the image and the text */}
      <section className="max-w-7xl mx-auto">
        <div className="p-2 flex flex-col md:p-0 md:flex-row justify-between">
          {/* Text will bw placed in this div */}
          <div className="flex-1 font-Poppins py-6">
            <RevealWrapper
              origin={"left"}
              reset={true}
              delay={500}
              duration={700}>
              <div className="flex flex-col space-y-3 items-center mt-12">
                <h2 className="font-bold text-3xl text-heroblue">
                  What is Metaverse
                </h2>
                <p className="p-6 text-slate-800 text-base">
                  The internet is without a doubt the most important
                  technological development in human history. Web3, 3D
                  Metaverse, AI, IoT, Cloud, and Edge technologies expand the
                  internet as we know it by introducing novel features and
                  advancements. Metaverse will make use of all aspects of modern
                  technology, including 3D, VR, AR, AI, blockchain, cloud and
                  edge computing, voice computing, ambient computing, and more.
                </p>
              </div>
            </RevealWrapper>
          </div>
          {/* Image will be placed in this div */}
          <RevealWrapper
            origin={"right"}
            reset={true}
            delay={500}
            duration={700}>
            <div>
              <Image src={introimage} alt="Introduction to metaverse" />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </Wrapper>
  );
};

export default Intro;

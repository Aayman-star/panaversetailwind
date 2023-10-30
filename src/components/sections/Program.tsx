"use client";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import studyimage from "/public/pgstudies-image1.png";
import { RevealWrapper } from "next-reveal";
const Program = () => {
  return (
    <Wrapper>
      {/* Main div */}
      <section className="max-w-7xl mx-auto">
        <div className="p-2 flex flex-col-reverse md:p-0 md:flex-row items-center">
          {/* Image here */}
          <RevealWrapper origin={"left"}>
            <div>
              <Image src={studyimage} alt="a boy studying" />
            </div>
          </RevealWrapper>
          {/* text here */}

          <div className="flex-1 font-Poppins">
            <RevealWrapper origin={"right"}>
              <h2 className="text-3xl font-bold text-heroblue text-center mb-6">
                Program of Studies
              </h2>
              <p className="p-6 text-slate-800 text-base">
                Panaverse has consolidated Web 3.0, Metaverse, Artificial
                Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network
                Automation, and Bioinformatics Technologies.This will help you
                keep pace with the ever changing patterns of technology and
                education.The aim of this program is to train competent
                professionals in their field of choice. The first three quarters
                are compulsory for all disciplines. After that students get to
                choose their field of interest and go ahead with that the next
                two quarters.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Program;

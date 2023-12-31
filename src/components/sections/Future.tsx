"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Meta from "/public/Meta8.png";
import { RevealWrapper } from "next-reveal";

const Future = () => {
  return (
    <Wrapper>
      <section className="max-w-7xl mx-auto mt-10 mb-10">
        <div className="p-2 grid grid-cols-1 md:p-0 md:grid-cols-2">
          <RevealWrapper
            origin={"left"}
            reset={true}
            delay={500}
            duration={700}>
            <div className="p-2 grid place-content-center gap-y-2">
              <h3 className="font-semibold text-lg text-slate-800 font-Poppins text-center">
                Change your Future
              </h3>
              <p className="p-4 text-base font-Poppins text-slate-800">
                This one year training program will help you develop a skill-set
                which is the need of the present times.You will be able to
                charge around $50 an hour for your services. You will be
                developing APIs,Full-Stack web template and AR and VR
                experiences. These products will be marketed globally by the
                Panaverse DAO,and as a developer you will get to keep 60% of the
                share. So you will get to contribute to Pakistan’s Software
                products while being financially independent.
              </p>
            </div>
          </RevealWrapper>
          {/* The image div */}
          <RevealWrapper
            origin={"right"}
            reset={true}
            delay={500}
            duration={700}>
            <div>
              <Image src={Meta} alt="boy looking to the future" />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </Wrapper>
  );
};

export default Future;

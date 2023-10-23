import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroimage from "/public/hero-image.png";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col-reverse  items-stretch md:flex-row">
          {/* Left Side of the Hero section */}
          <div className="flex-1">
            <Image src={heroimage} /*height={878}*/ alt="hero image" />
          </div>
          {/*   Right side of the Hero Section */}
          <div className="flex-1 grow flex flex-col   bg-heroblue text-slate-50">
            <div className="mt-10 ml-8 md:mt-20 md:ml-0 lg:mt-40">
              <h4 className="text-sm font-light md:text-lg">
                Presidential Initiative for Artificial Intelligence and
                Computing(PIAIC)
              </h4>
              <h1 className="text-3xl font-semibold md:text-4xl md:font-bold lg:text-5xl">
                Certified Web 3.0 and Metaverse Developer
              </h1>
              <p className="mt-4 text-md">
                The Next generation of internet is here!
              </p>
              <div className="mt-4">
                <button className="px-8  py-4 md:px-10  rounded border-solid border-2">
                  Join Today
                </button>
              </div>
            </div>
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

import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import introimage from "/public/intro-image1.png";

const Intro = () => {
  return (
    <section>
      <Wrapper>
        {/* Main div housing the image and the text */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Text will bw placed in this div */}
          <div className="flex-1 font-Poppins py-6">
            <div className="flex flex-col space-y-3 items-center mt-12">
              <h2 className="font-bold text-3xl text-heroblue">
                What is Metaverse
              </h2>
              <p className="mx-2 text-slate-800">
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT,
                Cloud, and Edge technologies expand the internet as we know it
                by introducing novel features and advancements. Metaverse will
                make use of all aspects of modern technology, including 3D, VR,
                AR, AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more.
              </p>
            </div>
          </div>
          {/* Image will be placed in this div */}
          <div>
            <Image src={introimage} alt="Introduction to metaverse" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Intro;

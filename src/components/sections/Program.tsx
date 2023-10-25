import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import studyimage from "/public/pgstudies-image1.png";
const Program = () => {
  return (
    <Wrapper>
      {/* Main div */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Image here */}
          <div>
            <Image src={studyimage} alt="a boy studying" />
          </div>
          {/* text here */}
          <div className="flex-1 font-Poppins">
            <h2 className="text-3xl font-bold text-heroblue text-center mb-6">
              Program of Studies
            </h2>
            <p className="text-slate-800">
              Panaverse has consolidated Web 3.0, Metaverse, Artificial
              Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network
              Automation, and Bioinformatics Technologies.This will help you
              keep pace with the ever changing patterns of technology and
              education.The aim of this program is to train competent
              professionals in their field of choice. The first three quarters
              are compulsory for all disciplines. After that students get to
              choose their field of interest and go ahead with that the next two
              quarters.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Program;

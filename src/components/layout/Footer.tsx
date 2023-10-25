import React from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/logo.png";
import Image from "next/image";

const Footer = () => {
  const courses: Array<string> = [
    "Web 3.0 and BlockChain",
    "Artificial Intelligence",
    "Cloud-native Computing",
    "Ambient Computing and IoT",
    "Genomics and BioInformatics",
    "Network Programmability and automation",
  ];
  const about: Array<string> = ["Faculty", "Details", "Contact"];
  return (
    <Wrapper>
      <section className="bg-blue-100 p-2">
        <div className="max-w-7xl mx-auto p-4 flex flex-col items-start md:flex-row md:items-center justify-between">
          {/* div containing the logo and content */}
          <div className="flex-1 md:p-2 ">
            <div className="flex flex-col items-start">
              <div className="-ml-20">
                <Image
                  src={Logo}
                  width={300}
                  height={350}
                  alt="panaverse-logo"
                />
              </div>

              <div className=" md:p-6 md:-ml-4">
                <p>
                  Certified Web 3.0 and Metaverse Developer A One and Quarter
                  Years Panaverse DAO Earn as you Learn Program Getting Ready
                  for the Next Generation of the Internet
                </p>
              </div>
            </div>
          </div>

          {/* div containig the menus */}
          <div className="flex-1 flex flex-col md:flex-row items-stretch justify-evenly">
            {/* Courses div */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-lg">Courses</h4>
              <ul>
                {courses.map((course, i) => (
                  <li key={i} className="mb-2">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            {/* Contacts div */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-lg">About</h4>
              <ul>
                {about.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Footer;

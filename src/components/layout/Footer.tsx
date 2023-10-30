import React from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/logo.png";
import Logo1 from "/public/logo-footer.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { link } from "fs";

const Footer = () => {
  // const courses: Array<string> = [
  //   "Web 3.0 and BlockChain",
  //   "Artificial Intelligence",
  //   "Cloud-native Computing",
  //   "Ambient Computing and IoT",
  //   "Genomics and BioInformatics",
  //   "Network Programmability and automation",
  // ];
  const socials: Array<any> = [
    <FaFacebookSquare key={1} />,
    <FaLinkedin key={2} />,
    <FaSquareXTwitter key={3} />,
    <FaGithubSquare key={4} />,
    <FaYoutubeSquare key={5} />,
  ];
  const about: Array<string> = ["About", "Courses", "Contact"];
  return (
    <Wrapper>
      <section className="bg-heroblue p-2">
        <div className="max-w-7xl text-gray-50 mx-auto p-4 grid grid-cols-1 gap-y-6  md:grid-cols-3 md:gap-5">
          {/* div containing the logo and content */}
          <div className=" md:p-2 ">
            <div className="flex flex-col items-start">
              <div className="-ml-18">
                <Image
                  src="/logo-footer.png"
                  width={150}
                  height={100}
                  alt="panaverse-logo"
                />
              </div>

              <div className="mt-2 mb-3 md:p-6 md:-ml-4">
                <p>
                  Certified Web 3.0 and Metaverse Developer A One and Quarter
                  Years Panaverse DAO Earn as you Learn Program Getting Ready
                  for the Next Generation of the Internet
                </p>
              </div>
              {/* Experimental div */}
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center  gap-x-2">
                  <FaLocationDot className="h-4 w-4 text-[#EE1938]" />
                  <p className="text-sm">
                    Plot 245/2 M, PECHS Block 6, Karachi
                  </p>
                </div>
                <div className="flex items-center  gap-x-2">
                  <FaWhatsapp className="h-4 w-4 text-[#EE1938]" />
                  <p className="text-sm">0308-2220203</p>
                </div>
              </div>
            </div>
          </div>

          {/* div containig the menus */}
          <div className=" mt-10 md:col-span-2 grid grid-cols-1 place-content-baseline gap-y-6 md:grid-cols-3  justify-between">
            {/* Contacts div */}
            <div className=" flex flex-col gap-3 md:col-span-1">
              <h4 className="font-semibold text-lg">Home</h4>
              <ul>
                {about.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Socials */}
            <div className=" flex flex-col  items-start   gap-y-4 md:col-span-1">
              <h3 className="text-[#EE1938]  text-lg md:ml-8 font-semibold">
                Follow Us
              </h3>
              <ul className="flex items-center">
                {socials.map((item, i) => (
                  <li key={item.key} className="h-8 w-8 text-[#EE1938]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Subscription */}
            <div className="grid grid-cols-1 gap-y-3 justify-items-start md:col-span-1">
              <h3 className="font-semibold text-[#EE1938]">Subscribe</h3>
              <div>
                <input
                  className="w-full p-2 h-10 rounded-md border border-gray-500"
                  type="text"
                  placeholder="Email Here"
                />
              </div>
              <div>
                <button className="bg-[#EE1938] text-gray-50 px-3 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10">
          <hr />
          <p className="text-gray-50 text-center p-2">
            &copy;2023 Panaverse Dao. All rights reserved.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Footer;

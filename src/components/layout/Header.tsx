"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "/public/logo.png";
import Logo1 from "/public/logo1.png";
import Image from "next/image";
import LGheader from "/public/logo-header.png";
import Wrapper from "../shared/Wrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <section id="Home">
        {/* Mobile Menu */}
        <div className="w-full p-2 bg-heroblue md:hidden">
          <div className="p-2 flex items-center justify-between">
            {" "}
            <Link href={"/"}>
              <Image src={LGheader} alt="logo" />{" "}
            </Link>{" "}
            <div>
              {!toggle ? (
                <button onClick={() => setToggle(!toggle)}>
                  {" "}
                  <FaBars className="w-8 h-8 text-slate-100" />
                </button>
              ) : (
                <div className="w-full min-h-screen fixed top-0 right-0 z-10 bg-white flex flex-col items-center gap-y-10">
                  <button onClick={() => setToggle(!toggle)}>
                    {" "}
                    <RxCross1 className="w-8 h-8 text-heroblue absolute top-10 right-20" />
                  </button>
                  <ul className="mt-20 flex flex-col items-center gap-y-10">
                    <li className="text-center text-heroblue text-3xl font-semibold mb-4">
                      <a href="/#Home" onClick={() => setToggle(!toggle)}>
                        {" "}
                        Home
                      </a>
                    </li>
                    <li className="text-center text-heroblue text-3xl font-semibold mb-4">
                      <a href="/#About" onClick={() => setToggle(!toggle)}>
                        {" "}
                        About
                      </a>
                    </li>
                    <li className="text-center text-heroblue text-3xl font-semibold mb-4">
                      <a href="/#Courses" onClick={() => setToggle(!toggle)}>
                        {" "}
                        Courses
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>{" "}
          </div>
        </div>
        {/* Menu on the large screen */}
        <div className="hidden w-full bg-heroblue md:block">
          <header className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-heroblue z-10">
            {/* Logo */}

            <div className="md:-ml-10 ">
              {/* <h2 className="text-xl font-bold font-Poppins">Panaverse Dao</h2> */}
              {/* <Link href={"/"}>
              <Image
                src="/logo1.png"
                width={100}
                height={200}
                alt="panaverse-logo"
              />
            </Link> */}
              <Link href={"/"}>
                <Image src={LGheader} alt="logo" />
              </Link>
            </div>

            {/* Navigation Bar */}

            <ul className="flex items-center space-x-6 text-slate-100 font-regular font-Poppins">
              <Link href={"/"}>
                <li className="hover:scale-110">Home</li>
              </Link>

              <a href="/#About">
                <li className="hover:scale-110">About</li>
              </a>

              <a href="/#Courses">
                <li className="hover:scale-110">Courses</li>
              </a>
            </ul>
          </header>
        </div>
      </section>
    </Wrapper>
  );
};

export default Header;

// {/* Trying to make it responsive */}
//       {/* Mobile Menu */}
//       <div className="w-full p-2 md:hidden">
//
//       </div>

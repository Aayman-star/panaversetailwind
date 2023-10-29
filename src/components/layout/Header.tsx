import Link from "next/link";
import Logo from "/public/logo.png";
import Logo1 from "/public/logo1.png";
import Image from "next/image";
import LGheader from "/public/logo-header.png";
import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <div className="w-full bg-heroblue">
        <header className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-heroblue sticky top-0 z-10">
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

            <Link href={"/courses"}>
              <li className="hover:scale-110">Courses</li>
            </Link>
          </ul>
        </header>
      </div>
    </Wrapper>
  );
};

export default Header;

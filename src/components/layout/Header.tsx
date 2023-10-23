import Link from "next/link";
import Logo from "/public/logo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between items-center py-5 bg-slate-50 sticky top-0 z-10">
        {/* Logo */}
        <div className="-ml-10">
          {/* <h2 className="text-xl font-bold font-Poppins">Panaverse Dao</h2> */}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={250}
              height={200}
              alt="panaverse-logo"
            />
          </Link>
        </div>

        {/* Navigation Bar */}
        <ul className="flex items-center space-x-6 text-slate-900 font-regular font-Poppins">
          <Link href={"/"}>
            <li className="hover:scale-110">Home</li>
          </Link>

          <Link href={"/courses"}>
            <li className="hover:scale-110">Courses</li>
          </Link>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;

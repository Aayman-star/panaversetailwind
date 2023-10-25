import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Program from "@/components/sections/Program";
import CoreCourses from "@/components/sections/CoreCourses";
import Future from "@/components/sections/Future";

export default function Home() {
  return (
    <>
      {/* Hero SEction */}
      <Hero />
      <Intro />
      <Program />
      <CoreCourses />
      <Future />
    </>
  );
}

"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { RevealList } from "next-reveal";

const CoreCourses = () => {
  return (
    <Wrapper>
      <section className="max-w-7xl mx-auto p-2 font-Poppins">
        <Card className="border-none text-center">
          <CardHeader>
            <CardTitle className="font-semibold text-slate-800">
              Core Courses
            </CardTitle>
            <CardDescription className="text-heroblue">
              Common in all specialisations
            </CardDescription>
          </CardHeader>
        </Card>

        <RevealList
          interval={60}
          duration={500}
          origin={"left"}
          className="p-2 grid grid-cols-1 gap-2 md:grid-cols-3 gap-x-2">
          <Card className="border border-[#EE1938] font-Poppins grid place-content-center">
            <CardHeader>
              <CardTitle className="text-slate-800 text-center font-medium">
                Quarter-I
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-heroblue text-center">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#EE1938] font-Poppins grid place-content-center">
            <CardHeader>
              <CardTitle className="text-slate-800 text-center font-medium">
                Quarter-II
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-800 text-center">
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                for Terraform
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#EE1938] font-Poppins grid place-content-center">
            <CardHeader>
              <CardTitle className="text-slate-800 text-center font-medium">
                Quarter-III
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-800 text-center">
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Developmentl
              </p>
            </CardContent>
          </Card>
        </RevealList>
      </section>
    </Wrapper>
  );
};

export default CoreCourses;

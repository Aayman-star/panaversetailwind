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

const CoreCourses = () => {
  return (
    <Wrapper>
      <section className="max-w-7xl mx-auto p-2 grid grid-cols-3 gap-x-2">
        <Card className="border border-heroblue font-Poppins grid place-content-center">
          <CardHeader>
            <CardTitle className="text-heroblue text-center">
              Quarter-I
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-heroblue text-center">
              CS-101: Object-Oriented Programming using TypeScript
            </p>
          </CardContent>
        </Card>
        <Card className="border border-heroblue font-Poppins grid place-content-center">
          <CardHeader>
            <CardTitle className="text-heroblue text-center">
              Quarter-II
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-heroblue text-center">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
              Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
            </p>
          </CardContent>
        </Card>
        <Card className="border border-heroblue font-Poppins grid place-content-center">
          <CardHeader>
            <CardTitle className="text-heroblue text-center">
              Quarter-III
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-heroblue text-center">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Developmentl
            </p>
          </CardContent>
        </Card>
      </section>
    </Wrapper>
  );
};

export default CoreCourses;

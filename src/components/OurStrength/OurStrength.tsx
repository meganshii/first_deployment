"use client";
import React from "react";
import LandingPage from "./LandingPage";
import SecondPage from "./SecondPage";
import { OurStrengthItem } from "./types/constant";

interface MainLayoutprops {
  strengthData:OurStrengthItem;
}

const OurStrength:React.FC <MainLayoutprops>= ({strengthData}) => {
  return (
    <>
    <div className="bg-[#f2f2f2]">
      <LandingPage strengthData={strengthData} />
      <SecondPage strengthData={strengthData}/>
      </div>
    </>
  );
};

export default OurStrength;

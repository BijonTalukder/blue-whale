"use client";
import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";
import HomePage from "./(pages)/HomePage/page";


export default function Home() {
  return (
    <>
       <DashboardTitle windowTitle={"হোম"}/>
       <HomePage/>
    </>
  );
}

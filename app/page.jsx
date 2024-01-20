"use client";
import { useState } from "react";

import Saveworld from "@/components/homepage/Saveworld"
import Nav from "@/components/navbar/Nav";
import axios from "axios";
import Quiz from "@/components/homepage/Quiz";
import Pages from "@/components/SDG/page"
import About_Nepal from "@/components/About_Nepal/About_Nepal";
export default function Home() {



  return (
    <>
      <div className="max-w-[100vw] min-h-[100vh] text-white overflow-hidden">
        {/* navdiv   */}
        <Nav />
        <Saveworld />
        <Pages />
        <Quiz />
        <About_Nepal />

        {/* <Tasks /> */}
      </div>
    </>
  );
}

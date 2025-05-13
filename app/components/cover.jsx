"use client";
import React from "react";
import Link from "next/link";
import Header from "./header1";

const Cover = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/cover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="ml-20 mt-5 flex flex-col gap-8">
            <h1
              className={`text-4xl md:text-5xl lg:text-8xl text-white font-semibold mb-6 `}
            >
              Welcome to <br /> Lagree Eliteform
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 mt-8">
              <Link href="/book">
                <button className="px-26 py-7 bg-white text-black font-medium  hover:bg-gray-100 transition duration-300">
                  Book a Class
                </button>
              </Link>

              <Link href="/start">
                <button className="px-26 py-7 bg-white text-black font-medium  hover:bg-gray-100 transition duration-300">
                  New? Start Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

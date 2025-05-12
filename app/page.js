"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Lora } from "next/font/google";
import toast from "react-hot-toast";
import Header from "./components/header";
import Link from "next/link";
const lora = Lora({
  subsets: ["latin"],
  weight: "500", // Optional: customize as needed
});

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main section with background image */}
      <div className="flex-1 h-screen flex flex-col text-center items-center relative">
        {/* Background image */}
        <div
          className="absolute inset-0 h-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/fitness.jpg')",
          }}
        />

        {/* Content container */}
        <div className="relative flex flex-col justify-center items-center py-20 w-full h-full">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[4rem] md:text-[13rem] text-center items-center justify-center tracking-wider text-white">
              COMING
            </h1>
            <h1 className="text-[4rem] md:text-[13rem] text-center items-center justify-center mb-4 tracking-wider text-white">
              Soon
            </h1>

            <p className="text-lg md:px-0 px-5 md:text-2xl text-white mb-4 tracking-wider">
              Your new favourite workout is coming to FalseCreek.
            </p>
            <p className="text-lg md:px-0 px-5 md:text-2xl text-white mb-4 tracking-wider">
              {" "}
              Get ready to shake, sweat and sculpt with us!
            </p>
            <p className="text-lg md:px-0 px-5 md:text-2xl text-white mb-4 tracking-wider">
              {" "}
              Join our email list for updates on intro offers & our Spring 2025
              opening date.
            </p>
          </div>
        </div>
      </div>

      {/* Notification form section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 flex flex-col px-10 justify-center">
              <h2
                className={`text-3xl md:text-4xl  mb-4 text-black ${lora.className}`}
              >
                Get Notified
              </h2>
              <p className="text-lg font-light text-gray-700 mb-6">
                Sign up now, and we&apos;ll send you exclusive updates, sneak
                peaks, and a special invite.
              </p>
              <div className="flex flex-row gap-10 text-black">
                <div className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="instagram"
                  >
                    <path
                      fill="#000000"
                      d="M12.00039,6.86511A5.13489,5.13489,0,1,0,17.13528,12,5.13479,5.13479,0,0,0,12.00039,6.86511Zm0,8.46846A3.3336,3.3336,0,1,1,15.334,12,3.33317,3.33317,0,0,1,12.00039,15.33357Z"
                    ></path>
                    <path
                      fill="#000000"
                      d="M21.93985,7.87719a7.33258,7.33258,0,0,0-.46447-2.42726,4.918,4.918,0,0,0-1.15346-1.77146A4.89358,4.89358,0,0,0,18.55129,2.525,7.32278,7.32278,0,0,0,16.124,2.06054C15.05775,2.012,14.7169,2,12.00122,2s-3.05681.01126-4.12365.06054A7.33317,7.33317,0,0,0,5.45032,2.525,4.90522,4.90522,0,0,0,3.67886,3.67847a4.88551,4.88551,0,0,0-1.1534,1.77146A7.33341,7.33341,0,0,0,2.061,7.87719C2.01171,8.94341,2.00039,9.28432,2.00039,12s.01132,3.05653.06059,4.12276a7.33352,7.33352,0,0,0,.46448,2.42731,4.888,4.888,0,0,0,1.1534,1.77146,4.9169,4.9169,0,0,0,1.77146,1.1534,7.33849,7.33849,0,0,0,2.42725.46448C8.94441,21.9879,9.28471,22,12.00039,22s3.05658-.01132,4.12281-.06059a7.33339,7.33339,0,0,0,2.42726-.46448,5.11251,5.11251,0,0,0,2.92492-2.92486,7.316,7.316,0,0,0,.46447-2.42731c.0485-1.067.05976-1.40708.05976-4.12276S21.98835,8.94341,21.93985,7.87719Zm-1.799,8.16406a5.54872,5.54872,0,0,1-.344,1.85708,3.31133,3.31133,0,0,1-1.89825,1.89741,5.52231,5.52231,0,0,1-1.85708.344c-1.05408.04844-1.37068.05815-4.04119.05815s-2.98623-.00971-4.04-.05815a5.5263,5.5263,0,0,1-1.85708-.344,3.10771,3.10771,0,0,1-1.15024-.748,3.085,3.085,0,0,1-.748-1.1494,5.52134,5.52134,0,0,1-.344-1.85708c-.0485-1.05408-.05815-1.37068-.05815-4.04119s.01049-2.98623.05815-4.0412a5.56308,5.56308,0,0,1,.344-1.857,3.1074,3.1074,0,0,1,.748-1.15024,3.08175,3.08175,0,0,1,1.15024-.748,5.52271,5.52271,0,0,1,1.85708-.344c1.05407-.04849,1.37068-.05815,4.04-.05815s2.98623.01049,4.04119.05815a5.5635,5.5635,0,0,1,1.85708.344,3.30957,3.30957,0,0,1,1.89825,1.89825,5.52254,5.52254,0,0,1,.344,1.857c.04849,1.055.05815,1.37074.05815,4.0412S20.18936,14.98628,20.14087,16.04125Z"
                    ></path>
                    <path
                      fill="#000000"
                      d="M17.339,5.462h-.00044a1.19979,1.19979,0,1,0,.00044,0Z"
                    ></path>
                  </svg>
                </div>
                <div className="underline font-light uppercase">
                  <Link href={"/privacypolicy"}>Privacy Policy</Link>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2">
              <form
                className=" p-6"
                onSubmit={(e) => {
                  e.preventDefault();

                  // Get form data
                  const formData = new FormData(e.target);
                  const firstName = formData.get("firstName");
                  const lastName = formData.get("lastName");
                  const email = formData.get("email");

                  // Create email content
                  const mailtoLink = `mailto:setarehkopahi@gmail.com?subject=New Notification Sign-up&body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}`;

                  // Open email client
                  window.open(mailtoLink);

                  // Reset form
                  e.target.reset();

                  // Show success message (optional)
                  toast.success("Successfully Sent!");
                }}
              >
                <div className="mb-10">
                  <label className="block text-lg text-black font-light mb-4">
                    Name{" "}
                    <span className="text-sm text-gray-700">(required)</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700  font-light ">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full text-black px-4 py-2 border-b border-black  focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700  font-light ">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full text-black px-4 py-2 border-b border-black  focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-lg text-black font-light mb-1">
                    Email{" "}
                    <span className="text-sm text-gray-700">(required)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full text-black px-4 py-2 border-b border-black  focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1C1C1C] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

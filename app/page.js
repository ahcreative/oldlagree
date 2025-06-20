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
              Your new favourite workout is coming to Downtown Vancouver.
            </p>
            <p className="text-lg md:px-0 px-5 md:text-2xl text-white mb-4 tracking-wider">
              {" "}
              Get ready to shake, sweat and sculpt with us!
            </p>
            <p className="text-lg md:px-0 px-5 md:text-2xl text-white mb-4 tracking-wider">
              {" "}
              Join our email list for updates on intro offers & our Fall 2025
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

// "use client";
// import React from "react";
// import Cover from "./components/cover";
// import Image from "next/image";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Cover />
//       <div className="bg-white py-28">
//         <div className="container   flex flex-col md:flex-row items-center justify-between gap-2 px-10">
//           {/* Left section */}
//           <div className="flex flex-col pl-18 gap-24 justify-start items-start ">
//             <div className="">
//               <p className=" text-5xl text-black font-medium leading-tight ">
//                 <strong>
//                   We target slow <br /> twitch muscle fibres.
//                 </strong>
//               </p>
//             </div>
//             <div className="">
//               <button className="bg-black text-white py-6 px-28 self-start font-light">
//                 <strong>Learn the science behind lagree</strong>
//               </button>
//             </div>
//           </div>

//           {/* Right section - Image container */}
//           <div className="mr-10 h-fit w-full md:w-1/2 flex items-center justify-center">
//             <Image
//               src="/pic1.jpg"
//               alt="Lagree fitness"
//               className="w-full  object-cover"
//               width={500}
//               height={200}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

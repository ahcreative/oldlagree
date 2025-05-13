import React from "react";

function Header() {
  return (
    <nav
      className={` top-0 left-0 right-0 bg-black z-50 py-3 h-[100px] flex justify-center items-center transition-all duration-300 
      `}
    >
      <div className="container flex gap-2  mx-auto ">
        <img src="/icon.png" className="h-14 md:h-18  ml-7 block " alt="" />

        <img src="/logo.png" className="h-14 md:h-18  block " alt="" />
      </div>
    </nav>
  );
}

export default Header;

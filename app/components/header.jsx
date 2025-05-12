import React from "react";

function Header() {
  return (
    <nav className="bg-[#1C1C1C] py-3 ">
      <div className="container mx-auto ">
        <img src="/logo.png" className="h-18 ml-10 md:block hidden" alt="" />
        <img src="/icon.png" className="h-18 ml-10 md:hidden block" alt="" />
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import Head from "next/head";

function Header() {
  return (
    <>
      <Head>
        <title>Lagree Pulse - Premium Fitness Experience</title>
        <meta
          name="description"
          content="Experience premium fitness with Lagree Pulse. Transform your body with our innovative workout equipment and training programs."
        />
        <meta
          name="keywords"
          content="Lagree Pulse, fitness, workout, exercise, premium fitness, fitness equipment , lagree , pulse"
        />
        <meta
          property="og:title"
          content="Lagree Pulse - Premium Fitness Experience"
        />
        <meta
          property="og:description"
          content="Experience premium fitness with Lagree Pulse. Transform your body with our innovative workout equipment and training programs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lagreepulse.com" />
      </Head>
      <header>
        <nav
          className={`top-0 left-0 right-0 bg-black z-50 py-3 h-[100px] flex justify-center items-center transition-all duration-300`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container flex flex-row items-center gap-2 mx-auto">
            <img
              src="/icon.png"
              className="h-14 md:h-14 ml-7 block"
              alt="Lagree Pulse Icon"
              loading="eager"
            />
            <img
              src="/logo.png"
              className="h-14 md:h-14 block"
              alt="Lagree Pulse Logo"
              loading="eager"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

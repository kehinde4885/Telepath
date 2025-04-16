import React from "react";
import Header from "./components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <main className="">
        {/* Stacking Context Created on Section Element */}
        <section id="hero" className="relative z-0 h-dvh bg-black">
          <div className="absolute bottom-10 flex w-full">
            <button className="group/cta relative mx-auto scale-[1.01] rounded-5xl border-2 font-mono text-sm text-black uppercase outline-0 transition-colors focus-visible:border-lime">
              <div className="absolute top-0 -z-10 h-full w-full rounded-5xl bg-white transition-all duration-500 group-hover/cta:scale-105 group-hover/cta:blur-[2px] hover:bg-black"></div>
              <div className="flex h-10 items-center gap-2 px-4 text-black">
                <span>watch film</span>
                <span className="">
                  <svg
                    // width="17"
                    // height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="aspect-square w-[17px]">
                    <path
                      d="M14.5001 8.89665L3.16675 15.5633V2.22998L14.5001 8.89665Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </section>

        <section id="productVidScroll">

        </section>
      </main>
    </>
  );
};

export default Landing;

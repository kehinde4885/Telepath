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
            <button className="group/cta relative mx-auto scale-[1.01] rounded-5xl border-2 border-transparent font-mono text-sm text-black uppercase outline-0 transition-colors focus-visible:border-lime">
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

        <section id="productVidScroll" className="relative bg-lime">
          <img src="/frame_0065.webp" alt="" />
          <div className="absolute bottom-16 flex w-full flex-col items-center">
            <h2 className="font-serif text-[8vw] tracking-tight text-white">
              For Chords
            </h2>

            <a
              href="#"
              className="group/cta relative scale-[1.01] rounded-5xl border-2 border-transparent font-mono text-sm text-black uppercase outline-0 transition-colors focus-visible:border-lime">
              <div className="absolute top-0 -z-10 h-full w-full rounded-5xl bg-white transition-all duration-500 group-hover/cta:scale-105 group-hover/cta:blur-[2px] hover:bg-black"></div>
              <div className="flex h-10 items-center gap-2 px-4 text-black">
                <span>preview orchid</span>
                <span className="">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </section>

        <section>
          
        </section>
      </main>
    </>
  );
};

export default Landing;

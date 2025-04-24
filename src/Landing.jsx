import React from "react";
import Header from "./components/Header";
import { Button2, Button3 } from "./components/Button";
import Button from "./components/Button";
import OrchidExp from "./components/OrchidExp";

const faqArr = Array(15).fill(null);

const Landing = () => {
  return (
    <>
      <Header />
      <main className="">
        {/* Stacking Context Created on Section Element */}
        {/* Sections */}
        <section id="hero" className="relative z-0 h-dvh bg-black">
          <div className="absolute bottom-10 flex w-full">
            <Button2 text="watch film" />
          </div>
        </section>

        <section id="productVidScroll" className="relative bg-lime">
          <img src="/frame_0065.webp" alt="" />
          <div className="absolute bottom-16 flex w-full flex-col items-center">
            <h2 className="font-serif text-[8vw] tracking-tight text-white">
              For Chords
            </h2>

            <Button text="preview orchid" />
          </div>
        </section>

        <section id="infoSec1" className="">
          <div className="relative">
            <div className="absolute h-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/img2.webp"
                alt=""
              />
            </div>

            {/* Wrap this with one more Div-Note */}
            <article className="flex bg-jet px-10 py-8 text-white">
              <div className="flex min-h-[704px] max-w-[440px] flex-col justify-center gap-10 rounded-[100px] p-12 backdrop-blur-[80px]">
                <h3 className="heading2 font-serif text-[64px]">
                  Find <em>what's</em> on <em>your</em> mind
                </h3>

                <div className="flex flex-col gap-10">
                  <div className="space-y-4 font-sans text-[18px]">
                    <p>
                      Orchid’s advanced intuitive chord generator offers a break
                      from chord maths and muscle memory and keeps you in the
                      flow of songwriting.
                    </p>
                    <p>
                      Find a new chord, a new progression, a new voicing, or a
                      whole new idea.
                    </p>
                    <p>Find what’s on your mind. </p>
                  </div>

                  <Button text="Learn more" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-brown">
          <div className="grid grid-cols-5">
            {/*  */}
            <article className="col-span-3 p-6">
              <div className="overflow-hidden rounded-[100px]">
                <img className="" src="/img3.png" alt="" />
              </div>
            </article>
            {/*  */}

            <div className="col-span-2 flex max-w-sm flex-col justify-center gap-10 justify-self-center text-white">
              <h2 className="heading2 font-serif text-[64px]">
                Easily play an <em>F#minor Jazz</em>
              </h2>
              {/*  */}
              <div className="space-y-10">
                <div className="space-y-4 font-sans text-[18px]">
                  <p className="text-balance">
                    With Orchid you can effortlessly create classic triads and
                    add diatonically correct extensions without having to rack
                    your brain for music theory stuff you learned in your teens.
                  </p>
                  <p>
                    Follow the rules of conventional music theory with Key Mode,
                    or make up your own harmonic rules.
                  </p>
                  <p>Just be careful of too much jazz. </p>
                </div>

                <Button text="learn more" />
              </div>
              {/*  */}
            </div>

            {/*  */}
          </div>
        </section>

        <section className="grid grid-cols-5 bg-bone">
          <article className="col-span-full grid grid-cols-subgrid">
            {/*  */}
            <article className="order-1 col-span-3 p-6">
              <div className="aspect-[61/48] overflow-hidden rounded-[100px]">
                <img
                  className="h-full w-full object-cover"
                  src="/orchid3.webp"
                  alt=""
                />
              </div>
            </article>
            {/*  */}
            <div className="col-span-2 flex max-w-sm flex-col justify-center gap-10 justify-self-center text-black">
              <h2 className="heading2 font-serif text-[64px]">
                More than just <em>Arpeggios.</em>
              </h2>
              {/*  */}
              <div className="space-y-10">
                <div className="space-y-4 font-sans text-[18px]">
                  <p className="">
                    Animate your chords with Orchid’s range of performance
                    settings. Strum or Arpeggiate to bring your chord out note
                    by note, use pre-programmed Patterns, or try Harp mode for
                    multi-octave soundscape.
                  </p>
                  <p>
                    Add some Slop for a human touch that would make Dilla proud.
                  </p>
                </div>

                <Button3 text="learn more" />
              </div>
              {/*  */}
            </div>
            {/*  */}
          </article>

          <article className="col-span-full grid grid-cols-subgrid">
            {/*  */}
            <article className="col-span-3 p-6">
              <div className="overflow-hidden rounded-[100px]">
                <img className="h-full w-full" src="/img4.png" alt="" />
              </div>
            </article>
            {/*  */}
            <div className="col-span-2 flex max-w-sm flex-col justify-center gap-10 justify-self-center text-black">
              <h2 className="heading2 font-serif text-[64px]">
                You've got a <em>whole keyboard</em> to play with.
              </h2>
              {/*  */}
              <div className="space-y-10">
                <div className="space-y-4 font-sans text-[18px]">
                  <p className="">
                    Use Orchid’s custom Voicing Dial to expand the single octave
                    keyboard into multiple octaves. Turn the jog wheel to shift
                    the position of your chord up and down the keyboard note by
                    note, creating interesting inversions along the way.
                  </p>
                </div>

                <Button3 text="learn more" />
              </div>
              {/*  */}
            </div>
            {/*  */}
          </article>

          <article className="col-span-full grid grid-cols-subgrid">
            {/*  */}
            <article className="order-1 col-span-3 p-6">
              <div className="aspect-[61/48] overflow-hidden rounded-[100px]">
                <img
                  className="h-full w-full object-cover"
                  src="/img5.webp"
                  alt=""
                />
              </div>
            </article>
            {/*  */}
            <div className="col-span-2 flex max-w-sm flex-col justify-center gap-10 justify-self-center text-black">
              <h2 className="heading2 font-serif text-[64px]">
                Know what you're playing <em>Or don't</em>
              </h2>
              {/*  */}
              {/* <div className="space-y-10"> */}
              <div className="space-y-4 font-sans text-[18px]">
                <p className="">
                  Ever wanted to know music theory? You’re allowed to want that.
                  The built-in OLED display shows chord names (and optional note
                  details) for easy notation and collaboration.
                </p>
                <p>
                  And if you’d rather just focus on the music (and not the
                  notes) bliss out with some classic 8 bit videos or the onboard
                  oscilloscope instead.
                </p>
              </div>
              {/* </div> */}
              {/*  */}
            </div>
            {/*  */}
          </article>

          <article className="col-span-full grid grid-cols-subgrid">
            {/*  */}
            <article className="col-span-3 p-6">
              <div className="aspect-[61/48] overflow-hidden rounded-[100px]">
                <img
                  className="h-full w-full object-cover"
                  src="/img6.webp"
                  alt=""
                />
              </div>
            </article>
            {/*  */}
            <div className="col-span-2 flex max-w-sm flex-col justify-center gap-10 justify-self-center text-black">
              <h2 className="heading2 font-serif text-[64px]">
                Discover your song's <em>destiny</em>.
              </h2>
              {/*  */}
              <div className="space-y-10">
                <div className="space-y-4 font-sans text-[18px]">
                  <p className="">
                    Ever wanted to know music theory? You’re allowed to want
                    that. The built-in OLED display shows chord names (and
                    optional note details) for easy notation and collaboration.
                  </p>
                  <p>
                    And if you’d rather just focus on the music (and not the
                    notes) bliss out with some classic 8 bit videos or the
                    onboard oscilloscope instead.
                  </p>
                </div>

                <Button3 text="Learn more" />
              </div>
              {/*  */}
            </div>
            {/*  */}
          </article>
        </section>

        <section className="bg-black">
          <div className="px-10 pt-14 pb-24">
            <OrchidExp />
          </div>

          <hr className="text-white opacity-60" />

          <section
            id="audioPreview"
            className="grid grid-cols-4 gap-y-14 px-10 pt-14 pb-24">
            {/*  */}

            <div className="col-span-full flex justify-between">
              <h2 className="heading2 max-w-[15ch] font-serif text-[64px] text-pretty text-white">
                You'll know it when you <em>hear</em> it.
              </h2>

              <p className="max-w-[40ch] text-lg text-pretty text-white">
                Orchid’s synth engine is made up of 3 separate synths: a
                polyphonic virtual analogue subtractive synth, an FM synth and a
                vintage reed piano emulation based off a famous 60s electric
                piano with mechanical noise samples for added realism.
              </p>
            </div>

            <article className="col-span-full grid grid-cols-subgrid justify-between gap-4">
              {/* Full Card */}
              {new Array(4).fill(null).map(() => (
                <div className="space-y-4">
                  {/* Video Card */}
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    <img className="h-full w-full" src="/reed.jpg" alt="" />
                    <div className="group/audcard absolute inset-0 flex cursor-pointer items-center justify-center">
                      <button className="absolute flex aspect-square w-[100px] items-center justify-center rounded-full border-2 border-white text-white mix-blend-exclusion group-hover/audcard:bg-white group-hover/audcard:text-black">
                        <svg
                          // width="17"
                          // height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="aspect-square w-[32px]">
                          <path
                            d="M14.5001 8.89665L3.16675 15.5633V2.22998L14.5001 8.89665Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Video Title */}
                  <p className="font-mono text-white uppercase">
                    {" "}
                    01 reed piano
                  </p>
                </div>
              ))}
            </article>
          </section>
        </section>

        <section
          id="accessories"
          className="grid grid-cols-4 gap-x-6 gap-y-14 bg-white px-10 pt-14 pb-24">
          <div className="col-span-full flex items-center justify-between gap-4">
            <h2 className="heading2 font-serif text-[64px]">Accessories</h2>
            <Button3 text={"shop all"} />
          </div>

          {new Array(4).fill(null).map(() => (
            <article className="space-y-4">
              <div className="aspect-square rounded-lg">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="/orchid5.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2 text-black">
                <p className="text-lg capitalize">Blue Orchid beanie</p>
                <p className="font-mono">$30.00</p>
              </div>
            </article>
          ))}
        </section>

        <section
          id="faq"
          className="grid grid-cols-2 items-start bg-black px-10 pt-14 pb-24 text-white transition-[height] duration-5000">
          <h2 className="heading2 max-w-[15ch] font-serif text-[64px] text-white">
            Frequently asked questions
          </h2>

          <div>
            {/*  */}
            {faqArr.map(() => (
              <details className="group/dd overflow-hidden border-t-2 opacity-60 transition-colors duration-200 details-content:h-0 details-content:transition-[height,content-visibility] details-content:transition-discrete details-content:duration-200 open:opacity-100 open:details-content:h-auto">
                <summary className="flex list-none items-center justify-between py-4 text-lg">
                  <p>Why 1000 units?</p>
                  <span className="transition-transform duration-500 group-open/dd:rotate-180">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.52851 5.52876C3.78886 5.26841 4.21097 5.26841 4.47132 5.52876L7.99992 9.05735L11.5285 5.52876C11.7889 5.26841 12.211 5.26841 12.4713 5.52876C12.7317 5.78911 12.7317 6.21122 12.4713 6.47157L8.47132 10.4715C8.21097 10.7319 7.78886 10.7319 7.52851 10.4715L3.52851 6.47157C3.26816 6.21122 3.26816 5.78911 3.52851 5.52876Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="space-y-4 pr-2 pb-6">
                  <p className="">
                    Orchid is a brand new type of instrument. Which means
                    there’s going to be so many interesting and unexpected ways
                    to play it. Ways that we couldn’t anticipate ourselves.
                    That's why we're starting with a small number of units and
                    users so we can get feedback on the software, and iterate
                    accordingly.
                  </p>
                  <p>
                    Software updates based on user feedback will be posted
                    regularly on a secret URL, and typically take about 1-3
                    minutes.
                  </p>
                  <p>
                    Please note that Orchid will be shipping as a fully realised
                    hardware product. There will be no changes to the hardware
                    for the foreseeable future — the units we’ll ship to the
                    wider public in Summer 2025 will be exactly the same...
                    they’ll just be a little less
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="h-screen bg-white"></section>
      </main>
    </>
  );
};

export default Landing;

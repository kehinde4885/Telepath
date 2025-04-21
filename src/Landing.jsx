import React from "react";
import Header from "./components/Header";
import { Button2, Button3 } from "./components/Button";
import Button from "./components/Button";
import OrchidExp from "./components/OrchidExp";

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

        <section className="bg-bone">
          <article className="grid grid-cols-5">
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

          <article className="grid grid-cols-5">
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

          <article className="grid grid-cols-5">
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

          <article className="grid grid-cols-5">
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

        <section className="h-screen bg-black px-10 pt-14 pb-24">
          <OrchidExp />
        </section>
      </main>
    </>
  );
};

export default Landing;

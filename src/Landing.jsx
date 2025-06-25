import React from "react";
import Header from "./components/Header";
import { Button2, Button3 } from "./components/Button";
import Button from "./components/Button";
import OrchidExp from "./components/OrchidExp";

const faqArr = Array(5).fill(null);

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
              <details className="group/dd cursor-pointer overflow-hidden border-t-2 opacity-60 transition-colors duration-200 details-content:h-0 details-content:transition-[height,content-visibility] details-content:transition-discrete details-content:duration-200 open:opacity-100 open:details-content:h-auto hover:opacity-100">
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

        <footer className="bg-charcoal py-10">
          <article className="grid grid-cols-[1fr_max-content] jus px-10">
            {/* Image/Logo */}
            <div className="col-start-1 row-start-1 w-[207px]">
              <svg
                className="h-auto w-full"
                width="934"
                height="202"
                viewBox="0 0 934 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_77_52)">
                  <path
                    d="M180 200H146V0H180C185.304 0 190.391 2.10714 194.142 5.85786C197.893 9.60859 200 14.6957 200 20V180C200 185.304 197.893 190.391 194.142 194.142C190.391 197.893 185.304 200 180 200ZM91 0V100H73V200H129V0H91ZM39 100V0H20C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20V180C0 185.304 2.10714 190.391 5.85786 194.142C9.60859 197.893 14.6957 200 20 200H56V100H39Z"
                    fill="white"
                  />
                  <path
                    d="M280.13 14.66H252V0H326.43V14.66H298.17V91.48H280.17L280.13 14.66Z"
                    fill="white"
                  />
                  <path
                    d="M322.051 62.3401C322.941 73.9501 331.051 79.6201 339.211 79.6201C344.511 79.6201 349.931 77.7301 353.471 71.8001H371.381C367.721 81.8901 357.751 93.1201 339.381 93.1201C317.551 93.1201 304.811 76.8501 304.811 57.2901C304.811 37.1101 318.811 22.1001 338.871 22.1001C359.811 22.1001 372.931 38.3701 372.181 62.3401H322.051ZM322.311 50.3401H354.471C354.101 38.8601 346.021 34.8201 338.711 34.8201C332.151 34.8401 323.691 39.0001 322.311 50.3601V50.3401Z"
                    fill="white"
                  />
                  <path
                    d="M395.529 91.48H378.119V0H395.529V91.48Z"
                    fill="white"
                  />
                  <path
                    d="M418.759 62.3201C419.639 73.9201 427.759 79.6001 435.919 79.6001C441.219 79.6001 446.639 77.7101 450.169 71.7801H468.089C464.429 81.8701 454.459 93.1001 436.089 93.1001C414.269 93.1001 401.529 76.8201 401.529 57.2701C401.529 37.0901 415.529 22.0801 435.589 22.0801C456.529 22.0801 469.649 38.3501 468.889 62.3201H418.759ZM419.009 50.3201H451.179C450.799 38.8401 442.729 34.8101 435.409 34.8101C428.849 34.8201 420.399 39.0001 418.999 50.3301L419.009 50.3201Z"
                    fill="white"
                  />
                  <path
                    d="M474.83 113.53V23.5901H492.24V32.2901C495.89 25.9901 503.24 22.0801 511.79 22.0801C528.19 22.0801 541.31 36.2001 541.31 57.5201C541.31 79.2201 527.81 93.1001 511.66 93.1001C504.6 93.1001 496.53 90.3201 492.24 82.8801V113.53H474.83ZM523 57.6501C523 44.4001 516.44 35.4501 507.48 35.4501C497.89 35.4501 491.59 43.9001 491.59 57.5201C491.59 71.4001 497.89 79.7301 507.48 79.7301C516.46 79.7301 523 70.9001 523 57.6501Z"
                    fill="white"
                  />
                  <path
                    d="M568.31 93.0998C555.31 93.0998 543.83 85.5298 543.83 73.1698C543.83 57.1698 561.83 52.3498 588.49 49.3198V48.1898C588.49 37.7198 582.81 34.0598 575.75 34.0598C569.06 34.0598 563.51 37.5898 563.13 45.0598H546.86C548.12 31.6798 559.22 21.8398 576.63 21.8398C592.78 21.8398 605.9 28.7798 605.9 51.7398C605.9 53.8898 605.65 62.8398 605.65 69.0198C605.65 79.7498 606.4 85.7998 607.65 91.4798H591.65C591.07 88.6837 590.689 85.8499 590.51 82.9998C585.71 90.0698 578.52 93.0998 568.31 93.0998ZM589 60.4298C569.58 62.4298 561.76 64.7098 561.76 72.2798C561.76 77.1998 565.67 81.2798 573.49 81.2798C584.34 81.2798 589 75.3498 589 65.5098V60.4298Z"
                    fill="white"
                  />
                  <path
                    d="M616.59 5.16992H634V23.5899H648.13V35.5899H634V70.6399C634 77.5799 636.39 78.9699 642.58 78.9699H647.87V91.4599H635.13C619.62 91.4599 616.59 86.6599 616.59 73.1699V35.5699H607V23.5699H616.59V5.16992Z"
                    fill="white"
                  />
                  <path
                    d="M671.25 32.55C675.16 25.73 682.6 22.08 690.93 22.08C707.2 22.08 714.39 32.08 714.39 48.69V91.46H697V52.46C697 43.63 695.1 36.06 685.26 36.06C673.78 36.06 671.26 45.39 671.26 56.12V91.46H653.84V0H671.25V32.55Z"
                    fill="white"
                  />
                  <path
                    d="M737.76 0V16.15H720.35V0H737.76ZM737.76 23.59V91.46H720.35V23.59H737.76Z"
                    fill="white"
                  />
                  <path
                    d="M808.549 46.8001H791.899C790.639 40.3701 784.329 35.5701 777.769 35.5701C768.689 35.5701 761.499 43.2701 761.499 57.4001C761.499 71.5301 768.309 79.6001 777.899 79.6001C783.829 79.6001 790.259 76.6001 792.529 68.3701H809.179C805.139 86.9201 790.999 93.1001 776.999 93.1001C756.689 93.1001 743.699 78.1001 743.699 57.6501C743.699 36.9601 757.449 22.0801 777.759 22.0801C791.899 22.0801 806.279 29.9001 808.549 46.8001Z"
                    fill="white"
                  />
                  <path
                    d="M298.131 199.83H280.131V108.37H298.131V199.83Z"
                    fill="white"
                  />
                  <path
                    d="M323.29 140.92C327.19 133.98 334.49 130.45 342.93 130.45C359.17 130.45 366.34 140.29 366.34 157.06V199.83H349V160.83C349 152.12 347.11 144.43 337.29 144.43C325.84 144.43 323.29 153.76 323.29 164.49V199.81H305.92V132H323.29V140.92Z"
                    fill="white"
                  />
                  <path
                    d="M413.489 152.4C412.099 146.72 407.069 142.68 399.009 142.68C392.589 142.68 388.059 145.08 388.059 149.24C388.059 152.9 390.699 155.68 397.119 157.06L406.189 159.06C419.659 162.06 431.109 165.5 431.109 179.5C431.109 193.12 417.109 201.45 401.779 201.45C385.159 201.45 372.579 192.87 370.939 177.35H387.679C388.679 183.91 393.219 188.83 402.279 188.83C409.839 188.83 414.499 186.06 414.499 181.14C414.499 176.22 409.329 174.2 403.419 172.81L393.349 170.67C380.629 168.02 372.199 162.72 372.199 150.36C372.199 138.25 385.289 130.17 399.889 130.17C413.989 130.17 427.339 136.73 429.729 152.38L413.489 152.4Z"
                    fill="white"
                  />
                  <path
                    d="M441.001 113.54H458.401V132H472.501V144H458.401V179C458.401 185.94 460.791 187.33 466.961 187.33H472.251V199.82H459.541C443.931 199.82 441.031 195.02 441.031 181.53V143.93H431.461V132H441.001V113.54Z"
                    fill="white"
                  />
                  <path
                    d="M516.81 148.74C514.434 148.424 512.036 148.297 509.64 148.36C501.08 148.36 495.41 151.51 495.41 164.25V199.83H478V132H495.12V143.86C499.02 135.41 505.07 132.13 513 132.13C514.26 132.149 515.518 132.232 516.77 132.38L516.81 148.74Z"
                    fill="white"
                  />
                  <path
                    d="M565.31 190.87C561.41 197.81 553.98 201.47 545.54 201.47C529.3 201.47 522.76 191.47 522.76 174.85V132H540.13V171.11C540.13 180.19 541.52 187.51 551.21 187.51C562.79 187.51 565.31 178.04 565.31 167.32V132H582.68V199.87H565.31V190.87Z"
                    fill="white"
                  />
                  <path
                    d="M661.141 144.45C649.551 144.45 647.671 154.16 647.671 164.51V199.83H630.291V160.34C630.291 152.9 629.661 144.45 619.471 144.45C607.891 144.45 606.001 154.16 606.001 164.51V199.83H588.631V132H606.001V141C609.901 134.31 616.701 130.53 624.881 130.53C636.341 130.53 641.501 136.71 644.141 141.63C649.551 134.06 656.231 130.53 666.421 130.53C683.421 130.53 689.331 141.12 689.331 157.14V199.91H672.001V160.34C672.001 152.9 671.331 144.45 661.141 144.45Z"
                    fill="white"
                  />
                  <path
                    d="M712.53 170.69C713.53 182.29 721.34 187.97 729.65 187.97C735.06 187.97 740.35 186.08 743.87 180.15H761.75C758.1 190.24 748.28 201.47 729.75 201.47C707.97 201.47 695.26 185.19 695.26 165.64C695.26 145.46 709.26 130.45 729.26 130.45C750.16 130.45 763.12 146.72 762.49 170.69H712.53ZM712.78 158.69H744.88C744.5 147.21 736.44 143.18 729.14 143.18C722.6 143.19 714.16 147.22 712.78 158.7V158.69Z"
                    fill="white"
                  />
                  <path
                    d="M786.3 140.92C790.2 133.98 797.5 130.45 805.94 130.45C822.18 130.45 829.35 140.29 829.35 157.06V199.83H812V160.83C812 152.12 810.11 144.43 800.29 144.43C788.84 144.43 786.29 153.76 786.29 164.49V199.81H768.93V132H786.3V140.92Z"
                    fill="white"
                  />
                  <path
                    d="M841.291 113.54H858.661V132H872.761V144H858.661V179C858.661 185.94 861.051 187.33 867.221 187.33H872.511V199.82H859.791C844.181 199.82 841.291 195.02 841.291 181.53V143.93H831.721V132H841.291V113.54Z"
                    fill="white"
                  />
                  <path
                    d="M916.359 152.4C914.999 146.72 910.069 142.68 902.179 142.68C895.899 142.68 891.459 145.08 891.459 149.24C891.459 152.9 894.049 155.68 900.329 157.06L909.209 159.06C922.389 162.06 933.609 165.5 933.609 179.5C933.609 193.12 919.929 201.45 904.889 201.45C888.619 201.45 876.299 192.87 874.699 177.35H891.089C892.089 183.91 896.509 188.83 905.389 188.83C912.779 188.83 917.389 186.06 917.389 181.14C917.389 176.22 912.339 174.2 906.549 172.81L896.689 170.67C884.239 168.02 875.979 162.72 875.979 150.36C875.979 138.25 888.799 130.17 903.089 130.17C916.899 130.17 929.959 136.73 932.309 152.38L916.359 152.4Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_77_52">
                    <rect width="934" height="202" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="row-start-1 row-end-3 flex flex-col justify-between gap-20">
              <div>
                <p className="mb-6 text-lg text-white">
                  Sign up for the latest updates
                </p>

                <form
                  action=""
                  className="flex max-w-[500px] min-w-[450px] overflow-hidden rounded-5xl bg-white">
                  <input
                    className="basis-full px-8 py-[14px] placeholder:font-mono placeholder:text-lg placeholder:uppercase"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                  <button className="flex items-center pr-8 pl-4">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
                <li className="col-start-1 font-mono text-xs text-silver uppercase">
                  returns policy
                </li>
                <li className="col-start-1 font-mono text-xs text-silver uppercase">
                  privacy policy
                </li>
                <li className="col-start-1 font-mono text-xs text-silver uppercase">
                  terms of service
                </li>
                <li className="col-start-1 font-mono text-xs text-silver uppercase">
                  warranty
                </li>
                <li className="col-start-1 font-mono text-xs text-silver uppercase">
                  your privacy choices
                </li>
                <li className="col-start-2 row-start-1 font-mono text-xs text-silver uppercase">
                  instagram
                </li>
                <li className="col-start-2 row-start-2 font-mono text-xs text-silver uppercase">
                  youtube
                </li>
              </ul>
            </div>

            <p className="font-mono text-xs self-end text-silver uppercase">
              © 2025 Telepathic Instruments
            </p>
          </article>
        </footer>
      </main>
    </>
  );
};

export default Landing;

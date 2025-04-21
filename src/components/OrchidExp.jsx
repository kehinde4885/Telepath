import React from "react";

const Btns = [
  { 1: { left: "left-[90%]", bottom: "bottom-[2%]", grp: 1 } },
  { 2: { left: "left-[6%]", bottom: "bottom-[37.5%]", grp: 1 } },
  { 3: { left: "left-[6%]", bottom: "bottom-[26.5%]", grp: 1 } },
  { 4: { left: "left-[37%]", bottom: "bottom-[32%]", grp: 1 } },
  { 5: { left: "left-[38.5%]", bottom: "bottom-[16.5%]", grp: 1 } },
  { 6: { left: "left-[5.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 7: { left: "left-[13.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 8: { left: "left-[20.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 9: { left: "left-[28.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 10: { left: "left-[37%]", bottom: "bottom-[66%]", grp: 2 } },
  { 11: { left: "left-[51%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 12: { left: "left-[59%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 13: { left: "left-[67.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 14: { left: "left-[76%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 15: { left: "left-[84.5%]", bottom: "bottom-[62.5%]", grp: 2 } },
  { 16: { left: "left-[41%]", bottom: "bottom-[97%]", grp: 3 } },
  { 17: { left: "left-[46%]", bottom: "bottom-[97%]", grp: 3 } },
  { 18: { left: "left-[51%]", bottom: "bottom-[97%]", grp: 3 } },
  { 19: { left: "left-[56%]", bottom: "bottom-[97%]", grp: 3 } },
];

const baseStyle =
  "absolute  flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent text-xs hover:border-white";
const grpStyle1 = "bg-yellow text-white";
const grpStyle2 = "bg-red text-white";
const grpStyle3 = "bg-khaki text-black";

const OrchidExp = () => {
  return (
    <article className="grid grid-cols-[1fr_380px] gap-6">
      <section className="px-14">
        <div className="relative z-0">
          <img src="orchidHard.webp" alt="" className="h-full w-full" />
          <div id="btnGrp" className="absolute top-0 h-full w-full">
            {Btns.map((btn, index) => {
              let grpStyle;
              let posStyle = `${btn[index + 1].left} ${btn[index + 1].bottom}`;

              switch (btn[index + 1].grp) {
                case 1:
                  grpStyle = grpStyle1;
                  break;
                case 2:
                  grpStyle = grpStyle2;
                  break;
                case 3:
                  grpStyle = grpStyle3;
                  break;

                default:
                  break;
              }

              return (
                <button className={baseStyle + " " + grpStyle + " " + posStyle}>
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <div className="text-white">
        <h2 className="heading font-serif text-[64px]">Explore Orchid</h2>
        <hr />
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 pt-4">
          <div className="flex items-center gap-3">
            <button
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent text-xs hover:border-white ${grpStyle1}`}>
              5
            </button>
            <p className="text-lg">Sound</p>
          </div>

          <div className="flex gap-2 justify-self-end">
            <button className="aspect-square w-6 rotate-180">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z"
                  fill="currentcolor"
                />
              </svg>
            </button>

            <button className="aspect-square w-6">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z"
                  fill="currentcolor"
                />
              </svg>
            </button>
          </div>

          <p className="col-span-full">
            A Sound is a combination of synth texture, FX and Performance.
            Sounds can be customised by adjusting the FX and Performance
            settings.
          </p>
        </div>
      </div>
    </article>
  );
};

export default OrchidExp;

import React from "react";
import Bounded from "../Bounded";
import Button from "../Button";
import { TallLogo } from "../svgs/TallLogo";
import { WideLogo } from "../svgs/WideLogo";
import InteractiveSkateboard from "./hero/InteractiveSkateboard";

const Hero = () => {
  return (
    <Bounded className="text-zinc-800 bg-brand-pink relative h-dvh overflow-hidden bg-texture">
      <div className="absolute inset-0 flex items-center pt-20">
        <TallLogo className="text-brand-purple w-full hidden opacity-20 mix-blend-multiply lg:block animation-squiggle" />
        <WideLogo className="lg:hidden text-brand-purple w-full opacity-20 mix-blend-multiply " />
      </div>
      <div className="absolute inset-0 mx-auto mt-24 grid grid-rows-[1fr_auto] max-w-6xl place-items-end px-6 py-10 sm:py-12 md:py-14 lg:py-16">
        <h2 className="font-bowl uppercase text-4xl xl:text-6xl md:text-5xl max-w-2xl relative place-self-start ">
          Escape the Cul-de-sac
        </h2>
        <div className="flex relative items-center w-full flex-col gap-2 sm:gap-3 md:gap-4 lg:flex-row justify-between">
          <h3 className="max-w-[45ch] font-semibold text-">
            Not just a board, your board, Design a board that's as real as the
            places you take it. Build your board.
          </h3>
          <Button className="z-10 mt-2 block" icon="skateboard" size="lg">
            Design Your Board
          </Button>
        </div>
      </div>
      <div>
        <InteractiveSkateboard />
      </div>
    </Bounded>
  );
};

export default Hero;

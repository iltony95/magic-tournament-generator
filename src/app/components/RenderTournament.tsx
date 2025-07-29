"use client";

import * as React from "react";
import { GeneratorForm } from "./GeneratorForm";
import { useTournament } from "../hooks/useTournament";
import { Tournament } from "./Tournament";
import { ChevronRightIcon } from "lucide-react";

export function RenderTournament() {
  const { tournament, initialized, hasWaitingPlayer, resetTournament } =
    useTournament();
  const [scroll, setScroll] = React.useState<boolean>(false);

  function toggleScroll() {
    setScroll((prev) => !prev);
  }

  return (
    <React.Fragment>
      {!initialized ? (
        <div className="rounded-2xl bg-white backdrop-blur-sm p-8 shadow-xl flex flex-col gap-4">
          <h1 className="text-3xl text-center">Tournament Generator</h1>
          <GeneratorForm />
        </div>
      ) : (
        <div className="relative w-11/12 h-11/12 md:w-9/12 bg-white rounded-2xl pt-5 pb-20 pl-5 pr-10 md:pt-10 md:pb-20 md:pl-10 md:pr-20 overflow-x-hidden">
          <div
            className={`scrollbar-hidden w-[calc(200%+60px)] md:w-[calc(200%+80px)] h-full overflow-x-scroll flex items-center gap-5 md:gap-x-20 transition-transform duration-300 ease-in-out ${
              scroll
                ? "translate-x-[calc(-50%-10px)] md:translate-x-[calc(-50%-40px)]"
                : "translate-x-0"
            }`}
          >
            <div className={`w-full grid place-items-center h-full`}>
              <Tournament
                tournament={tournament}
                hasWaitingPlayer={hasWaitingPlayer}
              />
            </div>
            <div className={`w-full h-full`}>
              <h2>Classifica</h2>
              <ul>
                <li>PRIMO</li>
              </ul>
            </div>
          </div>
          <button
            className="btn w-max absolute z-10 bottom-4 left-5 md:left-0 md:right-0 md:mx-auto my-0 border-cyan-700 bg-white text-cyan-700 hover:text-white hover:bg-cyan-700 hover:border-transparent"
            onClick={resetTournament}
          >
            Reset Tournament
          </button>
          <button
            className="btn-circle absolute z-10 md:my-auto mx-0 md:top-0 md:bottom-0 bottom-4 right-4 w-12 h-12 border border-cyan-700 bg-white text-cyan-700 hover:text-white hover:bg-cyan-700 hover:border-transparent"
            onClick={toggleScroll}
          >
            <ChevronRightIcon
              className={`w-full h-full ${scroll ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

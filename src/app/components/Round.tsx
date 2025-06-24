import * as React from "react";
import { Match as MatchS } from "../utils/schemas";
import { Match } from "./Match";

interface RoundProps {
  index: string;
  matches: Array<MatchS>;
  hasWaitingPlayer: boolean;
}
export function Round(props: RoundProps) {
  return (
    <div className="grid grid-cols-2 items-center p-4">
      <p
        className={`text-3xl text-slate-500 capitalize flex flex-col gap-1${
          !props.hasWaitingPlayer ? " items-center" : ""
        }`}
      >
        <span className="text-sm">
          {props.hasWaitingPlayer ? "Waiting player:" : "Round"}
        </span>
        {props.index}
      </p>
      <div className="flex flex-col gap-2">
        {props.matches.map((match) => (
          <Match
            key={`match_${match.proponent}_${match.opponent}`}
            match={match}
          />
        ))}
      </div>
    </div>
  );
}

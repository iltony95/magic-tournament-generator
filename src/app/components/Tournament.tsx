import * as React from "react";
import { Tournament as TournamentS } from "../utils/schemas";
import { Round } from "./Round";

interface TournamentProps {
  tournament: TournamentS;
  hasWaitingPlayer: boolean;
}
export function Tournament(props: TournamentProps) {
  const entries = Object.entries(props.tournament);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-h-[70dvh] overflow-x-hidden overflow-y-auto gap-10">
      {entries?.map(([k, v], i) => (
        <Round
          index={k}
          matches={v}
          hasWaitingPlayer={props.hasWaitingPlayer}
          key={`round_${i}`}
        />
      ))}
    </div>
  );
}

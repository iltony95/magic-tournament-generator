"use client";

import * as React from "react";
import { Match as MatchS } from "../utils/schemas";
import { MatchPlayer } from "./MatchPlayer";
import { useMatches } from "../hooks/useMatches";

interface MatchProps {
  match: MatchS;
}
export function Match(props: MatchProps) {
  const [winnerPlayer, setWinnerPlayer] = React.useState<string>("");
  const { updateMatches } = useMatches();

  function onClick(player: string) {
    setWinnerPlayer(player);
    updateMatches([{ match: props.match, winnerPlayer: player }]);
  }

  return (
    <div className="grid grid-cols-3 justify-items-center items-center gap-2">
      <MatchPlayer
        player={props.match.proponent}
        onClick={() => onClick(props.match.proponent)}
        winnerPlayer={winnerPlayer}
      />
      -
      <MatchPlayer
        player={props.match.opponent}
        onClick={() => onClick(props.match.opponent)}
        winnerPlayer={winnerPlayer}
      />
    </div>
  );
}

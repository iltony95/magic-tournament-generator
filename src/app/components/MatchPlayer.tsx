import * as React from "react";

interface MatchPlayerProps {
  player: string;
  winnerPlayer?: string;
  onClick: () => void;
}
export function MatchPlayer(props: MatchPlayerProps) {
  const hasAWinner = props.winnerPlayer ? true : false;
  const isWinnerPlayer = props.winnerPlayer === props.player;

  return (
    <button
      className={`btn-small border-slate-200 text-slate-900 hover:bg-slate-400 hover:text-white ${
        hasAWinner
          ? isWinnerPlayer
            ? "bg-green-500 border-transparent text-white"
            : "bg-red-500 border-transparent text-white"
          : "bg-white"
      }`}
      onClick={props.onClick}
      disabled={hasAWinner}
    >
      {props.player}
    </button>
  );
}

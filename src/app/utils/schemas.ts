export interface Match {
  proponent: string;
  opponent: string;
}
export interface LeaderboardMatch {
  match: Match;
  winnerPlayer: string;
}

export type Tournament = Record<string, Array<Match>>;

export interface TournamentResult {
  tournament?: Tournament;
  hasWaitingPlayer: boolean;
}

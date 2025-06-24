export interface Match {
  proponent: string;
  opponent: string;
}

export type Tournament = Record<string, Array<Match>>;

export interface TournamentResult {
  tournament?: Tournament;
  hasWaitingPlayer: boolean;
}

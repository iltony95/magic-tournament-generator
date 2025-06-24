"use server";

import { generateTournament } from "../lib/generateTournament";
import { TournamentResult } from "../utils/schemas";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function manageFormData(
  _: unknown,
  data: FormData
): Promise<TournamentResult | null> {
  const formPlayers = data?.get("players")?.toString();

  if (!formPlayers) return null;

  const players = formPlayers.split(",");
  const tournament: TournamentResult = generateTournament(players);

  return tournament;
}

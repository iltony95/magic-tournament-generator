import { Match, Tournament, TournamentResult } from "../utils/schemas";

export function generateTournament(players: Array<string>): TournamentResult {
  const numberOfPlayers = players.length;
  const needWaitingPlayer = numberOfPlayers % 2 > 0;
  const limit = needWaitingPlayer ? numberOfPlayers : numberOfPlayers - 1;
  const tournament: Tournament = {};
  let currentIndex = 0;

  while (currentIndex < limit) {
    const newOrderedPlayers = needWaitingPlayer
      ? calcNextOrderPlayers(players, currentIndex)
      : [players[0], ...calcNextOrderPlayers(players.slice(1), currentIndex)];
    const newMid = Math.floor(newOrderedPlayers.length / 2);
    const matches = needWaitingPlayer
      ? getMatchesWithWaitingPlayer(newOrderedPlayers)
      : getMatches(newOrderedPlayers);

    const key = needWaitingPlayer
      ? newOrderedPlayers[newMid]
      : currentIndex + 1;

    tournament[key] = matches;
    currentIndex++;
  }

  return {
    tournament: tournament,
    hasWaitingPlayer: needWaitingPlayer,
  };
}

function getMatchesWithWaitingPlayer(players: Array<string>) {
  const mid = Math.floor(players.length / 2);
  const _players = players.filter((p) => p !== players[mid]);

  return calcMatches(_players, mid);
}

function getMatches(players: Array<string>): Array<Match> {
  const mid = Math.floor(players.length / 2);
  const matches = calcMatches(players, mid);

  return matches;
}

function calcMatches(players: Array<string>, mid: number) {
  const first = players.slice(0, mid);
  const second = mirrorArray(players.slice(mid, players.length));
  const matches: Array<Match> = [];

  for (let i = 0; i < first.length; i++) {
    matches.push({
      proponent: first[i],
      opponent: second[i],
    });
  }

  return matches;
}

function calcNextOrderPlayers(
  arr: Array<string>,
  index: number
): Array<string> {
  const newArr = [];
  let counter = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = i - index;
    if (j >= 0) {
      newArr[i] = arr[j];
    } else {
      newArr[i] = arr[counter];
      counter--;
    }
  }

  return newArr;
}

function mirrorArray(arr: Array<string>) {
  const result: Array<string> = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

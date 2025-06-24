import { create } from "zustand";
import { Tournament } from "../utils/schemas";

interface useTournamentStore {
  tournament: Tournament;
  hasWaitingPlayer: boolean;
  initialized: boolean;
  initTournament: (payload: Tournament) => void;
  resetTournament: () => void;
  setWaitingPlayer: (payload: boolean) => void;
}

const initialState = {
  tournament: {},
  hasWaitingPlayer: false,
  initialized: false,
};

export const useTournament = create<useTournamentStore>((set) => ({
  ...initialState,
  initTournament: (payload: Tournament) =>
    set({ tournament: payload, initialized: true }),
  resetTournament: () =>
    set({ tournament: {}, initialized: false, hasWaitingPlayer: false }),
  setWaitingPlayer: (payload: boolean) => set({ hasWaitingPlayer: payload }),
}));

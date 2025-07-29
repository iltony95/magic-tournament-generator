import { create } from "zustand";
import { LeaderboardMatch } from "../utils/schemas";

interface useMatchesStore {
  matches: Array<LeaderboardMatch>;
  updateMatches: (payload: Array<LeaderboardMatch>) => void;
}

const initialState = {
  matches: [],
};

export const useMatches = create<useMatchesStore>((set) => ({
  ...initialState,
  updateMatches: (payload: Array<LeaderboardMatch>) =>
    set((state) => ({ matches: [...state?.matches, ...payload] })),
}));

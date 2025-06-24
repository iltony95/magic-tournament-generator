"use client";

import * as React from "react";
import Form from "next/form";
import { manageFormData } from "../actions/manageFomData";
import { DynamicInput } from "./DynamicInput";
import { useTournament } from "../hooks/useTournament";

export function GeneratorForm() {
  const [data, formAction, isPending] = React.useActionState(
    manageFormData,
    null
  );
  const { initTournament, setWaitingPlayer } = useTournament();

  React.useEffect(() => {
    if (!data) return;
    if (!data?.tournament) return;

    initTournament(data?.tournament);
    setWaitingPlayer(data?.hasWaitingPlayer);
  }, [data]);

  return (
    <Form className="max-w-[372px]" action={formAction}>
      <DynamicInput label="Players" name="players" />
      <button
        className="mt-8 border-2 border-transparent bg-cyan-700 text-white uppercase hover:text-cyan-700 hover:bg-white hover:border-cyan-700 transition-all duration-300 ease-in-out cursor-pointer w-full rounded-xl py-2 px-4 text-2xl"
        type="submit"
        disabled={isPending}
      >
        Generate
      </button>
    </Form>
  );
}

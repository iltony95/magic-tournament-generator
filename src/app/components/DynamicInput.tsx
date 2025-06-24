"use client";

import * as React from "react";
import { PlusIcon, Trash2Icon } from "lucide-react";

interface DynamicInputProps {
  label: string;
  name: string;
}
export function DynamicInput(props: DynamicInputProps) {
  const [value, setValue] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");
  const hasElements = result.length > 0;
  const renderElements: Array<string> = result.split(",");

  function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (!value) return;

    setResult((prev) => {
      const elements = prev.length > 0 ? prev.split(",") : [];
      const _value = value.toLowerCase();
      if (elements.includes(_value)) return prev;
      elements.push(_value);
      return elements.toString();
    });
    setValue("");
  }

  function removePlayer(e: React.MouseEvent<HTMLButtonElement>, name: string) {
    e.stopPropagation();
    e.preventDefault();

    setResult((prev) => {
      const elements = prev.split(",");
      const newElements = elements.filter((t) => t !== name);
      return newElements!.toString();
    });
  }

  return (
    <div className="flex flex-col w-full">
      <input
        type="hidden"
        name={props.name}
        value={result}
        onChange={() => {}}
      ></input>
      <div className="flex items-center gap-2">
        <label
          className="px-4 py-2 rounded-xl border-2 border-slate-200 flex-1"
          htmlFor="internal"
        >
          <input
            className="outline-0"
            type="text"
            name="internal"
            placeholder="Add player..."
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
        </label>
        <button
          className="w-10 h-10 cursor-pointer bg-cyan-700 hover:bg-white text-white hover:text-cyan-700 border-2 border-transparent hover:border-cyan-700 rounded-xl"
          onClick={handleAdd}
        >
          <PlusIcon className="w-full h-full p-0" />
        </button>
      </div>

      {!hasElements ? (
        <></>
      ) : (
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {renderElements?.map((s) => (
            <button
              className="border border-slate-200 px-2 py-1 capitalize rounded-xl flex items-center gap-2 cursor-pointer group hover:bg-red-500 hover:text-white transition-all ease-in-out duration-200"
              key={`elem_${s}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                removePlayer(e, s)
              }
            >
              {s}
              <span className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                <Trash2Icon className="w-full h-full p-0" />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

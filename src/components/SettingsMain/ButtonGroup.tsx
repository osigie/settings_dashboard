import React from "react";
import { useButtonSelection } from "../../hooks/buttonSelection";
import { buttons_data } from "../../utils";

type Props = {};

export default function ButtonGroup({}: Props) {
  const { handleSelect, selectedButton } = useButtonSelection();
  return (
    <div className="flex overflow-auto scrollbar-none">
      {buttons_data.map((each, index) => {
        return (
          <button
            key={index}
            className={`${
              selectedButton[each as keyof boolean] ? "bg-brand-grey-4" : ""
            }  border border-brand-grey-3 p-3 first-of-type:rounded-l-lg last-of-type:rounded-r-lg text-brand-dark-2 font-medium mt-8 mb-10 text-xs md:text-sm hover:bg-brand-background-4`}
            onClick={() => handleSelect(each)}
          >
            {each}
          </button>
        );
      })}
    </div>
  );
}

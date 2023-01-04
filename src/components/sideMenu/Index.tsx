import React from "react";
import MainMenu from "./MainMenu";

type Props = {};

export default function Sidebar({}: Props) {
  const [selected, setSelected] = React.useState("Settings");
  return (
    <div className="w-[279px] max-w-[279px] min-w-[279px] h-screen overflow-y-scroll max-h-screen px-6 overflow-x-hidden py-9 scrollbar scrollbar-thumb-brand-grey-2 scrollbar-track-brand-grey-3 md:block hidden md:h-full">
     <MainMenu/>
    </div>
  );
}


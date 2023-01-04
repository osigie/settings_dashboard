import React from "react";
import Logo from "../Icons/Logo";
import { HiMenuAlt1 } from "react-icons/hi";
import MainMenu from "../SharedComponent/MainMenu";

type Props = {};

function Index({}: Props) {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className="md:hidden">
      {toggleNav ? (
        <div className="pl-3">
          <MainMenu onClick={() => setToggleNav(!toggleNav)} />
        </div>
      ) : (
        <div className="flex bg-white justify-between items-center h-15 px-4 py-5 fixed z-10 top-0 w-full">
          <div className="flex gap-2 items-center">
            <Logo />
            <h1 className=" text-brand-dark-1 text-lg font-medium self-center">
              Untitled UI
            </h1>
          </div>
          <HiMenuAlt1
            size="30"
            className="text-brand-grey-2 cursor-pointer"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>
      )}
    </div>
  );
}

export default Index;

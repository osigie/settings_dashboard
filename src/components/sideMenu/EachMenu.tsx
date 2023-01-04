import { title } from "process";
import React from "react";
import { IconType } from "react-icons/lib";
import Home from "../../../pages";

type Props = {
  icon: IconType;
  title: string;
  onClick: () => void;
  toggle: string;
  index: number;
};

const EachMenu = (props: Props) => {
  const { icon, title, onClick, toggle, index } = props;

  return (
    <div
      className={`${toggle === title ? "before:block" : "before:hidden"} ${
        index === 6 ? "mt-7" : ""
      } flex mt-1 cursor-pointer h-10 relative before:content-[''] before:absolute before:top-0 before:w-1 before:h-6 before:bg-brand-grey-2 before:border before:rounded-md before:shadow before:translate-y-1/2 before:left-0`}
      onClick={onClick}
    >
      <div
        className={`${
          toggle === title ? "text-brand-dark-1" : "text-brand-dark-2"
        } flex pl-12 hover:text-brand-grey-2 ease-out duration-200 items-center`}
      >
        <div className="mr-2">
          <props.icon />
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default EachMenu;

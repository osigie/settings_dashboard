import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import EachMenu from "../SideMenu/EachMenu";
import { RxCross2 } from "react-icons/rx";
import { menu_data } from "../../utils";

type Props = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function MainMenu({ onClick }: Props) {
  const [selected, setSelected] = React.useState("Settings");
  return (
    <>
      <div className="flex w-full border-b md:border-0 bg-white md:border-r md:pr-0 ">
        <div className="pt-2 w-full">
          <div className="flex content-center gap-2 mb-6 md:pt-9">
            {/* <Logo /> */}
            <Image
              className="w-10 h-10 rounded-full "
            src="/Logomark.png"
              alt=""
              width={40}
              height={40}
            />
            <h1 className=" text-brand-dark-1 text-lg font-medium self-center">
              Untitled UI
            </h1>
          </div>

          <label className="relative block mr-2 md:mr-0 w-[90%]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2" />
            </span>
            <input
              className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-8 pr-4 focus:outline-none md:h-11"
              placeholder="Search"
              type="text"
            />
          </label>

          <div className="mt-6">
            {menu_data.map((each, index) => {
              return (
                <EachMenu
                  key={index}
                  icon={each.icon}
                  title={each.label}
                  onClick={() => setSelected(each.label)}
                  toggle={selected}
                  index={index}
                />
              );
            })}
          </div>
          <div>
            <div className="bg-brand-background-1 py-5 px-4 hidden md:block">
              <h3 className="text-brand-dark-1 text-sm font-medium">
                New Features Available!
              </h3>
              <h4 className="text-brand-dark-1 text-sm font-normal mt-1 mb-4">
                Check out the new dashboard view. Pages now load faster.
              </h4>
              <Image
                src="/Image.png"
                alt="sidebar image"
                width={215}
                height={136}
                className="bg-cover object-cover rounded-lg mb-4"
              />
              <div className="flex gap-3">
                <h4 className="text-brand-grey-2 text-sm font-medium">
                  Dismiss
                </h4>
                <h4 className="text-brand-card-2 text-sm font-medium">
                  What&apos;s new
                </h4>
              </div>
            </div>

            <hr className="my-6 " />
            <div className="flex gap-3">
              <Image
                className="w-10 h-10 rounded-full "
                src="/Avatar.png"
                alt=""
                width={10}
                height={10}
              />
              <div className="pb-2">
                <h4 className="text-brand-dark-1 text-sm font-medium ">
                  Olivia Rhye
                </h4>
                <h4 className="text-brand-grey-2 text-sm font-medium">
                  olivia@untitledui.com
                </h4>
              </div>
              <div className="self-start">
                <MdOutlineLogout className="text-xl text-brand-grey-2" />
              </div>
            </div>
          </div>
        </div>

        <div
          className=" text-brand-grey-1 md:hidden cursor-pointer bg-brand-grey-2 px-5 pt-2"
          onClick={onClick}
        >
          <RxCross2 size="20" />
        </div>
      </div>
    </>
  );
}

export default MainMenu;

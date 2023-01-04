import MainMenu from "../SharedComponent/MainMenu";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="w-side-size max-w-[279px] min-w-[279px] h-screen overflow-y-scroll max-h-screen px-6 overflow-x-hidden  scrollbar-none md:block hidden md:h-full">
      <MainMenu />
    </div>
  );
}

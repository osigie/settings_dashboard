import { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  title: string;
  onClick: () => void;
  toggle: string;
  index: number;
};

const EachMenu = (props: Props) => {
  const { icon, title, onClick, toggle, index } = props;
  const dashboard_notifications = "10";
  return (
    <div
      className={`${
        toggle === title ? "bg-brand-background-1" : "bg-transparent"
      } ${
        index === 6 ? "mt-9" : ""
      } flex mt-1 cursor-pointer h-10 relative hover:bg-brand-background-1 rounded-md w-full`}
      onClick={onClick}
    >
      <div
        className={`${
          toggle === title ? "text-brand-dark-1" : "text-brand-dark-2"
        } flex pl-12 hover:text-background-grey-2 ease-out duration-200 items-center w-full`}
      >
        <div className="mr-2">
          <props.icon />
        </div>
        <div className="flex justify-between content-between w-full">
          <h4>{title}</h4>
          {index === 1 ? (
            <div className=" mr-2 bg-brand-background-4  rounded-2xl px-[10px] py-[2px]">
              {dashboard_notifications}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EachMenu;

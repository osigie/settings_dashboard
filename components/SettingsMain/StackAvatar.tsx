import React, { useEffect } from "react";
import Image from "next/image";
import { user_path } from "../../utils";

type Props = {
  users: number;
};
export default function StackAvatar({ users }: Props) {
  const [srcs, setSrcs] = React.useState(user_path);
  useEffect(() => {
    setSrcs(srcs.slice(0, users));
  }, []);

  return (
    <div className="flex -space-x-2">
      {users > 5 ? (
        <>
          {srcs.map((each, i) => {
            return (
              <Image
                className="w-7 h-7 rounded-full "
                src={each}
                alt=""
                width={40}
                height={40}
                key={i}
              />
            );
          })}
          <a
            className="flex justify-center items-center w-7 h-7 text-xs font-medium text-brand-card-6 bg-brand-background-1 rounded-full"
            href="#"
          >
            +{users - 5}
          </a>
        </>
      ) : (
        srcs.map((each, index, arr) => {
          return (
            <Image
              className="w-7 h-7 rounded-full "
              src={each}
              alt=""
              width={40}
              height={40}
              key={index}
            />
          );
        })
      )}
    </div>
  );
}

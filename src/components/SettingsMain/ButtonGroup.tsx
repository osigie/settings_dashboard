import React from "react";

type Props = {};

export default function ButtonGroup({}: Props) {
  return (
    <div>
      {buttons_data.map((each, index) => {
        return (
          <button
            key={index}
            className="border border-brand-grey-3 p-3 first-of-type:rounded-l-lg last-of-type:rounded-r-lg text-brand-dark-2 font-medium mt-8 mb-10"
          >
            {each}
          </button>
        );
      })}
    </div>
  );
}

const buttons_data = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

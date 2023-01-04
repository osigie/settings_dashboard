import React from "react";

export const useButtonSelection = () => {
  const [selectedButton, setSelectedButton] = React.useState(defaultState);
  const handleSelect = (selected: string) => {
    const prev = selectedButton[selected as keyof boolean];
    setSelectedButton({ ...selectedButton, [selected]: !prev });
  };
  return {
    selectedButton,
    handleSelect,
  };
};

const defaultState = {
  "My details": false,
  Profile: false,
  Password: false,
  Team: false,
  Plan: false,
  Billing: false,
  Notifications: false,
  Integrations: false,
  Api: false,
};

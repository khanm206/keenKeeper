import React from "react";
import { createContext } from "react";
export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const formatStatus = (status) => {
    switch (status) {
      case "on-track":
        return "On-Track";
      case "overdue":
        return "Overdue";
      case "almost due":
        return "Almost Due";
      default:
        return status;
    }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "on-track":
        return "bg-[#244D3F] text-white px-2 py-1 rounded-xl";
      case "overdue":
        return "bg-[#EF4444] text-white px-2 py-1 rounded-xl";
      case "almost due":
        return "bg-[#EFAD44] text-white px-2 py-1 rounded-xl";
    }
  };

  const data = {
    formatStatus,
    statusStyle,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;

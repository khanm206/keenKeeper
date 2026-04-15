import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
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

  const [timeline, setTimeline] = useState([]);

  const handleTimeline = (id, friendName, action) => {
    setTimeline([
      ...timeline,
      {
        id: id,
        name: friendName,
        action: action,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      },
    ]);

    if (action === "call") {
      toast.success(`You successfully called ${friendName}`);
    } else if (action === "text") {
      toast.success(`You successfully texted ${friendName}`);
    } else if (action === "video") {
      toast.success(`You successfully video chatted with ${friendName}`);
    }
  };

  const data = {
    formatStatus,
    statusStyle,
    handleTimeline,
    timeline,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;

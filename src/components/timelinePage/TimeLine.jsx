import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import TimelineCard from "./TimelineCard";
import NoHistory from "../noHistory/NoHistory";
import { useState } from "react";

const TimeLine = () => {
  const { timeline } = useContext(FriendsContext);
  const [history, setHistory] = useState("all");
  const handleFilter = (value) => {
    setHistory(value);
  };

  let filteredHistory = timeline;
  if (history === "all") {
    filteredHistory = timeline;
  } else if (history === "call") {
    filteredHistory = timeline.filter((data) => data.action === "call");
  } else if (history === "text") {
    filteredHistory = timeline.filter((data) => data.action === "text");
  } else if (history === "video") {
    filteredHistory = timeline.filter((data) => data.action === "video");
  }
  return (
    <section>
      <h1 className="text-3xl font-semibold">Timeline</h1>

      {timeline.length === 0 ? (
        <NoHistory />
      ) : (
        <div className="space-y-4 mt-10">
          <select
            defaultValue="All"
            className="select appearance-none w-fit"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video Chat</option>
          </select>
          {filteredHistory.map((notification, i) => (
            <TimelineCard key={i} notification={notification} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TimeLine;

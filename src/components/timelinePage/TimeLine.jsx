import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import TimelineCard from "./TimelineCard";
import NoHistory from "../noHistory/NoHistory";
import { useState } from "react";
import { SearchAlert } from "lucide-react";

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
            defaultValue="Filter Timeline"
            className="select appearance-none w-fit"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option disabled={true}>Filter Timeline</option>
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video Chat</option>
          </select>
          {timeline.length != 0 && filteredHistory.length === 0 ? (
            <div className="bg-base-100 p-4 rounded-xl hover:scale-102 transition text-xl flex justify-center items-center gap-2 mt-4">
              <SearchAlert />
              No data found!
            </div>
          ) : (
            <div className="space-y-4 mt-4">
              {filteredHistory.map((notification, i) => (
                <TimelineCard key={i} notification={notification} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default TimeLine;

import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import TimelineCard from "./TimelineCard";

const TimeLine = () => {
  const { timeline } = useContext(FriendsContext);

  return (
    <section>
      <h1 className="text-3xl font-semibold">Timeline</h1>
      <div className="space-y-4 mt-10">
        {timeline.map((notification, i) => (
          <TimelineCard key={i} notification={notification} />
        ))}
      </div>
    </section>
  );
};

export default TimeLine;

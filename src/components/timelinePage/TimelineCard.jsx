import React from "react";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";

const TimelineCard = ({ notification }) => {
  const { name, action, date } = notification;
  let logo;
  let activity;

  if (action === "call") {
    logo = call;
    activity = "Call";
  } else if (action === "text") {
    logo = text;
    activity = "Text";
  } else if (action === "video") {
    logo = video;
    activity = "Video Chat";
  }

  return (
    <div className="flex items-center gap-3 bg-base-100 p-4 rounded-xl hover:scale-102 transition">
      <img className="w-8 h-8" src={logo} />
      <div>
        <p>
          <span className="text-xl font-semibold">{activity} </span>
          <span className="text-black/60">with {name}</span>
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default TimelineCard;

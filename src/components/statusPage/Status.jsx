import React from "react";
import StatusChart from "./StatusChart";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import NoHistory from "../noHistory/NoHistory";

const Status = () => {
  const { timeline } = useContext(FriendsContext);
  return (
    <section className="">
      <h1 className="text-3xl font-semibold">Friendship Analytics</h1>

      {timeline.length === 0 ? (
        <NoHistory />
      ) : (
        <div className="bg-base-100 p-8 rounded-xl mt-10">
          <h3 className="text_p text-xl">By Interaction Type</h3>
          <StatusChart timeline={timeline} />
          <div className="flex gap-6 w-fit mx-auto mt-5">
            <p className="flex items-center text-xl gap-2">
              <span className="w-4 h-4 bg-[#7E35E1] rounded-[100%]"></span>Text
            </p>
            <p className="flex items-center text-xl gap-2">
              <span className="w-4 h-4 bg-[#244D3F] rounded-[100%]"></span>Call
            </p>
            <p className="flex items-center text-xl gap-2">
              <span className="w-4 h-4 bg-[#37A163] rounded-[100%]"></span>Video
              Chat
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Status;

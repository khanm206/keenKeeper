import { ClipboardClock } from "lucide-react";
import React from "react";

const NoHistory = () => {
  return (
    <section className="bg-base-100 p-2 py-28 rounded- mt-10 text-center space-y-4 rounded-xl">
      <ClipboardClock className="mx-auto" size={48} />
      <h1 className="text-3xl font-semibold">No Activity Yet!</h1>
      <p className="text-gray-500 mx-auto max-w-md text-xl">
        You haven’t made any calls, texts, or video check-ins yet. Start
        connecting with your friends to build your activity history.
      </p>
    </section>
  );
};

export default NoHistory;

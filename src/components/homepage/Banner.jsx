import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="md:text-5xl text-4xl font-bold">
        Friends to keep close in your life
      </h1>
      <p className=" text-2xl text-black/65">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        <br />
        the relationships that matter most.
      </p>
      <button className="btn bgp text-white rounded-lg">
        <Plus /> Add a Friend
      </button>
    </div>
  );
};

export default Banner;

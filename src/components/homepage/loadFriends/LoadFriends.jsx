import axios from "axios";
import React from "react";
import { Suspense } from "react";
import Cards from "./Cards";

const LoadFriends = () => {
  const friendsPromise = axios.get("/friends.json");
  return (
    <Suspense
      fallback={
        <span className="loading loading-bars loading-xl h-[20dvh] flex mx-auto items-center"></span>
      }
    >
      <Cards friendsPromise={friendsPromise} />
    </Suspense>
  );
};

export default LoadFriends;

import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import FriendDetailsCard from "./FriendDetailsCard";
import { Suspense } from "react";

const FriendDetails = () => {
  const { id } = useParams();
  const friendsPromise = axios.get("/friends.json");
  return (
    <Suspense
      fallback={
        <span className="loading loading-bars loading-xl h-[20dvh] flex mx-auto items-center"></span>
      }
    >
      <FriendDetailsCard friendsPromise={friendsPromise} id={id} />
    </Suspense>
  );
};

export default FriendDetails;

import React from "react";
import { use } from "react";
import Card from "./Card";

const Cards = ({ friendsPromise }) => {
  const friends = use(friendsPromise).data;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-10">
      {friends.map((friend, i) => (
        <Card key={i} friend={friend}></Card>
      ))}
    </div>
  );
};

export default Cards;

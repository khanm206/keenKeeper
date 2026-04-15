import React from "react";
import { use } from "react";
import Card from "./Card";
import FriendsNumber from "./FriendsNumber";

const Cards = ({ friendsPromise }) => {
  const friends = use(friendsPromise).data;
  return (
    <section>
      <FriendsNumber friends={friends}></FriendsNumber>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-10">
        {friends.map((friend, i) => (
          <Card key={i} friend={friend}></Card>
        ))}
      </div>
    </section>
  );
};

export default Cards;

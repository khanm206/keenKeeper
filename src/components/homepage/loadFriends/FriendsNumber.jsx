import React from "react";

const FriendsNumber = ({ friends }) => {
  return (
    <section className="grid md:grid-cols-4 grid-cols-2 gap-4 md:mt-10 mt-5">
      <div className="bg-base-100 p-10 text-center rounded-2xl">
        <p className="text_p text-2xl font-semibold">{friends.length}</p>
        <p className="text-xl">Total Friends</p>
      </div>
      <div className="bg-base-100 p-10 text-center rounded-2xl">
        <p className="text_p text-2xl font-semibold">
          {friends.filter((friend) => friend.status === "on-track").length}
        </p>
        <p className="text-xl">On Track</p>
      </div>
      <div className="bg-base-100 p-10 text-center rounded-2xl">
        <p className="text_p text-2xl font-semibold">
          {friends.filter((friend) => friend.status === "overdue").length}
        </p>
        <p className="text-xl">Need Attention</p>
      </div>
      <div className="bg-base-100 p-10 text-center rounded-2xl">
        <p className="text_p text-2xl font-semibold">
          {friends.filter((friend) => friend.days_since_contact <= 30).length}
        </p>
        <p className="text-xl">Interactions This Month</p>
      </div>
    </section>
  );
};

export default FriendsNumber;

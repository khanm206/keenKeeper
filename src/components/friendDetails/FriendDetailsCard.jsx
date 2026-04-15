import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { use } from "react";

const FriendDetailsCard = ({ friendsPromise, id }) => {
  const friends = use(friendsPromise).data;
  const selectedFriend = friends.find((friend) => friend.id === Number(id));
  const { name, picture, days_since_contact, tags, status, bio, goal, email } =
    selectedFriend;
  const { formatStatus, statusStyle } = useContext(FriendsContext);
  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="bg-base-300 h-[80dvh]">
        <div className="hover-3d">
          <div className="bg-base-100 text-center space-y-4 p-10 card">
            <img className="rounded-full mx-auto" src={picture} alt="picture" />
            <h2 className="text-3xl">{name}</h2>
            <p className={`${statusStyle(status)} w-fit mx-auto`}>
              {formatStatus(status)}
            </p>
            <div className="flex gap-2 mx-auto justify-center">
              {tags.map((tag, i) => (
                <p
                  key={i}
                  className="bg-green-600/30 px-3 py-1 rounded-2xl text_p"
                >
                  {tag.toUpperCase()}
                </p>
              ))}
            </div>
            <p className="bio">"{bio}"</p>
            <p>Email: {email}</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="col-span-2 bg-base-300 h-[80dvh]"></div>
    </section>
  );
};

export default FriendDetailsCard;

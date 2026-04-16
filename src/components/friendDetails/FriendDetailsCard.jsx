import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { use } from "react";
import { BellOff } from "lucide-react";
import { Archive } from "lucide-react";
import { Trash } from "lucide-react";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";
import { useNavigate } from "react-router";

const FriendDetailsCard = ({ friendsPromise, id }) => {
  const friends = use(friendsPromise).data;
  const selectedFriend = friends.find((friend) => friend.id === Number(id));

  const {
    name,
    picture,
    days_since_contact,
    tags,
    status,
    bio,
    goal,
    email,
    next_due_date,
  } = selectedFriend;

  const { formatStatus, statusStyle, handleTimeline } =
    useContext(FriendsContext);

  const navigate = useNavigate();
  return (
    <section className="grid md:grid-cols-3 items-stretch gap-4 h-full">
      {/* section-1 */}
      <div className="space-y-4 h-full">
        {/* card */}
        <div className="bg-base-100 text-center space-y-4 p-10 card hover:scale-102 transition">
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
          <p className="bio text-xl">"{bio}"</p>
          <p>Email: {email}</p>
        </div>
        {/* 3-buttons */}
        <button className="bg-base-100 flex items-center justify-center gap-1 text-xl font-semibold p-8 rounded-lg transition hover:scale-102 w-full btn">
          <BellOff />
          <p>Snooze 2 weeks</p>
        </button>
        <button className="bg-base-100 flex items-center justify-center gap-1 text-xl font-semibold p-8 rounded-lg transition hover:scale-102 w-full btn">
          <Archive />
          <p>Archive</p>
        </button>
        <button className="bg-base-100 flex items-center justify-center gap-1 text-xl font-semibold p-8 rounded-lg text-[#EF4444] transition hover:scale-102 w-full btn">
          <Trash />
          <p>Delete</p>
        </button>
      </div>
      {/* section-2 */}
      <div className="md:col-span-2 bg-base-300 space-y-4 h-full flex flex-col">
        {/* 3-cards */}
        <div className="grid grid-cols-3 gap-4 flex-2">
          <div className="bg-base-100 rounded-lg md:py-12 py-4 text-center flex flex-col justify-center transition hover:scale-102">
            <p className="text_p md:text-4xl text-2xl font-semibold">
              {days_since_contact}
            </p>
            <p className="text-sm md:text-base">Days Since Contact</p>
          </div>
          <div className="bg-base-100 rounded-lg text-center flex flex-col justify-center transition hover:scale-102 md:py-12 py-4">
            <p className="text_p md:text-4xl text-2xl font-semibold">{goal}</p>
            <p className="text-sm md:text-base">Goal(Days)</p>
          </div>
          <div className="bg-base-100 rounded-lg md:py-12 py-4 text-center flex flex-col justify-center transition hover:scale-102">
            <p className="text_p md:text-4xl text-2xl font-semibold">
              {new Date(next_due_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-sm md:text-base">Next Due</p>
          </div>
        </div>
        {/* relation card */}
        <div className="bg-white flex justify-between items-center  px-6 py-12 rounded-lg transition hover:scale-102 flex-1">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text_p">Relationship Goal</h2>

            <p>
              Connect every{" "}
              <span className="font-semibold text-xl">{goal} days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>

        {/*  check in*/}
        <div className="bg-base-100 rounded-lg p-6 flex-3 flex flex-col justify-center">
          <h2 className="text_p md:text-2xl text-xl font-semibold">
            Quick Check-In
          </h2>
          <div className="grid grid-cols-3 gap-4 py-4">
            <button
              onClick={() => handleTimeline(id, name, "call")}
              className="btn w-full h-full md:py-6 py-2 flex flex-col hover:scale-102 transition"
            >
              <img className="md:w-auto w-6" src={call} />
              <p>Call</p>
            </button>
            <button
              onClick={() => handleTimeline(id, name, "text")}
              className="btn flex flex-col w-full h-full md:py-6 py-2 hover:scale-102 transition"
            >
              <img className="md:w-auto w-6" src={text} />
              <p>Text</p>
            </button>
            <button
              onClick={() => handleTimeline(id, name, "video")}
              className="btn  flex flex-col w-full h-full md:py-6 py-2 hover:scale-102 transition"
            >
              <img className="md:w-auto w-6" src={video} />
              <p>Video</p>
            </button>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn hover:scale-102 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default FriendDetailsCard;

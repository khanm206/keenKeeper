import React from "react";
import { useContext } from "react";
import { FriendsContext } from "../../../context/FriendsContext";
import { Link } from "react-router";

const Card = ({ friend }) => {
  const { id, name, picture, days_since_contact, tags, status } = friend;
  const { formatStatus, statusStyle } = useContext(FriendsContext);
  return (
    <Link to={`/details/${id}`} className="hover-3d">
      <div className="card bg-base-100 max-w-96 shadow-sm ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="picture" className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{days_since_contact}d ago</p>
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="bg-green-600/30 px-3 py-1 rounded-2xl text_p"
              >
                {tag.toUpperCase()}
              </p>
            ))}
          </div>
          <p className={`${statusStyle(status)} mt-2`}>
            {formatStatus(status)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

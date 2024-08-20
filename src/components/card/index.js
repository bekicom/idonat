import React, { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import './style.css';

const Card = ({ name, message, paid_amount, paid_at, id }) => {
  const [liked, setLiked] = useState(JSON.parse(localStorage.getItem("liked")) || []);

  dayjs.extend(utc);
  dayjs.extend(customParseFormat);

  function formatDate(isoDate) {
    return dayjs(isoDate).format("YYYY-MM-DD HH:mm:ss");
  }

  function toggleLiked(id) {
    let updatedLiked = [...liked];
    if (updatedLiked.includes(id)) {
      updatedLiked = updatedLiked.filter(likeId => likeId !== id);
    } else {
      updatedLiked.push(id);
    }
    setLiked(updatedLiked);
    localStorage.setItem("liked", JSON.stringify(updatedLiked));
  }

  function checkLiked(id) {
    return liked.includes(id);
  }

  return (
    <div className="card">
      <b onClick={() => toggleLiked(id)}>
        {checkLiked(id) ? "❤️" : ""} {name} - {paid_amount}
      </b>
      <p>{message}</p>
      <p>{formatDate(paid_at)}</p>
    </div>
  );
};

export default Card;

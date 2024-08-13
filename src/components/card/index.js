import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import './style.css'
const Card = ({ name, message, paid_amount, paid_at }) => {
  dayjs.extend(utc);
  dayjs.extend(customParseFormat);
  function formatDate(isoDate) {
    return dayjs(isoDate).format("YYYY-MM-DD HH:mm:ss");
  }
  return (
    <div className="card">
      <b>
        {name} - {paid_amount}
      </b>
      <p>{message}</p>
      <p>{formatDate(paid_at)}</p>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import './style.css'
const Admin = () => {
  const [baseSum, setBaseSum] = useState(52015064.17);
  const [ppsSum, setPpsSum] = useState(0.0);

  function formatNumber(number) {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return (
    <div>
      <p className="title">Admin paneli</p>
      <label className="label">Siz admin panelga kirgansiz</label>
      <p  className="succes">Bazadagi summa: {formatNumber(baseSum)} </p>
      <p className="succes">Ppsdagi summa: {formatNumber(ppsSum)} </p>
    </div>
  );
};

export default Admin;

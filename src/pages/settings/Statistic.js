import React, { useState } from "react";

const Statistic = () => {
  const [streamUrl, setStreamUrl] = useState(
    "https://idonate.uz/top?token=6SUYIKCPcZhWN4H2om3LFeBVrGRQqng8"
  );
  const [rangeValue, setRangeValue] = useState(10);
  function rangeChange(e) {
    setRangeValue(e.target.value);
    console.log(e);
  }
  return (
    <div>
      <p className="title">Stream statistikasi</p>
      <form className="form">
        <label className="label">Stream statistikasi</label>
        <input type="text" defaultValue={streamUrl} />
        <label className="label">Ma'lumot turi:</label>
        <select defaultValue={"all"}>
          <option value="all">Umumiy top</option>
          <option value="monthly">Oylik top</option>
          <option value="latest">Oxirgi donatlar</option>
        </select>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "100%",
          }}
          className="label"
        >
          Elementlar soni:{" "}
          <input
            style={{ maxWidth: "200px" }}
            onChange={(e) => rangeChange(e)}
            type="range"
            defaultValue={10}
            min={5}
            max={100}
          />
          <p>{rangeValue}</p>
        </label>
        <button className="btn btn_success">Saqlash</button>
      </form>
    </div>
  );
};

export default Statistic;

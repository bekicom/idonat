import Table from "../../components/table";
import React, { useState } from "react";

const Statistic = () => {
  const [streamUrl, setStreamUrl] = useState(
    "https://idonate.uz/top?token=6SUYIKCPcZhWN4H2om3LFeBVrGRQqng8"
  );
  const [rangeValue, setRangeValue] = useState(10);
  const [data, setData] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://api2.idonate.uz/api/v1/widget/stream/top", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      const result = await response.json();
      const info = [result.result]
      const filteredData = info.filter(item => item.filter === filterType && item.count <= rangeValue);
      setData(filteredData);
      console.log(filteredData);
      //console.log(filteredData);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const rangeChange = (e) => {
    setRangeValue(e.target.value);
    console.log(e);
  };
  const filterChange = (e) => {
    setFilterType(e.target.value);
    console.log(e);
  };
  return (
    <div>
      <p className="title">Stream statistikasi</p>
      <form className="form">
        <label className="label">Stream statistikasi</label>
        <input type="text" defaultValue={streamUrl} />
        <label className="label">Ma'lumot turi:</label>
        <select defaultValue={"all"} onChange={filterChange}>
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
        <button type="button" className="btn btn_success" onClick={fetchData}>Saqlash</button>
      </form>
      {data && (
        <div>
          <h2>Filtered Data</h2>
          <Table title={["Soni", "Filteri","Turi"]} data={data} />
      
        </div>
      )}
    </div>
  );
};

export default Statistic;

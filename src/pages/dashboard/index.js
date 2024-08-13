import { useEffect, useState } from "react";
import { Chart } from "../../components";
import "./style.css";
import axios from "axios";

// Dataset1
let color = { color1: "rgb(10, 207, 151)", color2: "rgb(10, 207, 151, 0.5)" };

// Dataset2
let color1 = { color1: "rgb(31, 143, 255)", color2: "rgb(31, 143, 255, 0.5)" };

export default function Dashboard() {
  const [dataNumber1, setDataNumber1] = useState();
  const [dataNumber2, setDataNumber2] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://idonate.uz/api/v1/home/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setDataNumber1(
          res.data.result.donations_per_day.map((item) => {
            return item.amount;
          })
        );
        setDataNumber2(
          res.data.result.donations_per_day.map((item) => {
            return item.count;
          })
        );
      });
  }, []);

  console.log(dataNumber1);
  console.log(dataNumber2);
  

  return (
    <div className="dashboard">
      <p className="title">Boshqaruv paneli</p>
      <label className="label">Oxirgi 20 kun bo'yicha donatlar</label>
      <div className="charts">
        <div className="chart">
          <Chart dataNumber={dataNumber1} title={"Summasi"} color={color} />
        </div>
        <div className="chart">
          <Chart dataNumber={dataNumber2} title={"Soni"} color={color1} />
        </div>
      </div>
    </div>
  );
}

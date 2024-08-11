import {Chart} from "../../components";
import "./style.css";

// Dataset1
let dataNumber = [50, 60, 47, 27, 38, 89, 100];
let color = { color1: "rgb(10, 207, 151)", color2: "rgb(10, 207, 151, 0.5)" };

// Dataset2
let dataNumber1 = [30, 10, 57, 47, 48, 69, 80];
let color1 = { color1: "rgb(31, 143, 255)", color2: "rgb(31, 143, 255, 0.5)" };

export default function Dashboard() {
  return (
    <div className="dashboard">
      <p className="title">Boshqaruv paneli</p>
      <label className="label">Oxirgi 20 kun bo'yicha donatlar</label>
      <div className="charts">
        <div className="chart">
          <Chart dataNumber={dataNumber} title={"Summasi"} color={color} />
        </div>
        <div className="chart">
          <Chart dataNumber={dataNumber1} title={"Soni"} color={color1} />
        </div>
      </div>
    </div>
  );
}

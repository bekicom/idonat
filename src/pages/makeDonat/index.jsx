import React, { useState } from "react";
import applogo from "../../assets/applogo.png";
import "./style.css";

const MakeDonat = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [anonim, setAnonim] = useState(false);
  const [komissiya, setKomissiya] = useState(true);
  return (
    <div className="make_donat">
      <div className="donat-head">
        <img style={{ width: "50px", height: "50px" }} src={applogo} alt="" />
        <div className="two_text">
          <b>Test</b>
          <p>Offline</p>
        </div>
      </div>
      <div className="donat-body">
        <b>Donat qilish</b>
        <p>
          Donat qilib sevimli strimer yoki ijodkoringizni qo'llab quvvatlang!
        </p>
        <form className="form">
          <label className="label">Ismingiz</label>
          <input type="text" defaultValue={anonim ? "Anonim" : ""} />
          <div className="switch-div">
            <p onClick={() => setAnonim(!anonim)}>Anonim</p>
            <div
              onClick={() => setAnonim(!anonim)}
              style={
                anonim
                  ? { justifyContent: "end", background: "#0f6efd" }
                  : { background: "#fff", justifyContent: "start" }
              }
              className="switch"
            >
              <button
                type="button"
                style={anonim ? { background: "#fff" } : { background: "gray" }}
                onClick={() => setAnonim(!anonim)}
              ></button>
            </div>
          </div>
          <label>Xabar</label>
          <textarea rows="4" cols="100" />
          <label>Qancha donat qilmoqchisiz?</label>
          <input type="number" />
          <div className="switch-div">
            <p onClick={() => setKomissiya(!komissiya)}>
              Komissiyani o'zim to'layman
            </p>
            <div
              onClick={() => setKomissiya(!komissiya)}
              style={
                komissiya
                  ? { justifyContent: "end", background: "#0f6efd" }
                  : { background: "#fff", justifyContent: "start" }
              }
              className="switch"
            >
              <button
                type="button"
                style={
                  komissiya ? { background: "#fff" } : { background: "gray" }
                }
                onClick={() => setKomissiya(!komissiya)}
              ></button>
            </div>
          </div>

          <p>Minimal donat: 1000 UZS</p>
          <p>Streamer oladi: 0 UZS</p>
          <label className="label">Karta raqami</label>

          <input placeholder="0000 0000 0000 0000" type="text" />
          <label className="label">Yaroqlilik muddati</label>
          <input
            placeholder="MM/YY"
            style={{ maxWidth: "100px" }}
            type="text"
          />
          <button className="donat_button">Donat qilish</button>
        </form>
      </div>
    </div>
  );
};

export default MakeDonat;

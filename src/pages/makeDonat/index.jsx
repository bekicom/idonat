import React from "react";
import applogo from "../../assets/applogo.png";

const MakeDonat = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
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
          <input
            type="text"
            placeholder="Ismingiz"
            defaultValue={userData.name}
          />
        </form>
      </div>
    </div>
  );
};

export default MakeDonat;

import React from "react";

const Goal = () => {
  return (
    <div>
      <p className="title">Tahrirlash</p>
      <form className="form">
        <label className="label">Nomi</label>
        <input type="text" defaultValue={"Mikrafon uchun"} />
        <label className="label">Ko'zlangan summa</label>
        <input type="number" defaultValue={"20000000"} />
        <label className="label">Yig'ilgan summa</label>
        <input type="number" defaultValue={"10002000"} />
        <label
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
          className="label"
        >
          <input defaultChecked={true} type="checkbox" />
          <p>Summani ko'rsatish</p>
        </label>
        <button className="btn btn_success">Saqlash</button>
      </form>
      <form className="form">
        <label className="label">Maqsad uchun havola</label>
        <input
          type="text"
          defaultValue={
            "https://idonate.uz/progress?token=6SUYIKCPcZhWN4H2om3LFeBVrGRQqng8"
          }
        />
        <button className="btn btn_danger">O'chirish</button>
      </form>
    </div>
  );
};

export default Goal;

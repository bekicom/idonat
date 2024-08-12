import React from "react";
import "../../components/table/style.css";
import "./style.css";
import {
  IconEye,
  IconLock,
  IconPencil,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
const Users = () => {
  const data = [
    {
      id: 1,
      username: "elbek",
      name: "Elbek",
      channel: "elbek",
      phone: "998990718525",
      status: "Faol",
    },
  ];
  return (
    <div>
      <p className="title">Foydalanuvchilar</p>
      <div className="search">
        <input type="text" placeholder="Izlash" />
        <button style={{ background: "#8110a5" }}>
          <IconSearch />
        </button>
        <button style={{ background: "#0acf97" }}>
          <IconPlus />
        </button>
      </div>
      <div className="table_container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Foydalanuvchi nomi</th>
              <th>Ismi</th>
              <th>Kanali</th>
              <th>Telefon raqami</th>
              <th>Status</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.channel}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "#fff",
                      background: "#0acf97",
                    }}
                  >
                    <IconEye />
                  </button>
                  <button
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "#fff",
                      background: "rgb(255, 187, 0)",
                    }}
                  >
                    <IconPencil />
                  </button>
                  <button
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "#fff",
                      background: "#ff4979",
                    }}
                  >
                    <IconLock />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

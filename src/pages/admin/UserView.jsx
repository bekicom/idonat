import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserView = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://api2.idonate.uz/api/v1/user/get-by-id/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setUser(response.data.result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <p className="title">Ko'rish</p>
      <div
        className="user"
        style={{ display: "flex", flexDirection: "column", gap: "6px" }}
      >
        <p>Foydalanuvchi nomi: {user.username}</p>
        <p>Ismi: {user.name}</p>
        <p>Telefon raqami: {user.phone}</p>
        <p>Kanal {user.channel}</p>
        <p>Kanal manzili: {user.channel_url}</p>
        <p>Email: {user.email}</p>
        <p>Kanal haqida: {user.channel_description}</p>
      </div>
    </div>
  );
};

export default UserView;

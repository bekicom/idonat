import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    axios
      .get(`https://api2.idonate.uz/api/v1/user/get-by-id/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setUser(response.data.result))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedUser = {
      user_id: id,
      role: "user",
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      username: e.target.username.value,
      channel_url: e.target.channel_url.value,
      email: e.target.email.value,
      channel_description: e.target.channel_description.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
    };
    axios
      .put("https://api2.idonate.uz/api/v1/user/update", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => alert("User o'zgardi"))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <p>Foydalanuvchini tahrirlash</p>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Ism</label>
        <input type="text" name="first_name" defaultValue={user.first_name} />
        <label className="label">Familiya</label>
        <input type="text" name="last_name" defaultValue={user.last_name} />
        <label className="label">Foydalanuvchi nomi</label>
        <input type="text" name="username" defaultValue={user.username} />
        <label className="label">Kanal manzili</label>
        <input type="text" name="channel_url" defaultValue={user.channel_url} />
        <label className="label">Email</label>
        <input type="text" name="email" defaultValue={user.email} />
        <label className="label">Telefon raqam</label>
        <input type="text" name="phone" defaultValue={user.phone} />
        <label className="label">Kanal haqida</label>
        <input
          type="text"
          name="channel_description"
          defaultValue={user.channel_description}
        />
        <label className="label">Parol</label>
        <input type="text" name="password" defaultValue={user.password} />
        <button type="submit" className="btn btn_success">
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default UserEdit;

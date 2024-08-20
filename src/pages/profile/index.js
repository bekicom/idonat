import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const [summa, setSumma] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get("https://api2.idonate.uz/api/v1/home/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        setSumma(res.data.result.users_balance);
      });
  }, [])

  const handleImg = (event) => {
    const selected = event.target.files[0];
    const imageUrl = URL.createObjectURL(selected);
    setImageUrl(imageUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token"); // LocalStorage'dan tokenni olamiz

    const url = "https://api2.idonate.uz/api/v1/user/update";
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = {
      user_id: 1,
      role: "user",
      first_name: firstName,
      last_name: lastName,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="title">Profil sozlamalari</p>
      <form className="form" onSubmit={handleSubmit}>
        <h6>Strimer haqida ma'lumotlar</h6>
        <span>Ismi: Test</span>
        <span>Username: test_admin</span>
        <span>Balans: {summa}</span>
        <button onClick={() => navigate("/withdraw-money")} className="btn btn_success" type="button">Pulni yechib olish</button>

        <h6 className="input_title">Profil ma'lumotlari</h6>
        <label className="label">Ism</label>
        <input
          type="text"
          placeholder="Test"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="label">Familiya</label>
        <input
          type="text"
          placeholder="Test"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="label">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          readOnly
        />
        <label className="label">Channel URL</label>
        <input
          type="text"
          placeholder="https://youtube.com/yourchannel"
          value={channelUrl}
          onChange={(e) => setChannelUrl(e.target.value)}
          readOnly

        />
        <label className="label">Channel Description</label>
        <input
          type="text"
          placeholder="Channel Description"
          value={channelDescription}
          onChange={(e) => setChannelDescription(e.target.value)}
          readOnly

        />
        <label className="label">Email</label>
        <input
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly

        />
        <label className="label">Phone</label>
        <input
          type="tel"
          placeholder="998902224311"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          readOnly

        />
        <label className="label">Parol</label>
        <input
          type="password"
          placeholder="Hozirgi parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          readOnly

        />

        <h6>Rasmni o'zgartirish</h6>
        <form className="form">
          {imageUrl && (
            <img className="profile_img" src={imageUrl} alt="Your profile" />
          )}
          <input accept="image/*" onChange={handleImg} type="file" />
        </form>

        <h6>Parolni o'zgartirish</h6>
        <form className="form">
          <label className="label">hozirgi parol</label>
          <input type="password" placeholder="Hozirgi parol" />
          <label className="label">yangi parol</label>
          <input type="password" placeholder="Yangi parol" />
          <label className="label">yangi parol takroran</label>
          <input type="password" placeholder="Yangi parol takroran" />
        </form>

        <button className="btn btn_indigo" type="submit" disabled={loading}>
          {loading ? "Yuklanmoqda..." : "Saqlash"}
        </button>
      </form>
    </div>
  );
}

export default Profile;

import { useState } from "react";
import "./style.css";

function Profile() {
  const [imageUrl, setImageUrl] = useState(null);
  const handleImg = (event) => {
    const selected = event.target.files[0];
    const imageUrl = URL.createObjectURL(selected);
    setImageUrl(imageUrl);
  };

  return (
    <div>
      <p className="title">Profil sozlamalari</p>
      <form className="form">
        <h6>Strimer haqida ma'lumotlar</h6>
        <span>Ismi: Test</span>
        <span>Username: test_admin</span>
        <span>Balans: 20 000.00</span>
        <button className="btn btn_success">Pulni yechib olish</button>
      </form>
      <h6 className="input_title">Profil ma'lumotlari</h6>
      <form className="form">
        <label className="label">Ism</label>
        <input type="text" placeholder="Test" />
        <button className="btn btn_indigo">Saqlash</button>
      </form>
      <h6>Rasmni o'zgartirish</h6>
      <form className="form">
        {imageUrl && (
          <img className="profile_img" src={imageUrl} alt="Your profile" />
        )}
        <input accept="image/*" onChange={handleImg} type="file" />
        <button className="btn btn_indigo">Saqlash</button>
      </form>
      <h6>Parolni o'zgartirish</h6>
      <form className="form">
        <label className="label">hozirgi parol</label>
        <input type="text" placeholder="Hozirgi parol" />
        <label className="label">yangi parol</label>
        <input type="text" placeholder="Yangi parol" />
        <label className="label">yangi parol takroran</label>
        <input type="text" placeholder="Yangi parol takroran" />
        <button className="btn btn_indigo">Saqlash</button>
      </form>
    </div>
  );
}

export default Profile;

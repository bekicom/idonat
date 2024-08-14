import React, { useState } from "react";
import "./style.css";

function DonatPage() {
  const [formData, setFormData] = useState({
    min_donation_sum: 1000,
    description: "Donat qilib sevimli strimer yoki ijodkoringizni qo'llab quvvatlang!",
    button_text: "Donat qilish",
    button_color: "#1E90FF",
    button_text_color: "#ffffff",
    background_color: "#000000",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = 'YOUR_AUTH_KEY'; // Замените на ваш токен

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://api2.idonate.uz/api/v1/donation/page/update", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Update successful:", result);
      alert("Update successful");
    } catch (error) {
      console.error("Error updating donation page:", error);
      alert("Error updating donation page");
    }
  };

  return (
    <div>
      <p className="title">Donat sahifasi</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Minimal summa</label>
        <input
          type="number"
          name="min_donation_sum"
          value={formData.min_donation_sum}
          onChange={handleInputChange}
          placeholder="1000"
          min={1000}
        />
        <label className="label">Donat sahifa matni</label>
        <textarea
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
        />
        <label className="label">Donat knopka matni</label>
        <input
          type="text"
          name="button_text"
          value={formData.button_text}
          onChange={handleInputChange}
          placeholder="Donat qilish"
        />
        <label className="label">Tugma rangi</label>
        <input
          type="color"
          name="button_color"
          value={formData.button_color}
          onChange={handleInputChange}
        />
        <label className="label">Tugmadagi matn rangi</label>
        <input
          type="color"
          name="button_text_color"
          value={formData.button_text_color}
          onChange={handleInputChange}
        />
        <label className="label">Fon rangi</label>
        <input
          type="color"
          name="background_color"
          value={formData.background_color}
          onChange={handleInputChange}
          style={{ height: "50px" }}
        />
        <button type="submit" className="btn btn_success">
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default DonatPage;

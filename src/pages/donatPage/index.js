import React, { useState } from "react";
import "./style.css";

function DonatPage() {
  const [formData, setFormData] = useState({
    link: "https://idonate.uz/d/test_admin",
    minSum: 1000,
    description: "Donat qilib sevimli strimer yoki ijodkoringizni qo'llab quvvatlang!",
    buttonText: "Donat qilish",
    buttonColor: "#1E90FF",
    buttonTextColor: "#ffffff",
    backgroundColor: "#000000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = new URL("https://api2.idonate.uz/api/v1/donation/page/update");
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem("token")}`, // Bu yerda AUTH_KEY ni haqiqiy kalit bilan almashtiring
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const body = {
      min_donation_sum: formData.minSum,
      description: formData.description,
      button_text: formData.buttonText,
      button_color: formData.buttonColor,
      button_text_color: formData.buttonTextColor,
      background_color: formData.backgroundColor,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error updating donation page:", error);
    }
  };

  return (
    <div>
      <p className="title">Donat sahifasi</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Donat uchun havola</label>
        <input
          type="text"
          name="link"
          placeholder="https://idonate.uz/d/test_admin"
          value={formData.link}
          onChange={handleChange}
        />
        <label>Minimal summa</label>
        <input
          type="number"
          name="minSum"
          placeholder="1000"
          min={1000}
          value={formData.minSum}
          onChange={handleChange}
        />
        <label className="label">Donat sahifa matni</label>
        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label className="label">Donat knopka matni</label>
        <input
          type="text"
          name="buttonText"
          placeholder="Donat qilish"
          value={formData.buttonText}
          onChange={handleChange}
        />
        <label className="label">Tugma rangi</label>
        <input
          type="color"
          name="buttonColor"
          value={formData.buttonColor}
          onChange={handleChange}
        />
        <label className="label">Tugmadagi matn rangi</label>
        <input
          type="color"
          name="buttonTextColor"
          value={formData.buttonTextColor}
          onChange={handleChange}
        />
        <label className="label">Fon rangi</label>
        <input
          style={{ height: "50px" }}
          type="color"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn_success">
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default DonatPage;

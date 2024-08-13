import React, { useState } from "react";
import applogo from "../../assets/applogo.png";
import axios from "axios";
import "./style.css";

const MakeDonat = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token"); // Tokenni olish
  const [anonim, setAnonim] = useState(false);
  const [komissiya, setKomissiya] = useState(true);
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [rawCardNumber, setRawCardNumber] = useState("");
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  const [rawExpiryDate, setRawExpiryDate] = useState("");

  const handleInputChange = (event) => {
    let value = event.target.value.replace(/\D/g, ""); // faqat raqamlar
    if (value.length > 16) {
      value = value.slice(0, 16); // Maksimal 16 raqam
    }

    // Masklash: 1234 5678 9012 3456
    const formattedNumber = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    setFormattedCardNumber(formattedNumber);
    setRawCardNumber(value); // Bo'shliqlarsiz karta raqami
  };

  const handleExpireInputChange = (event) => {
    let value = event.target.value.replace(/\D/g, ""); // faqat raqamlar
    if (value.length > 4) {
      value = value.slice(0, 4); // Maksimal 4 raqam
    }

    // Masklash: MM/YY
    const formattedDate = value.replace(/(\d{2})(?=\d)/g, "$1/");

    setFormattedExpiryDate(formattedDate);
    setRawExpiryDate(value); // Bo'shliqlarsiz MMYY formatidagi qiymat
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://idonate.uz/api/v1/donation/make",
        {
          user_id: userData.id, // yoki to'g'ri user ID oling
          name: anonim ? "Anonim" : userData.name,
          message: "I want to donate",
          amount: 1000,
          tax_mine: komissiya ? 1 : 0,
          payment_type: "psp, click, payme",
          card_number: rawCardNumber,
          card_expire: rawExpiryDate.slice(0, 2) + rawExpiryDate.slice(2, 4),
          card_expiry: formattedExpiryDate.replace("/", ""),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Tokenni qo'shamiz
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data); // Muvaffaqiyatli javobni ko'rsatish
    } catch (error) {
      console.error("Xatolik:", error.response?.data || error.message);
    }
  };

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
        <form className="form" onSubmit={handleSubmit}>
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

          <input
            onChange={handleInputChange}
            maxLength="19"
            value={formattedCardNumber}
            placeholder="0000 0000 0000 0000"
            type="text"
          />
          <label className="label">Yaroqlilik muddati</label>
          <input
            onChange={handleExpireInputChange}
            maxLength="5"
            value={formattedExpiryDate}
            placeholder="MM/YY"
            style={{ maxWidth: "100px" }}
            type="text"
          />
          <button type="submit" className="donat_button">
            Donat qilish
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeDonat;

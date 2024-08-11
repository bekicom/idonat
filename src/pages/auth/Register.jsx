import React, { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logo from "../../assets/applogo.png";
import "./register.css";
import {
  useRegisterMutation,
  useResendSmsMutation,
  useVerifyOtpMutation,
} from "../../context/service/auth.service";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import OtpInput from "react-otp-input";
import "rodal/lib/rodal.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    channel: "",
    channel_url: "",
    channel_description: "",
    email: "",
    password: "",
    phone: "",
    channel_screenshot: null,
  });
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [register, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();

  const [verify] = useVerifyOtpMutation();
  const [resend] = useResendSmsMutation();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, channel_screenshot: e.target.files[0] });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append("first_name", formData.first_name);
    body.append("last_name", formData.last_name);
    body.append("username", formData.username);
    body.append("channel", formData.channel);
    body.append("channel_url", formData.channel_url);
    body.append("channel_description", formData.channel_description);
    body.append("email", formData.email);
    body.append("password", formData.password);
    body.append("phone", formData.phone);

    if (formData.channel_screenshot) {
      body.append("channel_screenshot", formData.channel_screenshot);
    }

    try {
      const result = await register(body).unwrap();
      console.log("Ro'yxatdan o'tish muvaffaqiyatli:", result);
      setIsModalVisible(true);
    } catch (error) {
      console.error("Ro'yxatdan o'tishda xato:", error);
      alert("Xato ro'yxatdan o'tish");
    }
  };

  async function verifyUser() {
    const body = {
      phone: formData.phone,
      code: otp,
    };
    try {
      const result = await verify(body).unwrap();
      console.log("Otp tasdiqlandi:", result);
      setIsModalVisible(false);
      navigate("/login");
    } catch (error) {
      console.error("Otp tasdiqlashda xato:", error);
    }
  }
  async function resendOTP() {
    const body = {
      phone: formData.phone,
    };
    try {
      const result = await resend(body).unwrap();
      setSeconds(60);
    } catch (error) {
      console.error("Otp tasdiqlashda xato:", error);
    }
  }

  return (
    <div className="register">
      <div className="left">
        <form className="left-box" onSubmit={handleSubmit}>
          <a href="https://idonate.uz/" className="logo">
            <img src={logo} alt="" />
            <p>iDonate</p>
          </a>
          <div className="text">
            <h5>Xush kelibsiz</h5>
            <h6>Saytdan foydalanish uchun ro'yxatdan o'ting!</h6>
          </div>
          <div className="inputs">
            {/* Inputs fields */}
            <label htmlFor="first_name">
              <p>Ismingiz</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="first_name"
                  placeholder="Ismingiz"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="last_name">
              <p>Familiyangiz</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Familiyangiz"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="username">
              <p>Foydalanuvchi nomi</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="channel">
              <p>Kanalingiz nomi</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="channel"
                  placeholder="Kanal nomi"
                  value={formData.channel}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="channel_url">
              <p>Kanalingiz Havolasi (ssilkasi)</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="channel_url"
                  placeholder="Kanal manzili"
                  value={formData.channel_url}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="channel_description">
              <p>Kanal haqida</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="channel_description"
                  placeholder="Kanal haqida"
                  value={formData.channel_description}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="email">
              <p>Email</p>
              <div className="input">
                <IoMail />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="password">
              <p>Parol</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="phone">
              <p>Telefon</p>
              <div className="input">
                <FaRegUser />
                <input
                  type="text"
                  id="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label htmlFor="channel_screenshot">
              <p>
                Kanalga kontent yuklash (Youtube Studio) dan rasm (screenshot)
                ni yuklang
              </p>
              <div className="input">
                <input
                  style={{ color: "white" }}
                  type="file"
                  id="channel_screenshot"
                  onChange={handleFileChange}
                />
              </div>
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>
              Men{" "}
              <a href="https://idonate.uz/assets/terms.pdf">Ommaviy oferta</a>{" "}
              ni o'qib chiqdim va qabul qilaman.
            </p>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
          </button>
          <p>
            Murojaat uchun telegram{" "}
            <a href="https://t.me/idonate_admin">@idonate_admin</a>, <br />
            email: <a href="mailto:info@idonate.uz">info@idonate.uz</a>
          </p>
        </form>
      </div>
      <div className="right">
        <p>Copyright © 2023-2024</p>
        <a href="https://idonate.uz/terms-of-service/payments">
          To'lov shartlari
        </a>
        <a href="https://idonate.uz/privacy-policy">Maxfiylik siyosati</a>
        <a href="https://idonate.uz/public-offer">Ommaviy oferta</a>
      </div>
      <Rodal
        className="rodal"
        visible={isModalVisible}
        width={650}
        height={350}
        onClose={handleCloseModal}
      >
        <div className="modal-content">
          <h2>Tasdiqlash kodini kiriting </h2>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span style={{ margin: "0 5px" }}> </span>}
            renderInput={(props, index) => (
              <input
                {...props}
                key={index}
                style={{
                  width: "60px",
                  height: "60px",
                  textAlign: "center",
                  border: `2px solid ${
                    seconds === 0 || otp === false ? "red" : "black"
                  }`,
                  borderRadius: "10px",
                  margin: "0 5px",
                  fontSize: "23px",
                }}
              />
            )}
          />
          <div className="qaytayuborish">
            <span style={seconds === 0 ? { color: "red" } : { color: "black" }}>
              {formatTime(seconds)}
            </span>
            {seconds === 0 && (
              <span className="calumsms">
                <span className="qayta">
                  Kod kelmadimi? <i onClick={resendOTP}>Qayta yuborish</i>
                </span>
              </span>
            )}
          </div>
          <button onClick={verifyUser}>Tasdiqlash</button>
        </div>
      </Rodal>
    </div>
  );
};

export default Register;

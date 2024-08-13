import { useState } from "react";
import "./style.css";
import axios from "axios";
function Settings() {
  // gif
  const [errorMessage, setErrorMessage] = useState(null);
  // audio
  const [selectedFile, setSelectedFile] = useState(null);

  //color
  const [colorUrl, setColorUrl] = useState("#ffffff");

  const userData = JSON.parse(localStorage.getItem("user")) || {};
  console.log(userData.gif);
  const [imageUrl, setImageUrl] = useState(userData.gif);
  const [audioUrl, setAudioUrl] = useState(userData.audio);

  // SET GIF
  const handleImg = (event) => {
    const selected = event.target.files[0];
    if (selected.size > 1048576) {
      setErrorMessage("File size exceeds 1MB limit.");
      return;
    }
    const imageUrl = URL.createObjectURL(selected);
    setImageUrl(imageUrl);
    setErrorMessage(null);
  };

  // SET AUDIO
  const handleAudio = (event) => {
    const selected = event.target.files[0];
    setSelectedFile(selected);
    const audioUrl = URL.createObjectURL(selected);
    setAudioUrl(audioUrl);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("gif", selectedFile);
    data.append("audio", audioUrl);
    data.append("backgroun_color", colorUrl);
    data.append(
      "refresh_stream_link",
      "https://idonate.uz/stream?token=xWOhVJGPwX37nbu4TfRsvmAptrjg6LlC"
    );

    try {
      const response = await axios.put(
        "https://idonate.uz/api/v1/widget/donation/update",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // localStorage.setItem("user", JSON.stringify(response.data.result));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p className="title">Vidjet sozlamalari</p>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">GIFni o'zgartirish (max 1 mb)</label>
        {imageUrl && (
          <img
            className="setting_gif"
            src={userData.gif}
            alt="your profile gif"
          />
        )}
        <input onChange={handleImg} accept="image/gif" type="file" />
        {errorMessage && <span className="error">{errorMessage}</span>}
        <label className="label">Tovushni o'zgartirish</label>
        {audioUrl && (
          <audio
            className="setting_audio"
            controls
            src={userData.audio}
            type={selectedFile?.type}
          ></audio>
        )}
        <input accept="audio/*" onChange={handleAudio} type="file" />
        <label className="label">Fonni o'zgartirish</label>
        <input type="color" defaultValue={colorUrl} />
        <label className="label">strim uchun havola</label>
        <input
          type="text"
          placeholder="https://idonate.uz/stream?token=xWOhVJGPwX37nbu4TfRsvmAptrjg6LlC"
        />
        <div className="btns">
          <button className="btn btn_success" type="submit">
            Yangilash
          </button>
          <button className="btn btn_danger" type="button">
            Test xabar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;

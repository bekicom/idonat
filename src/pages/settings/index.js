import { useState } from "react";
import "./style.css";
function Settings() {
  // gif
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // audio
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

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

  return (
    <div>
      <p className="title">Vidjet sozlamalari</p>
      <form className="form">
        <label className="label">GIFni o'zgartirish (max 1 mb)</label>
        {imageUrl && (
          <img className="setting_gif" src={imageUrl} alt="your profile gif" />
        )}
        <input onChange={handleImg} accept="image/gif" type="file" />
        {errorMessage && <span className="error">{errorMessage}</span>}
        <button className="btn btn_success">Saqlash</button>
      </form>
      <form className="form">
        <label className="label">Tovushni o'zgartirish</label>
        {audioUrl && (
          <audio
            className="setting_audio"
            controls
            src={audioUrl}
            type={selectedFile?.type}
          ></audio>
        )}
        <input accept="audio/*" onChange={handleAudio} type="file" />
        <button className="btn btn_success">Saqlash</button>
      </form>
      <form className="form">
        <label className="label">strim uchun havola</label>
        <input
          type="text"
          placeholder="https://idonate.uz/stream?token=xWOhVJGPwX37nbu4TfRsvmAptrjg6LlC"
        />
        <div className="btns">
          <button className="btn btn_success">Yangilash</button>
          <button className="btn btn_danger">Test xabar</button>
        </div>
      </form>
    </div>
  );
}

export default Settings;

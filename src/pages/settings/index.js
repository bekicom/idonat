import { useState } from "react";
import axios from 'axios';
import "./style.css";
import coinGif from '../../assets/coin.gif';
import defaultMp3 from '../../assets/default.mp3';

function Settings() {
  const [imageUrl, setImageUrl] = useState(coinGif);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(defaultMp3);
  const [colorUrl, setColorUrl] = useState("#ffffff");

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

  const handleAudio = (event) => {
    const selected = event.target.files[0];
    setSelectedFile(selected);
    const audioUrl = URL.createObjectURL(selected);
    setAudioUrl(audioUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('background_color', colorUrl);
    formData.append('refresh_stream_link', '1');
    formData.append('gif', selectedFile);
    formData.append('audio', selectedFile);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put('https://api2.idonate.uz/api/v1/widget/donation/update', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <p className="title">Vidjet sozlamalari</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">GIFni o'zgartirish (max 1 mb)</label>
        {imageUrl && (
          <img className="setting_gif" src={imageUrl} alt="your profile gif" />
        )}
        <input onChange={handleImg} accept="image/gif" type="file" />
        {errorMessage && <span className="error">{errorMessage}</span>}
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
        <label className="label">Fonni o'zgartirish</label>
        <input type="color" defaultValue={colorUrl} onChange={(e) => setColorUrl(e.target.value)} />
        <button className="btn btn_success" type="submit">Saqlash</button>
      </form>
    </div>
  );
}

export default Settings;

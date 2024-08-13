import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/index";

function Messages() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .get("https://idonate.uz/api/v1/donation/history/with/message", {
        headers,
      })
      .then((res) => setData(res.data.result.data))
      .catch((err) => console.log(err));
  }, [token]);
  console.log(data);

  return (
    <div>
      <p className="title">Xabarlar paneli</p>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", gap: "25px" }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            message={item.message}
            paid_amount={item.paid_amount}
            paid_at={item.paid_at}
          />
        ))}
      </div>
    </div>
  );
}

export default Messages;

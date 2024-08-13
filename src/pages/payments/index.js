import { useEffect, useState } from "react";
import Table from "../../components/table";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
function Payment() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  dayjs.extend(utc);
  dayjs.extend(customParseFormat);
  function formatDate(isoDate) {
    return dayjs(isoDate).format("YYYY-MM-DD HH:mm:ss");
  }
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
      .get("https://idonate.uz/api/v1/donation/history", {
        headers,
      })
      .then((res) => setData(res.data.result.data))
      .catch((err) => console.log(err));
  }, [token]);

  console.log(data);

  const tableData = data.map((item) => ({
    ism: item.name,
    tolov: item.paid_amount,
    agentlik_tolov: item.paid_amount / 100 * item.percent,
    sana: formatDate(item.paid_at),
  }));

  return (
    <div className="payment">
      <p className="title">To'lovlar</p>
      <Table
        title={["Ism", "To'lov summasi", "Agentlik to'lovi", "To'lov vaqti"]}
        data={tableData}
      />
    </div>
  );
}

export default Payment;

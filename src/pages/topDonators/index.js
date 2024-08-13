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
      .get("https://idonate.uz/api/v1/donation/top", {
        headers,
      })
      .then((res) => setData(res.data.result.data))
      .catch((err) => console.log(err));
  }, [token]);

  console.log(data);

  const tableData = data.map((item) => ({
    ism: item.name,
    tolov: Number(item.total_amount),
  }));

  return (
    <div className="payment">
      <p className="title">To'lovlar</p>
      <Table title={["Ism", "To'lagan summa"]} data={tableData} />
    </div>
  );
}

export default Payment;

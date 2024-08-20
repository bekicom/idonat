import "./style.css";
import { Table } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function WithdrawMoney() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // React Hook Form hooks
  const [tableData, setTableData] = useState([]); // API'dan kelgan ma'lumotlarni saqlash uchun state
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const [totalPages, setTotalPages] = useState(1); // Umumiy sahifalar soni
  const [loading, setLoading] = useState(false); // Yuklanayotgan holat

  // Ma'lumotlarni olish funksiyasi
  const fetchData = async (page = 1) => {
    setLoading(true);
    const token = localStorage.getItem("token"); // LocalStorage'dan tokenni olamiz

    try {
      const response = await axios.get(`https://api2.idonate.uz/api/v1/withdraw/history?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Tokenni headerga qo'shamiz
          Accept: "application/json",
        },
      });

      // Javobdan kelgan ma'lumotlarni tableData ga saqlaymiz
      setTableData(response.data.result.data); // Ma'lumotlar response.data.result.data'dan keladi
      setTotalPages(response.data.result.total_pages); // Umumiy sahifalar sonini o'rnatamiz
      setCurrentPage(page); // Joriy sahifani o'rnatamiz
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Sahifa yuklanganda ma'lumotlarni olish
  }, []);

  const onSubmit = async (data) => {
    console.log(data); // Yuborilayotgan ma'lumotlarni ko'rib chiqing

    const token = localStorage.getItem("token");
    const url = "https://api2.idonate.uz/api/v1/withdraw/make";
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log("Success:", response.data);
      fetchData(); // Yangi ma'lumotlarni olish uchun fetchData ni chaqiramiz
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Sahifalarni o'zgartirish funksiyasi
  const handlePageChange = (page) => {
    fetchData(page); // Sahifa o'zgarganda yangi ma'lumotlarni olish
  };

  // Pagination komponenti
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(i => i + 1);

    return (
      <div className="pagination">
        {pages.map(page => (
          <button
            key={page}
            className={`page-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="withdrawMoney">
      <p className="title">Pul yechish</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}> {/* handleSubmit bilan formni boshqaramiz */}
        <label className="label">Karta raqami</label>
        <input
          type="number"
          {...register("card_number", { required: true, min: 1 })} // React Hook Form register qilish
          placeholder="Karta raqami"
        />
        {errors.card_number && <span>Karta raqami talab qilinadi</span>}

        <label className="label">Summa</label>
        <input
          type="number"
          {...register("amount", { required: true, min: 1 })} // React Hook Form register qilish
          placeholder="Summa"
        />
        {errors.amount && <span>Summa talab qilinadi</span>}

        <button className="btn btn_success" type="submit">
          Yechib olish
        </button>
      </form>
      <p className="title">Oxirgi to'lovlar</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table
            title={[
              "Summa",
              "Xizmat haqqi",
              "Jami",
              "Foiz",
              "Pul yechgandan keyingi balans",
              "Pul yechishdan avvalgi balans",
              "Karta raqami",
              "Status",
              "Amal",
            ]}
            data={tableData.map((item) => ({
              summa: (item.amount / 100).toLocaleString(),
              haq: (item.fee / 100).toLocaleString(),
              jami: ((item.amount + item.fee) / 100).toLocaleString(),
              foiz: item.percent,
              balans: (item.old_balance / 100).toLocaleString(),
              after: (item.last_balance / 100).toLocaleString(),
              raqam: item.card_number.slice(0, 4) + "****" + item.card_number.slice(-4),
              status: item.status,
              amal: item.code,
            }))}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default WithdrawMoney;

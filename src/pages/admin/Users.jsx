import React, { useState, useEffect } from "react";
import "../../components/table/style.css";
import "./style.css";
import { Table } from "../../components";
import {
  IconEye,
  IconPencil,
  IconLock,
  IconTrash,
  IconLockOpen,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewUsers() {
  const [data, setData] = useState([]); // API'dan kelgan ma'lumotlarni saqlash uchun state
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const [totalPages, setTotalPages] = useState(1); // Umumiy sahifalar soni
  const [loading, setLoading] = useState(false); // Yuklanayotgan holat
  const navigate = useNavigate();
  // Ma'lumotlarni olish funksiyasi
  const fetchData = async (page = 1) => {
    setLoading(true);
    const token = localStorage.getItem("token"); // LocalStorage'dan tokenni olamiz

    const url = new URL("https://api2.idonate.uz/api/v1/user/get-all");
    url.searchParams.append("page", page); // Sahifani URL ga qo'shamiz

    const headers = {
      Authorization: `Bearer ${token}`, // Tokenni headerga qo'shamiz
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const response = await fetch(url, { method: "GET", headers });
      const result = await response.json();

      // Javobdan kelgan ma'lumotlarni data ga saqlaymiz
      setData(result.result.data); // Ma'lumotlar result.result.data'dan keladi
      setTotalPages(result.result.total_pages); // Umumiy sahifalar sonini o'rnatamiz
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
  console.log(data);

  // Sahifalarni o'zgartirish funksiyasi
  const handlePageChange = (page) => {
    fetchData(page); // Sahifa o'zgarganda yangi ma'lumotlarni olish
  };

  // Pagination komponenti
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map((i) => i + 1);

    return (
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            className={`page-button ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  function blockUser(id) {
    axios
      .get(`https://api2.idonate.uz/api/v1/user/block/${id}`)
      .then((res) => {
        alert("Foydalanuvchi bloklandi");
        fetchData();
      })
      .catch((err) => {
        alert("Foydalanuvchi bloklanmadi");
      });
  }

  return (
    <div>
      <p className="title">Foydalanuvchilar</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table
            title={[
              "Ism",
              "Familiya",
              "Kanali",
              "Username",
              "Telefon raqami",
              "Status",
              "Amallar",
            ]}
            data={data.map((item) => ({
              name: item.first_name,
              lastName: item.last_name,
              channel: item.channel,
              username: item.username,
              phone: item.phone,
              status: item.status === 1 ? "Faol" : "Nofaol",
              actions: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => navigate(`${item.id}`)}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "#fff",
                      background: "#0acf97",
                    }}
                    aria-label="View"
                  >
                    <IconEye />
                  </button>
                  <button
                    onClick={() => navigate(`edit/${item.id}`)}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "#fff",
                      background: "rgb(255, 187, 0)",
                    }}
                    aria-label="Edit"
                  >
                    <IconPencil />
                  </button>
                  {item.status === -1 ? (
                    <button
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "5px",
                        color: "#fff",
                        background: "#ff4979",
                      }}
                      aria-label="Unlock"
                    >
                      <IconLockOpen />
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "5px",
                        marginRight: "5px",
                        color: "#fff",
                        background: "#ff4979",
                      }}
                      aria-label="Lock"
                    >
                      <IconLock />
                    </button>
                  )}
                </div>
              ),
            }))} // API dan kelgan ma'lumotlarni table ga uzatamiz
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

export default NewUsers;

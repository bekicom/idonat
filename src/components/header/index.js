import { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import { IconMenu2 } from "@tabler/icons-react";
import { MyBooleanContext } from "../../context";
import logo from "../../assets/applogo.png";
import {
  IconCaretDown,
  IconCashBanknote,
  IconLogout,
} from "@tabler/icons-react";
import axios from "axios";

function Header() {
  const [openModal, setOpenmodal] = useState(false);
  const { toggle } = useContext(MyBooleanContext);
  const modalRef = useRef(null);
  const [summa, setSumma] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get("https://api2.idonate.uz/api/v1/home/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        setSumma(res.data.result.users_balance);
      });
  }, [])


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenmodal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="head_left">
        <h1 className="moniker">
          <img className="logo" src={logo} alt="logo" />
          iDonate
        </h1>
        <IconMenu2 onClick={toggle} />
      </div>
      <>
        <button
          ref={modalRef}
          onClick={() => setOpenmodal(!openModal)}
          className="test"
        >
          <img className="logo" src={logo} alt="logo" /> Test
          <IconCaretDown />
        </button>
        {openModal && (
          <div className="header_select">
            <button>
              <IconCashBanknote /> {summa} UZS
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              <IconLogout /> Chiqish
            </button>
          </div>
        )}
      </>
    </header>
  );
}

export default Header;

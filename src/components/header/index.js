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

function Header() {
  const [openModal, setOpenmodal] = useState(false);
  const { toggle } = useContext(MyBooleanContext);
  const modalRef = useRef(null);

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
              <IconCashBanknote /> 20 000.00 UZS
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

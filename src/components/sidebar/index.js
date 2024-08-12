import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MyBooleanContext } from "../../context";
import "./style.css";
import logo from "../../assets/applogo.png";
import { data } from "../../static/links";
import { admin_data } from "../../static/admin.links";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { IconPalette } from "@tabler/icons-react";

export default function Sidebar() {
  const { isToggled, toggle } = useContext(MyBooleanContext);
  const isMobileView = window.innerWidth <= 1100;
  const location = useLocation();
  const path = location.pathname;
  
  const isAdminPath = path === "/admin";
  const isUsersPath = path === "/admin/users";
  const isNewUsersPath = path === "/admin/users/new";

  const linksToRender = isAdminPath || isUsersPath || isNewUsersPath ? admin_data : data;

  return (
    <aside
      className="sidebar"
      style={{
        width: isToggled ? (isMobileView ? "0px" : "60px") : "250px",
      }}
    >
      <div className="header">
        <h1 className="moniker">
          <img className="logo" src={logo} alt="logo" />
          {!isToggled && "iDonate"}
        </h1>
      </div>
      <div className="aside_body">
        {linksToRender.map((item, inx) => (
          <NavLink
            onClick={isMobileView && !isToggled && toggle}
            className="aside_link"
            to={item.link}
            key={inx}
          >
            <item.icon />
            {!isToggled && item.label}
          </NavLink>
        ))}
        {!isAdminPath && !isUsersPath && !isNewUsersPath && (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    className="aside_link"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    <IconPalette /> Vidjetlar
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <NavLink className="aside_link" to={"/settings"}>
                  Donat vidjeti
                </NavLink>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <NavLink className="aside_link" to={"/statistic"}>
                  Stream statistikasi
                </NavLink>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <NavLink className="aside_link" to={"/goal"}>
                  Pul yig'ish
                </NavLink>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </aside>
  );
}

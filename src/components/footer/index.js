import "./style.css";
function Footer() {
  return (
    <div className="footer">
      <span>
        Copyright © {new Date().getFullYear()} <small>iDonate</small>. All
        rights reserved.
      </span>
      <b>Hand-crafted & made with ❤️</b>
    </div>
  );
}

export default Footer;

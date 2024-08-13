import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../context/service/auth.service"; // Adjust the path accordingly
import "./login.css";
import logo from "../../assets/applogo.png";
import { IconMail, IconLock } from "@tabler/icons-react";

function Login() {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation(); // Use the login mutation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);

    try {
      const response = await login(formData).unwrap();
      const token = response.result.token; // Extract the token from the response
      console.log(response);
      const userData = response.result;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
      window.location.reload();
    } catch (err) {
      // Handle login error
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login_left">
          <Link className="moniker">
            <img className="logo" src={logo} alt="logo" />
            iDonate
          </Link>
          <div className="login_caption">
            <h6>Xush kelibsiz!</h6>
            <span>Sizni yana ko'rganimizdan xursandmiz!</span>
          </div>
          {/* FORM START */}
          <form onSubmit={handleSubmit} className="login_form">
            <label className="label">Elektron pochta</label>
            <div className="login_input">
              <cite>
                <IconMail />
              </cite>
              <input
                name="email"
                type="email"
                placeholder="test_admin@gmail.com"
              />
            </div>
            <label className="label">Parol</label>
            <div className="login_input">
              <cite>
                <IconLock />
              </cite>
              <input name="password" type="password" placeholder="Password" />
            </div>
            <label className="custom_checkbox">
              <input className="checkbox" type="checkbox" />
              <span className="checkmark">Meni eslab qol</span>
            </label>
            <button className="btn_indigo" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Kirish"}
            </button>
          </form>
          {/* FORM END */}
          <div className="contact">
            <span>
              Murojaat uchun telegram
              <a href="http://t.me/imarko_uz">@imarko_uz</a>, email:{" "}
              <a href="mailto:info@idonate.uz">info@idonate.uz</a>
            </span>
            <span>
              Akkauntingiz yo'qmi? <Link to="/register">Ro'yhatdan o'tish</Link>
            </span>
          </div>
        </div>
        <div className="login_right">
          <span>Copyright © {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

export default Login;

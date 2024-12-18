// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link, useNavigate } from "react-router-dom"
import baseURL from "../../baseURL";

export default function Login() {
  const api = baseURL();
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    const form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    try {
      let response = await api.get(`/log-in/3pm-server-MECAZON/employees/${email}/${password}`);
      form.password.value = "";
      if (response.status == 200) {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        navigate('/');
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <div className={styles.Form}>
      <div className={styles.Brand}>
        <img
          className={styles.Logo}
          src="/MECAZON_logo.svg"
          alt="MECAZON LOGO"
        />{" "}
        <h1>MECAZON</h1>
        <p>ADMIN</p>
      </div>
      <h1 className={styles.Header}>Log in</h1>
      <form onSubmit={login}>
        <label className={styles.Label} htmlFor="email">
          Email Address:
        </label>{" "}
        <br />
        <input
          className={styles.Input}
          type="email"
          id="email"
          name="email"
          required
        />{" "}
        <br /> <br />
        <label className={styles.Label} htmlFor="password">
          Password:
        </label>{" "}
        <br />
        <input
          className={styles.Input}
          type="password"
          id="password"
          name="password"
          required
        />{" "}
        <br /> <br />
        <button type="submit">Login</button>
        <p className={styles.RegisterText}>MECAZON customer?</p>
        <Link to="/login">Customer</Link>
      </form>
    </div>
  );
}
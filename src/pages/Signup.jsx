// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link, useNavigate } from "react-router-dom";
import baseURL from "../../baseURL";

export default function Signup() {
  const api = baseURL();
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    const form = e.target;
    let username = form.username.value;
    let email = form.email.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;

    if (password == confirmPassword) {
      let new_user = {username, email, password};
      console.log(new_user);
      try {
        let request = await api.post('/sign-up/3pm-server-MECAZON/users', new_user);
        if (request.status = 200) {
          navigate('/login');
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    } else {
      alert("Passwords do not match up");
      form.confirmPassword.value = '';
    }
  }

  return (
    <div className={styles.Form}>
      <div className={styles.Brand}>
        <img className={styles.Logo}
          src="/MECAZON_logo.svg"
          alt="MECAZON LOGO"
        />MECAZON
      </div>
      <h1 className={styles.Header}>Sign Up</h1>
      <form onSubmit={signUp} id="form">
        <label className={styles.Label} htmlFor="username">Username:</label><br />
        <input
          className={styles.Input}
          type="input"
          id="username"
          name="username"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="email">Email Address:</label><br />
        <input
          className={styles.Input}
          type="email"
          id="email"
          name="email"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="password">Password:</label><br />
        <input
          className={styles.Input}
          type="password"
          id="password"
          name="password"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input
          className={styles.Input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        /><br /><br />
        <button type="submit">Sign Up</button>
        <p className={styles.LoginText}>Existing account?</p>
        <Link to="/login">Sign in</Link>
      </form>
    </div>
  );
}
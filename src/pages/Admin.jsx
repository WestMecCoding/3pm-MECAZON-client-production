// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Login() {


    const navigate = useNavigate()
    const checkSessionData = () => {
        try {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const currentEmail = localStorage.getItem('email')
            const currentPassword = localStorage.getItem('password')
            if (email === currentEmail && password === currentPassword) {
                localStorage.setItem('loggedIn', 'true')
                alert('explode')
                navigate('/')

            }
            if (!email || !password) {
                alert('email or password is incorrect')
            }

        } catch (err) {
            console.error('problem finding user', err)
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
          MECAZON
          <p>ADMIN</p>
        </div>
        <h1 className={styles.Header}>Log in</h1>
        <form action="">
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
          <button onClick={checkSessionData} type="submit">
            Login
          </button>
          <p className={styles.RegisterText}>MECAZON customer?</p>
          <Link to="/login">Customer</Link>
        </form>
      </div>
    );
}
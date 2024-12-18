### Andrew's Contributioin to Team B's react code
Andew worked primarily on the backend code for the login and sign up pages. He also worked on the admin login page.
## Login Contributioin
# Login.jsx page
```js
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Log in</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <button type="submit">Login</button>

                <p className={styles.RegisterText}>New to MECAZON?</p>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    );
}
```
![Picture of Andrew's login page](../contribution-images/login.png)
## Sign Up Contribution
# Signup.jsx page
```js
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Sign Up</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <label className={styles.Label} htmlFor="confirmPassword">Confirm Password:</label> <br />
                <input className={styles.Input} type="text" id="confirmPassword" name="confirmPassword" pattern="" required /> <br/> <br/>

                <button type="submit">Sign Up</button>

                <p className={styles.LoginText}>Existing account?</p>
                <Link to="/login">Sign in</Link>
            </form>
        </div>
    );
}
```
![Picture of Andrew's sign up page](../contribution-images/signup.png)
## Admin Login Contribution
# Admin.jsx page
```js
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
          <h1>MECAZON</h1>
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
```
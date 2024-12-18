import { Link } from "react-router-dom";
import Search from "../components/SearchBar";
import styles from "../styles/Navbar.module.css";
import baseURL from "../../baseURL";
import { useState } from "react";

export default function Navbar({ setSearchValue }) {
  const [route, setRoute] = useState('/login');
  const [phrase, setPhrase] = useState('Sign In');
  const api = baseURL();
  
  async function isLoggedIn() {
    const user_id = JSON.parse(localStorage.getItem('currentUser'));
    if (user_id != null) {
      try {
        const response = await api.get(`/retrieve-user/3pm-server-MECAZON/users/${user_id}`);
        if (response.status == 200) {
          const username = response.data.contact_info;
          console.log(username);
          setPhrase(`Hello ${username}`);
          setRoute('/shopping-cart');
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
  }
  isLoggedIn()
  return (
    <nav className={styles.nav}>
      <div className={`${styles.col} ${styles.brand}`}>
        <Link className={styles.logoWrapper} to="/">
          <img className={styles.logo} src="/MECAZON_logo.svg" alt="mecazon logo" height="35px" width="35px" />
          <p>MECAZON</p>
        </Link>
      </div>

      <div className={styles.col}>
        <Search setSearchValue={setSearchValue}></Search>
      </div>

      <div className={`${styles.col} ${styles.userButtons}`}>
        <Link className={styles.loginLink} to={route}>
          <p id="phrase" >{phrase}</p>

          <img src="/account_icon.svg" height="30px" width="30px" alt="user account icon" />
        </Link>

        <Link className={styles.cartLink} to="/shopping-cart">
          <img src="/cart_icon.svg" alt="shopping cart icon" height="50px" width="50px" />
        </Link>
      </div>
    </nav>
  );
}

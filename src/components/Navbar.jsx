import { Link } from "react-router-dom";
import Search from "../components/Search";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="/MECAZON_logo.svg" alt="MECHAZON LOGO" /> MECHAZON
      </Link>
      <Search></Search>
      <Link to="/login">Sign in</Link>
      <Link to="/groceries">Groceries</Link>
    </nav>
  );
}

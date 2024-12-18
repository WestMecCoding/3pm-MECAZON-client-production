import styles from "../styles/Footer.module.css";
import { Link } from 'react-router-dom'

export default function Footer({isAdmin}) {
    return (
        <div className={styles.background}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h1>Help</h1>
                    <input className={styles.emailInput} type="email" name="" id="" placeholder="Email" />
                    <button className={styles.submitBtn}>Submit</button>
                    <p>Contact us</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.column}>
                    <h1>Socials</h1>
                    <div className={[styles.dataColumn]}>
                        <a href="https://www.facebook.com/westmec/" className={styles.socials}>Facebook</a>
                        <a href="https://www.instagram.com/westmec_cccoding/" className={styles.socials}>Instagram</a>
                        <a href="https://twitter.com/westmec" className={styles.socials}>Twitter</a>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.column_spaced}>
                    <div className={styles.row_spaced}>
                        <div className={styles.column}>
                            <h1>Values</h1>
                            <a href="/" className={styles.socials}>About</a>
                        </div>
                        <div className={styles.divider_spaced}></div>
                        <div className={styles.column}>
                            <h1>Account</h1>
                            <a href="/" className={styles.socials}>Account</a>
                            {isAdmin ? <><Link className={styles.socials} to="/admin/employees">Admin | Employees</Link> <Link className={styles.socials} to="/admin/users">Admin | Users</Link></> : null}
                        </div>
                    </div>
                    <div className={styles.copyrights}>
                        <h3>2024 - MECAZON &copy; - All rights reserved</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
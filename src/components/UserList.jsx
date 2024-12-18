import styles from "../styles/UserList.module.css";
import React from "react";

export default function UserList({items, onShowEditor}) {

  return (
    <div>
      <h1>User</h1>
      <button className={styles["add-user"]} onClick={onShowEditor}>Add User</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{`${user.location.city}, ${user.location.country}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

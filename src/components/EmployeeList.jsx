import styles from "../styles/EmployeeList.module.css";
import React from "react";

export default function EmployeeList({items, onShowEditor}) {
  const columns = ["name", "department", "email", "phone number"];

  return (
    <div className={styles["employee-wrapper"]}>
      <div className={styles["employee-header"]}>
        <h1>Employees</h1>
        {/* search bar component */}
        {/* <Search></Search> */}
      </div>

      <button className={styles["add-employee"]} onClick={onShowEditor}>Add Employee</button>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Picture</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {items.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.picture || "N/A"}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.address}</td>
                <td>{employee.hours || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

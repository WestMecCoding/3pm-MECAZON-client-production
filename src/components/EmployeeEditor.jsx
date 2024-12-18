import { useState } from "react";

export default function EmployeeEditor({ onClose, onAddEmployee }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    department: "",
    employeeType: "",
    dateHired: "",
    isAdmin: false,
    email: "",
    phoneNumber: "",
    address: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
// Submit button Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(formData); // Pass the form data to the parent
  };

  return (
    <div>
      <h1>Employee Editor</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <label htmlFor="employeeType">Employee Type:</label>
        <input
          type="text"
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
        />
        <label htmlFor="dateHired">Date Hired:</label>
        <input
          type="text"
          name="dateHired"
          value={formData.dateHired}
          onChange={handleChange}
        />
        <label htmlFor="isAdmin">Admin Status:</label>
        <input
          type="text"
          name="isAdmin"
          value={formData.isAdmin}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
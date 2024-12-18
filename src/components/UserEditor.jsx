import { useState } from "react";

export default function UserEditor({ onClose, onAddUser }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    location: {
      country: "",
      city: "",
      address: "",
      zipCode: "",
    },
    email: "",
    phoneNumber: "",
    password: "",
    orders: "",
    paymentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("location")) {
      const field = name.split(".")[1]; // Extract field (country, city, etc.)
      setUserData((prevData) => ({
        ...prevData,
        location: {
          ...prevData.location,
          [field]: value, // Update specific field of location object
        },
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Submit Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.firstName || !userData.lastName || !userData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    onAddUser(userData); // Send user data to parent component
  };

  return (
    <div>
      <h1>User Editor</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <h3>Location</h3>
        <label htmlFor="location.country">Country:</label>
        <input
          type="text"
          name="location.country"
          value={userData.location.country}
          onChange={handleChange}
        />
        <label htmlFor="location.city">City:</label>
        <input
          type="text"
          name="location.city"
          value={userData.location.city}
          onChange={handleChange}
        />
        <label htmlFor="location.address">Address:</label>
        <input
          type="text"
          name="location.address"
          value={userData.location.address}
          onChange={handleChange}
        />
        <label htmlFor="location.zipCode">Zip Code:</label>
        <input
          type="text"
          name="location.zipCode"
          value={userData.location.zipCode}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import axios from "axios";
import UserEditor from "../components/UserEditor";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/dummy-data/users.json");

        // set the state of the user to the response.data
        setUsers(response.data);
      } catch (err) {
        console.error("something went wrong fetching users", err);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    // console.log(users);
    sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (userData) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...userData }, // Add a new user with an id
    ]);
    setShowEditor(false); // Close the editor after adding user
  };

  return (
    <div>
      {showEditor ? (
        <UserEditor
          onClose={() => setShowEditor(false)} // Close editor
          onAddUser={addUser} // Add user
        />
      ) : (
        <UserList
          items={users} // Pass the users array to UserList
          onShowEditor={() => setShowEditor(true)} // Show editor when Add User is clicked
        />
      )}
    </div>
  );
}
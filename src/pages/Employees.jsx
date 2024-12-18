import { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import axios from "axios";
import EmployeeEditor from "../components/EmployeeEditor";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showEditor, setShowEditor] = useState(false); // State to toggle between table and editor

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("/dummy-data/employees.json");
        setEmployees(response.data);
      } catch (err) {
        console.error("Something went wrong fetching employees", err);
      }
    }
    fetchEmployees();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Function to add a new employee
  const addEmployee = (employeeData) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: prevEmployees.length + 1, ...employeeData },
    ]);
    setShowEditor(false); // Close the editor after adding the employee
  };

  return (
    <div>
      {showEditor ? (
        <EmployeeEditor
          onClose={() => setShowEditor(false)} // Close the editor
          onAddEmployee={addEmployee} // Pass the function to add an employee
        />
      ) : (
        <EmployeeList
          items={employees} // Pass employees list to the EmployeeList
          onShowEditor={() => setShowEditor(true)} // Open the editor when Add Employee is clicked
        />
      )}
    </div>
  );
}

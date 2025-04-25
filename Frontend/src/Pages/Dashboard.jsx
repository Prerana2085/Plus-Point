import React, { useEffect, useState } from "react";
import { Navbars } from "../Components/Navbars";
import { Chart, registerables } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import DoctorCountBox from "../Components/DoctorCountBox";
// import Navbars from "../Components/Navbars";
Chart.register(...registerables);

function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  const bar = {
    labels: [
      "Cardiology",
      "Dermatology",
      "Gynaecology",
      "Neurology",
      "Orthopaedics",
    ],
    datasets: [
      {
        label: "Appointments by Department",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("https://plus-point-backend.onrender.com/api/getAllDoctors",{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res);
        setDoctors(res.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors()
  }, []);
  return (
    <div>
      <Navbars />
      <Sidebar />
      <div
        style={{
          margin: "20px auto",
          width: "80%",
          maxWidth: "600px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        total doctors-
        <DoctorCountBox />
      </div>




      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Sales Bar Chart</h2>
          <Bar data={bar} />
        </div>
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Category Distribution</h2>
          <Pie data={pieData} />
        </div>
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Revenue Line Chart</h2>
          <Line data={lineData} />
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>All Doctors</h2>
        {doctors && doctors.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Email
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Specialization
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {doctor.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {doctor.email}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {doctor.specialization}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {doctor.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;





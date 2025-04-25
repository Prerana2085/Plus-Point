import './DoctorDashboard.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import doctorData from "../utils/doctorData";
import fetchAppointmentsForDoctor from "../utils/appointment";

const generateDiseaseStats = (appointments) => {
  const stats = {};
  appointments.forEach((apt) => {
    const { disease, age, address: location, name } = apt;
    if (!stats[disease]) {
      stats[disease] = { count: 0, patients: [] };
    }
    stats[disease].count += 1;
    stats[disease].patients.push({ age, location, name });
  });
  return stats;
};

const COLORS = ["#34D399", "#6EE7B7", "#A7F3D0", "#059669", "#10B981", "#047857"];

const DoctorDashboard = () => {
  const [name, setName] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [diseaseStats, setDiseaseStats] = useState({});
  const [chartData, setChartData] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Logout");
  };

  const filterAppointments = () => {
    let filtered = [...appointments];

    if (selectedDisease !== "All") {
      filtered = filtered.filter((apt) => apt.disease === selectedDisease);
    }

    if (selectedDate) {
      filtered = filtered.filter(
        (apt) =>
          new Date(apt.dateOfAppointment).toISOString().split("T")[0] === selectedDate
      );
    }

    const today = new Date().toISOString().split("T")[0];
    filtered = filtered.filter(
      (apt) => new Date(apt.dateOfAppointment).toISOString().split("T")[0] >= today
    );

    setFilteredAppointments(filtered);
  };

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const data = await doctorData();
        setName(data.doctorName || "Doctor");
      } catch {
        setName("error");
      }
    };
    fetchDoctorData();
  }, []);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = await fetchAppointmentsForDoctor(name);
        const appointmentsData = Array.isArray(data) ? data : data?.appointments || [];

        const today = new Date().toISOString().split("T")[0];
        const upcomingAppointments = appointmentsData.filter(
          (apt) => new Date(apt.dateOfAppointment).toISOString().split("T")[0] >= today
        );

        setAppointments(upcomingAppointments);
        setFilteredAppointments(upcomingAppointments);

        const stats = generateDiseaseStats(upcomingAppointments);
        setDiseaseStats(stats);

        const flatChartData = [];
        Object.entries(stats).forEach(([disease, info]) => {
          info.patients.forEach((patient) => {
            flatChartData.push({ name: patient.name, age: patient.age, disease });
          });
        });
        setChartData(flatChartData);
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
        setAppointments([]);
        setFilteredAppointments([]);
        setDiseaseStats({});
        setChartData([]);
      }
    };
    if (name) getAppointments();
  }, [name]);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p style={{ fontSize: '1.875rem' }} className="text-green-800 font-semibold">{name}</p>

        <div className="button-group">
          <button
            onClick={() => navigate('/DoctorProfile')}
            className="px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {Object.keys(diseaseStats).length > 0 && (
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Filter by Disease:
            </label>
            <select
              className="p-2 border border-green-400 rounded bg-white text-green-700"
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
            >
              <option value="All">All</option>
              {Object.keys(diseaseStats).map((disease) => (
                <option key={disease} value={disease}>
                  {disease}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Filter by Date:
            </label>
            <input
              type="date"
              className="p-2 border border-green-400 rounded text-green-700"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <button
            className="h-fit mt-5 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={filterAppointments}
          >
            Apply Filters
          </button>
        </div>
      )}

      {filteredAppointments.length === 0 ? (
        <p className="text-gray-600">No appointments found</p>
      ) : (
        <div className="overflow-x-auto shadow rounded border border-gray-200 bg-white mb-12">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-green-100 text-green-800 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Timing</th>
                <th className="px-4 py-3">Disease</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Mobile</th>
                <th className="px-4 py-3">Token</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((apt, index) => (
                <tr
                  key={apt._id}
                  className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-3">{apt.name}</td>
                  <td className="px-4 py-3">{apt.age}</td>
                  <td className="px-4 py-3">{apt.address}</td>
                  <td className="px-4 py-3">
                    {new Date(apt.dateOfAppointment).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{apt.timing}</td>
                  <td className="px-4 py-3">{apt.disease}</td>
                  <td className="px-4 py-3">{apt.email}</td>
                  <td className="px-4 py-3">{apt.gender}</td>
                  <td className="px-4 py-3">{apt.mobile}</td>
                  <td className="px-4 py-3">{apt.token}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        window.open(`https://plus-point.onrender.com/room/${apt.token}`, "_blank")
                      }
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Join Call
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-10">
        {chartData.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Patient Age Chart by Disease
            </h2>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: "Age", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="age" fill="#10B981" name="Patient Age" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
      {Object.keys(diseaseStats).length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Appointments by Disease
          </h2>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 w-full md:w-1/2 mx-auto">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={Object.entries(diseaseStats).map(([disease, info]) => ({
                    name: disease,
                    value: info.count,
                  }))}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#10B981"
                  label
                >
                  {Object.keys(diseaseStats).map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {Object.keys(diseaseStats).length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Disease Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(diseaseStats).map(([disease, info]) => (
              <div
                key={disease}
                className="p-6 rounded-lg shadow-md bg-white border border-gray-200"
              >
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {disease} <span className="text-sm text-gray-600">({info.count} patients)</span>
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {info.patients.map((patient, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{patient.name}</span> — Age: {patient.age}, Location:{" "}
                      {patient.location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;






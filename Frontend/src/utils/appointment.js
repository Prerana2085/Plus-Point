import axios from "axios";


const fetchAppointmentsForDoctor = async (doctor) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://plus-point-backend.onrender.com/doctor/appointments/${doctor}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        // params: { doctor },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching appointments:",
      error.response?.data || error.message
    );
    // return Navigate("/");
  }
};

export default fetchAppointmentsForDoctor;
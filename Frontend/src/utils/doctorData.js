import axios from "axios";
import { Navigate } from "react-router-dom";

const doctorData = async () => {
  try {
    console.log("hello")
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:4000/doctor/doctor-only", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data?.message || error.message &&"error in .js");
    // throw error;
    return Navigate("/")
  }
};

export default doctorData;
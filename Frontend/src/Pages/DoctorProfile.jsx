import React, { useEffect, useState } from "react";
import doctorData from "../utils/doctorData";
import { ArrowLeft, Mail, Phone, BriefcaseMedical, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import doctorProfile from "../utils/doctorProfile";

const DoctorProfile = () => {
    const [name, setName] = useState("");
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const data = await doctorData();
        setName(data.doctorName || "Doctor");
      } catch (error) {
        setName("error");
      }
    };
    fetchDoctorData();
  }, []);

  useEffect(() => {
    if (name && name !== "error") {
      const fetchDoctorProfile = async () => {
        try {
          const doc = await doctorProfile(name);
          console.log(doc, "he");
          setDoctor(doc.profile);
        } catch (error) {
          console.error(error);
        }
      };
      fetchDoctorProfile();
    }
  }, [name]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <button
        onClick={() => navigate("/docDash")}
        className="flex items-center mb-8 text-green-700 hover:text-green-900 font-medium"
      >
        <ArrowLeft className="mr-2" />
        Back to Dashboard
      </button>

      <div className="max-w-2xl mx-auto bg-white p-10 shadow-xl rounded-xl border border-green-200">
        <div className="flex flex-col items-center mb-10">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-4xl font-bold">
            {doctor.doctorName?.[0] || "D"}
          </div>
          <h1 className="text-2xl font-bold text-green-800 mt-4">{doctor.name}</h1>
          <p className="text-gray-500 text-sm mt-2">{doctor.specialization || "General Practitioner"}</p>
        </div>

        <div className="space-y-6 text-sm text-gray-700">
          <div className="flex items-center">
            <Mail className="text-green-600 w-4 h-4 mr-3" />
            <span className="font-medium text-green-800 w-32">Email:</span> {doctor.email}
          </div>

          <div className="flex items-center">
            <Phone className="text-green-600 w-4 h-4 mr-3" />
            <span className="font-medium text-green-800 w-32">Phone:</span> {doctor.phone || "N/A"}
          </div>

          <div className="flex items-center">
            <BriefcaseMedical className="text-green-600 w-4 h-4 mr-3" />
            <span className="font-medium text-green-800 w-32">Specialization:</span> {doctor.specialization || "N/A"}
          </div>

          <div className="flex items-center">
            <Calendar className="text-green-600 w-4 h-4 mr-3" />
            <span className="font-medium text-green-800 w-32">Experience:</span> {doctor.experience || "N/A"} years
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;


// // this is for more dashboard card 4/28/2025


// import React, { useEffect, useState } from "react";
// import doctorData from "../utils/doctorData";
// import { ArrowLeft, Mail, Phone, BriefcaseMedical, Calendar } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import doctorProfile from "../utils/doctorProfile";

// const DoctorProfile = () => {
//   const [name, setName] = useState("");
//   const [doctors, setDoctors] = useState([]); // Changed from object to array
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDoctorData = async () => {
//       try {
//         const data = await doctorData();
//         setName(data.doctorName || "Doctor");
//       } catch (error) {
//         setName("error");
//       }
//     };
//     fetchDoctorData();
//   }, []);

//   useEffect(() => {
//     if (name && name !== "error") {
//       const fetchDoctorProfile = async () => {
//         try {
//           const doc = await doctorProfile(name);
//           console.log(doc, "Fetched Doctors");
//           setDoctors(doc.profiles || []); // Assuming doc.profiles is an array
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchDoctorProfile();
//     }
//   }, [name]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
//       <button
//         onClick={() => navigate("/docDash")}
//         className="flex items-center mb-8 text-green-700 hover:text-green-900 font-medium"
//       >
//         <ArrowLeft className="mr-2" />
//         Back to Dashboard
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {doctors.length > 0 ? (
//           doctors.map((doctor, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 shadow-xl rounded-xl border border-green-200 flex flex-col items-center"
//             >
//               <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-4xl font-bold">
//                 {doctor.doctorName?.[0] || "D"}
//               </div>
//               <h1 className="text-2xl font-bold text-green-800 mt-4">{doctor.name}</h1>
//               <p className="text-gray-500 text-sm mt-2">{doctor.specialization || "General Practitioner"}</p>

//               <div className="space-y-4 text-sm text-gray-700 mt-6 w-full">
//                 <div className="flex items-center">
//                   <Mail className="text-green-600 w-4 h-4 mr-2" />
//                   <span className="font-medium text-green-800 w-24">Email:</span> {doctor.email}
//                 </div>

//                 <div className="flex items-center">
//                   <Phone className="text-green-600 w-4 h-4 mr-2" />
//                   <span className="font-medium text-green-800 w-24">Phone:</span> {doctor.phone || "N/A"}
//                 </div>

//                 <div className="flex items-center">
//                   <BriefcaseMedical className="text-green-600 w-4 h-4 mr-2" />
//                   <span className="font-medium text-green-800 w-24">Specialization:</span> {doctor.specialization || "N/A"}
//                 </div>

//                 <div className="flex items-center">
//                   <Calendar className="text-green-600 w-4 h-4 mr-2" />
//                   <span className="font-medium text-green-800 w-24">Experience:</span> {doctor.experience || "N/A"} years
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center col-span-full text-gray-500">No doctor profiles found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorProfile;

// import React, { useState } from "react";
// import "./Login.css";
// import { message } from "antd";
// import { Navbars } from "./Navbars";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { showLoading,hideLoading } from "../redux/features/alertSlice";

// export const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     pass: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
// const dispatch=useDispatch();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onFinishHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       dispatch(showLoading());
//       const resp = await axios.post('http://localhost:4000/Login', formData);
//       dispatch(hideLoading());
//       if (resp.data.success) {
//         localStorage.setItem("token", resp.data.token);
//         message.success("Login Successfully");
//         navigate('/'); // Redirect to the home page or any other page
//       } else {
//         message.error(resp.data.message || "Login failed");
//       }
//     } catch (err) {
//       dispatch(hideLoading());
//       console.error("Login error:", err);
//       message.error("Incorrect Email/Password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="navs">
//         <Navbars />
//       </div>
//       <div className="container">
//         <div className="Login-box">
//           <h2>Login</h2>
//           <form onSubmit={onFinishHandler}>
//             <div className="input-field">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-field">
//               <label htmlFor="pass">Password</label>
//               <input
//                 type="password"
//                 id="pass"
//                 name="pass"
//                 value={formData.pass}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Link to="/Register" className="m-2">Not a user? Sign Up here</Link>
//             <button type="submit" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };


import React, { useState } from "react";
import "./Login.css";
import { message } from "antd";
import { Navbars } from "./Navbars";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const dispatch=useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFinishHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      dispatch(showLoading());
      console.log(formData)
      const resp = await axios.post('http://localhost:4000/Login', formData);
      dispatch(hideLoading());
      if (resp.data.success) {
        localStorage.setItem("token", resp.data.token);
        message.success("Login Successfully");
        navigate('/'); // Redirect to the home page or any other page
      } else {
        message.error(resp.data.message || "Login failed");
      }
    } catch (err) {
      dispatch(hideLoading());
      console.error("Login error:", err);
      message.error("Incorrect Email/Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="navs">
        <Navbars />
      </div>
      <div className="container">
        <div className="Login-box">
          <h2>Login</h2>
          <form onSubmit={onFinishHandler}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.pass}
                onChange={handleChange}
                required
              />
            </div>
            <Link to="/Register" className="m-2">Not a user? Sign Up here</Link>
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

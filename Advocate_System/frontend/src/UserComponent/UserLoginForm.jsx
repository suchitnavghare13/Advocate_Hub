// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const UserLoginForm = () => {
//   let navigate = useNavigate();

//   const [loginRequest, setLoginRequest] = useState({
//     emailId: "",
//     password: "",
//     role: "",
//   });

//   const handleUserInput = (e) => {
//     setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
//   };

//   const loginAction = (e) => {
//     fetch("http://localhost:9090/api/user/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginRequest),
//     }).then((result) => {
//       console.log("result", result);
//       result.json().then((res) => {
//         console.log(res);

//         if (res.role === "admin") {
//           sessionStorage.setItem("active-admin", JSON.stringify(res));
//         } else if (res.role === "user") {
//           sessionStorage.setItem("active-user", JSON.stringify(res));
//         } else if (res.role === "advocate") {
//           sessionStorage.setItem("active-advocate", JSON.stringify(res));
//         } 

//         toast.success("logged in successfully!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         navigate("/home");
//         window.location.reload(true);
//       });
//     });
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           className="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header text-center " style={{backgroundColor:"#3282b8"}}>
//             <h4 className="card-title">User Login</h4>
//           </div>
//           <div className="card-body">
//             <form>
//               <div class="mb-3">
//                 <label for="role" class="form-label">
//                   <b>User Role</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="role"
//                 >
//                   <option value="0">Select Role</option>
//                   <option value="admin"> Admin </option>
//                   <option value="user"> User </option>
//                   <option value="advocate"> Advocate </option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label for="emailId" class="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={loginRequest.emailId}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label for="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={loginRequest.password}
//                   autoComplete="on"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-primary" style={{color:"#fff"}}
//                 onClick={loginAction}
//               >
//                 Login
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLoginForm;

// new code

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:9090/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.role === "admin") {
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "user") {
          sessionStorage.setItem("active-user", JSON.stringify(res));
        } else if (res.role === "advocate") {
          sessionStorage.setItem("active-advocate", JSON.stringify(res));
        }

        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/home");
        window.location.reload(true);
      });
    });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center " style={{ backgroundColor: "#3282b8" }}>
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="admin"> Admin </option>
                  <option value="user"> User </option>
                  <option value="advocate"> Advocate </option>
                </select>
              </div>

              <div className="mb-3">
                <label for="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn bg-primary" style={{ color: "#fff" }}
                onClick={loginAction}
              >
                Login
              </button>

              {/* Forgot Password Link */}
              <div className="mt-2 text-center">
                <a href="/forgot-password" className="text-primary">Forgot Password?</a>
              </div>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;

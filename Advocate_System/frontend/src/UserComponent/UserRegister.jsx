import { React,useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
    bloodGroup: "",
    specialist: "",
  });

  if (document.URL.indexOf("admin") !== -1) {
    user.role = "admin";
  } else if (document.URL.indexOf("user") !== -1) {
    user.role = "user";
  } else if (document.URL.indexOf("advocate") !== -1) {
    user.role = "advocate";
  }

  console.log("ROLE FECTHED : " + user.role);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [genders, setGenders] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:9090/api/user/gender");
    return response.data;
  };

  const retrieveAllBloodGroups = async () => {
    const response = await axios.get(
      "http://localhost:9090/api/clint/bloodgroup/all"
    );
    return response.data;
  };

  const retrieveAllSpecialist = async () => {
    const response = await axios.get(
      "http://localhost:9090/api/advocate/specialist/all"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    const getAllBloodGroup = async () => {
      const allBloodGroups = await retrieveAllBloodGroups();
      if (allBloodGroups) {
        setBloodGroup(allBloodGroups);
      }
    };

    const getAllSpecialist = async () => {
      const allSpecialist = await retrieveAllSpecialist();
      if (allSpecialist) {
        setSpecialists(allSpecialist);
      }
    };

    getAllGenders();
    getAllBloodGroup();
    getAllSpecialist();
  }, []);

  const saveUser = (event) => {
    event.preventDefault();
   
    fetch("http://localhost:9090/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      if (result.ok) {
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        navigate("/user/login"); // Navigate to login page upon successful registration
      } else {
        toast.error("Registration Failed!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  

      result
        .json()
        .then((res) => {
          console.log("response", res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-danger"
          style={{ width: "50rem" }}
        >
          <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
            <h5 className="card-title">User Registration</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="col-md-6 mb-3">
                <label htmlFor="title" className="form-label">
                  <b> First Name :</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="description" className="form-label">
                  <b>Last Name :</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
              </div>
              <div className="col-md-6 mb-3">
                <b>
                  <label className="form-label">Email Id :</label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Password :</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="sex"
                >
                  <option value="0">Select Gender</option>
                  {/* <option value="1">Male</option>
                  <option value="2">Female</option> */}
                  
                  {genders.map((gender) => {
                    return <option value={gender}> {gender} </option>;
                  })}
                </select>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="bloodGroup" className="form-label">
                  <b>Blood Group</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="bloodGroup"
                >
                  <option value="">Select Blood Group</option>
                  {/* <option value="0">A+</option>
                  <option value="1">A-</option>
                  <option value="2">B+</option>
                  <option value="3">B-</option>
                  <option value="4">AB+</option>
                  <option value="5">AB-</option>
                  <option value="6">O+</option>
                  <option value="7">O-</option> */}
                  {bloodGroup.map((bg) => {
                    return <option value={bg}> {bg} </option>;
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Contact No</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Street :</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  <b>City :</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Pincode :</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
              </div>
              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Register User"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

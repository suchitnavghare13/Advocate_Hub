// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const ViewMyAppointment = () => {
//   let navigate = useNavigate();
//   const [allAppointments, setAllAppointments] = useState([]);

//   const user = JSON.parse(sessionStorage.getItem("active-user"));

//   useEffect(() => {
//     const getAllAppointments = async () => {
//       const allAppointments = await retrieveAllAppointments();
//       if (allAppointments) {
//         setAllAppointments(allAppointments);
//       }
//     };

//     getAllAppointments();
//   }, []);

//   const retrieveAllAppointments = async () => {
//     const response = await axios.get(
//       "http://localhost:9090/api/appointment/clint/id?userId=" + user.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const cancelAppointment = (appointmentId) => {
//     console.log(appointmentId);
//     console.log("ghittinh api ** ");
//     fetch("http://localhost:9090/api/appointment/clint/update", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         appointmentId: appointmentId,
//         status: "Cancel",
//       }),
//     }).then((result) => {
//       console.log(result);
//       result.json().then((res) => {
//         console.log(res);
//         navigate("/user/appointments");
//         console.log(res);
//         toast.success(res, {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     });

//     window.location.reload(true);
//   };

//   return (
//     <div className="mt-3">
//       <div
//         className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
//           <h2>All Appointments</h2>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-hover text-color text-center">
//               <thead className="table-bordered border-color bg-color custom-bg-text">
//                 <tr>
//                   <th scope="col">User Name</th>
//                   <th scope="col">User Contact</th>
//                   <th scope="col">Problem</th>
//                   <th scope="col">Advocate Name</th>
//                   <th scope="col">Solution</th>
//                   <th scope="col">Appointment Take Date</th>
//                   <th scope="col">Appointment Date</th>
//                   <th scope="col">Appointment Status</th>
//                   <th scope="col">Appointment Price</th>
//                   <th scope="col">Action</th>
//                   <th scope="col">Pay</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allAppointments.map((a) => {
//                   return (
//                     <tr>
//                       <td>
//                         <b>{a.userName}</b>
//                       </td>

//                       <td>
//                         <b>{a.userContact}</b>
//                       </td>
//                       <td>
//                         <b>{a.problem}</b>
//                       </td>
//                       <td>
//                         <b>{a.advocateName}</b>
//                       </td>
//                       <td>
//                         <b>{a.prescription}</b>
//                       </td>
//                       <td>
//                         <b>{a.date}</b>
//                       </td>
//                       <td>
//                         <b>{a.appointmentDate}</b>
//                       </td>
//                       <td>
//                         <b>{a.status}</b>
//                       </td>
//                       <td>
//                         <b>{a.price}</b>
//                       </td>
//                       <td>
//                         {(() => {
//                           if (a.status === "Not Assigned to Advocate") {
//                             return (
//                               <button
//                                 onClick={() => cancelAppointment(a.id)}
//                                 className="btn btn-sm bg-color custom-bg-text"
//                               >
//                                 Cancel
//                               </button>
//                             );
//                           }
//                         })()}
//                       </td>
//                       <td>
//                         {(() => {
//                           if (a.status === "Problem Solve") {
//                             return (
//                               <button
//                                 className="btn btn-sm bg-success custom-bg-text"
//                               >
//                                 Pay
//                               </button>
//                             );
//                           }
//                         })()}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMyAppointment;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button, Form } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

// const ViewMyAppointment = () => {
//   let navigate = useNavigate();
//   const [allAppointments, setAllAppointments] = useState([]);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [cardNumber, setCardNumber] = useState("");
//   const [cvv, setCvv] = useState("");

//   const user = JSON.parse(sessionStorage.getItem("active-user"));

//   useEffect(() => {
//     const getAllAppointments = async () => {
//       const allAppointments = await retrieveAllAppointments();
//       if (allAppointments) {
//         setAllAppointments(allAppointments);
//       }
//     };

//     getAllAppointments();
//   }, []);

//   const retrieveAllAppointments = async () => {
//     const response = await axios.get(
//       "http://localhost:9090/api/appointment/clint/id?userId=" + user.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const cancelAppointment = (appointmentId) => {
//     console.log(appointmentId);
//     console.log("hitting API ** ");
//     fetch("http://localhost:9090/api/appointment/clint/update", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         appointmentId: appointmentId,
//         status: "Cancel",
//       }),
//     }).then((result) => {
//       console.log(result);
//       result.json().then((res) => {
//         console.log(res);
//         navigate("/user/appointments");
//         console.log(res);
//         toast.success(res, {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     });

//     window.location.reload(true);
//   };

//   const handlePayButtonClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setShowPaymentModal(true);
//   };

//   const handlePaymentSubmit = async () => {
//     // Simulate a successful payment
//     await fetch("http://localhost:9090/api/appointment/clint/update", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         appointmentId: selectedAppointment.id,
//         status: "Paid",
//       }),
//     }).then((result) => {
//       console.log(result);
//       result.json().then((res) => {
//         console.log(res);
//         toast.success("Payment successful!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     });

//     const updatedAppointments = allAppointments.map((appointment) =>
//       appointment.id === selectedAppointment.id
//         ? { ...appointment, status: "Paid" }
//         : appointment
//     );
//     setAllAppointments(updatedAppointments);
//     setShowPaymentModal(false);
//   };

//   return (
//     <div className="mt-3">
//       <div
//         className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
//           <h2>All Appointments</h2>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-hover text-color text-center">
//               <thead className="table-bordered border-color bg-color custom-bg-text">
//                 <tr>
//                   <th scope="col">User Name</th>
//                   <th scope="col">User Contact</th>
//                   <th scope="col">Problem</th>
//                   <th scope="col">Advocate Name</th>
//                   <th scope="col">Solution</th>
//                   <th scope="col">Appointment Take Date</th>
//                   <th scope="col">Appointment Date</th>
//                   <th scope="col">Appointment Status</th>
//                   <th scope="col">Appointment Price</th>
//                   <th scope="col">Action</th>
//                   <th scope="col">Pay</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allAppointments.map((a) => {
//                   return (
//                     <tr key={a.id}>
//                       <td>
//                         <b>{a.userName}</b>
//                       </td>

//                       <td>
//                         <b>{a.userContact}</b>
//                       </td>
//                       <td>
//                         <b>{a.problem}</b>
//                       </td>
//                       <td>
//                         <b>{a.advocateName}</b>
//                       </td>
//                       <td>
//                         <b>{a.prescription}</b>
//                       </td>
//                       <td>
//                         <b>{a.date}</b>
//                       </td>
//                       <td>
//                         <b>{a.appointmentDate}</b>
//                       </td>
//                       <td>
//                         <b>{a.status}</b>
//                       </td>
//                       <td>
//                         <b>{a.price}</b>
//                       </td>
//                       <td>
//                         {a.status === "Not Assigned to Advocate" && (
//                           <button
//                             onClick={() => cancelAppointment(a.id)}
//                             className="btn btn-sm bg-color custom-bg-text"
//                           >
//                             Cancel
//                           </button>
//                         )}
//                       </td>
//                       <td>
//                         {a.status === "Problem Solve" && (
//                           <button
//                             onClick={() => handlePayButtonClick(a)}
//                             className="btn btn-sm bg-success custom-bg-text"
//                             disabled={a.status === "Paid"}
//                           >
//                             {a.status === "Paid" ? "Paid" : "Pay"}
                            
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Payment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Credit Card Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>CVV</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control type="text" value={selectedAppointment?.price} disabled />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handlePaymentSubmit}>
//             Pay
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ViewMyAppointment;



import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const ViewMyAppointment = () => {
  let navigate = useNavigate();
  const [allAppointments, setAllAppointments] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const user = JSON.parse(sessionStorage.getItem("active-user"));

  useEffect(() => {
    const getAllAppointments = async () => {
      const allAppointments = await retrieveAllAppointments();
      if (allAppointments) {
        setAllAppointments(allAppointments);
      }
    };

    getAllAppointments();
  }, []);

  const retrieveAllAppointments = async () => {
    const response = await axios.get(
      "http://localhost:9090/api/appointment/clint/id?userId=" + user.id
    );
    console.log(response.data);
    return response.data;
  };

  const cancelAppointment = (appointmentId) => {
    console.log(appointmentId);
    console.log("hitting API ** ");
    fetch("http://localhost:9090/api/appointment/clint/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentId: appointmentId,
        status: "Cancel",
      }),
    }).then((result) => {
      console.log(result);
      result.json().then((res) => {
        console.log(res);
        navigate("/user/appointments");
        console.log(res);
        toast.success(res, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    });

    window.location.reload(true);
  };

  const handlePayButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async () => {
    // Simulate a successful payment
    await fetch("http://localhost:9090/api/appointment/clint/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentId: selectedAppointment.id,
        status: "Paid",
      }),
    }).then((result) => {
      console.log(result);
      result.json().then((res) => {
        console.log(res);
        toast.success("Payment successful!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    });

    const updatedAppointments = allAppointments.map((appointment) =>
      appointment.id === selectedAppointment.id
        ? { ...appointment, status: "Paid", price: 0 }
        : appointment
    );
    setAllAppointments(updatedAppointments);
    setShowPaymentModal(false);
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
          <h2>All Appointments</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-striped table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>User Name</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>User Contact</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Problem</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Advocate Name</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Solution</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Appointment Take Date</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Appointment Date</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Appointment Status</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Appointment fees</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Action</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Pay</th>
                </tr>
              </thead>
              <tbody>
                {allAppointments.map((a) => {
                  return (
                    <tr key={a.id}>
                      <td>
                        <b>{a.userName}</b>
                      </td>

                      <td>
                        <b>{a.userContact}</b>
                      </td>
                      <td>
                        <b>{a.problem}</b>
                      </td>
                      <td>
                        <b>{a.advocateName}</b>
                      </td>
                      <td>
                        <b>{a.prescription}</b>
                      </td>
                      <td>
                        <b>{a.date}</b>
                      </td>
                      <td>
                        <b>{a.appointmentDate}</b>
                      </td>
                      <td>
                        <b>{a.status}</b>
                      </td>
                      <td>
                        <b>{a.status === "Paid" ? 0 : a.price}</b>
                      </td>
                      <td>
                        {a.status === "Not Assigned to Advocate" && (
                          <button
                            onClick={() => cancelAppointment(a.id)}
                            className="btn btn-sm bg-danger text-white custom-bg-text"
                          >
                            Cancel
                          </button>
                        )}
                      </td>
                      <td>
                        {a.status === "Problem Solve" && (
                          <button
                            onClick={() => handlePayButtonClick(a)}
                            className="btn btn-sm bg-success text-white custom-bg-text"
                            disabled={a.status === "Paid"}
                          >
                            {a.status === "Paid" ? "Paid" : "Pay"}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" value={selectedAppointment?.price} disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePaymentSubmit}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default ViewMyAppointment;

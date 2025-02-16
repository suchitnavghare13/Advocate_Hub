// ForgotPassword.js new code
import { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    fetch("http://localhost:9090/api/user/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Password reset link sent to your email!");
        } else {
          toast.error("Error: Could not send reset link.");
        }
      });
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

// ResetPassword.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams(); // Token from the URL

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    fetch(`http://localhost:9090/api/user/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Password has been reset successfully!");
        } else {
          toast.error("Error resetting password.");
        }
      });
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      navigate("/ChooseTask");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={() => navigate("/ChooseTask")}>
              Login
            </button>

            <button type="button" onClick={() => navigate("/ChooseTask")}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

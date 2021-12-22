import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return name.length > 0 && password.length > 0 && password.length < 9;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div className="sign">
          <h1>Login</h1>
          <p>Please fill in this form to Login.</p>
          <div>
            <label for="email">
              <b>UserName</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name "
              name="uname"
              value={name}
              required
              pattern="/^[A-Za-z]+$/"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <div class="clearfix">
            <button type="button" class="btn btn-danger">
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-success"
              disabled={!validateForm()}
              onClick={() => navigate("/dashboard")}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

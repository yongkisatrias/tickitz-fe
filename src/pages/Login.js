import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div id="register_page">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-7 left-content">
          <Link to="/">
            <img src="/image/logo/white-logo-tickitz.png" />
          </Link>
          <p>wait, watch, wow!</p>
        </div>

        {/* Right Content */}
        <div className="col-md-5 col-sm-12 right-content">
          <div className="container px-5">
            <h1>Sign In</h1>
            <p className="auth-right-desc mb-4">
              Sign in with your data that you entered during your registration
            </p>
            <div className="mb-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Write your email"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Write your password"
              />
            </div>
            <div className="d-grid mb-4">
              <button type="button" class="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
            <p className="text-center bottom-content">
              Forgot your password?{" "}
              <Link to="/forgot-password" className="auth-bottom-content">
                Reset now
              </Link>
            </p>
            <p className="text-center bottom-content">
              Don't have an account?{" "}
              <Link to="/register" className="auth-bottom-content">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

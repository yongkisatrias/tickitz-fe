import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link } from "react-router-dom";

function Register() {
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
            <h1>Sign Up</h1>
            <p className="auth-right-desc mb-4">Fill your additional details</p>
            <div className="mb-4">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Write your full name"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Write your phone number"
              />
            </div>
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
                Sign Up
              </button>
            </div>
            <p className="text-center bottom-content">
              Already have account ?{" "}
              <Link to="/login" className="auth-bottom-content">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

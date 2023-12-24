import "../style/Auth.css";
import "../style/Auth.mobile.css";

import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const {
    user: { profile, token },
  } = useSelector((state) => state);

  React.useEffect(() => {
    if (token && profile) {
      navigate("/");
    }
  }, []);

  const handleRegister = () => {
    setIsLoading(true);
    setErrorMessage(null);

    axios
      .post(
        "https://pijar-camp-batch15-tickitz.cyclic.app/yongki/auth/register",
        {
          fullname: fullname,
          phone_number: phoneNumber,
          email: email,
          password: password,
        }
      )
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        const errorFullname =
          error?.response?.data?.messages?.fullname?.message;
        const errorPhoneNumber =
          error?.response?.data?.messages?.phone_number?.message;
        const errorEmail = error?.response?.data?.messages?.email?.message;
        const errorPassword =
          error?.response?.data?.messages?.password?.message;

        setIsSuccess(false);
        setErrorMessage(
          errorFullname ??
            errorPhoneNumber ??
            errorEmail ??
            errorPassword ??
            "something wrong in our app"
        );
        console.log("gagal", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="register_page">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-7 left-content">
          <Link to="/">
            <img src="/image/logo/white-logo-tickitz.png" alt="Tickitz logo" />
          </Link>
          <p>wait, watch, wow!</p>
        </div>

        {/* Right Content */}
        <div className="col-md-5 col-sm-12 right-content">
          <div className="container px-5">
            <h1>Sign Up</h1>
            <p className="auth-right-desc mb-4">Fill your additional details</p>

            {/* Alert */}
            {isSuccess ? (
              <div class="alert alert-success" role="alert">
                Register account success, please check your email !
              </div>
            ) : null}
            {errorMessage ? (
              <div class="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            ) : null}

            <div className="mb-4">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Write your full name"
                onChange={(event) => {
                  setFullname(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Write your phone number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Write your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Write your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="d-grid mb-4">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                onClick={handleRegister}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Sign Up"}
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

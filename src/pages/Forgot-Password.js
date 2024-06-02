import "../style/Auth.css";
import "../style/Auth.mobile.css";

import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleForgotPassword = () => {
    setIsLoading(true);
    setErrorMessage(null);

    axios
      .post("https://tickitz-be.onrender.com/yongki/auth/forgot-password", {
        email: email,
      })
      .then(() => {
        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        const errorEmail = error?.response?.data?.messages?.email?.message;

        setIsSuccess(false);
        setErrorMessage(
          errorEmail ??
            error?.response?.data?.messages ??
            "something wrong in our app"
        );
        console.log("gagal", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div id="register_page">
        <div className="row">
          {/* Left Content */}
          <div className="col-md-7 left-content">
            <Link to="/">
              <img
                src="/image/logo/white-logo-tickitz.png"
                alt="tickitz logo"
              />
            </Link>
            <p>wait, watch, wow!</p>
          </div>

          {/* Right Content */}
          <div className="col-md-5 col-sm-12 right-content">
            <div className="container px-5">
              <h1>Fill your complete email</h1>
              <p className="auth-right-desc mb-4">
                We'll send a link to your email shortly
              </p>

              {/* Alert */}
              {isSuccess ? (
                <div class="alert alert-success" role="alert">
                  Reset email success, please go back to login page !
                </div>
              ) : null}
              {errorMessage ? (
                <div class="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              ) : null}

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
              <div className="d-grid mb-4">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Send"}
                </button>
                <p className="text-center bottom-content mt-2">
                  Already reset password?{" "}
                  <Link to="/login" className="auth-bottom-content">
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

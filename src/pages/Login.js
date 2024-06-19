import "../style/Auth.css";
import "../style/Auth.mobile.css";

import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "../slices/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user: { profile, token },
  } = useSelector((state) => state);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    if (token && profile) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setErrorMessage(null);

    axios
      .post("https://tikitz-v2.adaptable.app/yongki/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.data?.token;
        const profile = response?.data?.data?.result;

        // localStorage.setItem("token", token);
        // localStorage.setItem("profile", JSON.stringify(profile));

        dispatch(userSlice.setUser(profile));
        dispatch(userSlice.setToken(token));
        setIsSuccess(true);
        navigate("/");

        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
      })
      .catch((error) => {
        const errorEmail = error?.response?.data?.messages?.email?.message;
        const errorPassword =
          error?.response?.data?.messages?.password?.message;

        setIsSuccess(false);
        setErrorMessage(
          errorEmail ??
            errorPassword ??
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
    <div id="register_page">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-7 left-content">
          <Link to="/">
            <img src="/image/logo/white-logo-tickitz.png" alt="tickitz logo" />
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

            {/* Alert */}
            {isSuccess ? (
              <div class="alert alert-success" role="alert">
                Login success, please wait for redirect to our app !
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
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Sign In"}
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

import { useEffect, useState } from "react";
import { Nav, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.init";
import google from "../../../Assets/Images/google.png";
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });

  const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const handleEmailChange = (event) => {
    const emailValidation = /\S+@\S+\.\S+/;
    const validEmail = emailValidation.test(event.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } 
    else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    const passwordValidation = /.{6,}/;
    const validPassword = passwordValidation.test(event.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } 
    else {
      setErrors({ ...errors, password: "Invalid password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from);
    }
  }, [user, googleUser, navigate, from]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email. Please provide a valid email!");
          break;
        case "auth/wrong-password":
          toast("Wrong password. Please provide a valid password!.");
          break;
        default:
          toast("Something went wrong!");
      }
    }
  }, [hookError, googleError]);

  if (loading || googleLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center m-auto">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  return (
    <div className="login-container mt-3 mb-5">
      <div className="login-title">LOGIN</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
          required
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="Your Password"
          onChange={handlePasswordChange}
          required
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <button>Login</button>
        <br />
        <Nav.Link as={Link} to="/resetPassword">
          Forgot your password? Reset it!
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Don't have an account? Sign Up!
        </Nav.Link>
      </form>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <button onClick={() => signInWithGoogle()}>
        <img style={{ width: "30px" }} src={google} alt="" />
        <span className="px-2">Log in with Google</span>
      </button>
    </div>
  );
};

export default Login;
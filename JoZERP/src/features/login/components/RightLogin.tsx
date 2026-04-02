import React, { useState } from "react";
import "../styles/RightLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import userIcon from "../assets/images/user.png";
import lockIcon from "../assets/images/lock.png";

type Props = {
  onLogin: () => void;
};

const RightLogin: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // EMAIL VALIDATION (ONLY GMAIL, abc@gmail.com allowed)
  const validateEmail = (email: string) => {
    if (!email) return "Email is required";

    if (email.includes(" ")) return "No spaces allowed";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter valid email";

    const [, domain] = email.split("@");

    //  Only Gmail allowed
    if (domain.toLowerCase() !== "gmail.com") {
      return "Only Gmail addresses are allowed";
    }

    return "";
  };

  // PASSWORD VALIDATION (8–16 chars)
  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,16}$/;

    return passwordRegex.test(value)
      ? ""
      : "Password must be 8-16 chars with A-Z, a-z, 0-9 & special char";
  };

  // HANDLE LOGIN
  const handleLogin = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError || !stayLoggedIn) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    onLogin();
  };

  const isFormValid =
    email &&
    password &&
    !errors.email &&
    !errors.password &&
    stayLoggedIn;

  return (
    <div className="right-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p>Please enter your credentials to continue</p>

        {/* EMAIL */}
        <label>Username / Mail ID</label>
        <div className="input-group">
          <img src={userIcon} className="input-icon" alt="user" />
          <input
            type="email"
            placeholder="college.admin@jozuna.com"
            value={email}
            onChange={(e) => {
              const value = e.target.value.replace(/\s/g, "");
              setEmail(value);
              setErrors((prev) => ({
                ...prev,
                email: validateEmail(value),
              }));
            }}
          />
        </div>
        {errors.email && <span className="error">{errors.email}</span>}

        {/* PASSWORD HEADER */}
        <div className="password-header">
          <label>Password</label>
          <span className="forgot">Forgot password?</span>
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <img src={lockIcon} className="input-icon" alt="lock" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({
                ...prev,
                password: validatePassword(e.target.value),
              }));
            }}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {errors.password && (
          <span className="error">{errors.password}</span>
        )}

        {/* CHECKBOX */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={() => setStayLoggedIn(!stayLoggedIn)}
          />
          <label htmlFor="stayLoggedIn">
            Stay logged in on this device
          </label>
        </div>

        {/* BUTTON */}
        <div className="login-btn-wrapper">
          <button
            className={`login-btn ${isFormValid ? "active" : ""}`}
            disabled={!isFormValid}
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="note">* Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
};

export default RightLogin;

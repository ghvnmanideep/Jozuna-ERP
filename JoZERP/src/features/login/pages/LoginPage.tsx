import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="left-section">
        <LeftLogin />
      </div>

      <div className="right-section">
        <RightLogin onLogin={() => navigate("/dashboard/dashboard")} />
      </div>
    </div>
  );
};

export default LoginPage;

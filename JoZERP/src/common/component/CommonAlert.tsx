import React from "react";
import "../../styles/CommonAlert.css";
import alertIcon from "../images/alert-icon.png";

interface CommonAlertProps {
  message: string;
  buttonCallBack: () => void;
  onClose: () => void;
}

const CommonAlertComponent: React.FC<CommonAlertProps> = ({
  message,
  buttonCallBack,
  onClose,
}) => {

  const handleConfirm = () => {
    buttonCallBack();
    onClose();
  };

  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-modal" onClick={(e) => e.stopPropagation()}>

        {/* PNG Icon */}
        <div className="alert-icon">
          <img src={alertIcon} alt="alert-icon" />
        </div>

        {/* Message */}
        <div className="alert-message">{message}</div>

        {/* Buttons */}
        <div className="alert-actions">
          <button className="alert-btn confirm" onClick={handleConfirm}>
            Yes
          </button>

          <button className="alert-btn cancel" onClick={onClose}>
            No
          </button>
        </div>

      </div>
    </div>
  );
};

export default CommonAlertComponent;
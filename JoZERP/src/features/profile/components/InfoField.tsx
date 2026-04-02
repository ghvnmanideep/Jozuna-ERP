import React from "react";
import { InfoFieldProps } from "../interfaces/infofield.interface";

const InfoField: React.FC<InfoFieldProps> = ({ label, value, fullWidth }) => {
  return (
    <div className={`field ${fullWidth ? "full-width" : ""}`}>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default InfoField;
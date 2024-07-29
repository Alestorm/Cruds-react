import React, { ChangeEvent } from "react";
import "./FormInput.css";
interface props {
  value: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const FormInput = ({ value, label, placeholder, type, onChange }: props) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;

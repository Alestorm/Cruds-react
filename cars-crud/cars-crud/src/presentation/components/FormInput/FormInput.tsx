import React, { ChangeEvent } from "react";
import "./FormInput.css";

interface props {
  value: string;
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<props> = ({
  value,
  label,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;

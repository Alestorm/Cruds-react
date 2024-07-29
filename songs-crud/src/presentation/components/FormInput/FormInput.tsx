import React from "react";
import "./FormInput.css";

interface props {
  value: string;
  placeholder:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ value, placeholder, onChange }: props) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;

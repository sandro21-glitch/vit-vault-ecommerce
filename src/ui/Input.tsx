import React from "react";

interface TextInputProps {
  id: string;
  type: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, className, id, onChange, type }: TextInputProps) => {
  return (
    <input
      type={type}
      id={id}
      className={`${className} border-2 outline-none p-2`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

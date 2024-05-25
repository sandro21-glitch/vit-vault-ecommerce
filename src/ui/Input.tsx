import React from 'react';

interface TextInputProps {
  id: string;
  type?: string;
  name?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<TextInputProps> = ({ id, type = 'text', name, className, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`${className} border-[3px] outline-none p-2`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

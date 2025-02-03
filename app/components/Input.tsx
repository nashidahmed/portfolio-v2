"use client";

import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex w-full max-w-3xl items-center">
      <label
        className={`absolute transition-all duration-300 ${
          isFocused || value
            ? "top-3 text-xs"
            : "top-11 -translate-y-1/2 transform text-base"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        className="border-accent focus:border-secondaryText h-full w-full border-b bg-transparent pb-4 pt-8 focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

export default Input;

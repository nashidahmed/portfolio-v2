"use client";

import React, { useRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex w-full max-w-3xl items-center">
      <label
        htmlFor={id}
        className={`absolute cursor-text transition-all duration-300 ${
          isFocused || value
            ? "top-3 text-sm"
            : "top-11 -translate-y-1/2 transform text-base"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        className="h-full w-full border-b border-accent bg-transparent pb-4 pt-8 focus:border-secondaryText focus:outline-none"
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

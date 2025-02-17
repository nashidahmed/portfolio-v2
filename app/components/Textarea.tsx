"use client";

import React, { useRef, useState } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative flex h-full w-full max-w-3xl">
      <label
        htmlFor={id}
        className={`absolute cursor-text transition-all duration-300 ${
          isFocused || value ? "hidden" : "bottom-3 text-base"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {label}
      </label>
      <textarea
        ref={inputRef}
        id={id}
        className="mt-6 w-full resize-none border-b border-accent bg-transparent pb-4 focus:border-secondaryText focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;

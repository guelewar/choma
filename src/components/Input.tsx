import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function Input({ value, onChange, error }: InputProps) {
  return (
    <input
      type="text"
      className={`w-full h-full relative bg-transparent pl-4 md:pl-10 rounded-lg focus:ring-1 ${
        error
          ? 'focus:ring-0 focus:ring-transparent border border-red-600'
          : 'focus:ring-violet-600'
      } outline-none`}
      placeholder="Enter YouTube url here ...."
      value={value}
      onChange={onChange}
    />
  );
}

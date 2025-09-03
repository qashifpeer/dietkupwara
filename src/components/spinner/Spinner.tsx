// src/components/Spinner.tsx
import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeClasses = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-4",
  lg: "h-16 w-16 border-4",
};

const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "border-blue-500" }) => {
  return (
    <div
      className={`animate-spin rounded-full border-t-transparent ${sizeClasses[size]} ${color}`}
      role="status"
    />
  );
};

export default Spinner;

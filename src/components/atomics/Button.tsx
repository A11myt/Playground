"use client";
import "../../tailwind.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "auto" | "sm" | "md" | "lg";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Button = ({
  primary = true,
  size = "md",
  backgroundColor = "bg-main-25",
  label,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  //disabled not clickable
  //primary red // secondary blue
  const mode = primary ? "btn--primary" : "btn--secondary";
  return (
    <button
      className={
        disabled
          ? `font-PassionOne bg-accent-25`
          : `font-DMMono ${backgroundColor}`
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};

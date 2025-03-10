"use client";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      role="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-center space-x-2 bg-[#FFD700] text-[#1A1A1A] font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#D4AF37] transition max-w-32 m-6"
    >
      {children}
    </button>
  );
}

"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-[#FFD700] text-[#1A1A1A] font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#D4AF37] transition max-w-32 m-8"
    >
      <span>{text}</span>
    </button>
  );
}

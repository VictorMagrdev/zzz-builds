import React from 'react'

interface FilterButtonProps {
  label: String;
  onClick: () => void;
}

export default function FilterButton({ label, onClick }: FilterButtonProps) {
  return (
    <button 
      className="px-3 py-1 bg-blue-600 rounded text-white" 
      onClick={onClick}
    >
      {label}
    </button>
  );
}



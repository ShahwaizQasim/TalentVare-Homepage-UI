import SearchIcon from "../assets/searchIcon2.png";

interface ButtonProps {
  label: string;
  img?: boolean;
  className?: string;
}

export const CustomButton = ({ label, img, className }: ButtonProps) => (
  <button
    className={`flex items-center justify-center rounded-md gap-1.5 bg-blue-button font-Inter hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-4 h-9 transition-colors duration-150 whitespace-nowrap shadow-sm ${className || ""}`}
  >
    {img && <img src={SearchIcon} alt="search_icon" className="h-4" />}
    {label}
  </button>
);

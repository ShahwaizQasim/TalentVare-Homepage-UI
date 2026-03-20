import { navItems } from "../utils/data";
import { CustomButton } from "./Buttons";
import NavLogo from "../assets/logo.png";
import SearchIcon from "../assets/SearchIcon.png";
import { useState } from "react";
import User from "../assets/user.png";

export default function Navbar() {
  const [value, setValue] = useState("");

  return (
  <nav className="w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
  <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center gap-4">
    
    {/* Logo */}
    <div className="flex-shrink-0">
      <img src={NavLogo} alt="Nav_Logo" className="object-contain h-9" />
    </div>

    {/* Nav Links */}
    <div className="flex items-center gap-5 pl-4 flex-1 overflow-hidden">
      {navItems.map((item, index) => (
        <span
          key={index}
          className={`font-Inter text-sm whitespace-nowrap flex-shrink-0 ${
            index === 0
              ? "text-[#0154AA] font-semibold"
              : "text-dark font-medium"
          }`}
        >
          {item.label}
        </span>
      ))}
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 flex-shrink-0">
      {/* Search */}
      <div className="hidden lg:flex items-center gap-2 px-3 h-9 w-52 rounded-md border border-gray-200 bg-[#F4F4F4] transition-all duration-150 focus-within:border-blue-400">
        <img src={SearchIcon} alt="search_icon" className="h-4 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent outline-none text-sm text-gray-700 font-Inter placeholder-gray-400 w-full"
        />
      </div>

      <CustomButton label={"Resume Builder"} />

      <button className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white hover:ring-blue-200 transition-all duration-150 flex-shrink-0">
        <img src={User} alt="user_photo" className="w-full h-full object-cover" />
      </button>
    </div>

  </div>
</nav>
  );
}

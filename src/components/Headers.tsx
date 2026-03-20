import { navItems } from "../utils/data";
import { ResumeBuilderButton } from "./Buttons";
import NavLogo from "../assets/logo.png";
import SearchIcon from "../assets/SearchIcon.png";
import { useState } from "react";
import User from "../assets/user.png";
// const SearchBar = () => {
//   const [focused, setFocused] = useState(false);
//   const [value, setValue] = useState("");

//   return (
//     <div
//       className={[
//         "flex items-center gap-2 px-3 h-9 rounded-full border bg-white transition-all duration-150",
//         focused ? "border-blue-400 shadow-sm w-48" : "border-gray-200 w-36",
//       ].join(" ")}
//     >
//       {/* <SearchIcon /> */}
//       <input
//         type="text"
//         placeholder="Search"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
//       />
//     </div>
//   );
// };

const Avatar = () => (
  <button className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white hover:ring-blue-200 transition-all duration-150 flex-shrink-0">
    <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
      U
    </div>
  </button>
);

export default function Navbar() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)] py-2">
        <div className="max-w-screen-xl mx-auto px-5 h-[56px] flex items-center gap-4">
          <div>
            <img src={NavLogo} alt="Nav_Logo" className="object-contain h-10" />
          </div>
          <div className="flex items-center gap-5 md:pl-5 flex-1">
            {navItems.map((item, index) => (
              <span
                key={index}
                className={`font-Inter font-medium font-size-16px ${index === 0 ? "text-[#0154AA] font-semibold" : "text-dark"}`}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div
              className={[
                "flex items-center gap-2 px-3 h-9 rounded-sm border bg-[#F4F4F4] transition-all duration-150 focus:border-blue-400 shadow-sm w-52",
              ].join(" ")}
            >
              <img src={SearchIcon} alt="search_icon" className="h-4" />
              <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-[#F4F4F4] outline-none text-[14px] text-gray-700 font-Inter placeholder-gray-400 w-full"
              />
            </div>
            <ResumeBuilderButton label={"Resume Builder"} />
            <button className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white hover:ring-blue-200 transition-all duration-150 flex-shrink-0">
              <img src={User} alt="user_photo" className="object-cover" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

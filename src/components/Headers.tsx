import { navItems } from "../utils/data";
import { ResumeBuilderButton } from "./Buttons";
import NavLogo from "../assets/logo.png"


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

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="max-w-screen-xl mx-auto px-5 h-[56px] flex items-center gap-4">

          {/* Brand Logo */}
          <a href="#" className="flex-shrink-0 mr-1">
            {/* <BrandIcon /> */}
            <img src={NavLogo} alt="Nav_Logo" className="object-contain" />
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-0.5 flex-1">
            {navItems.map((item) => (
              <span>{item.label}</span>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* <SearchBar /> */}
            <ResumeBuilderButton />
            <Avatar />
          </div>
        </div>
      </nav>

      {/* Demo Page Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wide">Navbar Preview</p>
          <p className="text-gray-300 text-xs mt-1">Scroll up to see the navbar</p>
        </div>
      </div>
    </div>
  );
}
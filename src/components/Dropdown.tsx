type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="#9CA3AF"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);  

const CustomSelect = ({ options, value, onChange, placeholder }: SelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-9 pl-3 pr-8 cursor-pointer rounded-lg border border-gray-100 bg-white text-[14px] text-[#585D6E] font-Inter outline-none appearance-none focus:border-blue-400 w-full"
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Icon */}
      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown />
      </span>
    </div>
  );
};

export default CustomSelect;
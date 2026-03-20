interface ButtonProps{
  label: string
}

export const ResumeBuilderButton = ({label}:ButtonProps) => (
  <button className="flex items-center gap-1.5 bg-blue-button font-Inter hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium px-4 h-9 rounded-full transition-colors duration-150 whitespace-nowrap shadow-sm">
    {label}
  </button>
);

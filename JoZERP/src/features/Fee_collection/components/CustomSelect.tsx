import React, { useState, useRef, useEffect } from "react";
import "../styles/CustomSelect.css";

interface Option {
  label: string;
  value: string;
}

interface Props { 
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="field select-container" ref={ref}>
      <label>{label}</label>

      <div
        className={`select-box ${!selected ? "placeholder" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected ? selected.label : placeholder}

        <span className={`customarrow ${open ? "open" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M6 9l6 6 6-6"
              stroke="#555"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {open && (
        <div className="custom-select-dropdown">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="custom-select-item"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
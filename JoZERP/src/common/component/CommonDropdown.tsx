import React, { useState, useRef, useEffect } from "react";
import "../../styles/Dropdown.css";
import arrowIcon from "../../features/admissions/assets/dropdown-icon.png"; 

type Props = {
  value: string;
  setValue: (value: string) => void;
  list: string[];
};

const CommonDropdown: React.FC<Props> = ({ value, setValue, list }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="common-dropdown" ref={dropdownRef}>

      <div className="dropdown-btn-wrapper">
        <button
          type="button"
          className="common-dropdown-btn"
          onClick={() => setOpen(!open)}
        >
          {/* <span className="common-dropdown-text">{value}</span> */}
          <span
  className={`common-dropdown-text ${
    value.trim().toLowerCase() === "least 5 courses"
      ? "no-ellipsis"
      : ""
  }`}
>
  {value}
</span>
          <span className="common-dropdown-icon">
             <img src={arrowIcon} alt="arrow" />
          </span>
        </button>

        {/* ✅ TOOLTIP */}
        {/* {value !== "Least 5 Courses" && ( */}
        {value.trim().toLowerCase() !== "least 5 courses" && (
          <span className="tooltip">{value}</span>
        )}
      </div>

      {open && (
        <div className="common-dropdown-menu">
          {list.map((item, index) => (
            <div
              key={index}
              className="common-dropdown-item"
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CommonDropdown;
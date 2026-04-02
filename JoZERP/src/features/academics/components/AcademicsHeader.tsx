import { useState, useEffect, useRef } from "react";
import filterIcon from "../assets/filter-icon.png";
import dropdownIcon from "../assets/dropdown-icon.png";
import { Strings } from "../../../utils/Strings";
import {
  campusList,
  financeList,
} from "../data/dummydata/academics.data";

const AcademicsHeader = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedCampus, setSelectedCampus] = useState(
    Strings.ACADEMICS.LABELS.CAMPUS
  );
  const [selectedFinance, setSelectedFinance] = useState(
    Strings.ACADEMICS.LABELS.SELF_FINANCE
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  //  Function to truncate text to 15 characters
  const truncateText = (text: string, maxLength: number = 15) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const toggleDropdown = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleSelect = (type: string, value: string) => {
    if (type === "campus") setSelectedCampus(value);
    if (type === "finance") setSelectedFinance(value);

    setOpenDropdown(null);
  };

  //  Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="academics-header">
      <h2 className="academics-title">{Strings.ACADEMICS.TITLE}</h2>

      <div className="academics-actions" ref={dropdownRef}>

        {/* ================= CAMPUS ================= */}
        <div className="academics-dropdown">
          <div
            className="academics-select"
            onClick={() => toggleDropdown("campus")}
          >
            <div className="tooltip-container">
              <span>{truncateText(selectedCampus)}</span>
              <div className="custom-tooltip">{selectedCampus}</div>
            </div>

            <img
              src={dropdownIcon}
              alt=""
              className={`academics-arrow ${
                openDropdown === "campus" ? "rotate" : ""
              }`}
            />
          </div>

          {openDropdown === "campus" && (
            <div className="academics-dropdown-menu">
              {campusList.map((campus, index) => (
                <div
                  key={index}
                  className="academics-dropdown-item"
                  onClick={() => handleSelect("campus", campus)}
                >
                  {campus}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= SELF FINANCE ================= */}
        <div className="academics-dropdown">
          <div
            className="academics-select"
            onClick={() => toggleDropdown("finance")}
          >
            <div className="tooltip-container">
              <span>{truncateText(selectedFinance)}</span>
              <div className="custom-tooltip">{selectedFinance}</div>
            </div>

            <img
              src={dropdownIcon}
              alt=""
              className={`academics-arrow ${
                openDropdown === "finance" ? "rotate" : ""
              }`}
            />
          </div>

          {openDropdown === "finance" && (
            <div className="academics-dropdown-menu">
              {financeList.map((item, index) => (
                <div
                  key={index}
                  className="academics-dropdown-item"
                  onClick={() => handleSelect("finance", item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= ADVANCED FILTER ================= */}
        <div className="academics-dropdown">
          <div
            className="academics-select"
            onClick={() => toggleDropdown("advanced")}
          >
            <div className="academics-filter-left">
              <img src={filterIcon} alt="" />
              <span>{Strings.ACADEMICS.LABELS.ADVANCED_FILTER}</span>
            </div>

            <img
              src={dropdownIcon}
              alt=""
              className={`academics-arrow ${
                openDropdown === "advanced" ? "rotate" : ""
              }`}
            />
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <button className="academics-btn-outline">
          {Strings.ACADEMICS.BUTTONS.NEW_COURSE}
        </button>

        <button className="academics-btn-primary">
          {Strings.ACADEMICS.BUTTONS.NEW_DEPARTMENT}
        </button>

      </div>
    </div>
  );
};

export default AcademicsHeader;
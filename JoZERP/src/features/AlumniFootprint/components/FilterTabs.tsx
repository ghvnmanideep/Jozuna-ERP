import "../styles/FilterTabs.css";

interface Props {
  active: string;
  setActive: (value: string) => void;
}

export default function FilterTabs({ active }: Props) {

  const tabs = ["All", "2024", "2018"];

  return (
    <div className="filter-tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => {}}   //  Disabled click
        >
          {tab === "All"
            ? "All"
            : tab === "2024"
            ? "Class of 2024"
            : "Batch 2018"}
        </button>
      ))}
    </div>
  );
}

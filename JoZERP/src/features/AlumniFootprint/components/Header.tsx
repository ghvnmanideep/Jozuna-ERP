import "../styles/Header.css";
import SearchBar from "./SearchBar";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const Header: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <div className="af-header">

      {/* LEFT SIDE */}
      <div className="header-left">
        <h1 className="af-title">Alumni Global Footprint</h1>
        <p className="af-subtitle">
          Tracking 12,400+ graduates across 45 countries
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <SearchBar search={search} setSearch={setSearch} />
        <button className="map-btn">Map View</button>
      </div>

    </div>
  );
};

export default Header;
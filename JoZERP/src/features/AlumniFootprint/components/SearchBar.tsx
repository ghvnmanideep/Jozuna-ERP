import "../styles/SearchBar.css";
import { Search, SlidersHorizontal } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <div className="search-wrapper">
      <div className="search-box">

        {/* Search Icon */}
        <Search className="search-icon" size={18} />

        {/* Input */}
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter Icon */}
        <SlidersHorizontal className="filter-icon" size={15} />

      </div>
    </div>
  );
};

export default SearchBar;
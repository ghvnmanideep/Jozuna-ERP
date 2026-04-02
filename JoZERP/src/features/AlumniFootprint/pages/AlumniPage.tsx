import { useState } from "react";
import Header from "../components/Header";
import TopEmployers from "../components/TopEmployers";
import GraduateCard from "../components/GraduateCard";
import FilterTabs from "../components/FilterTabs";
import StatsSection from "../components/StatsSection";

import { Graduate } from "../types/graduates";
import graduatesData from "../data/graduates.json";

import "../styles/AlumniPage.css";

/* JSON DATA */
const graduates = graduatesData as Graduate[];

const AlumniPage: React.FC = () => {

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  /* FILTER + SEARCH LOGIC */
  const filteredGraduates = graduates.filter((g) => {

    const matchesBatch =
      filter === "All" || g.batch === filter;

    const matchesSearch =
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.company.toLowerCase().includes(search.toLowerCase()) ||
      g.role.toLowerCase().includes(search.toLowerCase());

    return matchesBatch && matchesSearch;

  });

  return (
    <div className="af-page">
      <div className="af-container">

        {/* HEADER */}
        <Header search={search} setSearch={setSearch} />

        {/* TOP EMPLOYERS */}
        <TopEmployers />

        {/* NOTABLE GRADUATES */}
        <section className="notable-section">

          <div className="notable-header">
            <h2>Notable Graduates</h2>
            <FilterTabs active={filter} setActive={setFilter} />
          </div>

          {/* GRADUATES GRID */}
          <div className="graduate-grid">

            {filteredGraduates.length > 0 ? (
              filteredGraduates.map((g) => (
                <GraduateCard key={g.id} graduate={g} />
              ))
            ) : (
              <p className="no-results">No cards available</p>
            )}

          </div>

        </section>

        {/* STATS SECTION */}
        <StatsSection />

      </div>
    </div>
  );
};

export default AlumniPage;

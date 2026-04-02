import { academicsSummaryData } from "../data/dummydata/academics.data";
import { Strings } from "../../../utils/Strings";

const AcademicsSummary = () => {
  return (
    <div className="academics-summary-grid">
      {academicsSummaryData.map((card) => (
        <div className="academics-summary-card" key={card.id}>
          <div className="academics-summary-icon">
            <img src={card.icon} alt="" />
          </div>

          <p>{card.title}</p>

          <div className="academics-summary-row">
            <h3>{card.value}</h3>

            {card.subValue && (
              <span className="academics-badge">
                {Strings.ACADEMICS.LABELS.VACANT}{" "}
                <strong>{card.subValue}</strong>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicsSummary;
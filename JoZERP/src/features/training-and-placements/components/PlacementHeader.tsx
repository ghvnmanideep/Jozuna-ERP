import { Strings } from "../../../utils/Strings";

const PlacementHeader = () => {
  return (
    <div className="placement-header">
      <h2 className="placement-title">
        {Strings.PLACEMENTS.TITLE}
      </h2>

      <span className="placement-badge">
        {Strings.PLACEMENTS.ACADEMIC_YEAR}
      </span>
    </div>
  );
};

export default PlacementHeader;
import "../styles/TrainingAndPlacements.css";
import PlacementHeader from "../components/PlacementHeader";
import PlacementSummary from "../components/PlacementSummary";

const TrainingAndPlacementsPage = () => {
  return (
    <div className="Placementpage-container">

      <PlacementHeader />

      <PlacementSummary />

    </div>
  );
};

export default TrainingAndPlacementsPage;
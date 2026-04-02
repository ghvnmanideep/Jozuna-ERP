import React from "react";
import { RankingCardProps } from "../interfaces/ranking.interface";

const RankingCard: React.FC<RankingCardProps> = ({
  title,
  description,
  rank,
  bgImage,
}) => {
  const style: React.CSSProperties = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "230px 25px",
        backgroundSize: "150px ",
      }
    : {};

  return (
    <div className="ranking-card" style={style}>

      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="rank">#{rank}</div>

    </div>
  );
};

export default RankingCard;
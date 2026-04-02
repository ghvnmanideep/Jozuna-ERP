import "../styles/GraduateCard.css";
import { Graduate } from "../types/graduates";

interface Props {
  graduate: Graduate;
}

export default function GraduateCard({ graduate }: Props) {

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <div className="graduate-card">

      <div className="graduate-header">
        <div className="Alumni-avatar">
          {getInitials(graduate.name)}
        </div>

        <div>
          <h3 className="graduate-name">{graduate.name}</h3>
          <p className="graduate-degree">{graduate.degree}</p>
        </div>
      </div>

      <div className="graduate-role">
        <p>Currently At</p>
        <h4>{graduate.role}</h4>
        <span>
          {graduate.company} • {graduate.location}
        </span>
      </div>

      <div className="graduate-actions">
        <button className="mentor-btn">Request Mentor</button>
        <button className="linkedin-btn">in</button>
      </div>

    </div>
  );
}
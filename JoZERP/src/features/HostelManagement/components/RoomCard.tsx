import React from "react";
import { Room } from "../data/rooms";
import maintenanceIcon from "../../../assets/icons/maintenance.png";

interface Props {
  room: Room;
}

const RoomCard: React.FC<Props> = ({ room }) => {
  return (
    <div
      className={
        room.maintenance
          ? "room-card room-maintenance"
          : "room-card"
      }
    >
      <span className="room-id">{room.id}</span>

      {!room.maintenance && (
        <div className="room-icons">
          {Array.from({ length: room.capacity }).map((_, index) => (
            <svg
              key={index}
              className={
                index < room.occupied
                  ? "icon-occupied"
                  : "icon-available"
              }
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          ))}
        </div>
      )}

{room.maintenance && (
  <span className="maintenance-text">
    <img src={maintenanceIcon} alt="maintenance" width="16" height="16" />
    Maintence
  </span>
)}
    </div>
  );
};

export default RoomCard;
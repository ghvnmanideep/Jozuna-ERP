import React from "react";
import { FaUser } from "react-icons/fa";
import { rooms } from "../data/rooms";
import RoomCard from "./RoomCard";
import "../styles/rooms.css";

const RoomAllocation: React.FC = () => {
  return (
    <div className="room-section">

      <div className="room-top">

        <div>
          <h3 className="room-allocation-map">Room Allocation Map</h3>
          <p className="room-sub">
            Block A • Ground Floor • Click a room to view details
          </p>
        </div>

        <div className="legend">
          <div className="legend-item">
            {FaUser({ className: "legend-icon icon-occupied" })}
            <span>Occupied</span>
          </div>

          <div className="legend-item">
            {FaUser({ className: "legend-icon icon-available" })}
            <span>Available</span>
          </div>
        </div>

      </div>

      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

    </div>
  );
};

export default RoomAllocation;
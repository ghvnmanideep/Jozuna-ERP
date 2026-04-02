import React, { useState } from "react"
import "../styles/header.css";
import { hostels } from "../data/hostelData";

const Header: React.FC = () => {

  const [selectedHostel, setSelectedHostel] = useState(hostels[0]);

  const [selectedBlock, setSelectedBlock] = useState(hostels[0].blocks[0]);

  return (

      <div className="hostel-header">
        <h2 className="hostel-title">Hostel Management</h2>

        <div className="hostel-dropdowns">

          <select
            className="dropdown"
            value={selectedHostel.name}
            onChange={(e) => {
              const hostel = hostels.find(h => h.name === e.target.value);
              if (hostel) {
                setSelectedHostel(hostel);
                setSelectedBlock(hostel.blocks[0]); 
              }
            }}
          >
            {hostels.map((hostel) => (
              <option key={hostel.id} value={hostel.name}>
                {hostel.name}
              </option>
            ))}
          </select>


          <select
            className="dropdown"
            value={selectedBlock}
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            {selectedHostel.blocks.map((block, index) => (
              <option key={index} value={block}>
                {block}
              </option>
            ))}
          </select>

        </div>
      </div>


  );
};

export default Header;
import React, { useState } from 'react';
import type { NavbarProps } from '../interface/NavbarProps';
import { Bell, Settings,  ChevronDown, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot';
import chatbot_icon from "../images/chatbot/chatbot-icon.png"
import '../../styles/Navbar.css';

const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // ✅ NEW STATE

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <button className="mobile-menu-btn" onClick={onToggleMenu}>
            <Menu size={24} />
          </button>

          <span className="greeting">Welcome Julio Morgan!</span>
          <span className="role-badge">Institute Admin - Principal</span>
        </div>

        <div className="navbar-right">
          <div className="icon-group">
            <div className="icon-circle">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </div>

            <div className="icon-circle">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </div>

            <div className="icon-circle">
              <Settings size={20} />
            </div>
          </div>

          {/* PROFILE SECTION */}
          <div
            className="profile-wrapper"
            onClick={toggleDropdown}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="profile-section">
              <div className="avatar-circle">JM</div>

              <div className="profile-info">
                <span className="profile-name">Julio Morgan</span>
                <span className="profile-email">juliomorgan12@jozuna.com</span>
              </div>

              <ChevronDown size={14} className="chevron-icon" />
            </div>

            {dropdownOpen && (
              <div className="profile-dropdown">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0px",
                    padding: "10px 10px",
                    borderBottom: "1px solid #eee"
                  }}
                >
                  <div className="avatar-circle">JM</div>

                  <div className="profile-info">
                    <span className="profile-name">Julio Morgan</span>
                    <span className="profile-email">juliomorgan12@jozuna.com</span>
                  </div>
                </div>

                <div
                  className="dropdown-item"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </div>

                <div className="dropdown-item">Settings</div>
              </div>
            )}
          </div>

          {/* ✅ BOT ICON UPDATED */}
          <div
            className="bot-circle"
            onClick={() => setIsChatOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={chatbot_icon} alt="chatbot_icon" />
          </div>

        </div>
      </div>

      {/* ✅ CHATBOT COMPONENT */}
      <ChatBot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default Navbar;